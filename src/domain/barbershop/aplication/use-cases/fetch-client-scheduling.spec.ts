import {expect, test, describe, beforeEach} from 'vitest'
import { InMemorySchedulingRepository } from 'test/repositories/in-memory-scheduling-repository';
import { MakeScheduling } from 'test/factories/make-scheduling';
import { UniqueEntityID } from '../../../../core/entities/unique-entity-id';
import { FetchClientSchedulingUseCase } from './fetch-client-scheduling';

let inMemorySchedulingRepository: InMemorySchedulingRepository
let sut : FetchClientSchedulingUseCase

describe('Fetch Client Schedulings ', () => {
    beforeEach(() => {
        inMemorySchedulingRepository = new InMemorySchedulingRepository
        sut = new FetchClientSchedulingUseCase(inMemorySchedulingRepository)
    })

    test('should to be able fetch a  client scheduling', async () => {

        const  NewScheduling  =  MakeScheduling({clientId: new UniqueEntityID('123')})
        const  NewScheduling2  =  MakeScheduling({clientId: new UniqueEntityID('123')})
        const  NewScheduling3  =  MakeScheduling({clientId: new UniqueEntityID('129')})
        const  NewScheduling4  =  MakeScheduling({clientId: new UniqueEntityID('123')})
        
        await inMemorySchedulingRepository.create(NewScheduling)
        await inMemorySchedulingRepository.create(NewScheduling2)
        await inMemorySchedulingRepository.create(NewScheduling3)
        await inMemorySchedulingRepository.create(NewScheduling4)
        
        const  result  = await sut.execute({
            page: 1,
            clientId: '123'
        })
    
        expect(inMemorySchedulingRepository.items).toHaveLength(4)
        expect(result.value?.schedulings).toEqual([
                expect.objectContaining({clientId: new UniqueEntityID('123')}),
                expect.objectContaining({clientId: new UniqueEntityID('123')}),
                expect.objectContaining({clientId: new UniqueEntityID('123')}),
              
        ])


    })
})