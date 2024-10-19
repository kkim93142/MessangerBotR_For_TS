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
    public get(): Element {return new Element()};
}

/**
 * If you need more methods definition, just let me know!
 */
class Element {
    /**
     * @deprecated Do not create new class with this method.
     */
    constructor() {}

    public html(): string { return ""; };
    public text(): string { return ""; };
    public tag(): any { return -1 };
    public select(cssQuery: string): Element { return new Element(); };
    public clone(cssQuery: string): Element { return new Element(); };
    public attr(attributeKey: string, attributeValue: boolean): Element;
    public attr(attributeKey: string, attributeValue: string): Element;
    public attr(attributeKey: string, attributeValue: boolean | string): Element { return new Element(); };
}