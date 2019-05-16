import { expect } from 'chai'
import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import SearchItem from '@/components/SearchItem.vue'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()

localVue.use(BootstrapVue)

/* eslint-disable */
// describe('SearchItem.vue', () => {
//   it('render input upon boostrapping', () => {
//     const wrapper = mount(SearchInput, { localVue })
//     expect(wrapper.contains('input')).to.equal(true);
//   })
// })
