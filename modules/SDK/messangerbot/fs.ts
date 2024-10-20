export namespace fs {
    export function read(path: string): string {
        return FileStream.read(path);
    };

    export function write(path: string, data: string): string {
        return FileStream.write(path, data);
    };

    export function append(path: string, data: string): string {
        return FileStream.append(path, data);
    };

    /**
     * @alias fs.remove
     */
    export function unlink(path: string): boolean {
        return FileStream.remove(path);
    };

    /**
     * @alias fs.unlink
     */
    export function remove(path: string): boolean {
        return FileStream.remove(path);
    };

    export function exists(path: string): boolean {
        return (new java.io.File(path)).exists();
    };
    
    export function mkdir(path: string): boolean { 
        return (new java.io.File(path)).mkdir();
    };

    export function isDirectory(path: string): boolean { 
        return (new java.io.File(path)).isDirectory();
    };

    export function isFile(path: string): boolean { 
        return (new java.io.File(path)).isFile();
    };
};

