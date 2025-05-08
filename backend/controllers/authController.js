 export const test =(req,res)=>{
res.json('test is working')
}

export const registerUser = async (req, res) => {

    try {
        const { name, email, password } = req.body;
        console.log(req.body)
        
        
    } catch (error) {
        
    }

}