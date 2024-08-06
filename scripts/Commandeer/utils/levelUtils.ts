import { BlockType, BlockVolume, Vector3, world } from "@minecraft/server";
import { MinecraftBlockTypes } from "../../vanilla-data/mojang-block";

type Wall = {
  startPos: Vector3;
  endPos: Vector3;
};

function clearWall(wall: Wall) {
  world.getDimension("overworld").fillBlocks(new BlockVolume(wall.startPos, wall.endPos), MinecraftBlockTypes.air);
}

function fillWall(wall: Wall, block: string) {
  world.getDimension("overworld").fillBlocks(new BlockVolume(wall.startPos, wall.endPos), block);
}

function startLevel(commandBlockPos: Vector3) {
  world
    .getDimension("overworld")
    .fillBlocks(new BlockVolume(commandBlockPos, commandBlockPos), MinecraftBlockTypes.RedstoneBlock);
}

export { Wall, clearWall, fillWall, startLevel };
