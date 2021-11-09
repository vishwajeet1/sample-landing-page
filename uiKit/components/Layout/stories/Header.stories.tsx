import { Story, Meta } from "@storybook/react";

import { Header, HeaderProps } from "../src";

export default {
  title: "Layout",
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const HeaderStory = Template.bind({});
