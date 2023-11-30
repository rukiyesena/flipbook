<template>
    <div>
      
      <label for="" class="vs-input--label">Stok Listesi</label>
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
      select: [36],
      hideList: [27, 35,13],
    }"
    :mode="mode"
    :nullable-select="false"
    ref="suggestComponent"
    label-placeholder="Search information..."
    value-attribute="id"
    display-attribute="text"
    @select="onSuggestSelect">
     <div class="g">
      <input type="text" v-model="secili" @keyup.enter="hizliStokAra">
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

    <div class="misc-item" slot="misc-item-below" slot-scope="" v-if="loading">
      <span>Aranıyor...</span>
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
      loading: true,
      log: [],
      secili:''
    }
  },
  methods: {
    simpleSuggestionList () {
      return [
        'Vue.js'
      ]
    },
    hizliStokAra() {
            this.$refs.suggestComponent.clearSuggestions()
            const vm=this
            const soap = require('soap')
            const url = this.$store.state.serviceAddress
            const args = {baslik: 'StokKartlar',aranan:this.model}
            soap.createClient(url, function(err, client){
              client.standarSorgular(args, function(err, result){
              const veriler=JSON.parse(result.standarSorgularResult)
              const results1=[]
                  if (veriler.length>0) {
                    results1['id']=1
                    results1['stokId']=veriler[0].stokId
                    results1['text']=veriler[0].stokAdi
                    results1['stokKodu']=veriler[0].stokKodu
                    results1['sirao']=veriler[0].sirano
                    results1['bakiye']=veriler[0].bakiye
                    results1['satisFiyati']=veriler[0].satisfiyati
                    results1['sonAlis']=veriler[0].sonAlis
                    //console.log(results1)
                    vm.onSuggestSelect(results1)
                  }
              });
            });
          },
    onSuggestSelect (suggest) {
      //console.log(suggest)
    this.$emit('data',suggest)
    this.$refs.suggestComponent.clearSuggestions()
      this.chosen= '',
      this.selected= null,
      this.model= null,
      this.mode= 'input',
      this.loading= true,
      this.log= [],
      this.secili=''
    
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
      const args = {baslik: 'StokKartlar',aranan:inputValue}
      soap.createClient(url, function(err, client){
      client.standarSorgular(args, function(err, result){
      const veriler=JSON.parse(result.standarSorgularResult)
          const results = []
          if (veriler.length>0) {
            veriler.forEach(function(object,i) {
               results.push({
                    id: i + 1
                  })
              results[i]['stokId']=object.stokId
              results[i]['text']=object.stokAdi
              results[i]['stokKodu']=object.stokKodu
              results[i]['sirao']=object.sirano
              results[i]['bakiye']=object.bakiye
              results[i]['satisFiyati']=object.satisfiyati
              results[i]['sonAlis']=object.sonAlis
             
            });
          resolve(results)
          }
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
