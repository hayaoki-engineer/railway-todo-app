import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/prop-types': 'off', // PropTypes のルールを無効化する
    },
  }
];
