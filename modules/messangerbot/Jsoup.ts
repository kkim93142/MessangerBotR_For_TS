import { Abstract } from "./abstract";

//@ts-expect-error
const jsoup = org.jsoup.Jsoup;

export namespace Jsoup {
    export function connect(url: string): JsoupConnection {
        return jsoup.connect(url);
    }
}

class JsoupConnection {
    /**
     * @virtual Sorry, I'm too lazy to make other classes and virtual methods T.T
     */
    public get(): Document { return Abstract(); };
}

/**
 * If you need more methods definition, just let me know!
 */
class Element {
    /**
     * @deprecated Do not create new class with this method.
     */
    constructor() {}

    public html(): string { return Abstract(); };
    public text(): string { return Abstract(); };
    public tag(): any { return Abstract(); };
    public select(cssQuery: string): Element { return Abstract(); };
    public clone(cssQuery: string): Element { return Abstract(); };

    public attr(attributeKey: string, attributeValue: boolean): Element;
    public attr(attributeKey: string, attributeValue: string): Element;
    public attr(attributeKey: string, attributeValue: boolean | string): Element { return Abstract(); };

    public val(): string { return Abstract(); };
}

class Document extends Element {
    public clone(cssQuery: string): Document { return Abstract(); };
    public body(): Element { return Abstract(); };
    public head(): Element { return Abstract(); };
    public title(): string { return Abstract(); };
}