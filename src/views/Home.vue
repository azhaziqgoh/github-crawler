<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <div class="title-header">
          <h4>Github Search</h4>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div class="search-result-panel">
          <div class="search-input-container">
            <search-input @search-keyword="onEmitSearchKeyword"></search-input>
          </div>
          <p class="search-result-count">{{ totalReposCount }} Search Results</p>
          <div v-for="repo in repos" :key="repo.id">
            <search-item :search-item-detail="repo"></search-item>
          </div>
          <b-pagination
            v-model="currentPage"
            :total-rows="totalReposCount"
            :per-page="pageSize"
            align="center"
            @change="onPageChange"
          ></b-pagination>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import SearchInput from '@/components/SearchInput.vue';
import SearchItem from '@/components/SearchItem.vue';
import SearchServices from '@/services/search-services.js';

export default {
  name: 'home',
  components: {
    'search-input': SearchInput,
    'search-item': SearchItem
  },
  data() {
    return {
      searchKeyword: '',
      totalReposCount: 0,
      pageSize: 10,
      currentPage: 1,
      repos: []
    }
  },
  methods: {
    /**
     * @param {string} val - get string value from input result 
     * 
     * @description Get search key word from input component
     * 
     *  */
    onEmitSearchKeyword(val){
      this.$data.searchKeyword = val;
      this.executeSearch();
    },
    executeSearch(){
      SearchServices.getRepo(this.$data.currentPage,this.$data.pageSize,this.$data.searchKeyword).then((res)=>{
        this.$data.totalReposCount = res.totalReposCount;
        this.$data.repos = res.repos;
      })
    },
    onPageChange(val){
      this.$data.currentPage = val;
      this.executeSearch();
    }
  }
}
</script>

<style lang="scss" scoped>
  h4 {
    color: #6f737b;
    position: relative;

    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 1px;
      background: #ccc;
      width: calc(100% - 160px);
      top: 56%;
      right: 0;
    }
  }

  .search-result-panel {
    background-color: #ffffff;
    margin-top: 15px;
    min-height: 30vh;
    padding: 15px 20px;

    .search-input-container {
      padding: 0 5px;
      position: relative;
    }
    .search-result-count {
      margin-top: 15px;
      font-weight: bold;
      font-size: 20px;
    }

    li.page-item {
      margin-left: 10px;
      margin-right: 10px;
    }
  }

</style>
