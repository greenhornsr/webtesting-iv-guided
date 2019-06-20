const db = require('../data/dbConfig');
const {insert} = require('./hobbitsModel');


describe('hobbits model', () => {
    beforeEach(async () => {
        await db('hobbits').truncate();
    })

    // that process.env.DB_ENV is pointing to 'testing';
    it('should set environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    })
})

describe('insert()', () => {
    it('should insert hobbits', async () => {
        await insert({ name: 'Hobby' });
        await insert({ name: 'Hobby 2' });

        const hobbits = await db('hobbits');

        expect(hobbits).toHaveLength(2)
    })
});

    it('should insert the provided hobbit', async () => {
        let hobbit = { name: 'Sam'};
        let inserted = await insert(hobbit);
        expect(inserted.name).toBe(hobbit.name)

        hobbit = { name: 'Frodo'};
        inserted = await insert(hobbit);
        expect(inserted.name).toBe(hobbit.name)
})
