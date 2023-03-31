function auth(req,res,next){
if(typeof(req.session.usuario) != "undefined"){
return next()
}else{
return res.send("Você precisa estar logado para ter acesso a está página!")
}

}

module.exports = auth;