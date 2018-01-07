var X86_CPU = /** @class */ (function () {
    function X86_CPU() {
        this.memory = new Memory();
        this.SSD = new SSD();
    }
    X86_CPU.prototype.open = function () {
        console.log('Ini computer');
        this.memory.open();
        this.SSD.open();
        console.log('Ini complete');
    };
    return X86_CPU;
}());
var X64_CPU = /** @class */ (function () {
    function X64_CPU() {
        this.memory = new Memory();
        this.SSD = new SSD();
    }
    X64_CPU.prototype.open = function () {
        console.log('Ini computer');
        this.SSD.open();
        this.memory.open();
        console.log('Ini complete');
    };
    return X64_CPU;
}());
var Memory = /** @class */ (function () {
    function Memory() {
    }
    Memory.prototype.open = function () {
        console.log('open Memory');
    };
    return Memory;
}());
var SSD = /** @class */ (function () {
    function SSD() {
    }
    SSD.prototype.open = function () {
        console.log('open SSD');
    };
    return SSD;
}());
var Computer = /** @class */ (function () {
    function Computer(_CPU) {
        this.CPU = _CPU;
    }
    return Computer;
}());
//// implements everything ////
var apple = new Computer(new X64_CPU());
var windows = new Computer(new X86_CPU());
apple.CPU.open();
console.log('................');
windows.CPU.open();
