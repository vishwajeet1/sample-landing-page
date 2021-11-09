import { Story, Meta } from "@storybook/react";

import { TitleTextCard, TitleTextCardProps } from "../src";

export default {
  title: "Cards",
} as Meta;

const Template: Story<TitleTextCardProps> = (args) => (
  <TitleTextCard {...args} />
);

export const TitleTextCardStory = Template.bind({});
TitleTextCardStory.args = {
  title: "Label",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam. ",
  footerText: "Experienced team",
};
