import { VNode } from "snabbdom";

type TemplateFunction = (state: any, props: any) => VNode;

export function createTemplate(template: TemplateFunction): TemplateFunction {
  return template;
}
