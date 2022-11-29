import axios from 'axios';

const url = import.meta.env.VITE_APP_API_URL;

class RenterService {
   constructor() {
      this.baseUrl = `${url}/api/renters`;
      this.api = axios.create({
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
         },
      });
   }

   async getMany() {
      return (await this.api.get(this.baseUrl)).data;
   }

   async create(renter) {
      return (await this.api.post(this.baseUrl, renter)).data;
   }

   async deleteMany() {
      return (await this.api.delete(this.baseUrl)).data;
   }

   async get(id) {
      return (await this.api.get(`${this.baseUrl}/${id}`)).data;
   }

   async update(id, renter) {
      return (await this.api.put(`${this.baseUrl}/${id}`, renter)).data;
   }

   async delete(id) {
      return (await this.api.delete(`${this.baseUrl}/${id}`)).data;
   }
}
export const renterService = new RenterService();
