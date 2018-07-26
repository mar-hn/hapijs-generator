//====================
// Dependencies
//====================
//- None -

/* User:
    Credentials:
        username: test
        password: test
*/
const usersDB = 
[
    {
        "username": "test",
        "name": "Test User",
        "password": "test",
        "active": true,
        "insertdate": 1532626156209,
        "lastupdate": 1532626156209
    }
]

//====================
// Methods
//====================
async function getUsers(bOmitSensitive = true)
{
    const users = fw.lodash.map(usersDB, (user) => 
    {
        if(bOmitSensitive) return fw.lodash.omit(user,['salt','password'])

        return user;
    });
    
    return users;
}

module.exports = 
{
    getUsers
}