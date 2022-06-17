export const logAppBuildMessages = (
  buildMode: string,
  isLoadingComplete: boolean
): void => {
  console.log(
    `%c-------- Starting the app in mode: %c${buildMode.toUpperCase()} %c---------`,
    "font-size: 1.5rem;  color: black;",
    "font-size: 1.5rem; font-weight: bolder; color: red",
    "font-size: 1.5rem; color: black;"
  );

  isLoadingComplete &&
    console.log(
      "%cThe app has loaded succesfully",
      "color: gray; font-size: 1.5rem"
    );

  //VERY important log message!
  if (buildMode === "development" && isLoadingComplete)
    console.log("%cEnjoy coding (ﾉ◕ヮ◕)ﾉ*✲ﾟ*｡⋆", "font-size: 1.5rem");
};
