import { left, right } from "../../../../core/either";
import { ClientsRepository } from "../repositories/clients-repository";
import { ResourceNotFoundError } from "../../../../core/errors/errors/resource-not-found-error";



interface GetClientDetailsUseCaseRequest {
    clientId: string
}


export class GetClientDetailsUseCase {
    constructor(private clientsRepository: ClientsRepository) {}

    
    async execute ({clientId}:GetClientDetailsUseCaseRequest) {

        const client = await this.clientsRepository.findById(clientId)
        if(!client) {
            return left(new ResourceNotFoundError())
        }
        const clientDetails =  {
            ClientFone: client.fone,
            ClientName: client.name,
            ClientAssessment: client.getAssessment
        }
        


        return right(
            clientDetails
        )
    }
}