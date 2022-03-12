import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import FeedScreen from "../screen/FeedScreen";
import SearchScreen from "../screen/SearchScreen";
import AccountScreen from "../screen/AccountScreen";
import PostFormScreen from "../screen/PostFormScreen";

const AppStack = createStackNavigator(
  {
    Feed: FeedScreen,
    Search: SearchScreen,
    Account: AccountScreen,
    PostForm: PostFormScreen,
  },
  {
    initialRouteName: "Feed",
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
    },
    {
      initialRouteName: "App",
    }
  )
);
