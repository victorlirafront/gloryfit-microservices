import { describe, it, expect } from 'vitest'
import AppHeader from '../header/header.vue'
import { createPinia } from 'pinia'

// @ts-ignore
import { mount } from '@vue/test-utils'

describe('AppHeader', () => {
  it('should render without crashing', () => {
    const pinia = createPinia()
    const wrapper = mount(AppHeader, {
      global: {
        plugins: [pinia],
      },
    })
    expect(wrapper.exists()).toBe(true)
  })
})
