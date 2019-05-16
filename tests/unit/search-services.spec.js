import { expect } from 'chai'
import SearchServices from "@/services/search-services.js";

/* eslint-disable */
describe('Search Services', () => {
  it('success call will return success message', () => {
    SearchServices.getRepo(1,10,'react').then((res)=>{
        expect(res.message).to.equal("success");
    })
  })
  it('With page size 10, record return will be 10 or less', () => {
    let pageSize = 10;
    SearchServices.getRepo(1,pageSize,'react').then((res)=>{
        expect(res.repos.length).to.lte(10);
    })
  })
  it('With page size 0, it should throw error', () => {
    let pageSize = 0;
    SearchServices.getRepo(1,pageSize,'react').then((res)=>{
        expect(res.message).to.equal('Error');
    })
  })
})