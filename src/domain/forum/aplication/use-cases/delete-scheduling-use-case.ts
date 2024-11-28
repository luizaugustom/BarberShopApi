import { SchedulingRepository } from "../repositories/scheduling-repository"


interface DeleteSchedulingRequest {
    SchedulingId: string
    
}
interface DeleteSchedulingResponse {}


export class DeleteSchedulingUseCase {
    constructor(private schedulingRepository: SchedulingRepository) {}

    async execute({SchedulingId} : DeleteSchedulingRequest): Promise<DeleteSchedulingResponse>{
        
        const scheduling = await this.schedulingRepository.findById(SchedulingId)

        if (!scheduling) {
            throw new Error('Scheduling Not Found')
        }

        await this.schedulingRepository.delete(scheduling)

        return {}
    }
    
}