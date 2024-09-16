import { useState } from "react";
import List from "../../components/List";
import Filter from "../../components/filter";

import Hero from "./Hero";
import Button from "./Button";

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <Hero />

      <h1 className="text-[20px] md:text-[26px] lg:text-[30px] xl:text-[36px] font-semibold mt-[24px] md:mt-[28px] xl:mt-[32px]">
        Life Style Shoes
      </h1>
      <Button open={() => setIsOpen(true)} />

      <div className="grid grid-cols-4 gap-5">
        <Filter isOpen={isOpen} close={() => setIsOpen(false)} />
        <List />
      </div>
    </div>
  );
};

export default Home;
