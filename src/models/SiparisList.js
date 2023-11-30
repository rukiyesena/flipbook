import { Model, Collection } from 'vue-mc'

class Siparis extends Model {

	defaults() {
		return {
			id: null,
			page: "0",
			count: "0",
			program: "",
			orderNumber: '',
			shipId: "",
			shipFirstName: "",
			shipLastName: "",
			shipAddress1: "",
			shipAddress2: "",
			shipCity: "",
			shipCitycode: 0,
			shipDistrict: "",
			shipDistrictId: "",
			shipPostalCode: "",
			shipCountryCode: "",
			shipFullAddress: "",
			shipFullName: "",
			grossAmount: 0.0,
			totalDiscount: 0.0,
			taxNumber: "",
			invoiceId: "",
			invoiceFirstName: "",
			invoiceLastName: "",
			invoiceCompany: "",
			invoiceAddress1: "",
			invoiceAddress2: "",
			invoiceCity: "",
			invoiceCitycode: "",
			invoiceDistrict: "",
			invoiceDistrictId: "",
			invoicePostalCode: "",
			invoiceCountryCode: "",
			invoiceFullAddress: "",
			invoiceFullName: "",
			customerFirstName: "",
			customerEmail: "",
			customerId: "",
			customerLastName: "",
			cargoProviderName: "",
			quantity: 0,
			productId: "",
			merchantSku: "",
			productName: "",
			productCode: "",
			merchantId: "",
			salesCampaignId: "",
			productSize: "",
			orderDate: "",
			siparisTarihi: "",
			lineId: "",
			amount: 0.0,
			discount: 0.0,
			productCurrencyCode: "",
			productColor: "",
			sku: "",
			vatBaseAmount: "",
			barcode: "",
			orderLineItemStatusName: "",
			price: 0.0,
			tcIdentityNumber: "",
			currencyCode: "",
			shipmentPackageStatus: "",
			deliveryType: "",
			totalPrice: 0.0,
			banka: "",
			taxOffice: "",
			telefon: "",
			cargoTrackingNumber: "",
			siparisNotu: "",
			kargoTutar: 0.0,
			kapidaOdemeTutar: 0.0,
			kirediKartiKomisyonTutar: 0.0,
			odemeTipi: "",
			siparisKaynagi: "",
		}
	}

	// Attribute mutations.
	mutations() {
		return {
			id: (id) => Number(id) || null,
			orderNumber: String,
			page: String,
			count: String,
			program: String, 
			shipId: String,
			shipFirstName: String,
			shipLastName: String,
			shipAddress1: String,
			shipAddress2: String,
			shipCity: String,
			shipCitycode: Number,
			shipDistrict: String,
			shipDistrictId: String,
			shipPostalCode: String,
			shipCountryCode: String,
			shipFullAddress: String,
			shipFullName: String,
			grossAmount: Number,
			totalDiscount: Number,
			taxNumber: String,
			invoiceId: String,
			invoiceFirstName: String,
			invoiceLastName: String,
			invoiceCompany: String,
			invoiceAddress1: String,
			invoiceAddress2: String,
			invoiceCity: String,
			invoiceCitycode: String,
			invoiceDistrict: String,
			invoiceDistrictId: String,
			invoicePostalCode: String,
			invoiceCountryCode: String,
			invoiceFullAddress: String,
			invoiceFullName: String,
			customerFirstName: String,
			customerEmail: String,
			customerId: String,
			customerLastName: String,
			cargoProviderName: String,
			quantity: Number,
			productId: String,
			merchantSku: String,
			productName: String,
			productCode: String,
			merchantId: String,
			salesCampaignId: String,
			productSize: String,
			orderDate: String,
			siparisTarihi: String,
			lineId: String,
			amount: Number,
			discount: Number,
			productCurrencyCode: String,
			productColor: String,
			sku: String,
			vatBaseAmount: String,
			barcode: String,
			orderLineItemStatusName: String,
			price: Number,
			tcIdentityNumber: String,
			currencyCode: String,
			shipmentPackageStatus: String,
			deliveryType: String,
			totalPrice: Number,
			banka: String,
			taxOffice: String,
			telefon: String,
			cargoTrackingNumber: String,
			siparisNotu: String,
			kargoTutar: Number,
			kapidaOdemeTutar: Number,
			kirediKartiKomisyonTutar: Number,
			odemeTipi: String,
			siparisKaynagi: String,
		}
	}

	// Attribute validation
	validation() {
		return {
			id: integer.and(min(1)).or(equal(null)),
			orderNumber: string.and(required),
			program:  string.and(required),
		}
	}

	// Route configuration
	routes() {
		return {
			fetch: '/task/{id}',
			save: '/task',
		}
	}
}

/**
 * Siparis collection
 */
class SiparisList extends Collection {

	model() {
		return Siparis;
	}

	// Default attributes
	defaults() {
		return {
			orderBy: 'orderNumber',
		}
	}

	// Route configuration
	routes() {
		return {
			fetch: '/tasks',
		}
	}

	// Number of tasks to be completed.
	get todo() {
		return this.sum('done');
	}

	// Will be `true` if all tasks have been completed.
	get done() {
		return this.todo == 0;
	}
}

export { SiparisList, Siparis };