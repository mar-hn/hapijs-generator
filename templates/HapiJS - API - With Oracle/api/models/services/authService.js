//====================
// Dependencies
//====================
const userService = fw.getService('user');
const jwt = require('jsonwebtoken');


//====================
// Methods
//====================
async function checkAuth(data)
{
    const users = await userService.getUsers(false);
    const user = await fw.lodash.find(users,{username: data.username});

    //Check if search return a valid user
    if(user)
    {        
        // const hashPassword = fw.utils.encrypt('SHA256', data.password + user.salt); // for encryption with salt
        const hashPassword = data.password;

        if (hashPassword === user.password) 
        {
            //Check if user still active
            if (!user.active)
                return fw.boom.unauthorized('User inactive');

            //Return valid token
            return await createToken(fw.lodash.omit(user, ['salt', 'password']));
        }
    }

    return fw.boom.unauthorized('Invalid Login');
}

async function createToken(obj) 
{
    return await jwt.sign(obj, fw.settings.SessionKey, { algorithm: 'HS256', expiresIn: "2h" });
}

module.exports =
{
    checkAuth
}