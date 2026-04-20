"use client";
import FoodCard from "@/ui/FoodCard";
import { useEffect, useState } from "react";

const FoodsPage = () => {
  const [allFoods, setAllFoods] = useState([]);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState("");

  // Fetch foods (mock data)
  const fetchFoods = () => {
    setLoading(true);

    const data = [
      { id: 1, name: "Pizza", category: "fast food", price: 12.99 },
      { id: 2, name: "Burger", category: "fast food", price: 8.5 },
      { id: 3, name: "Sushi", category: "japanese", price: 18.0 },
      { id: 4, name: "Ramen", category: "japanese", price: 14.0 },
      { id: 5, name: "Salad", category: "healthy", price: 6.25 },
      { id: 6, name: "Grilled Chicken", category: "healthy", price: 11.0 },
    ];

    // simulate API delay
    setTimeout(() => {
      setAllFoods(data);
      setFoods(data);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  // Combined filtering logic
  useEffect(() => {
    const filteredFoods = allFoods.filter((food) => {
      const matchSearch = food.name
        .toLowerCase()
        .includes(searchInput.toLowerCase());

      const matchFilter = filter ? food.category === filter : true;

      return matchSearch && matchFilter;
    });

    setFoods(filteredFoods);
  }, [searchInput, filter, allFoods]);

  return (
    <div className="p-5">
      <h3 className="text-xl font-semibold mb-4">Discover delicious foods:</h3>

      {/* Search */}
      <div className="mb-4 flex gap-3">
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          placeholder="Search here..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <button onClick={() => setSearchInput("")} className="btn btn-outline">
          Reset
        </button>
      </div>

      {/* Filter */}
      <div className="mb-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="select select-bordered"
        >
          <option value="">All Categories</option>
          <option value="healthy">Healthy</option>
          <option value="japanese">Japanese</option>
          <option value="fast food">Fast Food</option>
        </select>
      </div>

      {/* Content */}
      {loading ? (
        <p>Loading...</p>
      ) : foods.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default FoodsPage;
