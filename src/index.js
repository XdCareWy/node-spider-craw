import SpiderMain from "./SpiderMain";


const rootUrl = "http://news.baidu.com/widget?id=AllOtherData&channel=internet";

const spider = new SpiderMain();
spider.craw(rootUrl);

