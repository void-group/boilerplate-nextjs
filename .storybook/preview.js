
import * as nextImage from 'next/image';
import { globalStyles } from '@styles/defaultStyles/globalStyles';


Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => {
    globalStyles();
    return (
      <Story />
    );
  },
];
