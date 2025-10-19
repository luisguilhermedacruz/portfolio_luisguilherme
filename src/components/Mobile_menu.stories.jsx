import React from 'react';
import Mobile_Menu from './Mobile_Menu'; 
export default {
  title: 'Menu/MobileMenuLinks', 
  component: Mobile_Menu,
};


const Template = (args) => <Mobile_Menu {...args} />;

export const DefaultLinks = Template.bind({});
DefaultLinks.args = {
  
};

