class stringProcessor{
    private data: string;
    constructor(input: string){
        this.data = input;
    }

    public getString(): string{
        return this.data;
    }

    public setString(data:string){
        this.data = data;
    }

    public reverse(): void{
        let chars: string[] = this.data.split('');
        for(var i = 0; i< chars.length / 2; i++){
            let cTmp:string = chars[i];
            chars[i] = chars[chars.length - (i * 1) - 1];
            chars[chars.length - (i * 1) - 1] = cTmp;
        }

        this.data = chars.join('');
    }
}

let ex:stringProcessor = new stringProcessor('abcd');
console.log(ex.getString());
ex.reverse();
console.log(ex.getString());
let ex2:stringProcessor = new stringProcessor('abcde');
console.log(ex2.getString());
ex2.reverse();
console.log(ex2.getString());

