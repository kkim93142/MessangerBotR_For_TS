export const Abstract = function(): never {
    throw new Error("Not implemented.");
};

//@ts-expect-error
Abstract = function() {};