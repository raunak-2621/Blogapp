const Post=require("../model/postModel");
const Like=require("../model/likeModel");

exports.likePost=async(req,res)=>{
    try{
        const {post,user}=req.body;

        const like=new Like({
            post,user
        });
        //entry in db
        const savedLike=await like.save();

        //updating the post 
        const updatedPost= await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true})
                .populate("likes").exec();
        res.json({
            post:updatedPost,
        });
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:'something went wrong please try again later',
            error:error.message,
        });
    }
}

//Unlike a post
exports.unlikePost=async(req,res)=>{
    try{
        const {post,like}=req.body;
        const deleteLike=await Like.findByIdAndDelete({post:post,_id:like});

        //update the post
        const updatedPost=await Post.findByIdAndDelete(post,{$pull:{likes:deleteLike._id}},{new:true});
        res.json({
            post:updatedPost,
        });

    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:'something went wrong please try again later',
            error:error.message,
        });

    }
}