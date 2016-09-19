/**
 * Created by Mariah on 9/18/2016.
 */

function sumFor(list){
  let sum = 0;
  for(let element of list){
    sum += element;
  }
  return sum;
}

function sumWhile(list){
  let length = 0;
  let sum = 0;
  while(length < list.length){
    sum += list[length];
  }
  return sum;
}

function sumRecursion(list, curr){
  let curr = length;
  let sum = 0;
  if(length == list.length){
    return sum;
  }else{
    sum += list[curr];
    sumRecursion(list, curr);
  }
}

function sumTheSimpleWay(list){
  return _.reduce(list, function(memo, num){  return memo + num;}, 0);
}
