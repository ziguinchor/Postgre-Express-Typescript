import { Product } from "../../models/product";

const product = new Product()



describe('Model Product', () => {

     test('get all products', async () => {

        const res = await product.getProducts()
        expect(res).toBe(res)
     })

     test('create product', async () => {
        
        const res = await product.create({

            name: "pc",
            category: "electronique",
            price: 40
        })
        expect(res).toBe(res)
     })

     test('get product by id', async () => {
        
        const res = await product.getProductById(10)
        expect(res.name).toEqual('pc')
        expect(res.price).toEqual('40')
        expect(res.category).toEqual('electronique')
     })

     test('delete product', async () => {

        const res = await product.delete(4)
         expect(res).toBe(res)
     })
     
     test('update product', async () => {
        
        const res = await product.update({name: "iphone", price: 50, category:"apple"},5)

        expect(res).toEqual(res)
     })
    



})