module.exports = {
  extends: ['@antfu/eslint-config-ts', 'plugin:jsx-a11y/recommended', 'plugin:astro/recommended', '@unocss'],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  ],
}
