//====================
// Dependencies
//====================
const mainCtrl = fw.getController('main');

//====================
// Routes
//====================
module.exports = 
[
    { 
        method: 'GET', path: '/greet', 
        options: 
        { 
            handler: mainCtrl.main
        } 
    },
    { 
        method: 'POST', path: '/greet/{name}', 
        options: 
        {             
            //auth: 'jwt', //Uncomment this line to use authentication on this route
            handler: mainCtrl.greet,
            validate:
            {
                // Params for URL elements, Payload for FORM
                params:
                {
                    name: fw.joi.string().required().description("Name of person")
                }
                /*
                payload:
                {
                    alias: fw.joi.string().required().description("Alias this person use"),
                    birthday: fw.joi.date().min('1-1-1914');required().description("Birthday of this person")
                }
                */
            }
        } 
    }
];