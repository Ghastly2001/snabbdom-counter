"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ui_library_1 = require("ui-library");
const snabbdom_1 = require("snabbdom");
const patch = (0, snabbdom_1.init)([]);
const initialState = { count: 0 };
(0, ui_library_1.createState)(initialState);
const template = (0, ui_library_1.createTemplate)((state, props) => {
  return (0, snabbdom_1.h)("div", [
    (0, snabbdom_1.h)("h1", state.count),
    (0, snabbdom_1.h)(
      "button",
      {
        on: {
          click: () =>
            (0, ui_library_1.updateState)({ count: state.count + 1 }),
        },
      },
      "Add"
    ),
  ]);
});
(0, ui_library_1.onMount)(() => {
  console.log("Component mounted");
});
const container = document.getElementById("app");
if (container) {
  render(template(initialState, {}), container);
}
function render(arg0, container) {
  throw new Error("Function not implemented.");
}
