import { FormEvent, useState } from "react"

export function FoodForm() {
    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [description, setDescription] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setLoading(true);

        const food = { name, price, description, image };

        try {
            const response = await fetch("http://localhost:3000/foods", {
                method: "POST",
                body: JSON.stringify(food),
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (!response.ok) {
                const { error } = await response.json();
                
                setMessage(error);
                setLoading(false);
                return;
            }

            const data = await response.json();
            const { message } = data;

            setMessage(message);
            setLoading(false);
        } catch (error) {
            if (error instanceof Error) {
                setMessage(error.message);
                return;
            }
        }
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Create food</h1>
                <p>{message}</p>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea cols={30} rows={5} value={description} onChange={(e) => { setDescription(e.target.value) }}></textarea>
                </div>
                <div>
                    <label>Image:</label>
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)}/>
                </div>
                <button type="submit">{loading ? "Creating..." : "Create"}</button>
            </form>
        </div>
    )
}