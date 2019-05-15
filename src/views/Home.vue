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
          <b-row>
            <b-col>
              <div class="search-input-container">
                <search-input @search-keyword="onEmitSearchKeyword"></search-input>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p>500 repository results</p>
            </b-col>  
          </b-row>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import SearchInput from '@/components/SearchInput.vue'

export default {
  name: 'home',
  components: {
    'search-input': SearchInput
  },
  data() {
    return {
      searchKeyword: ''
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

    .search-input-container {
      padding: 15px 20px;
      position: relative;
    }
  }

</style>
