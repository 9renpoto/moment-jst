# moment-jst

```js
var utc = '2015-02-13T00:00:00.000Z';
moment.jst(utc).format("YYYY-MM-DD HH:mm:ss"); // 2015-02-13 09:00:00
moment.utc(utc).jst().format("YYYY-MM-DD HH:mm:ss"); // 2015-02-13 09:00:00

var dt = '2015-02-13';
moment.utc(dt).jst().format("YYYY-MM-DD HH:mm:ss"); // 2015-02-13 09:00:00
```
