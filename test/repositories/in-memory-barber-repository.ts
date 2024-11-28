import { BarbersRepository } from "@/domain/forum/aplication/repositories/barbers-repository"
import { Barber } from "../../src/domain/forum/enterprise/entities/barber"

export class InMemoryBarbersRepository implements BarbersRepository {
    public items: Barber[] = [] 

    async create(barber: Barber){
        this.items.push(barber)
    }
}