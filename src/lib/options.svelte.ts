import type { Options } from './types/Options.js'

let store = $state<Options>({})

export const options = {
  get prefix() {
    return store.prefix
  },
  set prefix(value) {
    store.prefix = value
  },
  get include() {
    return store.include
  },
  set include(value) {
    store.include = value
  },
  get anchor() {
    return store.anchor
  },
  set anchor(value) {
    store.anchor = value
  }
}
