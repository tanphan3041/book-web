const knex = require('../database/knex');

class RenterService {
    constructor() {
        this.renters = knex('renter');
    }

    #getRenter(payload) {
        const renter = { ...payload };
        const renterProperties = [
            "name", "age", "address", "phone"
        ];

        // Remove non-contact properties
        Object.keys(renter).forEach(function(key) {
            if (renterProperties.indexOf(key) == -1) {
                delete renter[key];
            }
        });
            return renter;
        
    }

    async create(payload) {
        const renter = this.#getRenter(payload);
        const [id] = await this.renters.insert(renter);
        return { id, ...renter };
    }

    async all() {
        return await this.renters.select('*');
           
    }

    async findByName(name) {
        return await this.renters
            .where('name', 'like', `%${name}%`)
            .select('*');
    }

    async findById(id) {
        return await this.renters.where('id', id).select('*').first();
    }

    // async update(id, payload) {
    //     const update = this.#getRenter(payload);
    //     return await this.renters.where('id', id).update(update);
    // }

    async delete(id) {
        return await this.renters.where('id', id).del();
    }

    async deleteAll() {
        return await this.renters.del();
    }
        

    //Define methods for accessing the DB
}

module.exports = RenterService;