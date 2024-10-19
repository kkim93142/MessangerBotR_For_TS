"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.events = exports.Event = void 0;
function printError(err) {
    console.log("Error occured while handling events: " + err);
}
;
var Event = /** @class */ (function () {
    function Event() {
        this.listeners = [];
        this.installer = null;
        this.uninstaller = null;
    }
    Event.prototype.isEmpty = function () {
        return this.listeners.length === 0;
    };
    /**
     * cancel event if it returns non-undefined value
     */
    Event.prototype.on = function (listener) {
        if (this.listeners.length === 0 && this.installer !== null) {
            this.installer();
            if (this.uninstaller === null) {
                this.installer = null;
            }
        }
        this.listeners.push(listener);
    };
    Event.prototype.once = function (listener) {
        var that = this;
        function callback() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            that.remove(callback);
            return listener.apply(void 0, args);
        }
        this.listeners.push(callback);
    };
    Event.prototype.promise = function () {
        var _this = this;
        return new Promise(function (resolve) { return _this.once(resolve); });
    };
    Event.prototype.onFirst = function (listener) {
        this.listeners.unshift(listener);
    };
    Event.prototype.onLast = function (listener) {
        this.listeners.push(listener);
    };
    Event.prototype.onBefore = function (listener, needle) {
        var idx = this.listeners.indexOf(needle);
        if (idx === -1)
            throw Error("needle not found");
        this.listeners.splice(idx, 0, listener);
    };
    Event.prototype.onAfter = function (listener, needle) {
        var idx = this.listeners.indexOf(needle);
        if (idx === -1)
            throw Error("needle not found");
        this.listeners.splice(idx + 1, 0, listener);
    };
    Event.prototype.remove = function (listener) {
        var idx = this.listeners.indexOf(listener);
        if (idx === -1)
            return false;
        this.listeners.splice(idx, 1);
        if (this.listeners.length === 0 && this.uninstaller != null) {
            this.uninstaller();
        }
        return true;
    };
    /**
     * return value if it canceled
     */
    Event.prototype._fireWithoutErrorHandling = function () {
        var v = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            v[_i] = arguments[_i];
        }
        for (var _a = 0, _b = this.listeners.slice(); _a < _b.length; _a++) {
            var listener = _b[_a];
            try {
                var ret = listener.apply(void 0, v);
                if (typeof ret === "number")
                    return ret;
            }
            catch (err) {
                printError(err);
            }
        }
        return undefined;
    };
    Event.reportError = function (err) {
        var res = Event.errorHandler._fireWithoutErrorHandling(err);
        if (res == null) {
            printError(err);
        }
    };
    /**
     * return value if it canceled
     */
    Event.prototype.promiseFire = function () {
        var v = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            v[_i] = arguments[_i];
        }
        var res = this.listeners.slice().map(function (listener) { return listener.apply(void 0, v); });
        return Promise.all(res);
    };
    /**
     * return value if it canceled
     */
    Event.prototype.fire = function () {
        var v = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            v[_i] = arguments[_i];
        }
        for (var _a = 0, _b = this.listeners.slice(); _a < _b.length; _a++) {
            var listener = _b[_a];
            try {
                var ret = listener.apply(void 0, v);
                if (typeof ret === "number")
                    return ret;
            }
            catch (err) {
                Event.reportError(err);
            }
        }
    };
    /**
     * reverse listener orders
     * return value if it canceled
     */
    Event.prototype.fireReverse = function () {
        var v = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            v[_i] = arguments[_i];
        }
        for (var _a = 0, _b = this.listeners.slice().reverse(); _a < _b.length; _a++) {
            var listener = _b[_a];
            try {
                var ret = listener.apply(void 0, v);
                if (typeof ret === "number")
                    return ret;
            }
            catch (err) {
                Event.reportError(err);
            }
        }
    };
    Event.prototype.allListeners = function () {
        return this.listeners.values();
    };
    /**
     * remove all listeners
     */
    Event.prototype.clear = function () {
        this.listeners.length = 0;
    };
    Event.errorHandler = new Event();
    return Event;
}());
exports.Event = Event;
;
;
var events;
(function (events) {
    events.receiveMessage = new Event();
    events.receiveCommand = new Event();
    events.create = new Event();
    events.start = new Event();
    events.resume = new Event();
    events.pause = new Event();
    events.stop = new Event();
    events.restart = new Event();
    events.destroy = new Event();
    events.backPressed = new Event();
})(events || (exports.events = events = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQWNBLFNBQVMsVUFBVSxDQUFDLEdBQVk7SUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUMvRCxDQUFDO0FBQUEsQ0FBQztBQUdGO0lBQUE7UUFDcUIsY0FBUyxHQUF1QixFQUFFLENBQUM7UUFDNUMsY0FBUyxHQUF3QixJQUFJLENBQUM7UUFDdEMsZ0JBQVcsR0FBd0IsSUFBSSxDQUFDO0lBc0lwRCxDQUFDO0lBbklHLHVCQUFPLEdBQVA7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxrQkFBRSxHQUFGLFVBQUcsUUFBMEI7UUFDekIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUN6RCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRSxDQUFDO2dCQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUMxQixDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxvQkFBSSxHQUFKLFVBQUssUUFBVztRQUNaLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixTQUFTLFFBQVE7WUFBQyxjQUFjO2lCQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7Z0JBQWQseUJBQWM7O1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBNEIsQ0FBQyxDQUFDO1lBQzFDLE9BQU8sUUFBUSxlQUFJLElBQUksRUFBRTtR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