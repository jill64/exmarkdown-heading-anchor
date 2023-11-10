<!----- BEGIN GHOST DOCS HEADER ----->

# exmarkdown-heading-anchor

[![npm-version](https://img.shields.io/npm/v/exmarkdown-heading-anchor)](https://npmjs.com/package/exmarkdown-heading-anchor) [![npm-license](https://img.shields.io/npm/l/exmarkdown-heading-anchor)](https://npmjs.com/package/exmarkdown-heading-anchor) [![npm-download-month](https://img.shields.io/npm/dm/exmarkdown-heading-anchor)](https://npmjs.com/package/exmarkdown-heading-anchor) [![npm-min-size](https://img.shields.io/bundlephobia/min/exmarkdown-heading-anchor)](https://npmjs.com/package/exmarkdown-heading-anchor) [![ci.yml](https://github.com/jill64/exmarkdown-heading-anchor/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/exmarkdown-heading-anchor/actions/workflows/ci.yml) [![github-pages](https://img.shields.io/website?up_message=working&down_message=down&url=https%3A%2F%2Fjill64.github.io%2Fexmarkdown-heading-anchor%2F)](https://jill64.github.io/exmarkdown-heading-anchor/)

⚓️ A svelte-exmarkdown plugin that places anchors in heading tags

## [Demo](https://jill64.github.io/exmarkdown-heading-anchor/)

## Install

```sh
npm i exmarkdown-heading-anchor
```

<!----- END GHOST DOCS HEADER ----->

This is plugin of [svelte-exmarkdown](https://github.com/ssssota/svelte-exmarkdown).
By using this plugin, convert Markdown as follows

```markdown
# Heading1

## Heading2

### Heading3
```

↓

```html
<h1 id="Heading1">Heading1</h1>
<h2 id="Heading2">Heading2</h2>
<h3 id="Heading3">Heading3</h2>
```

This supports navigation by anchor links.

```html
<a href="/path/to/page#Heading3">To Heading3</a>
```

## Example

```svelte
<script>
  import { headingAnchor } from 'exmarkdown-heading-anchor'
  import { Markdown } from 'svelte-exmarkdown'

  // ...
</script>

<Markdown
  md={/*...*/}
  plugins={[
    // ...
    headingAnchor({
      // Configuration (optional)
      /**
       * Character to prepend to ID to avoid collision
       * @default ''
       */
      prefix?: string

      /**
       * Tag to add ID attribute
       * @default ['h1', 'h2', 'h3']
       */
      include?: ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6')[]
    })
  ]}
/>
```

> [!IMPORTANT]
>
> ### Currently Limitations
>
> The attribute is added when the component is mounted, so the HTML rendered server-side does not have an id attribute.
