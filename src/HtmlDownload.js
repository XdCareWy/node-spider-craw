import superagent from "superagent";

class HtmlDownload {
  async downloadContent(url) {
    if (!url) return;
    try {
      const response = await superagent.get(url);
      return {
        url: url,
        data: response.text
      };
    } catch (e) {
      console.log(e);
    }
  }
}

export default HtmlDownload;
