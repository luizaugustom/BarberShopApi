import { Scheduling } from "../../enterprise/entities/scheduling"
import { SchedulingRepository } from "../repositories/scheduling-repository"


interface GetBarberSchedulingRequest {
    barberId: string
    page: number
    
}
interface GetBarberSchedulingResponse {
    schedulings: Scheduling[]
}


export class GetBarberSchedulingUseCase {
    constructor(private schedulingRepository: SchedulingRepository) {}

    async execute({page, barberId} : GetBarberSchedulingRequest): Promise<GetBarberSchedulingResponse>{
        
        const schedulings = await this.schedulingRepository.findManyById(barberId , {page})


        return { schedulings }
    }
    
}