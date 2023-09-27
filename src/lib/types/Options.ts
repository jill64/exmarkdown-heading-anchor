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
  include?: ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6')[]
}
