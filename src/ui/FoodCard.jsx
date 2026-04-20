const FoodCard = ({ food }) => {
  return (
    <div className="border mb-4 bg-gray-300 p-5 rounded-2xl mx-5">
      <h3>Name: {food.name}</h3>
      <p>Category: {food.category}</p>
      <p>Price: {food.price}</p>
    </div>
  );
};

export default FoodCard;
