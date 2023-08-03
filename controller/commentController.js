//import Model
const Post=require("../model/postModel");
const Comment=require("../model/commentModel");

exports.createComment= async (req,res)=>{
    try{
        //fetch data from req body
        const {post,user,body}=req.body;
        //Create a Comment Object
        const comment=new Comment({
            post,user,body
        });

        //Save The New Coment Into The Database
        const savedComment= await comment.save();

        //Find The Post By Id,Add The New Comment To Its Comment Array
        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true} )
            .populate("comments")  //populate the comment array with comment documents
            .exec();
        
         res.json({
             post:updatedPost,
         });

    }
    catch(err){
        return res.status(500).json({
            error:"Error while creating comment",
        });
    }
}