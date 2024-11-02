async function userLogout(req,res){
    try{
    
        res.cookie("token", null, {
            expires: new Date(Date.now()),
             sameSite:"None",
             secure: true
          });
         

        res.json({
            message : "Logged out successfully",
            error : false,
            success : true,
            data : []
        })
    }catch(err){
        res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }
}


module.exports = userLogout