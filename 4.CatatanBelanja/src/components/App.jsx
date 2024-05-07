import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

// Kumpulan data
const groceryItems = [
    {
        id: 1,
        name: "Kopi Bubuk",
        qty: 2,
        checked: true,
    },
    {
        id: 2,
        name: "Gula Pasir",
        qty: 5,
        checked: false,
    },
    {
        id: 3,
        name: "Air Mineral",
        qty: 3,
        checked: false,
    },
];

// component utama yang akan diexport dan digunakan pada main.jsx
export default function App() {
    // memuat data dengan menggunakan useState dengan nilai awal adalah data yaitu groceryItems, sehingga items = groceryItems
    const [items, setItems] = useState(groceryItems);

    // handle untuk menambahkan item
    function handleAddItem(item) {
        setItems([...items, item]);
    }

    // handle untuk penghapusan item
    function handleDeleteItem(id) {
        const newItems = items.filter((item) => item.id !== id);
        setItems([...newItems]);
    }

    // handle untuk melakukan checked pada item
    function handleToggleItem(id) {
        setItems((items) =>
            items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
        );
    }

    // handle mengapus seluruh item yang ada
    function handleClearItems() {
        setItems([]); // me-set item menjadi array kosong
    }

    // props onAddItem digunakan untuk memuat handleAddItem untuk dipanggil pada component Form
    return (
        <div className="anjay">
            <Header />
            <Form onAddItem={handleAddItem} />
            <GroceryList
                items={items}
                onDeleteItem={handleDeleteItem} //props onDeleteItem digunakan untuk memuat handleDeletItem untuk dipanggil pada component GroceryList
                onToggleItem={handleToggleItem} //props onToggleItem digunakan untuk memuat handleToggleItem untuk dipanggil pada component GroceryList
                onClearItems={handleClearItems} //props onClearItems digunakan untuk memuat handleClearItems untuk dipanggil pada component GroceryList
            />
            <Footer items={items} />
        </div>
    );
}
