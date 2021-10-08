//  Student: Bigyan Adhikari
//  UTA ID:  1001398922
//  Feb 20, 2020

//1
var inputtable = [1,2,3,4,5,6,7,8,9,10];

//2a
var fiveTable=        inputtable.map(tableFunction5);
function tableFunction5(data){
return data * 5;   //Retruning all multiples of 5 by using inputtable
}
console.log(fiveTable);                 //2a console output

//2b
var thirteenTable=    inputtable.map(tableFunction13);
function tableFunction13(data){
return data * 13;  //Retruning all multiples of 13 by using inputtable
}
console.log(thirteenTable);   	        //2b console output
//2c
var squaresTable=     inputtable.map(tableFunctionS);
function tableFunctionS(data){
return data * data;  //Retruning all square numbers from inputtable
}
console.log(squaresTable); 	            //2c console output

//3
//This array will hold all the odd multiples of 5 between 1 and 100
var arrayOddMultipleofFive =[];
//Declaring a method that has an integer parameter
//We pass the arguement 5 so that our recursive tableFunction
//will iterate from 5 to higher.
var index = 0;  //integer value used for array index as and counter
oddFiveArrayFunction(5);
//arrayOddMultipleofFive[0]=5;
function oddFiveArrayFunction(dataf){
if(dataf<=100){  //Until the parameter reaches 100 we will iterate.
  arrayOddMultipleofFive[index]=dataf; //inserting multiples of 5 in the array
  index++;      //incresing the array index by one;
//main case odd(5)+even(10)=odd(15);
//we increase the data by 10
// since first data value (i.e 5) has been added to the array
//we capture odd multiples of 5 by adding even multiple of 5 grater than 5.
  dataf = dataf+10;
return oddFiveArrayFunction(dataf);   //recursing the function
}
}
console.log(arrayOddMultipleofFive);    //3 Array output

//4
//This functions catches all multiple of 7
//We find the sum of even multiples only
var sum=0;      //initial sum is zero
function sumEvenSeven(dataS){  //We will pass 7 in the parameter
if(dataS<=100){
  dataS+=7; //because we will increrase the paramater by 7
  //so that we will get all the miltiples of 7;
  //then
  //We will only allow even multiple of 7 for sum calculation
  if(dataS%2==0){
      sum +=dataS;  //Adding even multiples of 7 for sum
}
return sumEvenSeven(dataS);   //recursing the function
}
return sum;
}
console.log(sumEvenSeven(7));
  sum=0;       //4

//5
//Implementing currying to perform following function
/*
function cylinder_volume(r, h){
	var volume = 0.0;
	volume = 3.14 * r * r * h;
	return volume;
}
*/
function cylinder_volume(r) {
    return (h)=>{                      //
            var volume=0.0;            //Initial volume
            volume = 3.14 * r * r *h;  //Volume calculation
            return volume;             //returning volume
    }
}
console.log(cylinder_volume(5)(10));     //5 console output

//6
makeTag = function(beginTag, endTag){
return function(textcontent){
	return beginTag +textcontent +endTag;
}
}

var tabletag=makeTag('<table border=1 bgcolor="b3d9ff"  align="LEFT">\n','<table border=1 bgcolor="b3d9ff"  align="LEFT">\n');
var rowtag=makeTag('\t<tr>\n','\t<tr>\n');
var datatag=makeTag('\t<td>\n','</td>\n');

var tdata1=datatag('Solution 2a');
var tdata2=datatag(fiveTable);
var tdata3=datatag('Solution 2b');
var tdata4=datatag(thirteenTable);
var tdata5=datatag('Solution 2c');
var tdata6=datatag(squaresTable);
var tdata7=datatag('Solution 3');
var tdata8=datatag(arrayOddMultipleofFive);
var tdata9=datatag('Solution 4');
var tdata10=datatag(sumEvenSeven(7));
var tdata11=datatag('Solution 5');
var tdata12=datatag(cylinder_volume(5)(10));

var wrap1=rowtag(tdata1+tdata2);
var wrap2=rowtag(tdata3+tdata4);
var wrap3=rowtag(tdata5+tdata6);
var wrap4=rowtag(tdata7+tdata8);
var wrap5=rowtag(tdata9+tdata10);
var wrap6=rowtag(tdata11+tdata12);

var htmlTable=tabletag(wrap1+wrap2+wrap3+wrap4+wrap5+wrap6);
console.log(htmlTable);

document.write(htmlTable);  //6 console output
