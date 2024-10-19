export enum LogTypes {
    info,
    debug,
    error
};

export namespace GlobalLogger {
    export function log(log: any, showToast: boolean, logType: LogTypes) {
        //@ts-expect-error
        if (logType === LogTypes.info) GlobalLog.info(log, showToast);
        //@ts-expect-error
        if (logType === LogTypes.debug) GlobalLog.debug(log, showToast);
        //@ts-expect-error
        if (logType === LogTypes.error) GlobalLog.error(log, showToast);
    };

    export function clear() {
        //@ts-expect-error
        GlobalLog.clear();
    };
};