//Fields////////////////////////////////////////////////////////

/* class Point{
    x: number;
    y: number;
};

const pt = new Point();
pt.x = 0;
pt.y = 0;

console.log(pt); */

//////////////////////////////////////////////////////

/* class Point{
    x = 0;
    y = 0;
};

const pt = new Point();

console.log(`${pt.x}, ${pt.y}`); */

//--strictPropertyInitialization//////////////////////

/* class BadGreeter{
    name: string;

    constructor(){
        this.name = 'hello';
    };
};

class OkGreeter{
    name!: string;
}; */

//readonly////////////////////////////////////////////

/* class Greeter{
    readonly name: string = 'world';

    constructor(otherName?: string){
        if(otherName !== undefined){
            this.name = otherName;
        };
    };

    err(){
        this.name = 'not ok';
    };
};

const g = new Greeter();
g.name = 'also not ok'; */

//Constructors//////////////////////////////////////////////////

/* class Point{
    x: number;
    y: number;

    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    };
}; */

/* class Point{
    constructor(x: number, y: number);
    constructor(s: string);
    constructor(xs: any, y?: any){

    };
}; */

//Super Calls/////////////////////////////////////////

/* class Base{
    k = 4;
};

class Derived extends Base{
    constructor(){
        console.log(this.k);
        super();        
    };
}; */

//Methods///////////////////////////////////////////////////////

/* class Point{
    x = 10;
    y = 10;

    scale(n: number): void {
        this.x *= n;
        this.y *= n;
    };
};

const teste = new Point();

teste.scale(5);

console.log(teste); */

//Getters/Setters///////////////////////////////////////////////

class C{
    _lenght = 0;

    get lenght(){
        return this._lenght;
    };
    set lenght(value){
        this._lenght = value;
    };
};

class Thing{
    _size = 0;

    get size(): number{
        return this._size;
    };
    set size(value: string | number | boolean){
        let num = Number(value);

        if(!Number.isFinite(num)){
            this._size = 0;
            return;
        };

        this._size = num;
    };
};

const thing = new Thing();

thing.size(6)

console.log(thing);