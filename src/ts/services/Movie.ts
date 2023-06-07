import Buyable from "./Buyable";
export default class Movie implements Buyable {
    readonly id: number;
    readonly title: string;
    readonly price: number;
    readonly year: number;
    readonly country: string;
    readonly tagline: string;
    readonly genre: string[];
    readonly runtime: string | number;

    constructor(id: number, title: string, price: number, year: number, country: string, tagline: string, genre: string[], runtime: string | number) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.year = year;
        this.country = country;
        this.tagline = tagline;
        this.genre = genre;
        this.runtime = runtime;
    }
}