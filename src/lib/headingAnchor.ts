import type { Plugin } from 'svelte-exmarkdown/types'
import { visit } from 'unist-util-visit'
import { headingTag } from './headingTag.js'
import { options as store } from './options.js'
import Heading from './renderer/Heading.svelte'
import type { HeadingTag } from './types/HeadingTag.js'
import type { Options } from './types/Options.js'

type ElementNode = {
  type: 'element'
  tagName: HeadingTag
  properties: Record<string, string[] | string>
  children: Node[]
}

type TextNode = {
  type: 'text'
  value: string
}

type RootNode = {
  type: 'root'
  children: Node[]
}

type Node = ElementNode | TextNode | RootNode

export const headingAnchor = (options?: Options): Plugin => {
  const { prefix = '', include = ['h1', 'h2', 'h3'], anchor } = options ?? {}

  store.set({ prefix, include, anchor })

  const apply = (node: RootNode | ElementNode) => {
    node.children.forEach((child) => {
      if (child.type !== 'element') {
        return
      }

      if (!headingTag.includes(child.tagName)) {
        return
      }

      let done = false

      visit(child, 'text', (head) => {
        if (done) {
          return
        }

        done = true

        child.properties.tag = child.tagName

        if (!include.includes(child.tagName)) {
          return
        }

        child.properties.id = `${prefix}${head.value}`
      })
    })
  }

  return {
    rehypePlugin: () => (tree: RootNode) => {
      apply(tree)
      visit(tree, 'element', apply)
    },
    renderer: {
      h1: Heading,
      h2: Heading,
      h3: Heading,
      h4: Heading,
      h5: Heading,
      h6: Heading
    }
  }
}
