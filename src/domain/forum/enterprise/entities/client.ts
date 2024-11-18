import { Entity } from "../../../../core/entities/entity"
import { UniqueEntityID } from "../../../../core/entities/unique-entity-id"

interface ClientProps {
    id: UniqueEntityID
    name: string
    fone: string
    password: string
    assessment: number[]
}

export class Client extends Entity<ClientProps> {

    get id() {
        return this.props.id
    }

    get name() {
        return this.props.name
    }

    get fone() {
        return this.props.fone
    }

    get getAssessment() {
        if (this.props.assessment != undefined) {
            let numeros = this.props.assessment
            let soma = 0;

            for (let i = 0; i < numeros.length; i++) { soma += numeros[i];  }
            
            return soma / numeros.length            
     }}
     
    set assessment(Assessment: number ) {
     this.props.assessment.push(Assessment)
    }

    static create (props: ClientProps, id?: UniqueEntityID, assessment? : []) {
        const client = new Client({
            ...props,
        }, id)
        
        return client
    }
    
}
