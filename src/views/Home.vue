<template>
  <b-container fluid>
    <b-alert dismissible fade class="flyover-alert" variant="danger" :show="showError">Could not perform empty string search. Please input search key</b-alert>
    <b-row class="title-header-wrapper">
      <b-col>
        <div class="title-header">
          <h4>Github Search</h4>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="pl-0">
        <div class="search-result-panel">
          <div class="search-input-container">
            <search-input @search-keyword="onEmitSearchKeyword"></search-input>
          </div>
          <template v-if="totalReposCount > 0 && !showNoResult && !searching && !systemError">
            <p class="search-result-count">{{ totalReposCount }} Search Results</p>
            <div v-for="repo in repos" :key="repo.id">
              <search-item :search-item-detail="repo"></search-item>
            </div>
            <b-pagination
              v-model="currentPage"
              :total-rows="totalReposCount"
              :per-page="pageSize"
              :hide-goto-end-buttons="true"
              align="center"
              @change="onPageChange"
            ></b-pagination>
          </template>
          <p v-if="showWelcomingMessage" class="search-result-count"><i class="emoticon"><font-awesome-icon icon="hand-paper"></font-awesome-icon></i> Hi! Start searching github repositories by enter search keyword in the input box above.</p>
          <p v-if="showNoResult && !searching && !systemError" class="search-result-count"><i class="emoticon"><font-awesome-icon icon="frown-open"></font-awesome-icon></i> Oops! No repositories found with followng '{{ searchKeyword }}' keyword. Please search again.</p>
          <p v-if="systemError" class="search-result-count"><i class="emoticon"><font-awesome-icon icon="frown-open"></font-awesome-icon></i> Oops! System Error. Please contact administrator.</p>
          <p v-if="searching" class="search-result-count"><i class="emoticon"><font-awesome-icon icon="search"></font-awesome-icon></i> Searching repositories with '{{ searchKeyword }}' keyword</p>
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
import { setTimeout } from 'timers';

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
      repos: [],
      showError: false,
      searching: false,
      systemError: false
    }
  },
  computed: {
    showWelcomingMessage: function(){
      if(this.$data.searchKeyword === '' && this.$data.totalReposCount === 0){
        return true;
      } else {
        return false;
      }
    },
    showNoResult: function(){
      if(this.$data.searchKeyword !== '' && this.$data.totalReposCount === 0){
        return true;
      } else {
        return false;
      }
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
      if(val !== ''){
        this.$data.searchKeyword = val;
        this.executeSearch();
      } else {
        this.$data.showError = true;

        setTimeout(()=>{
          this.$data.showError = false;
        },3000)
      }
    },
    executeSearch(){
      this.$data.searching = true;
      if(!this.$data.systemError) this.$data.systemError = false;
      SearchServices.getRepo(this.$data.currentPage,this.$data.pageSize,this.$data.searchKeyword).then((res)=>{
        this.$data.totalReposCount = res.totalReposCount;
        this.$data.repos = res.repos;
        this.$data.searching = false;

        if(res.message === "Error"){
          this.$data.systemError = true;
        }
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
  
  .title-header-wrapper {
    position: relative;

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

    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 5px;
      height: 36px;
      background-color: #ccc;
    }
  }

  .search-result-panel {
    background-color: #ffffff;
    margin-top: 2.5rem;
    min-height: 20vh;
    padding: 15px 20px;

    .search-input-container {
      padding: 0 5px;
      position: relative;
    }
    .search-result-count {
      margin-top: 15px;
      font-weight: bold;
      font-size: 20px;

      .emoticon {
        color: #e8be40;
      }
    }

    li.page-item {
      margin-left: 10px;
      margin-right: 10px;
    }
  }

</style>
