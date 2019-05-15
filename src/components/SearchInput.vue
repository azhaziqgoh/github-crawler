<template>
  <div>
    <div class="search-input">
      <i class="search-icon"><font-awesome-icon icon="search"></font-awesome-icon></i>
      <b-form-input placeholder="Search Github Repo" v-model="activeKeyword" @keypress="onKeyPress" @blur="onBlur"></b-form-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  data(){
    return {
      activeKeyword: '',
      savedKeyword: ''
    }
  },
  methods: {
    /**
     * @param {object} evt keypress event
     * 
     * @description catch keypress event and check if it is 'Enter', if 'Enter' emit activeKeyword value to parent container and saved active keyword
     * 
     */
    onKeyPress(evt){
      if(evt.keyCode === 13){
        if(this.$data.activeKeyword !== '') this.$data.savedKeyword = this.$data.activeKeyword;
        this.$emit('search-keyword',this.$data.activeKeyword);
      }
    },
    /**
     * @description if the active keyword not equal to save keyword, revert active keyword upon input blur
     * 
     */
    onBlur(){
       if(this.$data.activeKeyword !== this.$data.savedKeyword){
         this.$data.activeKeyword = this.$data.savedKeyword;
       } 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search-input {
  position: relative;
  width: 100%;

  input {
    padding: .375rem 2rem .375rem .75rem;
  }

  .search-icon {
    position: absolute;
    z-index: 1;
    right: 10px;
    top: 5px;
    color: #ccc;
  }
}
</style>
