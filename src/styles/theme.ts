import { transitionSpeed } from "../application.constant";
import { Color } from "./color";

// export interface ITheme {
//   body: string;
//   text: string;
//   toggleBorder: string;
//   headerColor: string;
//   gradient: string;
//   font90: string;
//   speed: string;
//   navHoverColor: string;
// }

// export const lightTheme: ITheme = {
//   body: "#dfe4ea",
//   text: "#363537",
//   toggleBorder: "#FFF",
//   headerColor: "#ffffff",
//   gradient: "linear-gradient(#39598A, #79D7ED)",
//   font90: "90%",
//   speed: '0.8s',
//   navHoverColor: '#edeaea'
// };

// export const darkTheme: ITheme = {
//   body: "#1e1e1e",
//   headerColor: "#363a40",
//   text: "#FAFAFA",
//   toggleBorder: "#6B8096",
//   gradient: "linear-gradient(#091236, #1E215D)",
//   font90: "90%",
//   speed: '0.8s',
//   navHoverColor: '#4b525c'
// };


export interface ITheme {
  transitionSpeed: string,
  fontSize90: string,
  textColor: Color,
  headerColor: Color
  bodyColor: Color
  navHoverColor: Color
}

export const lightTheme: ITheme = {
  transitionSpeed: transitionSpeed,
  fontSize90: '90%',
  textColor: Color.PRESTIGEBLUE,
  headerColor: Color.WHITE,
  bodyColor: Color.LIGHTHEME,
  navHoverColor: Color.CITYLIGHT
}

export const darkTheme: ITheme = {
  transitionSpeed: transitionSpeed,
  fontSize90: '90%',
  textColor: Color.WHITE,
  headerColor: Color.NAVDARK,
  bodyColor: Color.DARKTHEME,
  navHoverColor: Color.GRISAILLE
}