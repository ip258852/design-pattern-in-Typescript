namespace method{
    export interface IHandler{
        next              : IHandler,
        fix(data:Object)  : string
    }
}