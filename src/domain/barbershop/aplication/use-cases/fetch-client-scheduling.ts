import { Either, right } from "../../../../core/either"
import { Scheduling } from "../../enterprise/entities/scheduling"
import { SchedulingRepository } from "../repositories/scheduling-repository"


interface FetchClientSchedulingRequest {
    clientId: string
    page: number
    
}

type FetchClientSchedulingResponse = Either< null , { schedulings : Scheduling[] }>
    

export class FetchClientSchedulingUseCase {
    constructor(private schedulingRepository: SchedulingRepository) {}

    async execute({page, clientId} : FetchClientSchedulingRequest): Promise<FetchClientSchedulingResponse>{
        
        const  schedulings  = await this.schedulingRepository.findManyById(clientId , {page})


        return  right({schedulings})    
    }
}