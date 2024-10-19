"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
var Bot = /** @class */ (function () {
    /**
     * @deprecated Use MessangerBotManager.getCurrentBot() instead.
     */
    function Bot() {
    }
    ;
    /**
     * @returns if the compilation is successful.
     */
    Bot.prototype.compile = function () { return true; };
    ;
    Bot.prototype.getName = function () { return ""; };
    ;
    /**
     * Returns if the current bot is on.
     */
    Bot.prototype.getPower = function () { return true; };
    ;
    Bot.prototype.setPower = function (isOn) { };
    ;
    /**
     * @deprecated If you need more events, just let me know.
     */
    Bot.prototype.addListener = function (eventName, listener) { };
    ;
    /**
     * @param packageName Default value is last notification app's package name.
     */
    Bot.prototype.canReply = function (room, packageName) {
        if (packageName === void 0) { packageName = ""; }
        return true;
    };
    ;
    /**
     * @param packageName Default value is last notification app's package name.
     */
    Bot.prototype.markAsRead = function (room, packageName) {
        if (packageName === void 0) { packageName = ""; }
    };
    ;
    /**
     * @deprecated Use events.eventName.clear() instead. It will make all of the custom events BROKEN until reload(compile).
     */
    Bot.prototype.removeAllListener = function () { };
    ;
    /**
     * @deprecated Use events.eventName.clear() instead. It will make the custom event that is eventName matches BROKEN until reload(compile).
     */
    Bot.prototype.removeListener = function (evnetName) { };
    ;
    Bot.prototype.setCommandPrefix = function (prefix) { };
    ;
    /**
     * @param packageName Default value is last notification app's package name.
     */
    Bot.prototype.send = function (room, message, packageName) {
        if (packageName === void 0) { packageName = ""; }
        return true;
    };
    ;
    return Bot;
}());
exports.Bot = Bot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBO0lBQ0k7O09BRUc7SUFDSDtJQUFlLENBQUM7SUFBQSxDQUFDO0lBRWpCOztPQUVHO0lBQ0kscUJBQU8sR0FBZCxjQUE0QixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7SUFBQSxDQUFDO0lBQ3BDLHFCQUFPLEdBQWQsY0FBMkIsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQUEsQ0FBQztJQUN4Qzs7T0FFRztJQUNJLHNCQUFRLEdBQWYsY0FBNkIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQUEsQ0FBQztJQUNyQyxzQkFBUSxHQUFmLFVBQWdCLElBQWEsSUFBUyxDQUFDO0lBQUEsQ0FBQztJQUN4Qzs7T0FFRztJQUNJLHlCQUFXLEdBQWxCLFVBQW1CLFNBQWlCLEVBQUUsUUFBcUIsSUFBUyxDQUFDO0lBQUEsQ0FBQztJQUN0RTs7T0FFRztJQUNJLHNCQUFRLEdBQWYsVUFBZ0IsSUFBWSxFQUFFLFdBQXdCO1FBQXhCLDRCQUFBLEVBQUEsZ0JBQXdCO1FBQWEsT0FBTyxJQUFJLENBQUM7SUFBQyxDQUFDO0lBQUEsQ0FBQztJQUNsRjs7T0FFRztJQUNJLHdCQUFVLEdBQWpCLFVBQWtCLElBQVksRUFBRSxXQUF3QjtRQUF4Qiw0QkFBQSxFQUFBLGdCQUF3QjtJQUFTLENBQUM7SUFBQSxDQUFDO0lBRW5FOztPQUVHO0lBQ0ksK0JBQWlCLEdBQXhCLGNBQWtDLENBQUM7SUFBQSxDQUFDO0lBQ3BDOztPQUVHO0lBQ0ksNEJBQWMsR0FBckIsVUFBc0IsU0FBaUIsSUFBUyxDQUFDO0lBQUEsQ0FBQztJQUUzQyw4QkFBZ0IsR0FBdkIsVUFBd0IsTUFBYyxJQUFTLENBQUM7SUFBQSxDQUFDO0lBRWpEOztPQUVHO0lBQ0ksa0JBQUksR0FBWCxVQUFZLElBQVksRUFBRSxPQUFlLEVBQUUsV0FBd0I7UUFBeEIsNEJBQUEsRUFBQSxnQkFBd0I7UUFBYSxPQUFPLElBQUksQ0FBQztJQUFDLENBQUM7SUFBQSxDQUFDO0lBQ25HLFVBQUM7QUFBRCxDQUFDLEFBNUNELElBNENDO0FBNUNZLGtCQUFHIn0=