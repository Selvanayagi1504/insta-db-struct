var sequelize = require("sequelize")
const db = require('./../config/database')
const User = require('./../models/insta')
const Post = require('./../models/post')
const PostPath = require('./../models/postpath')
const UserCom = require('./../models/usercom')
const UserComReply = require('./../models/usercomreply')
const Movie = require('./../models/moviefav')

class SampleController {
    //remove movie
    removemovie(post){
        return new Promise((resolve,reject)=>{
            try{
                Movie.destroy({
                    where: {
                      moboremail:post.moboremail,title:post.title
                    }
                  }).then(function(){
                    resolve('success');
                })
            }catch(err){
                reject(err);
            }
        })
    }
    //get movies of a user
    getmovie(email){
        return new Promise((resolve, reject) => {
            try {
                var data=email;
                Movie.findAll({where:{moboremail:data}}).then(function(result){
                    resolve(result);
                })
            } catch (err) {
                reject(err)
            }
        })
    }
    //save new movie
    savenewmovie(post){
        return new Promise((resolve, reject) => {
            try {
                var m=post.moboremail;
                var p=post.title;
                var cuid=post.poster;
                var coid=post.year;
                Movie.create({
                    moboremail: m,
                    title:p,
                    poster:cuid,
                    year:coid
               }).then(function (sdepold) {
                    resolve("success")
                })
            } catch (err) {
                reject(err)
            }
        })
    }
    //change profile poto
    changepoto(data,email){
        return new Promise((resolve,reject)=>{
            try{
                User.update({profile:data.url}, {
                    where: {
                        moboremail:email,
                    }
                    }).then(function(){
                        resolve('success');
                })
            }catch(err){
                reject(err)
            }
        })
    }
    //save chnages in user
    edituser(data,email){
        return new Promise((resolve,reject)=>{
            try{
                User.update({fname:data.fname,uname:data.uname,phone:data.phone,email:data.email,website:data.website,bio:data.bio,gender:data.gender}, {
                    where: {
                        moboremail:email,
                    }
                    }).then(function(){
                        resolve('success');
                })
            }catch(err){
                reject(err)
            }
        })
    }
    //login
    login(email,pass){
        return new Promise((resolve, reject) => {
            try {
                User.findOne({ where: { moboremail: email,pass:pass } }).then(function(res){
                    resolve("success");
                })
            } catch (err) {
                reject(err)
            }
        })
    }
    //get paths of post
    get(email){
        return new Promise((resolve, reject) => {
            try {
                var data=email;
                PostPath.findAll({where:{moboremail:data}}).then(function(result){
                    resolve(result);
                })
            } catch (err) {
                reject(err)
            }
        })
    }
    //save new post
    savenewposts(email,post){
        return new Promise((resolve, reject) => {
            try {
                Post.create({
                    moboremail: post.moboremail,
                    postid:post.id,
                    comments:post.comment,
                    likes:post.like,
                    date:post.date
                }).then(function (sdepold) {
                    console.log("successs")
                })
                post.path.forEach(p=>{
                    PostPath.create({
                        moboremail: post.moboremail,
                        postid:post.id,
                        pathid:p.id,
                        url:p.title
                    }).then(function(sde){
                        resolve("success");
                    })
                })
                
            } catch (err) {
                reject(err)
            }
        })
    }
    //get usercomments for a post
    getucom(email){
        return new Promise((resolve,reject)=>{
            try{
                var data=email;
                UserCom.findAll({where:{moboremail:data}}).then(function(result){
                    resolve(result);
                })
            }catch(err){
                reject(err);
            }
        })
    }
    //get all details of posts of a user
    getposts(data){
        return new Promise((resolve, reject) => {
            try {
                Post.findAll({ where: { moboremail: data } }).then(function(res){
                    resolve(res);
                })
            } catch (err) {
                reject(err)
            }
        })
    }
    //save changes in comments
    savecomment(email,post){
        return new Promise((resolve,reject)=>{
            try{
                Post.update({ comments:post.comment}, {
                    where: {
                        moboremail:email,
                        postid:post.id
                    }
                    }).then(function(){
                        resolve('success');
                })
            }catch(err){
                reject(err)
            }
        })
    }
    //delete images
    deleteimage(email,post){
        return new Promise((resolve,reject)=>{
            try{
                Post.destroy({
                    where: {
                      moboremail:email,postid:post.id
                    }
                  }).then(function(){
                    // resolve('success');
                })
                PostPath.destroy({
                    where: {
                      moboremail:email,postid:post.id
                    }
                  }).then(function(){
                    // resolve('success');
                })
                UserCom.destroy({
                    where: {
                      moboremail:email,postid:post.id
                    }
                  }).then(function(){
                    resolve('success');
                })
            }catch(err){
                reject(err)
            }
        })
    }
    //save user com
    saveucom(email,post){
        return new Promise((resolve, reject) => {
            try {
                var m=post.moboremail;
                var p=post.postid;
                var cuid=post.commentuserid;
                var coid=post.commentid;
                var com=post.comment;
                UserCom.create({
                    moboremail: m,
                    postid:p,
                    commentuserid:cuid,
                    commentid:coid,
                    comment:com
                }).then(function (sdepold) {
                    resolve("success")
                })
            } catch (err) {
                reject(err)
            }
        })
    }
    //save usercomments reply
    saveucomreply(email,post){
        return new Promise((resolve, reject) => {
            try {
                var m=post.moboremail;
                var p=post.postid;
                var cuid=post.replycommentuserid;
                var coid=post.commentid;
                var com=post.comment;
                UserComReply.create({
                    moboremail: m,
                    postid:p,
                    replycommentuserid:cuid,
                    commentid:coid,
                    comment:com
                }).then(function (sdepold) {
                    resolve("success")
                })
            } catch (err) {
                reject(err)
            }
        })
    }
    saveuser(data){
        return new Promise((resolve, reject) => {
            try {
                var moboremail,fname,uname,pass,profile,gender,bio,website,email,phone;
                moboremail=data.moboremail;
                fname=data.fname;
                uname=data.uname;
                pass=data.pass;
                profile=data.profile;
                gender=data.gender;
                bio=data.bio;
                website=data.website;
                email=data.email;
                phone=data.phone;
                User.create({
                    moboremail: moboremail,
                    fname: fname,
                    uname: uname,
                    pass: pass,
                    phone: phone,
                    email: email,
                    website: website,
                    bio: bio,
                    gender: gender,
                    profile: profile
                }).then(function (sdepold) {
                    resolve("success")
                })
            } catch (err) {
                reject(err)
            }
        })
    }
    // get particluar user
    getuser(data){
        return new Promise((resolve, reject) => {
            try {
                User.findOne({ where: { moboremail: data } }).then(function(res){
                    resolve(res);
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    //get all users
    getallusers() {
        return new Promise((resolve, reject) => {
            try {
                User.findAll().then(function (res) {
                    resolve(res)
                })

            } catch (err) {
                reject(err)
            }
        })
    }

    //get all posts
    getallposts() {
        return new Promise((resolve, reject) => {
            try {
                Post.findAll().then(function (res) {
                    resolve(res)
                })

            } catch (err) {
                reject(err)
            }
        })
    }

    //get all paths
    getallpath() {
        return new Promise((resolve, reject) => {
            try {
                PostPath.findAll().then(function (res) {
                    resolve(res)
                })

            } catch (err) {
                reject(err)
            }
        })
    }

    //get all ucom
    getallucom() {
        return new Promise((resolve, reject) => {
            try {
                UserCom.findAll().then(function (res) {
                    resolve(res)
                })

            } catch (err) {
                reject(err)
            }
        })
    }

    //get all replies of ucom
    getallucomreply() {
        return new Promise((resolve, reject) => {
            try {
                UserComReply.findAll().then(function (res) {
                    resolve(res)
                })

            } catch (err) {
                reject(err)
            }
        })
    }

    //save changes in likes
    changelikes(email,post){
        return new Promise((resolve,reject)=>{
            try{
                Post.update({ likes:post.like}, {
                    where: {
                        moboremail:post.moboremail,
                        postid:post.id
                    }
                    }).then(function(){
                        resolve('success');
                })
            }catch(err){
                reject(err)
            }
        })
    }
}


module.exports = () => {
    return new SampleController()
}