import React, { useState, useContext} from "react";

// import axios from "axios";

import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";

const labels = watchlist.map((subArray) => subArray["name"]);
const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};
export default WatchList;

const WatchListItem = ({ stock }) => {
  const [isHovered, setIsHovered] = useState(false);
  // null = default behavior (hover actions). "info" = show price/percent/arrow only. "actions" = show buttons only.
  const [clickMode, setClickMode] = useState(null);

  const showWatchlistActions = clickMode === "actions" || (clickMode === null && isHovered);

  const handleMouseEnter = () => {
    if (clickMode !== null) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (clickMode !== null) return;
    setIsHovered(false);
  };

  const handleItemClick = () => {
    setClickMode((prev) => {
      if (prev === null) return "info";
      return prev === "info" ? "actions" : "info";
    });
    setIsHovered(false);
  };

  return (
    <li
      className={
        `watchlist-item${showWatchlistActions ? " watchlist-item--actions" : ""}${
          clickMode !== null ? " watchlist-item--clicked" : ""
        }`
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleItemClick}
    >
      <div className="item pt-2 pb-2">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="item-info">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="down" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions stock={stock} />}
    </li>
  );
};

const WatchListActions = ({ stock }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = (e) => {
    e.stopPropagation();
    generalContext.openBuyWindow(stock);
  };

  const handleSellClick = (e) => {
    e.stopPropagation();
    generalContext.openSellWindow(stock);
  };

  const handleActionClick = (e) => {
    e.stopPropagation();
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy" onClick={handleBuyClick}>Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell" onClick={handleSellClick}>Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          
        >
          <button className="action" onClick={handleActionClick}>
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action" onClick={handleActionClick}>
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};

  // export const data = {
  //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  // datasets: [
  //   {
  //     label: "# of Votes",
  //     data: [12, 19, 3, 5, 2, 3],
  //     backgroundColor: [
  //       "rgba(255, 99, 132, 0.2)",
  //       "rgba(54, 162, 235, 0.2)",
  //       "rgba(255, 206, 86, 0.2)",
  //       "rgba(75, 192, 192, 0.2)",
  //       "rgba(153, 102, 255, 0.2)",
  //       "rgba(255, 159, 64, 0.2)",
  //     ],
  //     borderColor: [
  //       "rgba(255, 99, 132, 1)",
  //       "rgba(54, 162, 235, 1)",
  //       "rgba(255, 206, 86, 1)",
  //       "rgba(75, 192, 192, 1)",
  //       "rgba(153, 102, 255, 1)",
  //       "rgba(255, 159, 64, 1)",
  //     ],
  //     borderWidth: 1,
  //   },
  // ],
  // };