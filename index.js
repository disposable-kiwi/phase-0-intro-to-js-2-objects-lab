// Write your solution in this file!
let employee = {
    name:"XiaoLang",
    streetAddress:"123 Main Street"
};

function updateEmployeeWithKeyAndValue(obj, key, value){
    return {
        ...obj,
        [key]:value
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key]=value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key){
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj,key){
    delete obj[key];
    return obj;
}