import { Either, right } from "../../../../core/either"
import { UniqueEntityID } from "../../../../core/entities/unique-entity-id"
import { Barber } from "../../enterprise/entities/barber"
import { BarbersRepository } from "../repositories/barbers-repository"

interface CreateBarberRequest {
    id: UniqueEntityID
    name: string
    fone: string 
    password: string
    assessment: []
}

type CreateBarberResponse = Either< null ,  { barber: Barber }>


export class CreateBarberUseCase {
    constructor(private barberRepository: BarbersRepository) {}

    async execute({id , name, fone, password} : CreateBarberRequest): Promise<CreateBarberResponse>{
        const barber = Barber.create({
            id: id ??  new UniqueEntityID(id),
            name,
            fone,
            password,
            
        })

        await this.barberRepository.create(barber)

        return right( {
            barber
        })
    }
    
}