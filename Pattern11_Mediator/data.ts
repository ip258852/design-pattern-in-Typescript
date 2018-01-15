 namespace data{
    
    export interface IMediator{
        option : IColleague;
        credit : IColleague;
        loan   : IColleague;
        score() : number;
    }

    export interface IColleague{
        prod : string;
        score() : number;
        mediator : IMediator;
    }

    export class OptionColleague implements IColleague{
        prod : string = 'OptionColleague';
        mediator : IMediator;
        constructor(_mediator : IMediator=null){
            this.mediator=_mediator;
        }
        score() : number {
            return 10;
        }
    }

    export class CreditColleague implements IColleague{
        prod : string = 'CreditColleague';
        mediator : IMediator;
        constructor(_mediator : IMediator=null){
            this.mediator=_mediator;
        }
        score() : number {
            return 10;
        }
    }

    export class LoanColleague implements IColleague{
        prod : string = 'LoanColleague';
        mediator : IMediator;
        constructor(_mediator : IMediator=null){
            this.mediator=_mediator;
        }
        score() : number {
            return 10;
        }
    }

    export class MediatorWeight implements IMediator{
        option : IColleague;
        credit : IColleague;
        loan   : IColleague;
        weightOption : number;
        weightCredit : number;
        weightLoan   : number;
        constructor( _weightOption : number,_weightCredit : number,_weightLoan : number){
            this.weightCredit=_weightCredit;
            this.weightOption=_weightOption;
            this.weightLoan=_weightLoan;

            this.option=new OptionColleague();
            this.loan=new LoanColleague();
            this.credit = new CreditColleague();
        }

        score():number{
            let _score :number = 0 ;
            this.weightCredit=this.credit.score()*this.weightCredit;
            this.weightLoan=this.loan.score()*this.weightLoan;
            this.weightOption=this.option.score()*this.weightOption;          
            _score=this.weightCredit+this.weightLoan+this.weightOption;
            return _score;
        }
    }
 }