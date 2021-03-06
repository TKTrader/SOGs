const User = require('../models/publicUser');
//problem, we have multiple types of users to authenticate
//how to structure this? I guess all users will be in the single table as mentioned and 
//be authenticated through this 
// We may have to create a file like this for each user?

module.exports = (router) => {
//we use post for data that needs to be secure, or for creating new users
    router.post('/register', (req,res) => {
        //user sending :
        // req.body.firstname
        // req.body.lastname
        // req.body.email
        // req.body.password
        //we need to confirm user sends info
        if(!req.body.email){
            res.json({ success: false, message: 'You must provide an email'});
        } else{
            if(!req.body.lastname || !req.body.firstname){
                res.json({ success: false, message: 'You must provide a full name'});
            } else {

                if (!req.body.password) {
                    res.json({success: false, message: 'You must provide a password'});
                } else {
                    let user = new User({
                        email: req.body.email.toLowerCase(),
                        firstname: req.body.firstname.toLowerCase(),
                        lastname: req.body.lastname.toLowerCase(),
                        password: req.body.password
                    });
                    user.save((err) => {
                        if (err) {
                            res.json({ success: false, message: 'Could not save user. Error: ',err});
                        } else {
                            res.json({ success: true, message: 'User saved'});
                        }
                    });

                    //console.log(req.body);  //output to console
                    //res.send('hello Authenticated World');  
                }    
            }
        }
    });

    router.get('/checkEmail/:email', (req, res) => {
        // Check if email was provided in parameters
        if (!req.params.email) {
          res.json({ success: false, message: 'E-mail was not provided' }); // Return error
        } else {
          // Search for user's e-mail in database;
          User.findOne({ email: req.params.email }, (err, user) => {
            if (err) {
              res.json({ success: false, message: err }); // Return connection error
            } else {
              // Check if user's e-mail is taken
              if (user) {
                res.json({ success: false, message: 'E-mail is already taken' }); // Return as taken e-mail
              } else {
                res.json({ success: true, message: 'E-mail is available' }); // Return as available e-mail
              }
            }
          });
        }
      });

    return router;
} 