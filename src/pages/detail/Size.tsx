import { useState } from "react";
import { numbers } from "../../utils/constants";
import { DetailProps } from "./Head";

const Size = ({ data }: DetailProps) => {
  const [selected, setSelected] = useState<string>("");

  const toggle = (id: string) => {
    // zaten seçili olana mı tıklandı ?
    const same = selected == id;

    if (!same) {
      //Farklı renge tıklandıysa state'i değiş
      setSelected(id);
    } else {
      // aynı renge tıklandıysa seçimi kaldır
      setSelected("");
    }
  };

  const stockSize = data.size.split(",");

  return (
    <div className="lg:mt-5">
      <h2 className="mb-4 font-semibold flex justify-between">
        SIZE{" "}
        <span className="underline text-[14px] font-normal line">
          SIZE CHART
        </span>
      </h2>

      <div className="grid grid-cols-5 gap-4">
        {numbers.map((num, key) => {
          // numara seçili mi?
          const found = selected === num;

          //Stockta var mı ?
          const insStock = stockSize.includes(num);

          return (
            <button
              disabled={!insStock}
              key={key}
              onClick={() => toggle(num)}
              className={`py-2 px-4 lg:px-0 text-center rounded-md cursor-pointer transition hover:bg-zinc-400 disabled:bg-[#D2D1D3] disabled:text-[#8F8C91]  ${
                found ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              {num}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Size;
