/// <reference path="./ymaps.d.ts" />

import ymaps from "ymaps";

export default function() {
  try {
    ymaps.load().then(maps => {
      maps.ready(() => {
        new maps.Map("yMap", {
          center: [52.450600, 30.974226],
          zoom: 17
        });
      });
    });
  } catch (error) {
    console.error("ymaps: Something went wrong", error);
  }
}
