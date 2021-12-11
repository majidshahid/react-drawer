import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import Screen1 from "../DRAWER SCREEN/Screen1";
import Screen2 from "../DRAWER SCREEN/Screen2";

var Root=createDrawerNavigator({
    Home:{
        screen:Screen1,
    },
    About:{
        screen:Screen2,
    }
}) 
export default createAppContainer(Root)