import { system, world } from "@minecraft/server";

function runEntityEventOnTag(tag: string, event: string) {
  system.run(() => {
    world.getDimension("overworld").runCommand(`/event entity @e[tag=${tag}] ${event}`);
  });
}

function setNPCDialog(npcTag: string, dialogId: string) {
  system.run(() => {
    world.getDimension("overworld").runCommand(`/dialogue change @e[tag=${npcTag}] ${dialogId} @a`);
  });
}

export { runEntityEventOnTag, setNPCDialog };
