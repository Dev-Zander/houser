 session_id = 1

module.exports = {
    
    
    checkuser:(req,res,next)=>{
        const db= req.app.get('db')
        db.usercheck([req.params.usersname, req.params.userspassword]).then(userinfo =>{
            if(userinfo[0]){
                req.session.user.session_user = userinfo[0].user_name
                req.session.user.session_id = session_id
                req.session.user.user_id = userinfo[0].id
                session_id++
            res.status(200).send('Success')
            console.log(req.session)
        }else{res.status(500).send('Not Valid')}
        },
    )
    },

    registerCheck:(req,res,next)=>{
        const db = req.app.get('db')
        db.checkforuser([req.params.username]).then(
        name =>{
            if(!name[0]){
                res.status(200).send(name)
            }else{res.status(500).send('User Already Exisit')}
        } 
        )
    },
    registeruser:(req,res,next)=>{
        const db = req.app.get('db')
        db.register([req.params.username, req.params.password]).then(userinfo =>{
            if(userinfo[0]){
                req.session.user.session_user = userinfo[0].user_name
                req.session.user.session_id = session_id
                req.session.user.user_id = userinfo[0].id
                session_id++
            res.status(200).send('New User Registered')
            }
        }
    )
    },
    
    destroy:(req,res,next)=>{
        const db= req.app.get('db')
        req.session.destroy()
            res.status(200).send('Signed Out')
        
    },

    gethouses:(req,res,next)=>{
        const db = req.app.get('db')
        db.gethouses([req.session.user.user_id]).then(houses =>{
            res.status(200).send(houses)
        })
    },
    addlisting:(req,res,next)=>{
        const db = req.app.get('db')
        db.addlisting([
            req.session.user.user_id,
            req.body.propertyName,
            req.body.description,
            req.body.address,
            req.body.city,
            req.body.state,
            req.body.zip,
            req.body.loanAmt,
            req.body.mortgage,
            req.body.rent,
            req.body.photo
        ]).then(
            results =>{
                res.status(200).send('Success')
            }
        )
    },

    deleteproperty:(req,res,next)=>{
        const db = req.app.get('db')
        db.deletelisting([req.params.id]).then(results =>{
            res.status(200).send('Success')
        })
    }
}