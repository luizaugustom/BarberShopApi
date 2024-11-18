import { Entity } from "../../../../core/entities/entity"
import { UniqueEntityID } from "../../../../core/entities/unique-entity-id"

interface SchedulingProps {
    id: UniqueEntityID
    clientId: UniqueEntityID
    barberId: UniqueEntityID
    date: Date
    time: string
}

export class Scheduling extends Entity<SchedulingProps> {
    
    get id() {
        return this.props.id
    }
    get clientId() {
        return this.props.clientId
    }
    get barberId() {
        return this.props.barberId
    }
    get date() {
        return this.props.date
    }
    get time() {
        return this.props.time
    }
}