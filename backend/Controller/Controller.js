const model=require('../models/model');

//post categories
async function create_Categories(req,res){
    const Create=new model.Categories({
        type:"Savings",
        color:"#1F3B5C", //dark
    });

let output=await Create.save();
res.json(output);
console.log(output)

}


module.exports={
    create_Categories
}