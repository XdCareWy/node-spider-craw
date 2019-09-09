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
    const hmt = `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
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
