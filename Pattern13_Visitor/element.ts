/// <reference path = 'visit.ts' />

namespace element{
    export enum ProductTypeEnum{
        BOOK =1 ,
        LIVING=2,
        ELECTRONIC=3
    }
    export interface IElement{
        productType : ProductTypeEnum;
        name :string;
        UnitPrice : number;
        Amount : number;
        totalPrice : number;
        accept(visit : visit.Visit) : void ;
    }
    export class Product implements IElement{
        productType : ProductTypeEnum;
        name :string;
        UnitPrice : number;
        Amount : number;
        totalPrice : number;
        constructor( _productType : ProductTypeEnum,_name :string,
            _UnitPrice : number,_Amount : number,
            _totalPrice : number){
                this.Amount=_Amount;
                this.name=_name;
                this.productType=_productType;
                this.UnitPrice=_UnitPrice;
                this.totalPrice=_totalPrice;
        }
        accept(visit : visit.Visit) : void {
            visit.visit(this);
        }
    }
}