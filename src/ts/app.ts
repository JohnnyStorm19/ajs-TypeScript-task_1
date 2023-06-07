import Movie from "./services/Movie";
import Cart from "./domain/Cart";

const cart = new Cart;

cart.add(new Movie(1, 'Мстители', 1000, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтэзи', 'приключения'], '127 мин. / 02:17'));
cart.add(new Movie(2, 'Мстители: Эра Альтрона', 1000, 2015, 'США', 'A new age begins!', ['фантастика', 'боевик', 'приключения'], '141 мин. / 02:21'));
cart.add(new Movie(3, 'Мстители: Война бесконечности', 1000, 2018, 'США', 'An entire universe. Once and for all', ['фантастика', 'боевик', 'приключения'], '149 мин. / 02:29'));

console.log(cart.items);