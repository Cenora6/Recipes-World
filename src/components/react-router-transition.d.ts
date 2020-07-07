declare module "react-router-transition" {
    declare function require(moduleName: string): any;
    const AnimatedSwitch = require("react-router-transition").AnimatedSwitch;
    const spring = require("react-router-transition").spring;
}