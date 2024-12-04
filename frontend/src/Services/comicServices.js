import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

useEffect(() => {
    const fetchComics = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/comics/${category}`);
            if (!response.ok) {
                throw new Error('Failed to fetch comics');
            }
            const data = await response.json();
            setComics(data);
        } catch (error) {
            console.error('Error fetching comics:', error);
            setComics([]); // Vagy beállíthatod, hogy megjelenjen egy hibaüzenet
        }
    };

    fetchComics();
}, [category]);

export const saveComic = async (comic) => {
    try {
        await axios.post(`${API_BASE_URL}/save`, comic);
        console.log("Comic saved successfully!");
    } catch (error) {
        console.error("Error saving comic:", error);
    }
};
