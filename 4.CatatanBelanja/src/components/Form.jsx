import { useState } from "react";

// menggunakan props onAddItem
export default function Form({ onAddItem }) {
    // membuat name dengan useState dan nilai awal berupa string kosong
    const [name, setName] = useState("");

    // membuat qty dengan useState yang memiliki nilai awal 1
    const [qty, setQty] = useState(1);

    // handleSubmit untuk digunakan pada props onSubmit pada element form
    function handleSubmit(e) {
        e.preventDefault(); // mencegah perilaku default dari element (tombol)

        if (!name) return; // cek apakah nama kosong, jika iya maka tidak dapat melakukan submit

        // deklarasi object untuk menampung data barang yang akan ditambahkan
        const newItem = {
            name,
            qty,
            checked: false,
            id: Date.now(),
        };

        onAddItem(newItem); // menggunakan props onAddItem yang berisi handleAddItem dengan parameter newItem

        console.log(newItem);

        // mereset name dan qty kembali ke nilai awal setelah menambahkan data
        setName("");
        setQty(1);
    }

    // mendeklarasi qunatityNum untuk menampung jumlah data untuk inputan qty
    // spread operator untuk membuat array dengan banyak 20 dan mengisi setiap index dengan option
    const quantityNum = [...Array(20)].map((_, i) => (
        // memberi key agar setiap element option memiliki nilai unique dan mengisi value sesuai dengan (index + 1)
        <option value={i + 1} key={i + 1}>
            {i + 1}
        </option>
    ));

    // select menggunakan value dari qty yang berasal dari deklarasi yang menggunakan useState dengan nilai awal 1
    // dst ...
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>Hari ini belanja apa kita?</h3>
            <div>
                <select value={qty} onChange={(e) => setQty(Number(e.target.value))}>
                    {quantityNum}
                </select>
                <input
                    type="text"
                    placeholder="nama barang..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <button>Tambah</button>
        </form>
    );
}
