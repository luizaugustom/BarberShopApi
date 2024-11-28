import { ClientsRepository } from "@/domain/forum/aplication/repositories/clients-repository";
import { Client } from "@/domain/forum/enterprise/entities/client";


export class InMemoryClientsRepository implements ClientsRepository {
    public items: Client[] = [] 

    async create(client: Client){
        this.items.push(client)
    }
}