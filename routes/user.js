const router = require('express').Router()
var nodemailer = require('nodemailer');
var encryptor = require('file-encryptor');
var key = 'My Super Secret Key';
var options = { algorithm: 'aes256' };
var transporter;

const multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
var upload = multer({ storage: storage });

class sampleRoute {
  constructor(sampleContoller) {
    this.controller = sampleContoller
    this.init()
  }

  init() {
    router.use('/', async (req, res, next) => {
      console.log("user")
      next()
    })
    router.post('/removemovie',async(req,res)=>{
      try {
        var post=req.body;
        const response = await this.controller.removemovie(post)
        res.json(response)
      } catch (err) {
        res.json({ code: 500, msg: 'getting Accesses Failed' })
      }
    })
    router.post('/savenewmovie',async(req,res)=>{
      try {
        var post=req.body;
        const response = await this.controller.savenewmovie(post)
        res.json(response)
      } catch (err) {
        res.json({ code: 500, msg: 'getting Accesses Failed' })
      }
    })
    router.get('/getmovie/:moboremail',async(req,res)=>{
      try {
        const response = await this.controller.getmovie(req.params.moboremail)
        res.json(response)
      } catch (err) {
        res.json({ code: 500, msg: 'getting Accesses Failed' })
      }
    })
    router.get('/get/:moboremail',async(req,res)=>{
      try {
        const response = await this.controller.get(req.params.moboremail)
        res.json(response)
      } catch (err) {
        res.json({ code: 500, msg: 'getting Accesses Failed' })
      }
    })
    router.post('/savenewposts/:moboremail',async(req,res)=>{
      try {
        var post=req.body;
        const response = await this.controller.savenewposts(req.params.moboremail,post)
        res.json(response)
      } catch (err) {
        res.json({ code: 500, msg: 'getting Accesses Failed' })
      }
    })
    router.post('/savecomments/:moboremail',async(req,res)=>{
      try {
        var post=req.body;
        const response = await this.controller.savecomment(req.params.moboremail,post)
        res.json(response)
      } catch (err) {
        res.json({ code: 500, msg: 'getting Accesses Failed' })
      }
    })
    router.post('/changelikes/:moboremail',async(req,res)=>{
      try {
        var post=req.body;
        const response = await this.controller.changelikes(req.params.moboremail,post)
        res.json(response)
      } catch (err) {
        res.json({ code: 500, msg: 'getting Accesses Failed' })
      }
    })
    router.post('/saveucom/:moboremail',async(req,res)=>{
      try {
        var post=req.body;
        const response = await this.controller.saveucom(req.params.moboremail,post)
        res.json(response)
      } catch (err) {
        res.json({ code: 500, msg: 'getting Accesses Failed' })
      }
    })
    router.post('/saveucomreply/:moboremail',async(req,res)=>{
      try {
        var post=req.body;
        const response = await this.controller.saveucomreply(req.params.moboremail,post)
        res.json(response)
      } catch (err) {
        res.json({ code: 500, msg: 'getting Accesses Failed' })
      }
    })
    router.post('/deleteimage/:moboremail',async(req,res)=>{
      try {
        var post=req.body;
        const response = await this.controller.deleteimage(req.params.moboremail,post)
        res.json(response)
      } catch (err) {
        res.json({ code: 500, msg: 'getting Accesses Failed' })
      }
    })
    router.post('/saveuser',async(req,res)=>{
      try {
        var u=req.body
        const response = await this.controller.saveuser(u)
        res.json(response)
      } catch (err) {
        res.json({ code: 500, msg: 'getting Accesses Failed' })
      }
    })
    router.post('/edituser/:moboremail',async(req,res)=>{
      try {
        var u=req.body
        const response = await this.controller.edituser(u,req.params.moboremail)
        res.json(response)
      } catch (err) {
        res.json({ code: 500, msg: 'getting Accesses Failed' })
      }
    })
    router.post('/changepoto/:moboremail',async(req,res)=>{
      try {
        var u=req.body
        const response = await this.controller.changepoto(u,req.params.moboremail)
        res.json(response)
      } catch (err) {
        res.json({ code: 500, msg: 'getting Accesses Failed' })
      }
    })
    router.get('/login/:moboremail/:pass',async(req,res)=>{
      try{
        const response = await this.controller.login(req.params.moboremail,req.params.pass)
        if(response=="success"){
          res.json({status:true})
        }
        else{
          res.json({status:false})
        }
      }catch(err){
        res.json(err);
      }
    })
    router.get('/getposts/:moboremail',async(req,res)=>{
      try {
        const response = await this.controller.getposts(req.params.moboremail)
        res.json(response)
      } catch (err) {
        res.json({ code: 500, msg: 'getting Accesses Failed' })
      }
    })
    router.get('/getucom/:moboremail',async(req,res)=>{
      try {
        const response = await this.controller.getucom(req.params.moboremail,req.params.id)
        res.json(response)
      } catch (err) {
        res.json({ code: 500, msg: 'getting Accesses Failed' })
      }
    })
    router.get('/getallusers',async(req,res)=>{
      try {
            const response = await this.controller.getallusers()
            res.json(response)
          } catch (err) {
            res.json({ code: 500, msg: 'getting Accesses Failed' })
          }
    })
    router.get('/getuser/:moboremail',async(req,res)=>{
      try {
            const response = await this.controller.getuser(req.params.moboremail)
            res.json(response)
          } catch (err) {
            res.json({ code: 500, msg: 'getting Accesses Failed' })
          }
    })
    router.get('/getallposts',async(req,res)=>{
      try {
            const response = await this.controller.getallposts()
            res.json(response)
          } catch (err) {
            res.json({ code: 500, msg: 'getting Accesses Failed' })
          }
    })
    router.get('/getallucom',async(req,res)=>{
      try {
            const response = await this.controller.getallucom()
            res.json(response)
          } catch (err) {
            res.json({ code: 500, msg: 'getting Accesses Failed' })
          }
    })
    router.get('/getallucomreply',async(req,res)=>{
      try {
            const response = await this.controller.getallucomreply()
            res.json(response)
          } catch (err) {
            res.json({ code: 500, msg: 'getting Accesses Failed' })
          }
    })
    router.get('/getallpath',async(req,res)=>{
      try {
            const response = await this.controller.getallpath()
            res.json(response)
          } catch (err) {
            res.json({ code: 500, msg: 'getting Accesses Failed' })
          }
    })
  }

  // Get Router
  getRouter() {
    return router
  }
}
module.exports = controller => {
  return new sampleRoute(controller)
}
