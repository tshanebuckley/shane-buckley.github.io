import { pokeId } from "./PokeAccent";
import { trainerName } from "./TrainerName";

export enum InitializedState {
  First = "First",
  HasName = "HasName",
  HasStarter = "HasStarter",
}

export function GetInitializedState() {
  let id = pokeId.peek().toString();
  if (id && id !== "0") {
    return InitializedState.HasStarter;
  }
  if (trainerName.peek()) {
    return InitializedState.HasName;
  }
  return InitializedState.First;
}
