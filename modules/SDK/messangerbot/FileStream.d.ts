/**
 * @recommendation Use fs instead.
 */
declare module FileStream {
    function read(path: string): string;

    function write(path: string, data: string): string;

    function append(path: string, data: string): string;

    function remove(path: string): boolean;
}