//====================
// Dependencies
//====================
const securityCtrl = fw.getController('security');

//====================
// Dependencies
//====================
module.exports = 
[
    { 
        method: 'POST', path: '/auth', 
        options: 
        { 
            handler: securityCtrl.validateAuth,
            validate:
            {
                payload:
                {
                    username: fw.joi.string().required(),
                    password: fw.joi.string().required()
                }
            }
        } 
    }
];