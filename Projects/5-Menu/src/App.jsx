import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";


const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
    const [menuItems, setMenuItems] = useState(items);

    const filterItems = (category) => {
        if (category === "all") {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };
    return (
        <main>
            <section className="menu section">
                <div>
                    <h2 className="title">Our Menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories filterItems={filterItems} categories={allCategories}></Categories>
                <Menu items={menuItems} ></Menu>
            </section>
        </main>
    );
}

export default App;
