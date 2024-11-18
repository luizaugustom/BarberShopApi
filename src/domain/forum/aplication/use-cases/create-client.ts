import { UniqueEntityID } from "../../core/entities/unique-entity-id"
import { Client } from "../entities/client"
import { ClientsRepository } from "../forum/repositories/clients-repository"

interface CreateClientUseCaseRequest {
    id?: UniqueEntityID
    name: string
    fone: string
    password: string

}

export class CreateClientUseCase {
    constructor(private clientsRepository: ClientsRepository) {}

    async execute({name, fone, password, id} : CreateClientUseCaseRequest) {
        const client = Client.create({
            id: id ??  new UniqueEntityID(id),
            name, 
            fone,
            password,
        })

        await this.clientsRepository.create(client)

        return client
}
}