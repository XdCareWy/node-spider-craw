class UrlsManager {
  constructor() {
    // 未爬取得urls
    this.newUrls = new Set();
    // 已爬取的urls
    this.oldUrls = new Set();
  }

  addNewUrl(newUrl) {
    if (!newUrl) return;
    if (!this.newUrls.has(newUrl) && !this.oldUrls.has(newUrl)) {
      this.newUrls.add(newUrl);
    }
  }

  addNewUrls(newUrls) {
    if (!newUrls) return;
    if (Object.prototype.toString.call(newUrls) !== "[object Array]")
      throw new Error("newUrls should be array");
    for (let u of newUrls) {
      this.addNewUrl(u);
    }
  }

  hasUrl() {
    return !!this.newUrls.size;
  }

  getUrl() {
    const url = [...this.newUrls].pop();
    if (this.newUrls.delete(url)) {
      this.oldUrls.add(url);
      return url;
    }
    throw new Error("newUrls is not exit url!");
  }
}

export default UrlsManager;
