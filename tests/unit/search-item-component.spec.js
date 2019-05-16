import { expect } from 'chai'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import SearchItem from '@/components/SearchItem.vue'
import BootstrapVue from 'bootstrap-vue'
import { SearchResultModel } from '@/models/search-result-model.js'
import { dateConvert } from "@/filters/filters.js";

const localVue = createLocalVue()

localVue.use(BootstrapVue)

/* eslint-disable */
describe('SearchItem.vue', () => {
  it('check date output, it should be same from the filter result', () => {
    
    let srm = new SearchResultModel(123,'test123','www.google.com','hai',"2019-05-15T18:03:32Z",'Javascript',10);
    const wrapper = shallowMount(SearchItem, {
        propsData: {
            searchItemDetail: srm
        }
    });

    let dateElem = wrapper.find("p#search-item-date");
    expect(dateElem.text()).to.equal(dateConvert("2019-05-15T18:03:32Z"));
  })
})
