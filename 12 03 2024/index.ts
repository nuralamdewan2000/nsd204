let a:number =10;

let username:string ="masai";

let isQualified:boolean;
isQualified =true;
isQualified =false;


let result:undefined;
result =undefined;

let user_history:null;
user_history =null;


let marks :number[] = [];
marks =[78,45,23,89,100]

let names:string[] =[];
names =["alice","bob","jhon"];


let directions:[string, string, string, string]
directions =["east","west","south","north"]

let vector3: [number, number, number]
vector3 =[1,5,7]


let details : [string, number ,number ,string, boolean]
details =["nuralam",24,2000,"dewan",false]

// enum
enum Roles {
    admin ="All CRUD operation",
    student ="All Read operation",
    instructor ="CRU operation"
}
// Roles.student ="All Read operation"

// or operator to multiple data types
let user_id : string | number;
user_id ="fw29_142"
user_id =123


//type alias
// type genders ="Male" | "Female" | "others"
// let gender : genders
// let age: number


// gender ="Female"
// age =29

// if(gender === "Male" && age >21){

//     console.log("Legal to Marry")

// }else if(gender === "Female" && age >18){

//     console.log("Legal to Marry")

// }else{
//     console.log("Inlegal to Marry")
// }


type batch_types = "Alpha"| "Bravo" | "Charlie" | "Delta" | "Ninja" | "Apache"

let batch : batch_types

batch ="Bravo"


// object data type
type user_obj ={
    name :string,
    city:string,
    age:number,
    isVaccinated ?:boolean
}
let obj :user_obj  = {
    name : "nuralam",
    city :"Khirpai",
    age :24,
    isVaccinated:true
}