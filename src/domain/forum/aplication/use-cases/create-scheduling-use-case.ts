import { UniqueEntityID } from "../../../../core/entities/unique-entity-id"
import { SchedulingRepository } from "../repositories/scheduling-repository"
import { Scheduling } from "../../enterprise/entities/scheduling"



interface CreateSchedulingRequest {
    id?: UniqueEntityID
    clientId: string
    barberId: string
    date: string
    time: string
}

interface CreateSchedulingResponse {
    scheduling: Scheduling
 }


export class CreateSchedulingUseCase {
    constructor(private schedulingRepository: SchedulingRepository) {}

    async execute({id ,clientId, barberId, date, time} : CreateSchedulingRequest): Promise<CreateSchedulingResponse>{
        const scheduling = Scheduling.create({
            id: id ??  new UniqueEntityID(id),
            clientId: new UniqueEntityID(clientId),
            barberId: new UniqueEntityID(barberId),
            date,
            time,
        })

        await this.schedulingRepository.create(scheduling)

        return {
            scheduling
        }
    }
    
}