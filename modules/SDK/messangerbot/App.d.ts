declare namespace App {
    function getContext(): android.content.Context;
    function runOnUiThread(task: AnyFunction, onComplete: (error: any, result: any)=> {}): void;
}