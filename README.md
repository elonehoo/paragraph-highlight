<div align="center" >
<img src="./public/logo.svg" height="100">
</div>

<h1 align="center">Paragraph Highlight</h1>

<p align="center">
<a href="https://www.npmjs.com/package/@elonehoo/paragraph-highlight"><img src="https://img.shields.io/npm/v/@elonehoo/paragraph-highlight?color=a1b858&label="></a>
</p>

## Install

```bash
# npm 
npm i @elonehoo/paragraph-highlight

# yarn
yarn add @elonehoo/paragraph-highlight

# pnpm
pnpm i @elonehoo/paragraph-highlight
```

## Usage

To use it, just provide it with search words to props and a body of text to default slots.

```vue
<script setup lang="ts">
import paragraphHighlight from '@elonehoo/paragraph-highlight/src'
</script>

<template>
  <paragraphHighlight query="vue">The word highlighter library for Vue 3.x</paragraphHighlight>
</template>
```

Output

![readme_1.png](./public/readme_1.png)


