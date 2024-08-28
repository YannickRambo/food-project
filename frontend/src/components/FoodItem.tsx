import { Food } from "../types/Food"

interface FoodItemProps {
    food: Food
}

export function FoodItem({ food }: FoodItemProps) {
    return (
        <li className="foodItem">
            <figure>
                <img src={food.image} alt={food.description}/>
            </figure>
            <section className="foodTitle">
                <h1>{food.name}</h1>
                <h3>${food.price}</h3>
            </section>
            <section className="foodDescription">
                <p>{food.description}</p>
            </section>
        </li>
    )
}