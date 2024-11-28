import { Barber } from "../../enterprise/entities/barber";


export interface BarbersRepository {
    create(barber: Barber): Promise<void>
}