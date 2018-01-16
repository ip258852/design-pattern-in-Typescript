var data;
(function (data) {
    var OptionColleague = /** @class */ (function () {
        function OptionColleague(_mediator) {
            if (_mediator === void 0) { _mediator = null; }
            this.prod = 'OptionColleague';
            this.mediator = _mediator;
        }
        OptionColleague.prototype.score = function () {
            return 10;
        };
        return OptionColleague;
    }());
    data.OptionColleague = OptionColleague;
    var CreditColleague = /** @class */ (function () {
        function CreditColleague(_mediator) {
            if (_mediator === void 0) { _mediator = null; }
            this.prod = 'CreditColleague';
            this.mediator = _mediator;
        }
        CreditColleague.prototype.score = function () {
            return 10;
        };
        return CreditColleague;
    }());
    data.CreditColleague = CreditColleague;
    var LoanColleague = /** @class */ (function () {
        function LoanColleague(_mediator) {
            if (_mediator === void 0) { _mediator = null; }
            this.prod = 'LoanColleague';
            this.mediator = _mediator;
        }
        LoanColleague.prototype.score = function () {
            return 10;
        };
        return LoanColleague;
    }());
    data.LoanColleague = LoanColleague;
    var MediatorWeight = /** @class */ (function () {
        function MediatorWeight(_weightOption, _weightCredit, _weightLoan) {
            this.weightCredit = _weightCredit;
            this.weightOption = _weightOption;
            this.weightLoan = _weightLoan;
            this.option = new OptionColleague();
            this.loan = new LoanColleague();
            this.credit = new CreditColleague();
        }
        MediatorWeight.prototype.score = function () {
            var _score = 0;
            this.weightCredit = this.credit.score() * this.weightCredit;
            this.weightLoan = this.loan.score() * this.weightLoan;
            this.weightOption = this.option.score() * this.weightOption;
            _score = this.weightCredit + this.weightLoan + this.weightOption;
            return _score;
        };
        return MediatorWeight;
    }());
    data.MediatorWeight = MediatorWeight;
})(data || (data = {}));
/// <reference path='data.ts' />
var weight = new Array(0.2, 0.5, 0.8);
var mediator = new data.MediatorWeight(weight[0], weight[1], weight[2]);
var option2 = new data.LoanColleague(mediator);
var option1 = new data.OptionColleague(mediator);
var option3 = new data.LoanColleague(mediator);
var score1 = option1.mediator.score();
var score2 = option2.mediator.score();
var score3 = option3.mediator.score();
console.log(score1);
console.log(option1.prod);
console.log(score2);
console.log(option2.prod);
console.log(score3);
console.log(option3.prod);
