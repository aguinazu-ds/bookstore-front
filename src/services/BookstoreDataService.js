import http from "../http-common";
class BookstoreDataService {
    getAll() {
        return http.get("/book");
    }
    getById(id) {
        return http.get('/book/${id}');
    }
}
export default new BookstoreDataService();