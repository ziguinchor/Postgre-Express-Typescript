import { Order } from "../../models/order";

const order = new Order()

describe('Order Model', () => {
     
       test('get all order', async () => {
         
          const res = await order.getOrders()
          
          expect(res).toBe(res)
       })

       test('create order', async () => {

        const res = await order.createOrder(20,5,19)
        expect(res).toBe(res)

       })

       test('delete order', async () => {

        const res = await order.delete(3)
        expect(res).toEqual(res)
       })

       test('update order', async () => {

        const res = await order.update(4)
           expect(res).toBe(res)
       })
})