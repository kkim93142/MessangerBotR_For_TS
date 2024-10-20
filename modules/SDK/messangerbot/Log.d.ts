declare namespace Log {
    export function info(log: any, showToast: boolean): void;
    export function debug(log: any, showToast: boolean): void;
    export function error(log: any, showToast: boolean): void;
    export function i(log: any, showToast: boolean): void;
    export function d(log: any, showToast: boolean): void;
    export function e(log: any, showToast: boolean): void;

    export function clear(): void;
}