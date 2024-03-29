import { Tooltip } from "antd";
import moment from "moment";
// import { Calendar } from "../../types";

const YearlyPixels = ({ calendar, getModalData }) => {
  return (
    <>
      {calendar.map((day, i) => (
        <Tooltip
          title={moment("31/12/2020", "DD/MM/YYYY")
            .add(i + 1, "days")
            .format("DD/MM/YYYY")}
          // title={i}
          placement="bottom"
          key={i}
          className="cursor-pointer"
        >
          <span
            style={{ backgroundColor: day.color }}
            className="m-0.5 h-6 w-6 md:h-4 md:w-4"
            onClick={() => getModalData(i + 1)}
          ></span>
        </Tooltip>
      ))}
    </>
  );
};

export default YearlyPixels;
