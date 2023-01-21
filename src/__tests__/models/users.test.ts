import { User } from "../../models/user";
import { client } from "../../config/database";
const user = new User()



describe('Model User', () => {
    test('get All users', async () => {
        const res = await user.gestUsers()
        expect(res).toBe(res)
    })

    test('get user by id', async () => {
        const res = await user.userById(19)
        expect(res.email).toBe('doda@email.com')
        expect(res.firstname).toBe('malika')
    })

    test('create user', async () => {
        const res = await user.createUser({
            email: "fouad@email.com",
            firstName: "fouad",
            lastName: "ziko",
            password: '0000'
        })

        expect(res).toEqual(res)
    })

    test('delete user', async () => {

        const res = await user.userDelete(19)

        expect(res).toEqual(res)
    })
})


