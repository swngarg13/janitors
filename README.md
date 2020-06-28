# janitors

Janitors, This module is used to observe changes in an object properties. It takes a source object and few callback methods (optional) to monitor object properties. Whenever a property is added, updated, or deleted then a respective callback methods are called. 

You can also override these callback methods.

---
Callback Methods:
---
- added 
- updated
- deleted

---

Usage:
---

```js
var janitors = require("janitors")

// object which need to be observed
let obj = { a: 1, b: 2: c: 3 }

obj = janitors.observe({ 
        source: obj,
        added: function (e) { console.log(e) },
        updated: function (e) { console.log(e) },
        deleted: function (e) { console.log(e) },
      });

obj.a = 2; // updating the property
obj.d = 4; // adding a property
delete obj.b; // deleting the property
