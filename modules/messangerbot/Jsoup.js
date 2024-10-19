"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jsoup = void 0;
//@ts-expect-error
var jsoup = org.jsoup.Jsoup;
var Jsoup;
(function (Jsoup) {
    function connect(url) {
        return jsoup.connect(url);
    }
    Jsoup.connect = connect;
})(Jsoup || (exports.Jsoup = Jsoup = {}));
var JsoupConnection = /** @class */ (function () {
    function JsoupConnection() {
    }
    /**
     * @virtual Sorry, I'm too lazy to make other classes and virtual methods T.T
     */
    JsoupConnection.prototype.get = function () { return new Element(); };
    ;
    return JsoupConnection;
}());
/**
 * If you need more methods definition, just let me know!
 */
var Element = /** @class */ (function () {
    /**
     * @deprecated Do not create new class with this method.
     */
    function Element() {
    }
    Element.prototype.html = function () { return ""; };
    ;
    Element.prototype.text = function () { return ""; };
    ;
    Element.prototype.tag = function () { return -1; };
    ;
    Element.prototype.select = function (cssQuery) { return new Element(); };
    ;
    Element.prototype.clone = function (cssQuery) { return new Element(); };
    ;
    Element.prototype.attr = function (attributeKey, attributeValue) { return new Element(); };
    ;
    return Element;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSnNvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJKc291cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrQkFBa0I7QUFDbEIsSUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7QUFFOUIsSUFBaUIsS0FBSyxDQUlyQjtBQUpELFdBQWlCLEtBQUs7SUFDbEIsU0FBZ0IsT0FBTyxDQUFDLEdBQVc7UUFDL0IsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFGZSxhQUFPLFVBRXRCLENBQUE7QUFDTCxDQUFDLEVBSmdCLEtBQUsscUJBQUwsS0FBSyxRQUlyQjtBQUVEO0lBQUE7SUFLQSxDQUFDO0lBSkc7O09BRUc7SUFDSSw2QkFBRyxHQUFWLGNBQXVCLE9BQU8sSUFBSSxPQUFPLEVBQUUsQ0FBQSxDQUFBLENBQUM7SUFBQSxDQUFDO0lBQ2pELHNCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFFRDs7R0FFRztBQUNIO0lBQ0k7O09BRUc7SUFDSDtJQUFlLENBQUM7SUFFVCxzQkFBSSxHQUFYLGNBQXdCLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUFBLENBQUM7SUFDOUIsc0JBQUksR0FBWCxjQUF3QixPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFBQSxDQUFDO0lBQzlCLHFCQUFHLEdBQVYsY0FBb0IsT0FBTyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFBQSxDQUFDO0lBQ3pCLHdCQUFNLEdBQWIsVUFBYyxRQUFnQixJQUFhLE9BQU8sSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFBQSxDQUFDO0lBQzVELHVCQUFLLEdBQVosVUFBYSxRQUFnQixJQUFhLE9BQU8sSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFBQSxDQUFDO0lBRzNELHNCQUFJLEdBQVgsVUFBWSxZQUFvQixFQUFFLGNBQWdDLElBQWEsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUFBLENBQUM7SUFDM0csY0FBQztBQUFELENBQUMsQUFkRCxJQWNDIn0=