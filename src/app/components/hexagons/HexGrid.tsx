import styles from "@/app/components/hexagons/HexGrid.module.scss";
import clsx from "clsx";
import Image from "next/image";
import { CSSProperties } from "react";
import {
  ReactIcon,
  CSSIcon,
  HTMLIcon,
  TypeScriptIcon,
  GitIcon,
  TailwindIcon,
  MuiIcon,
  DocusaurusOpenApiIcon,
  NextIcon,
} from "#/public/icons";

const HONEYCOMB = [1, 2, 3, 2, 1];
const ICONS = [
  GitIcon.src,
  CSSIcon.src,
  HTMLIcon.src,
  TypeScriptIcon.src,
  ReactIcon.src,
  TailwindIcon.src,
  MuiIcon.src,
  DocusaurusOpenApiIcon.src,
  NextIcon.src,
];
const style = { width: "36px", height: "36px", objectFit: "contain" } as const;

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
                  <Image
                    src={ICONS[offset - columnCount + index]}
                    alt=""
                    width={36}
                    height={36}
                    style={style}
                    priority
                  />
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
