///<reference path="method.ts"/>
namespace order {
    export interface IOrder{
        printOrderA() : void;
        printOrderB() : void;
    }

    export class A4PaperOrder implements IOrder{
        private printer : method.IPrint;
        constructor(_printer : method.IPrint){
            this.printer=_printer;
        }
        printOrderA(){
            this.printer.printA();
        }
        printOrderB(){
            this.printer.printB();
        }
    }

    export class B5PaperOrder implements IOrder{
        private printer : method.IPrint;
        constructor(_printer : method.IPrint){
            this.printer=_printer;
        }
        printOrderA(){
            this.printer.printA();
        }
        printOrderB(){
            console.log(`printerB can't print B5`);
        }
    }
}