import { Story, Meta } from "@storybook/react";

import { Footer, FooterProps } from "../src";

export default {
title: "Layout",
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const FooterStory = Template.bind({});
FooterStory.args = {};
