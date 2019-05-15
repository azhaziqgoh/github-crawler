<template>
  <div class="search-item">
    <b-row>
      <b-col md="8" sm="12">
        <div class="search-result-description">
          <a href="javacript:void(0)">facebook/react</a>
          <p>A declarative, efficient, and flexible Javascript library for building user interfac asjkdasjkd akjsdhaksjdhjkasd askdjhasdjka asdjkahsdkjashdjk asjkhdakjsdsa kajsdhkjasdh es</p>
          <p>Updated on Tue Jul 03 2018</p>
        </div>
      </b-col>
      <b-col md="2" sm="6">
        <i><font-awesome-icon icon="circle"></font-awesome-icon></i>
        Javascript
      </b-col>
      <b-col md="2" sm="6">
        <i><font-awesome-icon icon="star"></font-awesome-icon></i>
        105262
      </b-col>
    </b-row>    
  </div>
</template>

<script>
export default {
  name: 'SearchItem',
  data(){
    return {}
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .search-item {
    border-top: 1px solid #ccc;
    padding: 10px 0px;
    

    .search-result-description {
      a {
        font-weight: bold;
        font-size: 20px;
      }

      p:first-child {
        font-size: 14px;
      }

      p:last-child {
        font-size: 12px;
        color: #a9a1a1;
      }
    }
  }
</style>
