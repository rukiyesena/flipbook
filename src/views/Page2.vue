<template>
<div>
	<h4 >{{serkan}}</h4>
	<div v-for="(col) in veriler" :key="col.stokId">{{col.adSoyad}}</div>
<button @click="kullanciVerileri()">veri getir</button>
	</div>
</template>

<script>


export default {
data () {
	return {
		serkan:"Serkan Geldi",
		veriler:[]
			}	
		},
		
methods:	{
			kullanciVerileri: function() {
				var vm = this
			
				const soap = require('soap')
				const url = 'http://localhost:44353/webServis/genelServis.asmx?WSDL'
				const args = {userName: 'serkan',password:'112233'}
				soap.createClient(url, function(err, client){
				client.kullaniciGiris(args, function(err, result){
				vm.veriler=JSON.parse(result.kullaniciGirisResult)
				//console.log(vm.veriler)
				});
				});
				}
			}
}
</script>
