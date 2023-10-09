# exmarkdown-heading-anchor

[![CI](https://github.com/jill64/exmarkdown-heading-anchor/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/exmarkdown-heading-anchor/actions/workflows/ci.yml)

A [svelte-exmarkdown](https://github.com/ssssota/svelte-exmarkdown) plugin that places anchors in heading tags.

[Demo](https://jill64.github.io/exmarkdown-heading-anchor)

By using this plugin, convert Markdown as follows.

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

## Install

```sh
npm i exmarkdown-heading-anchor
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
    })
  ]}
/>
```

[Plugin Config Types](./src/lib/types/Options.ts)

## Known limitations

The attribute is added when the component is mounted, so the HTML rendered server-side does not have an id attribute.
