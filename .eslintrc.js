module.exports = {
    root: true,
    env: {
      browser: true,
      es6: true,
    },
    extends: ['airbnb', 'prettier', 'prettier/react'],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
      __DEV__: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['react', 'prettier', 'react-hooks'],
    overrides: [
      {
        files: ['**/__tests__/*'],
        env: {
          jest: true,
        },
      },
    ],
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
      'import/prefer-default-export': 'off',
      'no-param-reassign': 'off',
      'no-underscore-dangle': 'off',
      'no-nested-ternary': 'off',
      'react/forbid-prop-types': 'off',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-console': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'jsx-a11y/alt-text': 'off',
      'react/jsx-props-no-spreading': 'off',
    },
    settings: {
      'import/resolver': {
        node: {
          paths: ['.'],
          extensions: ['.js', '.jsx'],
        },
      },
    },
  };
  