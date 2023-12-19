<!----- BEGIN GHOST DOCS HEADER ----->

# exmarkdown-heading-anchor

<!----- BEGIN GHOST DOCS BADGES -----><a href="https://npmjs.com/package/exmarkdown-heading-anchor"><img src="https://img.shields.io/npm/v/exmarkdown-heading-anchor" alt="npm-version" /></a> <a href="https://npmjs.com/package/exmarkdown-heading-anchor"><img src="https://img.shields.io/npm/l/exmarkdown-heading-anchor" alt="npm-license" /></a> <a href="https://npmjs.com/package/exmarkdown-heading-anchor"><img src="https://img.shields.io/npm/dm/exmarkdown-heading-anchor" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/exmarkdown-heading-anchor"><img src="https://img.shields.io/bundlephobia/min/exmarkdown-heading-anchor" alt="npm-min-size" /></a> <a href="https://github.com/jill64/exmarkdown-heading-anchor/actions/workflows/ci.yml"><img src="https://github.com/jill64/exmarkdown-heading-anchor/actions/workflows/ci.yml/badge.svg" alt="ci.yml" /></a> <a href="https://exmarkdown-heading-anchor.jill64.dev"><img src="https://img.shields.io/website?up_message=working&down_message=down&url=https%3A%2F%2Fexmarkdown-heading-anchor.jill64.dev" alt="website" /></a><!----- END GHOST DOCS BADGES ----->

⚓️ A svelte-exmarkdown plugin that places anchors in heading tags

## [Demo](https://exmarkdown-heading-anchor.jill64.dev)

<!----- END GHOST DOCS HEADER ----->

This is plugin of [svelte-exmarkdown](https://github.com/ssssota/svelte-exmarkdown).  
By using this plugin, convert Markdown as follows

Markdown

```md
# Heading1

## Heading2

### Heading3
```

↓

HTML

```html
<h1 id="Heading1">Heading1</h1>
<h2 id="Heading2">Heading2</h2>
<h3 id="Heading3">Heading3</h2>
```

This supports navigation by anchor links.

```html
<a href="/path/to/page#Heading3">To Heading3</a>
```

## Installation

```sh
npm i exmarkdown-heading-anchor
```

## Example

```svelte
<script>
  import { headingAnchor } from 'exmarkdown-heading-anchor'
  import { Markdown } from 'svelte-exmarkdown'
</script>

<Markdown
  plugins={[
    // ...
    headingAnchor({
      /**
       * Character to prepend to ID to avoid collision
       * @default ''
       */
      prefix?: string,

      /**
       * Tag to add ID attribute
       * @default ['h1', 'h2', 'h3']
       */
      include?: ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6')[],

      /**
      * Specify a string to be added as an anchor link after the heading.
      * If not specified, no anchor link will be added.
      * @example 🔗
      * @default undefined
      */
      anchor?: string
    })
  ]}
/>
```

[Full Plugin Options](./src/lib/types/Options.ts)

<!----- BEGIN GHOST DOCS FOOTER ----->

## License

MIT

<!----- END GHOST DOCS FOOTER ----->
