const bot = BotManager.getCurrentBot();

const { events } = require("SDK/messangerbot/events");

function _onMessage(msg) {
    events.message.fire(msg);
}

function _onCommand(msg) {
    events.command.fire(msg);
}

function _onCreate(savedInstanceState, activity) {
    events.create.fire(savedInstanceState, activity);
}

function _onStart(activity) {
    events.start.fire(activity);
}

function _onResume(activity) {
    events.resume.fire(activity);
}

function _onPause(activity) {
    events.pause.fire(activity);
}

function _onStop(activity) {
    events.stop.fire(activity);
}

function _onRestart(activity) {
    events.restart.fire(activity);
}

function _onDestroy(activity) {
    events.destroy.fire(activity);
}

function _onBackPressed(activity) {
    events.backPressed.fire(activity);
}

function _onNotificationPosted(statusBarNotification, sessionManager) {
    events.notificationPosted.fire(statusBarNotification, sessionManager);
}

function _onStartCompile() {
    events.startCompile.fire();
}


bot.addListener(Event.Activity.CREATE, _onCreate);
bot.addListener(Event.Activity.START, _onStart);
bot.addListener(Event.Activity.RESUME, _onResume);
bot.addListener(Event.Activity.PAUSE, _onPause);
bot.addListener(Event.Activity.STOP, _onStop);
bot.addListener(Event.Activity.RESTART, _onRestart);
bot.addListener(Event.Activity.DESTROY, _onDestroy);
bot.addListener(Event.Activity.BACK_PRESSED, _onBackPressed);
bot.addListener(Event.Activity.NOTIFICATION_POSTED, _onNotificationPosted);
bot.addListener(Event.Activity.START_COMPILE, _onStartCompile);
bot.addListener(Event.MESSAGE, _onMessage);
bot.addListener(Event.COMMAND, _onCommand);

bot.setCommandPrefix("/");

//Initialize Jsoup. The first connection always throws error. So, I handle it.
try { org.jsoup.Jsoup.connect("http://google.com"); } catch (error) {};

require("index");