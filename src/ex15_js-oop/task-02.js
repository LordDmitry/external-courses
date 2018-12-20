function Device(name, power, status){
    this.name = name;
    this.power = power;
    this.status = status;
}


Device.prototype.getName = function(){
    return this.name;
}

Device.prototype.setName = function(name){
    this.name = name;
}

Device.prototype.getStatus = function(){
    return this.status;
}



function Computer(name, power, status){
    Device.apply(this, arguments);
}

Computer.prototype = Object.create(Device.prototype);
Computer.prototype.constructor = Computer;


function Microwave(name, power, status){
    Device.apply(this, arguments);
}

Microwave.prototype = Object.create(Device.prototype);
Microwave.prototype.constructor = Microwave;

function Printer(name, power, status){
    Device.apply(this, arguments);
}

Printer.prototype = Object.create(Device.prototype);
Printer.prototype.constructor = Printer;



var comp = new Computer('aser', 32, true);
var wave = new Microwave('lg', 333, false);
var pri = new Printer('hp', 400, true);

function Room(...devices){
    this.devices = devices;
}

Room.prototype.getPower = function(){
    return(this.devices.reduce((acc, item) => {
        return acc + item.power
    }, 0))
};

Room.prototype.search = function(name){
    return this.devices.filter((item) => {
        return item.name === name;
    });
}

var myroom = new Room(comp, wave, pri);

console.log(myroom.search('lg'));