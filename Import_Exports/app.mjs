//Exercise 3:
import { sum, divide, toCapital, toTitle } from "./utils/index.mjs";
sum(4, 5, 6, 7, 8);
divide(8, 4);
toCapital("demonstrate")
toTitle(" this should work")


//Exercise 4:
async function loadConfig() {
    const themeConfig = await import("./utils/theme.mjs");

    const currentTime = new Date().getHours();

    if (currentTime < 18) {
        themeConfig.setLightTheme();
    }
    else {
        themeConfig.setDarkTheme();
    }
}

loadConfig();

//Exercise 5:
import './utils/globalConfig.mjs'
