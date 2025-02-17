import { effect, signal } from "@preact/signals-react";
import { GetSpriteSource } from "../components/Sprite";
import { extractColors } from "extract-colors";
import { FinalColor } from "extract-colors/lib/types/Color";

export function PokeId(): number | string {
  let str = window.localStorage.getItem("pokeId");
  return str ? str : 0;
}

export const pokeId = signal<number | string>(PokeId());

function savePokeId(id: number | string) {
  try {
    window.localStorage.setItem("pokeId", id.toString());
  } catch {
    window.localStorage.setItem("pokeId", "#000000");
  }
}

export function PrimaryColor(): string {
  let str = window.localStorage.getItem("primaryColor");
  console.log("PC " + str);
  return str ? str : "#000000";
}

function savePrimaryColor(colorHex: string) {
  window.localStorage.setItem("primaryColor", colorHex);
}

const root = document.documentElement;

function hexToDecimal(hex: string): number {
  return parseInt(hex, 16);
}

function decimalToHex(dec: number): string {
  return dec.toString(16);
}

function shiftColor(color: FinalColor, shift: number) {
  return decimalToHex(hexToDecimal(color.hex) + shift);
}

//default theme in case of an error or default
function setDefaultThemeAccents() {
  root.style.setProperty("--ifm-color-primary", "#2e8555");
  root.style.setProperty("--ifm-color-primary-dark", "#29784c");
  root.style.setProperty("--ifm-color-primary-darker", "#277148");
  root.style.setProperty("--ifm-color-primary-darkest", "#205d3b");
  root.style.setProperty("--ifm-color-primary-light", "#33925d");
  root.style.setProperty("--ifm-color-primary-lighter", "#359962");
  root.style.setProperty("--ifm-color-primary-lightest", "#3cad6e");
}

//uses the primary color to set the theme
function setThemeGradientFromPrimary(primary: FinalColor) {
  root.style.setProperty("--ifm-color-primary", primary.hex);
  root.style.setProperty("--ifm-color-primary-dark", shiftColor(primary, 10));
  root.style.setProperty("--ifm-color-primary-darker", shiftColor(primary, 15));
  root.style.setProperty(
    "--ifm-color-primary-darkest",
    shiftColor(primary, 30)
  );
  root.style.setProperty("--ifm-color-primary-light", shiftColor(primary, -10));
  root.style.setProperty(
    "--ifm-color-primary-lighter",
    shiftColor(primary, -15)
  );
  root.style.setProperty(
    "--ifm-color-primary-lightest",
    shiftColor(primary, -30)
  );
}

//gets the source pokemon image
export function GetSourceImage() {
  return GetSpriteSource(PokeId());
}

function setLightness(color: FinalColor, isDark: boolean) {
  //adjust a light color to dark -or- adjust a dark color to light
  if ((color.lightness > 0.5 && isDark) || (color.lightness < 0.5 && !isDark)) {
    color.lightness = 1 - color.lightness;
  }
  return color;
}

//uses the selected pokemon to set the ifm colors
export function SetThemeAccents(id: number | string, isDark: boolean) {
  //get the colors from the picture
  extractColors(GetSpriteSource(id))
    .then((colors) => {
      let primaryColor: FinalColor;
      colors.forEach((element) => {
        if (!primaryColor || primaryColor.area < element.area) {
          primaryColor = element;
        }
      });
      if (primaryColor) {
        primaryColor = setLightness(primaryColor, isDark);
        savePrimaryColor(primaryColor.hex);
        console.log("Lightness: " + primaryColor.lightness);
        console.log("Saturation: " + primaryColor.intensity);
        setThemeGradientFromPrimary(primaryColor);
      } else {
        console.error("No primary color found.");
        setDefaultThemeAccents();
      }
    })
    .catch((e) => {
      console.error(e);
      setDefaultThemeAccents();
    });
}

//plays the cry of the set poke id from the PokeAPI
export function playCry(id: number | string) {
  try {
    //ensure that we parse out only the number
    var num: number;
    if (typeof id === "string") {
      var idString = id as String;
      num = parseInt(idString.split("-")[0]);
    } else {
      num = id as number;
    }
    //attempt to play the audio
    if (num) {
      var audio = new Audio(
        `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${num}.ogg`
      );
      audio.play().catch((e) => console.log(e));
    }
  } catch (e) {
    console.log(e);
  }
}

effect(() => {
  let id = pokeId.value;
  savePokeId(id);
  SetThemeAccents(id, IsDark());
  playCry(id);
  // const root = document.documentElement;
  // console.log(root.style.getPropertyValue("--ifm-color-primary"));
});

export function IsDark(): boolean {
  let str = window.localStorage.getItem("theme");
  return str ? str === "true" : false;
}

export const dark = signal<boolean>(IsDark());

export function getThemeModeString(isDark: boolean): string {
  if (IsDark()) {
    return "dark";
  }
  return "light";
}

export function GetThemeName() {
  return getThemeModeString(IsDark());
}

function saveDarkToggle(isDark: boolean) {
  window.localStorage.setItem("theme", isDark.toString());
}

const setThemeMode = (isDark: boolean) => {
  let darkSetting = getThemeModeString(isDark);
  let rootElement = document.documentElement;
  if (rootElement) {
    rootElement.dataset.theme = darkSetting;
  }
};

effect(() => {
  let isDark = dark.value;
  saveDarkToggle(isDark);
  setThemeMode(isDark);
  SetThemeAccents(PokeId(), isDark);
});
