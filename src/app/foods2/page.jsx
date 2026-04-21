import Category from "@/components/Food 2/Category";
import Search from "@/components/Food 2/Search";
import Food2Card from "@/ui/Food2Card";

const getFoods = async (category = "", search = "") => {
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods?category=${category}&search=${search}`,
  );
  const data = await res.json();
  return data.data;
};

const Foods2 = async ({ searchParams }) => {
  const sp = await searchParams;
  const foods = await getFoods(sp?.category || "", sp?.search || "");
  console.log(foods);
  return (
    <div>
      <Search />
      <Category />
      {foods.map((food) => (
        <Food2Card key={food.id} food={food} />
      ))}
    </div>
  );
};

export default Foods2;
