<template>
  <div class="search-item">
    <b-row>
      <b-col md="8" sm="12">
        <div class="search-result-description">
          <a href="javascript:void(0)" @click="onClickUrl(searchItemDetail.url)">{{ searchItemDetail.name }}</a>
          <p>{{ searchItemDetail.description }}</p>
          <p id="search-item-date">{{ searchItemDetail.updated | dateConvert }}</p>
        </div>
      </b-col>
      <b-col md="2" sm="6">
        <i><font-awesome-icon icon="circle"></font-awesome-icon></i>
        {{ searchItemDetail.language }}
      </b-col>
      <b-col md="2" sm="6">
        <i><font-awesome-icon icon="star"></font-awesome-icon></i>
        {{ searchItemDetail.starCount }}
      </b-col>
    </b-row>    
  </div>
</template>

<script>
/* eslint-disable */
import { dateConvert } from "@/filters/filters.js";

export default {
  name: 'SearchItem',
  props: {
    searchItemDetail: {
      type: Object,
      required: true
    }
  },
  data(){
    return {}
  },
  methods: {
    /**
     * @param {string} url repo to url
     * 
     * @description function call to open new tab for repo url
     */
    onClickUrl(url){
      window.open(url,"_blank");
    }
  },
  filters: {
    dateConvert: dateConvert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .search-item {
    border-top: 1px solid #ccc;
    padding: 10px 0px;
    font-size: 14px;

    .search-result-description {
      a {
        font-weight: bold;
        font-size: 20px;
      }
      
      p:last-child {
        font-size: 12px;
        color: #a9a1a1;
      }
    }
  }
</style>
