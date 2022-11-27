const knex = require('../database/knex');

class bookService {
    constructor() {
        this.contacts = knex('books');
    }

    #getBook(payload) { 
        const book = { ...payload };
        const bookProperties = [
            "Tua_sach", "Lan_xuat_ban", "So_trang", "Quoc_gia", "NXB", "Tac_gia", "The_loai"
        ];
    // Remove non-contact properties
        Object.keys(book).forEach(function(key) {
            if (bookProperties.indexOf(key) == -1) {
                delete book[key];
            }
        });
        return book;
    }

    async create(payload) {
        const book = this.#getBook(payload);
        const [sid] = await this.books.insert(book);
        return { sid, ...book };
    }

    async all(){
        return await this.books.select('*');
    }

    async findByName(Tua_sach) {
        return await this.books
            .where('Tua_sach', 'like', `%${Tua_sach}%`)
            .select('*');
    }

    async findById(sid) {
        return await this.books.where('sid', sid).select('*').first();
    }

    async update(sid, payload) {
        const updated = this.#getBook(payload);
        return await this.books.where('sid', sid).update(updated);
    }

    async delete(sid) {
        return await this.books.where('sid', sid).del();
    }

   //  async allFavorite() {
   //      return await this.contacts.where('favorite', 1).select('*');
   //  }

    async deleteAll() {
        return await this.books.del();
    }
}

module.exports = bookService;