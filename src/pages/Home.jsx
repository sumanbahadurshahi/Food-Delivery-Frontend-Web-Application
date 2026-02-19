import Categories from "../Category";
import Nav from "../components/Nav";
import Card from "../components/Card";
import { food_items } from "../food";
import { useState } from "react";

function Home() {
  const [cate, setCate] = useState(food_items);

  function filter(Category) {
    if (Category === "All") {
      setCate(food_items);
    } else {
      let newlist = food_items.filter((item) =>( item.food_category === Category))
      setCate(newlist);
    }
  }

  return (
    <div className="bg-slate-200 min-h-screen">
      {}
      <Nav />

      {}
      <div className="flex flex-wrap justify-center items-center gap-6 w-full mt-6">
        {Categories.map((item) => {
         return <div
            key={item.id}
            className="w-[140px] h-[150px] bg-white flex flex-col justify-center items-center shadow-md rounded-lg p-4 
            hover:bg-green-400 cursor-pointer transition-all duration-200"
            onClick={() => filter(item.name)}
          >
            {item.Icon}
            {item.name}
          </div>
})}
      </div>

      {}
      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
        {cate.map((item) => (
          <Card
            key={item.name}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
