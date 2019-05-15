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
          <p class="search-result-count">500 Search Results</p>
          <search-item></search-item>
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            align="center"
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

export default {
  name: 'home',
  components: {
    'search-input': SearchInput,
    'search-item': SearchItem
  },
  data() {
    return {
      searchKeyword: '',
      rows: 100,
      perPage: 10
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
      this.searchKeyword = val;
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
