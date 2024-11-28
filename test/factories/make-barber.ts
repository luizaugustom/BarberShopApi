import { UniqueEntityID } from "../../src/core/entities/unique-entity-id";
import { Barber, BarberProps } from "../../src/domain/forum/enterprise/entities/barber";


export function MakeBarber(
    override: Partial<BarberProps> = {},
    id?: UniqueEntityID    
) {
    const barber = Barber.create({
        id: new UniqueEntityID(),
        fone: '4898482590',
        name: 'Example',
        password: '123456',
        assessment: [],
        ...override,
    })

    return barber
}