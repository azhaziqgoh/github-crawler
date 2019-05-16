import { expect } from 'chai'
import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import SearchItem from '@/components/SearchItem.vue'
import SearchInput from '@/components/SearchInput.vue'
import BootstrapVue from 'bootstrap-vue'
import SearchServices from "@/services/search-services.js";

const localVue = createLocalVue()

localVue.use(BootstrapVue)

/* eslint-disable */
describe('Home.vue', () => {
    it('alert render when showError equals true', () => {
        const wrapper = mount(Home, { localVue })
        wrapper.vm.showError = true;
        expect(wrapper.contains('.alert')).to.equal(true);
    })
    it('show not found message when no result, not searching and no system error', () => {
        const wrapper = shallowMount(Home)

        let pageSize = 10;
        SearchServices.getRepo(1,pageSize,'helloppppppp').then((res)=>{
            expect(wrapper.contains('#no-result')).to.equal(true);
        })
    })
    it('show system errror message when there is system error', () => {
        const wrapper = shallowMount(Home)

        let pageSize = 0;
        SearchServices.getRepo(1,pageSize,'react').then((res)=>{
            expect(wrapper.contains('#system-error')).to.equal(true);
        })
    })
    it('show welcome messsage at first render', () => {
        const wrapper = shallowMount(Home)
        expect(wrapper.contains('#welcome')).to.equal(true);
    })
    it('show result count when there are record and no error', () => {
        const wrapper = shallowMount(Home)

        let pageSize = 10;
        SearchServices.getRepo(1,pageSize,'react').then((res)=>{
            expect(wrapper.contains('#result')).to.equal(true);
        })
    })
    it('show result list when there is result', () => {
        const wrapper = mount(Home)

        let pageSize = 10;
        SearchServices.getRepo(1,pageSize,'react').then((res)=>{
            expect(wrapper.find(SearchItem)).exist().to.be.true;
        })
    })
})
