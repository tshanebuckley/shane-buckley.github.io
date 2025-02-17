import { effect, signal } from "@preact/signals-react";

export function TrainerName(): string {
  let str = window.localStorage.getItem("trainerName");
  return str ? str : "";
}

export const trainerName = signal<string>(TrainerName());

export function saveTrainerName(name: string) {
  window.localStorage.setItem("trainerName", name);
  trainerName.value = TrainerName();
}

effect(() => {
  saveTrainerName(trainerName.value);
});
