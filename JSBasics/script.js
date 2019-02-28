//decision making 
var age=18;
if(age<18){
    console.log("minor");
}else if(age>=18){
 console.log("major");
}

//ternary operator:   con?true:false;

age>=18?console.log("major"):console.log("minor");

//function
function krithi(firstName,lastName){
    console.log(firstName+" "+lastName);
}

krithi('Krithi','Hegde');

//array

var names=['Krithi','Ankita','Harshitha'];
console.log(names[2]);

names.push("Shrihaan");
console.log(names);
names.unshift("Akhila");
names.pop();
console.log(names);

//challenge
function tip(amount){
    var finalAm;
    if(amount<50){
        finalAm=(.2*amount);
        
    }
    else if(amount>=50 && amount<200)
    {
        finalAm=(.15*amount);
    }
    else if(amount>=200)
    {finalAm=(.1*amount);
    }
    return finalAm;
}

//Objects

var myDetails={
    firstName:'Krithi',
    lastName: 'Hegde',
    doB:1980,
    family:['Krithi','Harshitha'],
    calcAge:function(birthYear){
        return 2019-birthYear;
    }
};

var z='doB';
console.log(myDetails[z]);

myDetails.doB=1981;
console.log(myDetails);

//new object

var shiva=new Object();
shiva.firstName='Harshitha';
console.log(shiva);

//
console.log('Krithi is '+myDetails.calcAge(myDetails.doB)+'years old');





