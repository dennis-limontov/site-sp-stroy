/// <reference path="./ymaps.d.ts" />

import ymaps from "ymaps";

export default function () {
  try {
    ymaps.load().then((maps) => {
      maps.ready(() => {
        const placemark = new maps.Placemark([52.450900, 30.975475]);
        const map = new maps.Map("yMap", {
          center: [52.450900, 30.975475],
          zoom: 17,
        });
        map.geoObjects.add(placemark);
      });
    });
  } catch (error) {
    console.error("ymaps: Something went wrong", error);
  }
}
