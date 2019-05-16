import { expect } from 'chai'
import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import SearchInput from '@/components/SearchInput.vue'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()

localVue.use(BootstrapVue)

/* eslint-disable */
describe('SearchInput.vue', () => {
  it('render input upon boostrapping', () => {
    const wrapper = mount(SearchInput, { localVue })
    expect(wrapper.contains('input')).to.equal(true);
  })

  it('saved keyword save upon hit enter', () => {
    const wrapper = shallowMount(SearchInput)
    var evtObj = {
      keyCode: 13
    },
    activeKeyword = "abc";

    wrapper.vm.activeKeyword = activeKeyword
    wrapper.vm.onKeyPress(evtObj);
    expect(wrapper.vm.savedKeyword).to.equal(activeKeyword);
  })

  it('emit search-keyword should emit value keyword when hit enter', () => {
    const wrapper = shallowMount(SearchInput)
    var evtObj = {
      keyCode: 13
    },
    activeKeyword = "abc";

    wrapper.vm.activeKeyword = activeKeyword;
    wrapper.vm.onKeyPress(evtObj);
    
    expect(wrapper.emitted()['search-keyword'][0][0]).to.equal(activeKeyword);
  })

  it('onblur if active keyword (input model) not equal to saved keyword, active keyword should set to saved keyword', () => {
    const wrapper = mount(SearchInput, { localVue });
    const input = wrapper.find('input');

    let activeKeyword = "abc",
    savedKeyword = "hello";

    wrapper.vm.savedKeyword = savedKeyword;
    
    input.element.value = activeKeyword;
    input.trigger('blur');

    expect(wrapper.vm.activeKeyword).to.equal(savedKeyword);
  })

  it('onblur if active keyword (input model) equal to saved keyword, active keyword should remain the same', () => {
    const wrapper = mount(SearchInput, { localVue });
    const input = wrapper.find('input');

    let activeKeyword = "abc",
    savedKeyword = "abc";

    wrapper.vm.savedKeyword = savedKeyword;
    
    input.element.value = activeKeyword;
    input.trigger('blur');

    expect(wrapper.vm.activeKeyword).to.equal(savedKeyword);
  })
})
