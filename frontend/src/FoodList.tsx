import { useEffect, useState } from "react";
import { FoodItem } from "./components/FoodItem";
import { Food } from "./types/Food";
import { MenuHeader } from "./components/MenuHeader";
import { Search } from "./components/Search";

export function FoodList() {
    const [foodList, setFoodList] = useState<Food[]>([]);
    const [search, setSearch] = useState<string>("");
    const [error, setError] = useState<string>("");

    useEffect(() => {
        async function getFoods() {
            try {
                const response = await fetch("http://localhost:3000/foods");

                if (!response.ok) {
                    const { error } = await response.json();
                    setError(error);
                    return;
                }

                const data = await response.json();
                const { foods } = data;

                setFoodList(foods);
                setError("");
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                    return;
                }
            }
        }

        getFoods();
    }, []);

    const searchLowerCase = search.toLowerCase();
    const filteredFoodList = foodList.filter(food => {
        return food.name.toLowerCase().includes(searchLowerCase) || food.description.toLowerCase().includes(searchLowerCase)
    });

    if (error) {
        return <h3>{error}</h3>
    }

    return (
        <>
            <MenuHeader />
            <div className="searchContainer">
                <h2>Our Delicious Dishes</h2>
                <Search search={search} setSearch={setSearch} />
            </div>
            <div className="foodListContainer">
                {filteredFoodList.length > 0 ?
                    <ul className="foodList">
                        {
                            filteredFoodList.map((food: Food) => <FoodItem food={food} key={food.id} />)
                        }
                    </ul> : <h3>Products not found</h3>
                }
            </div>
        </>
    )
}