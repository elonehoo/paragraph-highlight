import paragraphHighlight from '@elonehoo/paragraph-highlight/src'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('paragraphHighlight', () => {
  it('wraps matched text', () => {
    const wrapper = mount(paragraphHighlight, {
      props: { query: 'vue' },
      slots: { default: 'hello vue world' },
    })

    expect(wrapper.text()).toContain('hello vue world')
    expect(wrapper.html()).toContain('<mark')
    expect(wrapper.html()).toContain('vue')
  })
})
