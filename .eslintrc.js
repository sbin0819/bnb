module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // quotes: ['error', 'double'],
    // "@typescript-eslint/quotes": ['error', 'double'],
    'spaced-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'jsx-ally/control-has-associated-label': 'off',
    'react/no-array-index-key': 'off',
    'comma-dangle': 'off',
    'arrow-body-style': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'object-curly-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-shadow': 'off',
    'operator-linebreak': 'off',
    'react/react-in-jsx-scope': 'on',
    'react/jsx-props-no-spreading': 'off',
    'jsx-ally/anchor-is-valid': 'off',
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'jsx-ally/label-has-associated-control': 'off',
    'no-invalid-css': 'off',
    'no-confusing-arrow': 'off',
    'react/jsx-curly-newline': 'off',
    indent: 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx']
      }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  }
};
