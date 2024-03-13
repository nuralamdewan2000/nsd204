function sum(a:number, b:number | undefined) : number {
    if(b === undefined){
        return a;
    }

    return a + b;
}

let res = sum(5,10)

console.log(res)


