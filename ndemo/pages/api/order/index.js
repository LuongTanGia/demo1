import connectDB from '../../../utils/connectDB'
import Orders from '../../../models/orderModel'
import auth from '../../../middleware/auth'
import Products from '../../../models/productModel'

connectDB()

export default async (req, res) =>{
    switch(req.method){
        case "POST":
            await createOrder(req, res)
            break;
    }
}

const createOrder = async (req, res) =>{
    try {
        const result = await auth(req, res)
        const { address , mobile , cart , total } = req.body    
        // console.log({result})

        const newOrder = new Orders({
            user: result.id, address ,mobile ,cart ,total
        })

        cart.filter(item => {
            return sold(item._id, item.quantity, item.inStock, item.sold)
        })

        await newOrder.save()

        res.json({
            msg:'Payment success! we will contact you confirm the order.',    
            newOrder
        })
    }catch(err){
        return res.status(500).json({err: err.message})
    }
}


const sold = async (id, quantity , oldInStock ,oldSold) =>{
    await Products.findOneAndUpdate({_id: id},{
        inStock: oldInStock - quantity,
        sold: quantity + oldSold
    })
}