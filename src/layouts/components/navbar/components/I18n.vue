<template>
	<vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
		<span class="cursor-pointer flex items-center i18n-locale">
			<img class="h-4 w-5" :src="i18n_locale_img"   />
			<span class="hidden sm:block ml-2">{{ getCurrentLocaleData.lang }}</span>
		</span>
		<vs-dropdown-menu class="w-48 i18n-dropdown vx-navbar-dropdown">
			<vs-dropdown-item @click="updateLocale('en')"><img class="h-4 w-5 mr-1"
					src="https://katalog.uzum.com.tr/img/flags/en.png" alt="en" /> &nbsp;English</vs-dropdown-item>
			<vs-dropdown-item @click="updateLocale('tr')"><img class="h-4 w-5 mr-1"
					src="https://katalog.uzum.com.tr/img/flags/tr.png" alt="tr" /> &nbsp;Türkçe</vs-dropdown-item>
			<!--		<vs-dropdown-item @click="updateLocale('fr')"><img class="h-4 w-5 mr-1" src="@/assets/images/flags/fr.png"
					alt="fr" /> &nbsp;Français</vs-dropdown-item>
			<vs-dropdown-item @click="updateLocale('de')"><img class="h-4 w-5 mr-1" src="@/assets/images/flags/de.png"
					alt="de" /> &nbsp;Deutsch</vs-dropdown-item>
			<vs-dropdown-item @click="updateLocale('pt')"><img class="h-4 w-5 mr-1" src="@/assets/images/flags/pt.png"
					alt="pt" /> &nbsp;Русский</vs-dropdown-item>-->

		</vs-dropdown-menu>
	</vs-dropdown>
</template>

<script>
export default {
	computed: {
		i18n_locale_img() {
			let locale = this.$i18n.locale 
			if (locale === 'en-US') locale = 'en'
			return `https://katalog.uzum.com.tr/img/flags/${locale}.png`
		},
		getCurrentLocaleData() {
			let locale = this.$i18n.locale 
			if (locale === 'en-US') locale = 'en'
			if (locale === 'en') return { flag: 'us', lang: 'English' }
			else if (locale === 'pt') return { flag: 'br', lang: 'Português' }
			else if (locale === 'tr') return { flag: 'tr', lang: 'Türkçe' }
			else if (locale === 'fr') return { flag: 'fr', lang: 'Français' }
			else if (locale === 'de') return { flag: 'de', lang: 'Deutsch' }
			else if (locale === 'ru') return { flag: 'ru', lang: 'Русский' }
			else if (locale === 'uz') return { flag: 'ru', lang: "o'zbek" }


		}
	},
	methods: {
		updateLocale(locale) {
			this.$i18n.locale = locale
		}
	}
}
</script>
