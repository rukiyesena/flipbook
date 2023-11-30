<template>
    <div>
      
      <label for="" class="vs-input--label">Cari Listesi</label>
              <vue-simple-suggest
    pattern="\w+"
    label="First Name"
    v-model="model"
    :list="getList"
    :max-suggestions="10"
    :min-length="3"
    :debounce="200"
    :filter-by-query="false"
    :prevent-submit="true"
    :controls="{
      selectionUp: [38, 33],
      selectionDown: [40, 34],
      select: [13, 36],
      hideList: [27, 35]
    }"
    :mode="mode"
    :nullable-select="true"
    ref="suggestComponent"
    label-placeholder="Search information..."
    value-attribute="id"
    display-attribute="text"
    @select="onSuggestSelect">
     <div class="g">
      <input type="text">
    </div>

    <template slot="misc-item-above" slot-scope="{ suggestions, query }">
      <div class="misc-item">
        <span>Aranan '{{ query }}'.</span>
      </div>

      <template v-if="suggestions.length > 0">
        <div class="misc-item">
          <span>{{ suggestions.length }} kayıt bulundu...</span>
        </div>
        <hr>
      </template>

      <div class="misc-item" v-else-if="!loading">
        <span>Kayıt Yok</span>
      </div>
    </template>

    <div slot="suggestion-item" slot-scope="scope" :title="scope.suggestion.description">
      <div class="text">
        <span v-html="boldenSuggestion(scope)"></span>
      </div>
    </div>

    <div class="misc-item" slot="misc-item-below" slot-scope="{ suggestions  }" v-if="loading">
      <span>Loading...</span>
    </div>
  </vue-simple-suggest>

           
    </div>

     
</template>

<script>
import VueSimpleSuggest from 'vue-simple-suggest'
import 'vue-simple-suggest/dist/styles.css'

import Prism from 'vue-prism-component'

export default {
  name: 'Autocomplete',
  data () {
    return {
      chosen: '',
      selected: null,
      model: null,
      mode: 'input',
      loading: false,
      log: []
    }
  },
  methods: {
    simpleSuggestionList () {
      return [
        'Vue.js'
      ]
    },
    onSuggestSelect (suggest) {
      this.selected = suggest
    },
    boldenSuggestion (scope) {
      if (!scope) return scope
      const { suggestion, query } = scope
      const result = this.$refs.suggestComponent.displayProperty(suggestion)
      if (!query) return result
      const texts = query.split(/[\s-_/\\|.]/gm).filter(t => !!t) || ['']
      return result.replace(new RegExp(`(.*?)(${  texts.join('|')  })(.*?)`, 'gi'), '$1<b>$2</b>$3')
    },
    getList (inputValue) {
      return new Promise((resolve) => {
       const soap = require('soap')
      const url = this.$store.state.serviceAddress
      const args = {baslik: 'CariKartlar',aranan:inputValue}
      soap.createClient(url, function(err, client){
      client.standarSorgular(args, function(err, result){
      const veriler=JSON.parse(result.standarSorgularResult)
          const results = []
            veriler.forEach(function(object,i) {
               results.push({
                    id: i + 1
                  })
              results[i]['text']=object.cariAdi
              results[i]['kod']=object.cariKod
             
            });
          resolve(results)
      });
      });


    
      
      })
    }
  },
  components: {
    VueSimpleSuggest,
    Prism
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/vuexy/extraComponents/autocomplete.scss";
</style>
