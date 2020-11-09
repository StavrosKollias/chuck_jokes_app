import { IJoke } from "../Interfaces/IJokes";

export const recordAllreadyExists = (arrayDisplayed: Array<IJoke>, record: IJoke) => {
   const recordFilter = arrayDisplayed.filter((e, i) => {
      return e.id === record.id;
   });
   return recordFilter.length > 0;
};

export const decodeEntities = (str: string) => {
   const txtArea = document.createElement("textarea");
   txtArea.innerHTML = str;
   return txtArea.value;
};

export const spliceArray = (array: Array<IJoke>, start: number, stop: number) => {
   const newArray = array.slice(start, stop);
   return newArray;
};

export const validationInputFullName = (str: string) => {
   const testNumber = str.replace(/[a-z ,.'-]+$/i, "");
   const testSpace = str.replace(/[a-z,1-9.'-]+$/i, "");
   const stringWhitoutSpaces = str.replace(/\s+/g, "");
   const lengthdifference = str.length - stringWhitoutSpaces.length;
   const indexOfSpace = str.indexOf(" ");
   return testNumber.length === 0 && testSpace.length > 0 && lengthdifference === 1 && indexOfSpace < str.length - 1;
};

export const isInViewPort = (el: any) => {
   const rect = el.getBoundingClientRect();
   return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
   );
};

export const runJokeItems = () => {
   const items = document.querySelectorAll(".jokes-item");
   if (items)
      items.forEach((item: any) => {
         if (isInViewPort(item)) {
            item.classList.add("show");
         }
      });
};

export const runLoadMore = () => {
   const item = document.querySelector(".load-more-container");
   if (item) {
      const isInView = isInViewPort(item);
      if (isInView) {
         item.classList.add("show");
         return item;
      } else {
         item.classList.remove("show");
         return null;
      }
   } else {
      return null;
   }
};
