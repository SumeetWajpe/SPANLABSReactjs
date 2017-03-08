namespace Utility {

    export function Add(x: number, y: number): number {
        return x + y;
    }
    function PrivateFunc(x: number, y: number): number {
        return x + y;
    }

   export namespace NestedNS {
        export function Add(x: number, y: number): number {
            return x + y;
        }
    }
}