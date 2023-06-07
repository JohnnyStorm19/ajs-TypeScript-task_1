import Buyable from "../services/Buyable";

export default class Cart {
    _items: Buyable[] = [];
    add(item: Buyable): void {
        this._items.push(item);
    }
    get items(): Buyable[] {
        return [...this._items];
    }
}