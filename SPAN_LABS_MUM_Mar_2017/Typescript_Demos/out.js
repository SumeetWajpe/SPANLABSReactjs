var Utility;
(function (Utility) {
    function Add(x, y) {
        return x + y;
    }
    Utility.Add = Add;
    function PrivateFunc(x, y) {
        return x + y;
    }
    var NestedNS;
    (function (NestedNS) {
        function Add(x, y) {
            return x + y;
        }
        NestedNS.Add = Add;
    })(NestedNS = Utility.NestedNS || (Utility.NestedNS = {}));
})(Utility || (Utility = {}));
///<reference path="Utility.ts" />
var Addition = Utility.NestedNS.Add;
console.log(Addition(10, 20));
