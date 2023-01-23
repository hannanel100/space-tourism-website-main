// story for navbar component
import { Navbar } from './Navbar';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

export const Primary: ComponentStory<typeof Navbar> = (args) => <Navbar />;
