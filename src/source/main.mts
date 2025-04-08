import { Action, timelineEvent } from "./classes.mts";

let actions: Action[] = [];
interface eAction {
  action: Action;
}
async function importFiles(): Promise<void> {
  const modules = import.meta.glob("/src/source/actions/*.mts");
  for (const path in modules) {
    const mod: any = await modules[path]();
    const toAdd: Action = mod.default;
    actions.push(mod.default);
  }
}

await importFiles();
export default actions;