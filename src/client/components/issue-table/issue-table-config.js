/**
 * Created by chia-yenhung on 4/7/17.
 */
import LabelTitle from "./components/label-title";
import Labels from "./components/labels";
import User from "./components/user";
import Summary from "./components/summary";

export const columns = [
  {
    title: "Issue No and Title",
    name: {
      number: "number",
      title: "title"
    },
    component: LabelTitle
  },
  {
    title: "Labels",
    name: "labels",
    component: Labels
  },
  {
    title: "Username and Gravator",
    name: "user",
    component: User
  },
  {
    title: "Summary",
    name: "body",
    component: Summary
  }
];
