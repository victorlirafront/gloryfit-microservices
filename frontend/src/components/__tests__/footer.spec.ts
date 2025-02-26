import { describe, it, expect } from 'vitest'
import AppFooter from '../footer/footer.vue'

// @ts-ignore
import { mount } from '@vue/test-utils'

describe('AppFooter', () => {
  it('renders the footer text', () => {
    const wrapper = mount(AppFooter)
    expect(wrapper.text()).toContain('footer')
  })
})
