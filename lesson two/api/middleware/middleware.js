const ownerr = require('../owners/owner-model');

module.exports={
    async checkOwner(req, res, next) {
       const name=req.body.name;
       if(!name){
           res.status(400).json({ message: 'Name is required!' });
       }

         else{
             next();
         }

}
}
