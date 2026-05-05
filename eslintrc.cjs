function disableFoldersInComponents(folders) {
  return folders.map(folder => `src/components/${folder}/**/*`);
}

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', 'node_modules', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@mui/material',
            message: 'Please use a UI component from `@/ui`, or create one using `@radix-ui`.',
          },
          {
            name: 'moment',
            message: 'Please use `date-fns` instead.',
          },
          {
            name: '@emotion/react',
            message: 'Please either use Tailwind or use Radix UI components.'
          },
          {
            name: '@emotion/styles',
            message: 'Please either use Tailwind or use Radix UI components.'
          },
        ],
        patterns: [
          {
            group: ['*.css'],
            message: 'Using CSS modules is forbidden. Please use Tailwind utilities.'
          },
        ],
      },
    ],
    'react-refresh/only-export-components': [
      'error',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'error',
  },
  overrides: [
    {
      files: [
        ...disableFoldersInComponents([
          'clearall',
          'data_table',
          'datefilter',
          'home',
          'Loader',
          'modal',
          'reactMap/legend',
          'report_data_page',
          'searchbar',
          'status',
          'timeFilter',
          'tooltip',
        ]),
        'src/components/dash.tsx',
        'src/components/Navbar.tsx',
        'src/components/Ships.tsx',
        'src/*',
        'src/hooks/**/*',
        'src/meldingen/api/fetchNotifications.ts',
      ],
      rules: {
        'no-restricted-imports': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'react-refresh/only-export-components': 'off',
        'react-hooks/exhaustive-deps': 'off',
      },
    },
  ],
}
