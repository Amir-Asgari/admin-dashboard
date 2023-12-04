import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import Banner from "../data/Banner.png";

import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  return (
    <div className="mt-24">
<div className="flex flex-wrap  drop-shadow-xl sm:flex-nowrap justify-center w-200 items-center">
  <div
    className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl bg-w-full lg:w-100 sm:w-auto p-8 pt-9 m-3"
    style={{
      backgroundImage: "url('https://i.ibb.co/TrQZCDZ/Rectangle-4389.png')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
    }}
  >
          <div
            style={{ marginTop: 0 }}
            className="flex justify-between items-center "
          >
            <div className="flex flex-wrap w-10">
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448,78</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        {/* <div className=" flex wrap">
          <img src={Banner} />
        </div> */}
      </div>

      <div
        className="flex m-3 flex-wrap
        justify-center gap-1 items-center"
      >
        {earningData.map((item) => (
          <div
            key={item.title}
            className="bg-white drop-shadow-xl
            dark:text-gray-200
            dark:bg-secondary-dark-bg md:w-56
            p-4 pt-9 rounded-2xl"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-2xl opacity-0.9
               rounded-full p-4
               hover:drop-shadow-xl"
            >
              {item.icon}
            </button>
            <p className="mt-4">
              <span
                className="text-lg
              font-semibold"
              >
                {item.amount}
              </span>
              <span className={`text-sm text-${item.pcColor}`}>
                {item.percentage}
              </span>
            </p>
            <p
              className="text-sm
            text-gray-400 mt-1"
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <div
        className="flex gap-10 flex-wrap
          justify-center"
      >
        <div
          className="bg-white
            dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4
            rounded-2xl md:w-780"
        >
          <div className="flex justify-between">
            <p
              className="font-semibold
            text-xl"
            >
              Revenue Updates
            </p>
            <div
              className="flex
            items-center gap-4"
            >
              <p
                className="flex 
              item-center gap-2
              text-gray-600
              hover:drop-shadow-xl"
              >
                <span>
                  {" "}
                  <GoDotFill />{" "}
                </span>
                <span>Expense</span>
              </p>
              <p
                className="flex 
              item-center gap-2
              text-green-400
              hover:drop-shadow-xl"
              >
                <span>
                  {" "}
                  <GoDotFill />{" "}
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div
            className="mt-10 flex gap-10
          flex-wrap justify-center "
          >
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span
                    className="text-3xl
                  font-semibold"
                  >
                    $93.438
                  </span>
                  <span
                    className="p-1.5 
                  hover:drop-shadow-xl
                  cursor-pointer
                  rounded-full text-white
                  bg-green-400 ml-3
                  text-xs"
                  >
                    23%
                  </span>
                </p>
                <p
                  className="text-gray-500
                mt-1"
                >
                  Budget
                </p>
              </div>
              <div className="mt-8">
                <p>
                  <span
                    className="text-3xl
                  font-semibold"
                  >
                    $48.438
                  </span>
                </p>
                <p
                  className="text-gray-500
                mt-1"
                >
                  Expense
                </p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColor="red"
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color="blue"
                />
              </div>
              <div className="mt-10">
                <Button
                color='white'
                bgColor='blue'
                text='Download Report'
                borderRadius='10px'
                />
              </div>
            </div>
            <Stacked
            width='320px'
            height='360px'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
