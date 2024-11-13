
//function for adding a new product
const addProduct = async (req, res) => {
    // res.send('add product');
    try {
        const {name,description,price,category,subcategory,sizes,bestseller}=req.body;
        const image1= req.files.image1 && req.files.image1[0];
        const image2= req.files.image2 && req.files.image2[0];
        const image3= req.files.image3 && req.files.image3[0];
        const image4= req.files.image4 && req.files.image4[0];

        console.log(image1,image2,image3,image4);
        console.log(name,description,price,category,subcategory,sizes,bestseller);
        
        res.send('add product');
        
        
    } catch (error) {
        console.error(error);
        res.status(400).json({msg:error.message});
        
    }
}

//function for getting all products
const getAllProducts = async (req, res) => {
    res.send('get all products');
}

//function for removing a product
const removeProduct = async (req, res) => {
    res.send('remove product');
}

//function for retrieving a single product
const getSingleProduct = async (req, res) => {
    
}


export {addProduct,getAllProducts,removeProduct,getSingleProduct}