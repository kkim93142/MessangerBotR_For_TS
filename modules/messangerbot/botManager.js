"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessangerBotManager = void 0;
var MessangerBotManager;
(function (MessangerBotManager) {
    function compile(botName) {
        //@ts-expect-error
        return BotManager.compile(botName);
    }
    MessangerBotManager.compile = compile;
    ;
    function getBot(botName) {
        //@ts-expect-error
        return BotManager.getBot(botName);
    }
    MessangerBotManager.getBot = getBot;
    ;
    /**
     * Returns all of the bots.
     */
    function getBotList() {
        //@ts-expect-error
        return BotManager.getBotList();
    }
    MessangerBotManager.getBotList = getBotList;
    ;
    function getCurrentBot() {
        //@ts-expect-error
        return BotManager.getCurrentBot();
    }
    MessangerBotManager.getCurrentBot = getCurrentBot;
    ;
    /**
     * Returns if the bot is on.
     */
    function getPower() {
        //@ts-expect-error
        return BotManager.getPower();
    }
    MessangerBotManager.getPower = getPower;
    ;
    function setPower(botName, isOn) {
        //@ts-expect-error
        return BotManager.setPower(botName, isOn);
    }
    MessangerBotManager.setPower = setPower;
    ;
    /**
     * Returns an array of room namee that the session is not expired.
     * @param packageName Default value is last notification app's package name.
     */
    function getRooms(packageName) {
        if (packageName === void 0) { packageName = undefined; }
        if (packageName) {
            //@ts-expect-error
            return BotManager.getRooms(packageName);
        }
        else {
            //@ts-expect-error
            return BotManager.getRooms();
        }
        ;
    }
    MessangerBotManager.getRooms = getRooms;
    ;
})(MessangerBotManager || (exports.MessangerBotManager = MessangerBotManager = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90TWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvdE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsSUFBaUIsbUJBQW1CLENBbURuQztBQW5ERCxXQUFpQixtQkFBbUI7SUFDaEMsU0FBZ0IsT0FBTyxDQUFDLE9BQWU7UUFDbkMsa0JBQWtCO1FBQ2xCLE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBSGUsMkJBQU8sVUFHdEIsQ0FBQTtJQUFBLENBQUM7SUFFRixTQUFnQixNQUFNLENBQUMsT0FBZTtRQUNsQyxrQkFBa0I7UUFDbEIsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFIZSwwQkFBTSxTQUdyQixDQUFBO0lBQUEsQ0FBQztJQUVGOztPQUVHO0lBQ0gsU0FBZ0IsVUFBVTtRQUN0QixrQkFBa0I7UUFDbEIsT0FBTyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUhlLDhCQUFVLGFBR3pCLENBQUE7SUFBQSxDQUFDO0lBR0YsU0FBZ0IsYUFBYTtRQUN6QixrQkFBa0I7UUFDbEIsT0FBTyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUhlLGlDQUFhLGdCQUc1QixDQUFBO0lBQUEsQ0FBQztJQUVGOztPQUVHO0lBQ0gsU0FBZ0IsUUFBUTtRQUNwQixrQkFBa0I7UUFDbEIsT0FBTyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUhlLDRCQUFRLFdBR3ZCLENBQUE7SUFBQSxDQUFDO0lBRUYsU0FBZ0IsUUFBUSxDQUFDLE9BQWUsRUFBRSxJQUFhO1FBQ25ELGtCQUFrQjtRQUNsQixPQUFPLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFIZSw0QkFBUSxXQUd2QixDQUFBO0lBQUEsQ0FBQztJQUVGOzs7T0FHRztJQUNILFNBQWdCLFFBQVEsQ0FBQyxXQUEyQztRQUEzQyw0QkFBQSxFQUFBLHVCQUEyQztRQUNoRSxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQ2Qsa0JBQWtCO1lBQ2xCLE9BQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1QyxDQUFDO2FBQU0sQ0FBQztZQUNKLGtCQUFrQjtZQUNsQixPQUFPLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQyxDQUFDO1FBQUEsQ0FBQztJQUNOLENBQUM7SUFSZSw0QkFBUSxXQVF2QixDQUFBO0lBQUEsQ0FBQztBQUNOLENBQUMsRUFuRGdCLG1CQUFtQixtQ0FBbkIsbUJBQW1CLFFBbURuQyJ9