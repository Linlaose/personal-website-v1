import styles from "@/app/components/hexagons/HexGrid.module.scss";
import clsx from "clsx";
import { CSSProperties } from "react";

const HONEYCOMB = [3, 4, 3];
const ICONS = ["🚀", "🎸", "🤖", "🫶", "🔥", "🕹️", "👾", "✨", "🌴", "🖥️"];

const createCells = () => {
  let iconIndex = -1;
  return HONEYCOMB.flatMap((columnCount) =>
    Array.from({ length: columnCount }, (_, cellIndex) => {
      iconIndex++;
      return {
        "--index": cellIndex + 1,
        "--icon": ICONS[iconIndex],
      };
    }),
  );
};

const HexGrid = () => {
  const cells = createCells();
  let offset = 0;

  return (
    <div
      id="container"
      className={clsx(styles["hexagonRoot"], styles["container"])}
    >
      {HONEYCOMB.map((columnCount, columnIndex) => {
        const columnCells = cells.slice(offset, offset + columnCount);
        offset += columnCount;

        return (
          <div
            key={columnIndex}
            className={styles["column"]}
            style={{ "--column": columnIndex } as CSSProperties}
          >
            {columnCells.map((icon, index) => {
              return (
                <div
                  key={index}
                  className={styles["hexagon"]}
                  style={{ ...icon } as CSSProperties}
                >
                  {ICONS[offset - columnCount + index]}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default HexGrid;
