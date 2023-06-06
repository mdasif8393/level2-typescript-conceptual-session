class MyBank{
    id: number;
    private amount: number;
    name: string;

    constructor(id: number, amount: number, name: string){
        this.amount = amount;
        this.id = id;
        this.name = name;
    }
}

const bank = new MyBank(121, 12222, "Ami");
console.log(bank);