import { UniqueEntityID } from "../../../../core/entities/unique-entity-id"
import { SchedulingRepository } from "../repositories/scheduling-repository"
import { Scheduling } from "../../enterprise/entities/scheduling"
import { Either, right } from "../../../../core/either"



interface CreateSchedulingRequest {
    id?: UniqueEntityID
    clientId: UniqueEntityID
    barberId: UniqueEntityID
    date: string
    time: string
}

type  CreateSchedulingResponse = Either< null, { scheduling: Scheduling}>


export class CreateSchedulingUseCase {
    constructor(private schedulingRepository: SchedulingRepository) {}

    async execute({id ,clientId, barberId, date, time} : CreateSchedulingRequest): Promise<CreateSchedulingResponse>{
        const scheduling = Scheduling.create({
            id: id ??  new UniqueEntityID(id),
            clientId: clientId ?? new UniqueEntityID(clientId),
            barberId: barberId ??  new UniqueEntityID(barberId),
            date,
            time,
        })

        await this.schedulingRepository.create(scheduling)

        return right( {
            scheduling
        })
    }
    
}