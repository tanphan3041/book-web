import axios from 'axios';

const url = import.meta.env.VITE_APP_API_URL;

class BookService {
   constructor() {
      this.baseUrl = `${url}/api/books`;
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

   async create(book) {
      return (await this.api.post(this.baseUrl, book)).data;
   }

   async deleteMany() {
      return (await this.api.delete(this.baseUrl)).data;
   }

   async get(sid) {
      return (await this.api.get(`${this.baseUrl}/${sid}`)).data;
   }

   async update(sid, book) {
      return (await this.api.put(`${this.baseUrl}/${sid}`, book)).data;
   }

   async delete(sid) {
      return (await this.api.delete(`${this.baseUrl}/${sid}`)).data;
   }
}
export const bookService = new BookService();
