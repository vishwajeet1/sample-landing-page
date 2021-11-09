import { Story, Meta } from "@storybook/react";

import { FooterIconCard, FooterIconCardProps } from "../src";

export default {
  title: "Cards",
} as Meta;

const Template: Story<FooterIconCardProps> = (args) => (
  <FooterIconCard {...args} />
);

export const FooterIconCardStory = Template.bind({});
FooterIconCardStory.args = {
  title:
    "I feel so much less stressed ❤️ as I now know we’re doing everything by the book.”",
  footerTitle: "Andry Ford",
  footerDescription: "CEO at Whatever",
  avatar: "https://testimonialapi.toolcarton.com/avatar/1.jpg",
};
