import xss from "xss";
import { DetailProps } from "./Head";

const Foot = ({ data }: DetailProps) => {
  return (
    <div className="mt-5">
      <div className="flex flex-col gap-2 text-white">
        <div className="flex gap-2">
          <button className="bg-black flex-1 p-4 rounded-lg">
            ADD TO CART
          </button>
          <button className="bg-black p-4 rounded-lg">
            <img src="/heart.svg" />
          </button>
        </div>
        <button className="bg-blue p-4 rounded-lg">BUY IT NOW</button>
      </div>

      <div>
        <h2 className="font-semibold mt-8 mb-2 text-[16px]">
          ABOUT THE PRODUCT
        </h2>

        {/*
         * API'dan gelen html içerigini react'ta ekrana basmak için "dangerouslySetInnerHTML" propunu kullanırız
         * xss kütüphanesi ile html içindeki zararlı olabilcek scriptleri bozarak bu yöntemi kullandıgımızda bir tehlike kalmaz
         *  */}
        <p
          className="font-open text-[20px] text-gray-dark"
          dangerouslySetInnerHTML={{ __html: xss(data.description) }}
        ></p>
      </div>
    </div>
  );
};

export default Foot;
