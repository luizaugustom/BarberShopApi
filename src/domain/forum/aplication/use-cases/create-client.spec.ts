import {expect, test} from 'vitest'
import { CreateClientUseCase } from './create-client'
import { ClientsRepository } from '../forum/repositories/clients-repository'
import { Client } from '../entities/client'


const fakeClientRepository: ClientsRepository = {
    create: async (client: Client) => {
        return;
    }
}


test('create client', async () => {

    const createClient = new CreateClientUseCase(fakeClientRepository)

    const client =  await createClient.execute({
        name: 'john',
        fone: '4899911991',
        password: '1234',
    })

    expect(client.name).toEqual('john')
})