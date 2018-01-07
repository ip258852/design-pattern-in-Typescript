interface CPU {
    memory : Memory,
    SSD    : SSD,
    open() : void
}

class X86_CPU implements CPU{
    memory : Memory;
    SSD    : SSD;
    constructor(){
        this.memory = new Memory();
        this.SSD    = new SSD();
    }
    open(){
        console.log('Ini computer');
        this.memory.open();
        this.SSD.open();
        console.log('Ini complete');
    }
}

class X64_CPU implements CPU{
    memory : Memory;
    SSD    : SSD;
    constructor(){
        this.memory = new Memory();
        this.SSD    = new SSD();
    }
    open(){
        console.log('Ini computer');
        this.SSD.open();
        this.memory.open();        
        console.log('Ini complete');
    }
}

class Memory{
    open(){
        console.log('open Memory');
    }

}

class SSD{
    open(){
        console.log('open SSD');
    }
}

class Computer{
    CPU : CPU;
    constructor(_CPU:CPU){
        this.CPU=_CPU;
    }
}

//// implements everything ////

let apple  = new Computer(new X64_CPU());
let windows= new Computer(new X86_CPU());

apple.CPU.open();
console.log('................');
windows.CPU.open();




