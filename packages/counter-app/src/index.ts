import { createTemplate, createState, updateState, onMount } from "ui-library";
import { init, h } from "snabbdom";
const patch = init([]);

const initialState = { count: 0 };
createState(initialState);

const template = createTemplate((state: any, props: any) => {
  return h("div", [
    h("h1", state.count),
    h(
      "button",
      { on: { click: () => updateState({ count: state.count + 1 }) } },
      "Add"
    ),
  ]);
});

onMount(() => {
  console.log("Component mounted");
});

const container = document.getElementById("app");
if (container) {
  render(template(initialState, {}), container);
}
function render(arg0: any, container: HTMLElement) {
  throw new Error("Function not implemented.");
}
