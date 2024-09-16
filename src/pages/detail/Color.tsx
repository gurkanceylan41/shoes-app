import { useState } from "react";
import { colors } from "../../utils/constants";
import { DetailProps } from "./Head";

const Color = ({ data }: DetailProps) => {
  const [sColors, setScolors] = useState<string>("");

  // üzerine tıklanan seçeneği state'de yoksa ekle varsa kaldır
  const toggle = (id: string) => {
    // zaten seçili olana mı tıklandı ?
    const same = sColors == id;

    if (!same) {
      //Farklı renge tıklandıysa state'i değiş
      setScolors(id);
    } else {
      // aynı renge tıklandıysa seçimi kaldır
      setScolors("");
    }
  };
  return (
    <div>
      <h2 className="font-semibold mb-3"> Colors</h2>

      <div className="flex gap-5">
        {data.color.split(",").map((id) => {
          const color = colors.find((i) => i.id == id);
          const isSelected = sColors === id;

          return (
            <div
              className={`p-1 ${isSelected && "ring ring-blue rounded-full"}`}
            >
              <div
                onClick={() => toggle(id)}
                style={{
                  background: color?.code,
                }}
                className="size-8  rounded-full cursor-pointer"
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
