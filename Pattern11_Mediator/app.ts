/// <reference path='data.ts' />

let weight : number[] = new Array(0.2,0.5,0.8);
let mediator : data.IMediator = new data.MediatorWeight(weight[0],weight[1],weight[2]);
let option : data.IColleague = new data.OptionColleague(mediator);
let score = option.mediator.score();

console.log(score);
console.log(option.prod);
