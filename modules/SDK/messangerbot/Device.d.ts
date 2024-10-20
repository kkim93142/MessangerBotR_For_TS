declare module Device {
    function getBuild(): android.os.Build;

    function getAndroidVersionCode(): number;

    function getAndroidVersionName(): string;

    function getPhoneBrand(): string;

    function getPhoneModel(): string;

    function isCharging(): boolean;

    function getPlugType(): 'ac' | 'wireless' | 'usb' | 'unknown';

    function getBatteryLevel(): number;

    /**
     * @returns
     * android.os.BatteryManager.BATTERY_HEALTH_UNKNOWN = 1
     * 
     * android.os.BatteryManager.BATTERY_HEALTH_GOOD = 2
     * 
     * android.os.BatteryManager.BATTERY_HEALTH_OVERHEAT = 3
     * 
     * android.os.BatteryManager.BATTERY_HEALTH_DEAD = 4
     * 
     * android.os.BatteryManager.BATTERY_HEALTH_OVER_VOLTAGE = 5
     * 
     * android.os.BatteryManager.BATTERY_HEALTH_UNSPECIFIED_FAILURE = 6
     * 
     * android.os.BatteryManager.BATTERY_HEALTH_COLD = 7
     */
    function getBatteryHealth(): 1 | 2 | 3 | 4 | 5 | 6 | 7;

    /**
     * @returns temperature * 10
     */
    function getBatteryTemperature(): number;

    /**
     * @returns mV
     */
    function getBatteryVoltage(): number;

    /**
     * @returns
     * android.os.BatteryManager.BATTERY_STATUS_UNKNOWN = 1
     * 
     * android.os.BatteryManager.BATTERY_STATUS_CHARGING = 2
     * 
     * android.os.BatteryManager.BATTERY_STATUS_DISCHARGING = 3
     * 
     * android.os.BatteryManager.BATTERY_STATUS_NOT_CHARGING = 4
     * 
     * android.os.BatteryManager.BATTERY_STATUS_FULL = 5
     */
    function getBatteryStatus(): 1 | 2 | 3 | 4 | 5;

    /**
     *  @returns Value of context.registerReceiver(null, IntentFilter(Intent.ACTION_BATTERY_CHANGED))
     */ 
    function getBatteryIntent(): android.content.Intent;
}
