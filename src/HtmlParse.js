import cheerio from "cheerio";

class HtmlParse {
  parseHtml(parseUrl, htmlContent) {
    if (!parseUrl || !htmlContent) return;
    const $ = cheerio.load(htmlContent);
    const newUrls = this.getNewUrls(parseUrl, $);
    const newData = this.getNewData(parseUrl, $);
    return { newUrls: newUrls, data: newData };
  }

  getNewData(parseUrl, $) {
    let newData = new Set();
    $("div.bd div.item a").each((idx, ele) => {
      newData.add({ url: $(ele).attr("href"), title: $(ele).text() });
    });
    return [...newData];
  }

  getNewUrls(parseUrl, $) {
    let newUrls = new Set();
    $("div.bd div.item a").each((idx, ele) => {
      newUrls.add($(ele).attr("href"));
    });
    return [...newUrls];
  }
}

export default HtmlParse;
