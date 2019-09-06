import UrlsManager from "./UrlsManager";
import HtmlParse from "./HtmlParse";
import HtmlDownload from "./HtmlDownload";
import HtmlOutput from "./HtmlOutput";

class SpiderMain {
  constructor() {
    this.urlsManager = new UrlsManager();
    this.htmlParse = new HtmlParse();
    this.htmlDownload = new HtmlDownload();
    this.htmlOutput = new HtmlOutput();
  }

  async craw(rootUrl) {
    let count = 1;
    //  1. 将入口url添加到urlsManager中
    this.urlsManager.addNewUrl(rootUrl);
    while (this.urlsManager.hasUrl()) {
      //  2. 从urlsManager中取出一个url，用htmlDownload下载
      const newUrl = this.urlsManager.getUrl();
      console.log(`craw ${count} ${newUrl}`);
      const htmlContent = await this.htmlDownload.downloadContent(newUrl);
      //  3. 用htmlParse进行解析
      const { newUrls, data } = this.htmlParse.parseHtml(newUrl, htmlContent.data);
      //  4. 将解析出来的newUrls添加到urlsManager中，并将解析出来的data放到htmlOutput中
      this.urlsManager.addNewUrls(newUrls);
      this.htmlOutput.collectData(data);
      if (count === 1) {
        break;
      }
      count++;
    }
    this.htmlOutput.outputHtml();
  }
}

export default SpiderMain;
