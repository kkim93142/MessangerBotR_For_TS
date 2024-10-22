/**
 * @description Path must not be start with /
 */
export namespace fs {
    export function read(path: string): string {
        return FileStream.read("sdcard/" + path);
    };

    export function write(path: string, data: string): string {
        return FileStream.write("sdcard/" + path, data);
    };

    export function append(path: string, data: string): string {
        return FileStream.append("sdcard/" + path, data);
    };

    /**
     * @alias fs.remove
     */
    export function unlink(path: string): boolean {
        return FileStream.remove("sdcard/" + path);
    };

    /**
     * @alias fs.unlink
     */
    export function remove(path: string): boolean {
        return FileStream.remove("sdcard/" + path);
    };

    export function exists(path: string): boolean {
        return (new java.io.File("sdcard/" + path)).exists();
    };
    
    export function mkdir(path: string): boolean { 
        return (new java.io.File("sdcard/" + path)).mkdir();
    };

    export function isDirectory(path: string): boolean { 
        return (new java.io.File("sdcard/" + path)).isDirectory();
    };

    export function isFile(path: string): boolean { 
        return (new java.io.File("sdcard/" + path)).isFile();
    };
    
    export function getAbsolutePath(path: string): string { 
        return (new java.io.File("sdcard/" + path)).getAbsolutePath();
    };

};