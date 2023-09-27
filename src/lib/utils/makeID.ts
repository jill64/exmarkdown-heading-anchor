import { options } from '$lib/options'
import { derived } from 'svelte/store'

export const makeID = derived(
  options,
  ($options) => (dom: HTMLHeadingElement | null) =>
    dom ? `${$options?.prefix ?? ''}${dom.innerText}` : null
)
