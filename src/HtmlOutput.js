import fs from "fs";

class HtmlOutput {
  constructor() {
    this.data = [];
  }
  collectData(data) {
    this.data.push(...data);
  }

  outputHtml() {
    console.log(this.data)
    const trs = this.data.map(item => {
      return `<tr>
          <td>${item.title}</td>
          <td><a href=${item.url}>${item.url}</a></td>
        </tr>`;
    });
    const hmt = `<html>
          <body>
            <table>
            ${trs}
          </table>
        </body>
      </html>`;
    fs.writeFileSync("./1.html", hmt)
  }
}

export default HtmlOutput;
