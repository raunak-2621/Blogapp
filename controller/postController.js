const Post=require("../model/postModel");

exports.createPost=async(req,res)=>{
    try{
        const {title,body}=req.body;
        const post=new Post({
            title,body
        });
        const savedPost=await post.save();

        res.json({
            post:savedPost,
        });
    }
    catch(err){
         return res.ststus(404).json({
            error:"Error while creating post",
        });
    }
}

//Fetch all post
exports.getAllPost=async(req,res)=>{
    try{
        const posts=await Post.find().populate("comments").exec();
        res.json({
            posts,
    });
    }
    catch(err){
        return res.ststus(404).json({
        error:"Error while Fetching post",
    });
    }
}

