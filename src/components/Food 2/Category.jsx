"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Category = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const handleCategory = (category) => {
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    router.push(`${pathName}?${params.toString()}`);
  };

  return (
    <div>
      <select
        onChange={(e) => handleCategory(e.target.value)}
        defaultValue="Select Category"
        className="select select-neutral"
      >
        <option disabled={true}>Select Category</option>
        <option value="dish">Dish</option>
        <option value="burger">Burger</option>
        <option value="biriyani">Biriyani</option>
      </select>
    </div>
  );
};

export default Category;
