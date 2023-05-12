const model=require('../models/model');

//post categories
async function create_Categories(req,res){
    const Create=new model.Categories({
        type:"Expense",
        color:"#C43095", 
    });

let output=await Create.save();
res.status(200).json(output);
}
//get categories
async function get_Categories(req,res){
    let data=await model.Categories.find({})

   let filter= await data.map(v=>Object.assign({},{type:v.type,color:v.color}))
    return res.json(filter);
}

//post transaction
async function create_Transaction(req,res){
    if(!req.body) return res.status(500).json("Post HTTP Data not Provided");
    let {name,type,amount}=req.body;
    
    const Create=await new model.Transaction({
        name,
        type,
        amount,
        date:new Date()
    });
    Create.save();
    res.status(200).json(Create);

}

//get transaction
async function get_Transaction(req,res) {
    let data= await model.Transaction.find({});
    res.json(data);
}

//delete transaction
async function delete_Transaction(req,res){
    try{
    if(!req.body) res.status(500).json({message:"Request body not found"});
    await model.Transaction.deleteOne(req.body);
    res.status(200).json("Transaction Deleted");
    }catch(err){
        console.log(err);
        res.status(500).json({Error:"Internal Server Error"});
    }
}

//get all
async function get_Labels(req,res){
    model.Transaction.aggregate([{
        $lookup:{
            from:"categories",
            localField:'type',
            foreignField:"type",
            as:"categories_info"
        }
    },
    {
        $unwind:"$categories_info"
    }]).then(result=>{
        let data=result.map(v=>Object.assign({},{_id:v._id,name:v.name,type:v.type,amount:v.amount,color:v.categories_info['color']}))
        res.json(data);
    }).catch(error=>{
        res.status(500).json("Lookup Colection Error")
    })
}

module.exports={
    create_Categories,
    get_Categories,
    create_Transaction,
    get_Transaction,
    delete_Transaction,
    get_Labels
}