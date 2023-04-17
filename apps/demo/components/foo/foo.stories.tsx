import type { Meta } from '@storybook/react';
import { Foo } from './foo';

const Story: Meta<typeof Foo> = {
  component: Foo,
  title: 'Foo',
};
export default Story;


export const Primary = {
  args: {
  },
};
