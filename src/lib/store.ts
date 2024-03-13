import { writable, type Writable } from 'svelte/store'

export const choice: Writable<string> = writable('')
