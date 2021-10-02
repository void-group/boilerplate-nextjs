module.exports = {
  typescript: { reactDocgen: 'none' },
  stories: [
    { directory: '../src/components', files: 'story.tsx' },
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls'
  ],
  features: {
    previewCsfV3: true
  }
}
