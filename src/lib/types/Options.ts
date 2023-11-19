import type { HeadingTag } from './HeadingTag'

export type Options = {
  /**
   * Character to prepend to ID to avoid collision
   * @default ''
   */
  prefix?: string

  /**
   * Tag to add ID attribute
   * @default ['h1', 'h2', 'h3']
   */
  include?: HeadingTag[]

  /**
   * Specify a string to be added as an anchor link after the heading.
   * If not specified, no anchor link will be added.
   * @example 🔗
   * @default undefined
   */
  anchor?: string
}
