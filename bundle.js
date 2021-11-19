var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// ../../../../utils/define-property/lib/define_property.js
var require_define_property = __commonJS({
  "../../../../utils/define-property/lib/define_property.js"(exports2, module2) {
    "use strict";
    var main2 = typeof Object.defineProperty === "function" ? Object.defineProperty : null;
    module2.exports = main2;
  }
});

// ../../../../utils/define-property/lib/has_define_property_support.js
var require_has_define_property_support = __commonJS({
  "../../../../utils/define-property/lib/has_define_property_support.js"(exports2, module2) {
    "use strict";
    var defineProperty = require_define_property();
    function hasDefinePropertySupport() {
      try {
        defineProperty({}, "x", {});
        return true;
      } catch (err) {
        return false;
      }
    }
    module2.exports = hasDefinePropertySupport;
  }
});

// ../../../../utils/define-property/lib/builtin.js
var require_builtin = __commonJS({
  "../../../../utils/define-property/lib/builtin.js"(exports2, module2) {
    "use strict";
    var defineProperty = Object.defineProperty;
    module2.exports = defineProperty;
  }
});

// ../../../../utils/define-property/lib/polyfill.js
var require_polyfill = __commonJS({
  "../../../../utils/define-property/lib/polyfill.js"(exports2, module2) {
    "use strict";
    var objectProtoype = Object.prototype;
    var toStr = objectProtoype.toString;
    var defineGetter = objectProtoype.__defineGetter__;
    var defineSetter = objectProtoype.__defineSetter__;
    var lookupGetter = objectProtoype.__lookupGetter__;
    var lookupSetter = objectProtoype.__lookupSetter__;
    function defineProperty(obj, prop, descriptor) {
      var prototype;
      var hasValue;
      var hasGet;
      var hasSet;
      if (typeof obj !== "object" || obj === null || toStr.call(obj) === "[object Array]") {
        throw new TypeError("invalid argument. First argument must be an object. Value: `" + obj + "`.");
      }
      if (typeof descriptor !== "object" || descriptor === null || toStr.call(descriptor) === "[object Array]") {
        throw new TypeError("invalid argument. Property descriptor must be an object. Value: `" + descriptor + "`.");
      }
      hasValue = "value" in descriptor;
      if (hasValue) {
        if (lookupGetter.call(obj, prop) || lookupSetter.call(obj, prop)) {
          prototype = obj.__proto__;
          obj.__proto__ = objectProtoype;
          delete obj[prop];
          obj[prop] = descriptor.value;
          obj.__proto__ = prototype;
        } else {
          obj[prop] = descriptor.value;
        }
      }
      hasGet = "get" in descriptor;
      hasSet = "set" in descriptor;
      if (hasValue && (hasGet || hasSet)) {
        throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");
      }
      if (hasGet && defineGetter) {
        defineGetter.call(obj, prop, descriptor.get);
      }
      if (hasSet && defineSetter) {
        defineSetter.call(obj, prop, descriptor.set);
      }
      return obj;
    }
    module2.exports = defineProperty;
  }
});

// ../../../../utils/define-property/lib/index.js
var require_lib = __commonJS({
  "../../../../utils/define-property/lib/index.js"(exports2, module2) {
    "use strict";
    var hasDefinePropertySupport = require_has_define_property_support();
    var builtin = require_builtin();
    var polyfill = require_polyfill();
    var defineProperty;
    if (hasDefinePropertySupport()) {
      defineProperty = builtin;
    } else {
      defineProperty = polyfill;
    }
    module2.exports = defineProperty;
  }
});

// ../../../../utils/define-nonenumerable-read-only-property/lib/main.js
var require_main = __commonJS({
  "../../../../utils/define-nonenumerable-read-only-property/lib/main.js"(exports2, module2) {
    "use strict";
    var defineProperty = require_lib();
    function setNonEnumerableReadOnly(obj, prop, value) {
      defineProperty(obj, prop, {
        "configurable": false,
        "enumerable": false,
        "writable": false,
        "value": value
      });
    }
    module2.exports = setNonEnumerableReadOnly;
  }
});

// ../../../../utils/define-nonenumerable-read-only-property/lib/index.js
var require_lib2 = __commonJS({
  "../../../../utils/define-nonenumerable-read-only-property/lib/index.js"(exports2, module2) {
    "use strict";
    var setNonEnumerableReadOnly = require_main();
    module2.exports = setNonEnumerableReadOnly;
  }
});

// ../../../../strided/base/map-by/lib/main.js
var require_main2 = __commonJS({
  "../../../../strided/base/map-by/lib/main.js"(exports2, module2) {
    "use strict";
    function mapBy(N, x, strideX, y, strideY, fcn, clbk, thisArg) {
      var ix;
      var iy;
      var v;
      var i;
      if (N <= 0) {
        return y;
      }
      if (strideX < 0) {
        ix = (1 - N) * strideX;
      } else {
        ix = 0;
      }
      if (strideY < 0) {
        iy = (1 - N) * strideY;
      } else {
        iy = 0;
      }
      for (i = 0; i < N; i++) {
        v = clbk.call(thisArg, x[ix], i, ix, iy, x, y);
        if (v !== void 0) {
          y[iy] = fcn(v);
        }
        ix += strideX;
        iy += strideY;
      }
      return y;
    }
    module2.exports = mapBy;
  }
});

// ../../../../strided/base/map-by/lib/ndarray.js
var require_ndarray = __commonJS({
  "../../../../strided/base/map-by/lib/ndarray.js"(exports2, module2) {
    "use strict";
    function mapBy(N, x, strideX, offsetX, y, strideY, offsetY, fcn, clbk, thisArg) {
      var ix;
      var iy;
      var v;
      var i;
      if (N <= 0) {
        return y;
      }
      ix = offsetX;
      iy = offsetY;
      for (i = 0; i < N; i++) {
        v = clbk.call(thisArg, x[ix], i, ix, iy, x, y);
        if (v !== void 0) {
          y[iy] = fcn(v);
        }
        ix += strideX;
        iy += strideY;
      }
      return y;
    }
    module2.exports = mapBy;
  }
});

// ../../../../strided/base/map-by/lib/index.js
var require_lib3 = __commonJS({
  "../../../../strided/base/map-by/lib/index.js"(exports2, module2) {
    "use strict";
    var setReadOnly2 = require_lib2();
    var main2 = require_main2();
    var ndarray2 = require_ndarray();
    setReadOnly2(main2, "ndarray", ndarray2);
    module2.exports = main2;
  }
});

// ../../../base/special/abs/lib/main.js
var require_main3 = __commonJS({
  "../../../base/special/abs/lib/main.js"(exports2, module2) {
    "use strict";
    function abs(x) {
      return Math.abs(x);
    }
    module2.exports = abs;
  }
});

// ../../../base/special/abs/lib/index.js
var require_lib4 = __commonJS({
  "../../../base/special/abs/lib/index.js"(exports2, module2) {
    "use strict";
    var abs = require_main3();
    module2.exports = abs;
  }
});

// lib/main.js
var require_main4 = __commonJS({
  "lib/main.js"(exports2, module2) {
    "use strict";
    var mapBy = require_lib3();
    var abs = require_lib4();
    function absBy(N, x, strideX, y, strideY, clbk, thisArg) {
      return mapBy(N, x, strideX, y, strideY, abs, clbk, thisArg);
    }
    module2.exports = absBy;
  }
});

// lib/ndarray.js
var require_ndarray2 = __commonJS({
  "lib/ndarray.js"(exports2, module2) {
    "use strict";
    var mapBy = require_lib3().ndarray;
    var abs = require_lib4();
    function absBy(N, x, strideX, offsetX, y, strideY, offsetY, clbk, thisArg) {
      return mapBy(N, x, strideX, offsetX, y, strideY, offsetY, abs, clbk, thisArg);
    }
    module2.exports = absBy;
  }
});

// lib/index.js
"use strict";
var setReadOnly = require_lib2();
var main = require_main4();
var ndarray = require_ndarray2();
setReadOnly(main, "ndarray", ndarray);
module.exports = main;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
