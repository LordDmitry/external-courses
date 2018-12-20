

class Sweet {
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }
}



class Chocolate extends Sweet{
    constructor (name, weight, creator){
        super(name, weight);
        this.creator = creator;
    }
}

class Grenade extends Sweet{
    constructor (name, weight, creator){
        super(name, weight);
        this.creator = creator;
    }
}

class Gift {
    constructor(...items){
        this.items = [...items]
    }

    GetWeight(){
        return(this.items.reduce((acc, item) => {
            return acc + item.weight
        }, 0))
    }

    SortItems(){
        this.items.sort((a,b) => {
            return a.weight - b.weight;
        });
        return this;
    }

    Search(value){
       return this.items.filter((item) => {
            return item.name.includes(value);
        });
    }
    
}

var firstSweet = new Grenade('pa2', 102, 'oop');
var secondSweet = new Grenade('pa3', 6, 'aad');
var thirdSweet = new Chocolate('alpen gold', 13, 'test');

var gift = new Gift(firstSweet, secondSweet, thirdSweet);

console.log(gift.SortItems());


