export enum LogColors {
    white,
    green,
    red
};

export namespace GlobalLogger {
    export function log(log: any, showToast: boolean, color: LogColors) {
        //@ts-expect-error
        if (color === LogColors.white) GlobalLog.info(log, showToast);
        //@ts-expect-error
        if (color === LogColors.green) GlobalLog.debug(log, showToast);
        //@ts-expect-error
        if (color === LogColors.red) GlobalLog.error(log, showToast);
    };

    export function clear() {
        //@ts-expect-error
        GlobalLog.clear();
    };
};