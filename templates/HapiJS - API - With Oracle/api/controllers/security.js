//====================
// Dependencies
//====================
const authService = fw.getService('auth');

//====================
// Methods
//====================

async function validateAuth(request,h)
{
    return fw.promise(async (resolve, reject) => 
    {
        let stResponse = { success: true, message: '' };
        
        stResponse.data = await authService.checkAuth(request.payload);

        if(fw.boom.isBoom(stResponse.data))
            resolve(stResponse.data);
        
        resolve(stResponse);
    });
}

module.exports = 
{
    validateAuth
}