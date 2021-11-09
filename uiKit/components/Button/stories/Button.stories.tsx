import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "../src";

export default {
  title: "Button",
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  type: "secondary",
};
