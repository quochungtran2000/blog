export interface ITheme {
  body: string;
  text: string;
  toggleBorder: string;
  headerColor: string;
  gradient: string;
}

export const lightTheme: ITheme = {
  body: "#E2E2E2",
  text: "#363537",
  toggleBorder: "#FFF",
  headerColor: "#ffffff",
  gradient: "linear-gradient(#39598A, #79D7ED)",
};

export const darkTheme: ITheme = {
  body: "#1e1e1e",
  headerColor: "#363a40",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  gradient: "linear-gradient(#091236, #1E215D)",
};
