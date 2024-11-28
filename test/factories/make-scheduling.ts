import { UniqueEntityID } from "../../src/core/entities/unique-entity-id";
import { Scheduling,SchedulingProps } from "../../src/domain/forum/enterprise/entities/scheduling";


export function MakeScheduling(
    override: Partial<SchedulingProps> = {},
    id?: UniqueEntityID    
) {
    const scheduling = Scheduling.create({
        id: new UniqueEntityID(),
        barberId: new UniqueEntityID() ,
        clientId:  new UniqueEntityID(),
        date: "04/06/2003",
        time: "12:00",
        ...override,
    })

    return scheduling
}