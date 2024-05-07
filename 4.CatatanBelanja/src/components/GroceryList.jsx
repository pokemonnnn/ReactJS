import { useState } from "react";
import Item from "./Item";
export default function GroceryList({ items, onDeleteItem, onToggleItem, onClearItems }) {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems;

    // pengkondisian untuk pengurutan
    switch (sortBy) {
        case "name":
            sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "checked":
            sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
            break;
        default:
            sortedItems = items;
            break;
    }

    // menggunakan sortedItems agar barang tampil sesuai dengan urutan
    return (
        <>
            <div className="list">
                <ul>
                    {sortedItems.map((item) => (
                        <Item
                            item={item}
                            key={item.id}
                            onDeleteItem={onDeleteItem}
                            onToggleItem={onToggleItem}
                        />
                    ))}
                </ul>
            </div>
            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Urutkan berdasarkan urutan input</option>
                    <option value="name">Urutkan berdasarkan nama barang</option>
                    <option value="checked">Urutkan berdasarkan ceklis</option>
                </select>
                <button onClick={onClearItems}>Bersihkan Daftar</button>
            </div>
        </>
    );
}
