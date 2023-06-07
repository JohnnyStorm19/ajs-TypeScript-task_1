import Cart from "../domain/Cart";
import Movie from "../services/Movie";

test('new cart should be empty', () => {
    const cart = new Cart;
    expect(cart.items.length).toBe(0);
});
test('adding new items to cart', () => {
    const cart = new Cart;
    const avengersMovie = new Movie(1, 'Мстители', 1000, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтэзи', 'приключения'], '127 мин. / 02:17');
    const avengers2Movie = new Movie(2, 'Мстители: Эра Альтрона', 1000, 2015, 'США', 'A new age begins!', ['фантастика', 'боевик', 'приключения'], '141 мин. / 02:21');
    const avengers3Movie = new Movie(3, 'Мстители: Война бесконечности', 1000, 2018, 'США', 'An entire universe. Once and for all', ['фантастика', 'боевик', 'приключения'], '149 мин. / 02:29');
    cart.add(avengersMovie);
    cart.add(avengers2Movie);
    cart.add(avengers3Movie); 
    expect(cart.items).toEqual([
        {
            id: 1,
            title: 'Мстители', 
            price: 1000,
            year: 2012, 
            country: 'США', 
            tagline: 'Avengers Assemble!', 
            genre: ['фантастика', 'боевик', 'фэнтэзи', 'приключения'], 
            runtime: '127 мин. / 02:17'
        },
        {
            id: 2,
            title: 'Мстители: Эра Альтрона', 
            price: 1000,
            year: 2015, 
            country: 'США', 
            tagline: 'A new age begins!', 
            genre: ['фантастика', 'боевик', 'приключения'], 
            runtime: '141 мин. / 02:21'
        },
        {
            id: 3,
            title: 'Мстители: Война бесконечности', 
            price: 1000,
            year: 2018, 
            country: 'США', 
            tagline: 'An entire universe. Once and for all', 
            genre: ['фантастика', 'боевик', 'приключения'], 
            runtime: '149 мин. / 02:29'
        }
    ])
})