import type { StoryObj, Meta } from '@storybook/react';
import '../../../../globals/_variables.scss';
import {LabelArtDestacados} from './LabelArtDestacados';

const meta: Meta<typeof LabelArtDestacados> = {
  title: 'ui/components/atoms/label-articulos-destacados',
  component: LabelArtDestacados,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'ARTICULOS DESTACADOS',
    color: 'primary',
  },
};

export const Secundary: Story = {
  args: {
    text: 'ARTICULOS DESTACADOS',
    color: 'secondary',
  },
};