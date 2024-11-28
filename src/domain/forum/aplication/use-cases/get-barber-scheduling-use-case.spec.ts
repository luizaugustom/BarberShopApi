import {expect, test, describe, beforeEach} from 'vitest'
import { InMemorySchedulingRepository } from 'test/repositories/in-memory-scheduling-repository';
import { MakeScheduling } from 'test/factories/make-scheduling';
import { GetBarberSchedulingUseCase } from './get-barber-scheduling-use-case';
import { UniqueEntityID } from '../../../../core/entities/unique-entity-id';

let inMemorySchedulingRepository: InMemorySchedulingRepository
let sut : GetBarberSchedulingUseCase

describe('Get Barber Schedulings ', () => {
    beforeEach(() => {
        inMemorySchedulingRepository = new InMemorySchedulingRepository
        sut = new GetBarberSchedulingUseCase(inMemorySchedulingRepository)
    })

    test('should to be able fetch a  barber scheduling', async () => {

        const  NewScheduling  =  MakeScheduling({barberId: new UniqueEntityID('123')})
        const  NewScheduling2  =  MakeScheduling({barberId: new UniqueEntityID('123')})
        const  NewScheduling3  =  MakeScheduling({barberId: new UniqueEntityID('123')})
        
        await inMemorySchedulingRepository.create(NewScheduling)
        await inMemorySchedulingRepository.create(NewScheduling2)
        await inMemorySchedulingRepository.create(NewScheduling3)

        
        const { schedulings } = await sut.execute({
            page: 1,
            barberId: '123'
        })
    
        expect(inMemorySchedulingRepository.items).toHaveLength(3)
        expect(schedulings).toEqual([
            expect.objectContaining({barberId: new UniqueEntityID('123')}),
            expect.objectContaining({barberId: new UniqueEntityID('123')}),
            expect.objectContaining({barberId: new UniqueEntityID('123')}),
        ])

    })
})