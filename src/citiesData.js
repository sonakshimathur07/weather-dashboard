const citiesData = [
	{
		"cityName": "Delhi NCR ",
		"localityName": "Faridabad Sector 41-50",
		"localityId": "ZWL008752",
		"latitude": 28.460895,
		"longitude": 77.304764,
		"device_type": " 1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR ",
		"localityName": "Sector 26 (Noida)",
		"localityId": "ZWL005243 ",
		"latitude": 28.574404,
		"longitude": 77.334178,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Kolkata ",
		"localityName": "Bhowanipore ",
		"localityId": "ZWL006750 ",
		"latitude": 22.526436,
		"longitude": 88.343904,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Mumbai ",
		"localityName": "Borivali West ",
		"localityId": "ZWL001089 ",
		"latitude": 19.229714,
		"longitude": 72.839710,
		"device_type": " 1 - Automated weather system"
	},
	{
		"cityName": "Bengaluru ",
		"localityName": "JP Nagar",
		"localityId": "ZWL005530 ",
		"latitude": 12.893441,
		"longitude": 77.560436,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Hyderabad ",
		"localityName": "Nagole",
		"localityId": "ZWL003370",
		"latitude": 17.359969,
		"longitude": 78.565724,
		"device_type": "1 - Automated weather system"
	},

	{
		"cityName": "Delhi NCR",
		"localityName": "Sarita Vihar",
		"localityId": "ZWL005764",
		"latitude": 28.531759,
		"longitude": 77.293973,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Faridabad Sector 41-50",
		"localityId": "ZWL008752",
		"latitude": 28.460895,
		"longitude": 77.304764,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "New Friends Colony",
		"localityId": "ZWL005996",
		"latitude": 28.565268,
		"longitude": 77.274971,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 26 (Noida)",
		"localityId": "ZWL005243",
		"latitude": 28.574404,
		"longitude": 77.334178,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "New Industrial Town",
		"localityId": "ZWL009032",
		"latitude": 28.375702,
		"longitude": 77.299442,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Tilak Nagar",
		"localityId": "ZWL005428",
		"latitude": 28.641372,
		"longitude": 77.094689,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 10, Gurgaon",
		"localityId": "ZWL001073",
		"latitude": 28.436077,
		"longitude": 76.996757,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Ashok Vihar, Delhi",
		"localityId": "ZWL001319",
		"latitude": 28.684453,
		"longitude": 77.174418,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Kalkaji",
		"localityId": "ZWL004800",
		"latitude": 28.529029,
		"longitude": 77.258939,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 53",
		"localityId": "ZWL003118",
		"latitude": 28.442743,
		"longitude": 77.104379,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 49",
		"localityId": "ZWL002091",
		"latitude": 28.408012,
		"longitude": 77.050064,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Vasundhara",
		"localityId": "ZWL002662",
		"latitude": 28.665225,
		"longitude": 77.366782,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Rajinder Nagar",
		"localityId": "ZWL001404",
		"latitude": 28.640732,
		"longitude": 77.182900,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Safdarjung Enclave",
		"localityId": "ZWL008963",
		"latitude": 28.562608,
		"longitude": 77.191457,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Connaught Place",
		"localityId": "ZWL006538",
		"latitude": 28.630630,
		"longitude": 77.220640,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 66",
		"localityId": "ZWL003075",
		"latitude": 28.380856,
		"longitude": 77.062751,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 57",
		"localityId": "ZWL003721",
		"latitude": 28.422100,
		"longitude": 77.082740,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Moti Bagh, Delhi",
		"localityId": "ZWL006396",
		"latitude": 28.575774,
		"longitude": 77.180697,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Patel Nagar, Delhi",
		"localityId": "ZWL004535",
		"latitude": 28.652848,
		"longitude": 77.167909,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Greater Noida",
		"localityId": "ZWL008554",
		"latitude": 28.456171,
		"longitude": 77.521577,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Karkardooma, Delhi",
		"localityId": "ZWL004533",
		"latitude": 28.656829,
		"longitude": 77.310553,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Tigaon",
		"localityId": "ZWL002179",
		"latitude": 28.417120,
		"longitude": 77.412569,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 50 (Noida)",
		"localityId": "ZWL007487",
		"latitude": 28.569103,
		"longitude": 77.364876,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Vasant Kunj, Delhi",
		"localityId": "ZWL007120",
		"latitude": 28.524633,
		"longitude": 77.151206,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Dwarka, Delhi",
		"localityId": "ZWL007486",
		"latitude": 28.594467,
		"longitude": 77.047747,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 15",
		"localityId": "ZWL006287",
		"latitude": 28.457927,
		"longitude": 77.034816,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Mayur Vihar Phase III",
		"localityId": "ZWL002146",
		"latitude": 28.606000,
		"longitude": 77.323675,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Crossing Republik",
		"localityId": "ZWL008405",
		"latitude": 28.635043,
		"longitude": 77.419056,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 28",
		"localityId": "ZWL004455",
		"latitude": 28.473457,
		"longitude": 77.087532,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Palam Vihar, Gurgaon",
		"localityId": "ZWL005087",
		"latitude": 28.508782,
		"longitude": 77.033506,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 63 (Noida)",
		"localityId": "ZWL009648",
		"latitude": 28.621672,
		"longitude": 77.386474,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Raj Nagar, Ghaziabad",
		"localityId": "ZWL008317",
		"latitude": 28.689174,
		"longitude": 77.428976,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 128",
		"localityId": "ZWL005878",
		"latitude": 28.526706,
		"longitude": 77.354868,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 56, Gurgaon",
		"localityId": "ZWL003241",
		"latitude": 28.418235,
		"longitude": 77.101860,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Indirapuram",
		"localityId": "ZWL007224",
		"latitude": 28.644059,
		"longitude": 77.373883,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Malviya Nagar",
		"localityId": "ZWL009834",
		"latitude": 28.536048,
		"longitude": 77.213453,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 43, Gurgaon",
		"localityId": "ZWL007284",
		"latitude": 28.454416,
		"longitude": 77.088820,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 120 (Noida)",
		"localityId": "ZWL006738",
		"latitude": 28.586854,
		"longitude": 77.390832,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Saket",
		"localityId": "ZWL007329",
		"latitude": 28.523171,
		"longitude": 77.207543,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 18 (Noida)",
		"localityId": "ZWL001752",
		"latitude": 28.568937,
		"longitude": 77.324414,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Naraina",
		"localityId": "ZWL007594",
		"latitude": 28.627479,
		"longitude": 77.142115,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Patparganj",
		"localityId": "ZWL006116",
		"latitude": 28.632961,
		"longitude": 77.308344,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Ghitorni",
		"localityId": "ZWL009925",
		"latitude": 28.486412,
		"longitude": 77.125366,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Faridabad Sector 1-11",
		"localityId": "ZWL009335",
		"latitude": 28.365131,
		"longitude": 77.326157,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 24",
		"localityId": "ZWL009638",
		"latitude": 28.497419,
		"longitude": 77.090980,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Rajouri Garden",
		"localityId": "ZWL005670",
		"latitude": 28.646438,
		"longitude": 77.122357,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Vishnu Garden",
		"localityId": "ZWL003757",
		"latitude": 28.646933,
		"longitude": 77.095064,
		"device_type": "1 - Automated weather system"
	},

	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 48, Gurgaon",
		"localityId": "ZWL003610",
		"latitude": 28.416008,
		"longitude": 77.032164,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Kirti Nagar",
		"localityId": "ZWL005971",
		"latitude": 28.654433,
		"longitude": 77.142367,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Faridabad Sector 81-89",
		"localityId": "ZWL003626",
		"latitude": 28.397247,
		"longitude": 77.345569,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "GK I",
		"localityId": "ZWL005876",
		"latitude": 28.550911,
		"longitude": 77.235272,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Mohan Estate",
		"localityId": "ZWL006295",
		"latitude": 28.494788,
		"longitude": 77.312727,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Mukherjee Nagar",
		"localityId": "ZWL007653",
		"latitude": 28.702971,
		"longitude": 77.209740,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Mehrauli",
		"localityId": "ZWL006697",
		"latitude": 28.524426,
		"longitude": 77.183996,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Burari",
		"localityId": "ZWL003259",
		"latitude": 28.753669,
		"longitude": 77.191037,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Gaur city, Ghaziabad",
		"localityId": "ZWL004759",
		"latitude": 28.607703,
		"longitude": 77.434385,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "GK II",
		"localityId": "ZWL004477",
		"latitude": 28.533936,
		"longitude": 77.243800,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Rohini",
		"localityId": "ZWL005077",
		"latitude": 28.723712,
		"longitude": 77.104596,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Rangpuri",
		"localityId": "ZWL008191",
		"latitude": 28.533976,
		"longitude": 77.119516,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 46",
		"localityId": "ZWL006092",
		"latitude": 28.438586,
		"longitude": 77.060773,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 62 (Noida)",
		"localityId": "ZWL001549",
		"latitude": 28.611088,
		"longitude": 77.369652,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Shalimar Bagh",
		"localityId": "ZWL001036",
		"latitude": 28.720312,
		"longitude": 77.164849,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Model Town",
		"localityId": "ZWL006996",
		"latitude": 28.717232,
		"longitude": 77.194643,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Faridabad Sector 16-20",
		"localityId": "ZWL007566",
		"latitude": 28.422437,
		"longitude": 77.310113,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 2 (Noida)",
		"localityId": "ZWL009852",
		"latitude": 28.581459,
		"longitude": 77.316720,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Govindpuram",
		"localityId": "ZWL008648",
		"latitude": 28.689317,
		"longitude": 77.486930,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Gwal Pahari",
		"localityId": "ZWL009728",
		"latitude": 28.435122,
		"longitude": 77.136308,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Nehru Nagar",
		"localityId": "ZWL006868",
		"latitude": 28.653441,
		"longitude": 77.449969,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Chittaranjan Park",
		"localityId": "ZWL002067",
		"latitude": 28.537530,
		"longitude": 77.249070,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "IMT Manesar",
		"localityId": "ZWL008791",
		"latitude": 28.384492,
		"longitude": 76.941950,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 73 Z Kitchen",
		"localityId": "ZWL003043",
		"latitude": 28.580105,
		"longitude": 77.385436,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 51",
		"localityId": "ZWL004159",
		"latitude": 28.430042,
		"longitude": 77.065213,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Ballabhgarh",
		"localityId": "ZWL005960",
		"latitude": 28.343049,
		"longitude": 77.330317,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Nangloi",
		"localityId": "ZWL009293",
		"latitude": 28.659524,
		"longitude": 77.060800,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Uttam Nagar",
		"localityId": "ZWL001663",
		"latitude": 28.616774,
		"longitude": 77.057136,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 47",
		"localityId": "ZWL005762",
		"latitude": 28.424524,
		"longitude": 77.050065,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Paharganj",
		"localityId": "ZWL005345",
		"latitude": 28.645112,
		"longitude": 77.212824,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 25",
		"localityId": "ZWL008225",
		"latitude": 28.484268,
		"longitude": 77.084693,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Pitampura",
		"localityId": "ZWL001933",
		"latitude": 28.688724,
		"longitude": 77.138225,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Shahdara",
		"localityId": "ZWL003591",
		"latitude": 28.688657,
		"longitude": 77.278267,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 31",
		"localityId": "ZWL007061",
		"latitude": 28.442946,
		"longitude": 77.057195,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 23",
		"localityId": "ZWL008476",
		"latitude": 28.509080,
		"longitude": 77.057138,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 12 (Noida)",
		"localityId": "ZWL009008",
		"latitude": 28.599952,
		"longitude": 77.343188,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Mayur Vihar Phase II",
		"localityId": "ZWL005323",
		"latitude": 28.613695,
		"longitude": 77.302775,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Faridabad Sector 12-15",
		"localityId": "ZWL001412",
		"latitude": 28.394334,
		"longitude": 77.324016,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "DLF PHASE 1 (SECTOR 26)",
		"localityId": "ZWL005925",
		"latitude": 28.477910,
		"longitude": 77.103843,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Laxmi Nagar",
		"localityId": "ZWL008716",
		"latitude": 28.627366,
		"longitude": 77.279200,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Karol Bagh",
		"localityId": "ZWL009339",
		"latitude": 28.647924,
		"longitude": 77.190463,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Chhatarpur",
		"localityId": "ZWL009096",
		"latitude": 28.497203,
		"longitude": 77.171629,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Paschim Vihar",
		"localityId": "ZWL006720",
		"latitude": 28.665591,
		"longitude": 77.098478,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 1, Noida",
		"localityId": "ZWL002908",
		"latitude": 28.573663,
		"longitude": 77.415427,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "South Extension I",
		"localityId": "ZWL001186",
		"latitude": 28.578498,
		"longitude": 77.223627,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Sector 18",
		"localityId": "ZWL004789",
		"latitude": 28.495291,
		"longitude": 77.069729,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Delhi NCR",
		"localityName": "Kamla Nagar",
		"localityId": "ZWL008978",
		"latitude": 28.676018,
		"longitude": 77.208446,
		"device_type": "1 - Automated weather system"
	},

	{
		"cityName": "Kolkata",
		"localityName": "Bhowanipore",
		"localityId": "ZWL006750",
		"latitude": 22.526436,
		"longitude": 88.343904,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Kolkata",
		"localityName": "Elgin",
		"localityId": "ZWL008828",
		"latitude": 22.543063,
		"longitude": 88.356096,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Kolkata",
		"localityName": "Howrah",
		"localityId": "ZWL008426",
		"latitude": 22.604678,
		"longitude": 88.342218,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Kolkata",
		"localityName": "New Alipore",
		"localityId": "ZWL007323",
		"latitude": 22.506135,
		"longitude": 88.332770,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Kolkata",
		"localityName": "Barasat",
		"localityId": "ZWL006266",
		"latitude": 22.735727,
		"longitude": 88.490498,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Kolkata",
		"localityName": "New Town (Kolkata)",
		"localityId": "ZWL008393",
		"latitude": 22.588818,
		"longitude": 88.457964,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Kolkata",
		"localityName": "Uttarpara",
		"localityId": "ZWL007966",
		"latitude": 22.692420,
		"longitude": 88.342900,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Kolkata",
		"localityName": "Santoshpur",
		"localityId": "ZWL001039",
		"latitude": 22.502107,
		"longitude": 88.388897,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Kolkata",
		"localityName": "Liluah",
		"localityId": "ZWL003882",
		"latitude": 22.635342,
		"longitude": 88.343314,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Kolkata",
		"localityName": "Rajarhat",
		"localityId": "ZWL004925",
		"latitude": 22.621505,
		"longitude": 88.446915,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Kolkata",
		"localityName": "Park Street area",
		"localityId": "ZWL005244",
		"latitude": 22.552632,
		"longitude": 88.362888,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Kolkata",
		"localityName": "Baghajatin Colony",
		"localityId": "ZWL003687",
		"latitude": 22.481243,
		"longitude": 88.374932,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Kolkata",
		"localityName": "Shrirampur",
		"localityId": "ZWL008120",
		"latitude": 22.735733,
		"longitude": 88.344597,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Kolkata",
		"localityName": "Chhota Jagulia",
		"localityId": "ZWL007514",
		"latitude": 22.759573,
		"longitude": 88.747215,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Kolkata",
		"localityName": "Dum Dum",
		"localityId": "ZWL003935",
		"latitude": 22.656310,
		"longitude": 88.423694,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Kolkata",
		"localityName": "Kestopur",
		"localityId": "ZWL002931",
		"latitude": 22.597524,
		"longitude": 88.431114,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Kolkata",
		"localityName": "Sodepur",
		"localityId": "ZWL006521",
		"latitude": 22.701254,
		"longitude": 88.383329,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Kolkata",
		"localityName": "Nimta",
		"localityId": "ZWL005558",
		"latitude": 22.670256,
		"longitude": 88.413503,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Kolkata",
		"localityName": "Shapoorji",
		"localityId": "ZWL005174",
		"latitude": 22.567623,
		"longitude": 88.497427,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Mumbai",
		"localityName": "Badlapur, Mumbai",
		"localityId": "ZWL001274",
		"latitude": 19.174156,
		"longitude": 73.225767,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Mumbai",
		"localityName": "Ambernath",
		"localityId": "ZWL007699",
		"latitude": 19.199776,
		"longitude": 73.181176,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Mumbai",
		"localityName": "Marine lines",
		"localityId": "ZWL001764",
		"latitude": 18.952178,
		"longitude": 72.825198,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Mumbai",
		"localityName": "Mulund West",
		"localityId": "ZWL002921",
		"latitude": 19.170765,
		"longitude": 72.942239,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Mumbai",
		"localityName": "Airoli",
		"localityId": "ZWL001410",
		"latitude": 19.170339,
		"longitude": 72.995114,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Mumbai",
		"localityName": "Kharghar (Navi Mumbai)",
		"localityId": "ZWL009757",
		"latitude": 19.069735,
		"longitude": 73.055883,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Mumbai",
		"localityName": "Ulhasnagar (Mumbai)",
		"localityId": "ZWL002059",
		"latitude": 19.224136,
		"longitude": 73.169340,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Mumbai",
		"localityName": "Ghatkopar West, Mumbai",
		"localityId": "ZWL001058",
		"latitude": 19.096740,
		"longitude": 72.904562,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Mumbai",
		"localityName": "Bandra West",
		"localityId": "ZWL006995",
		"latitude": 19.068857,
		"longitude": 72.833000,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Mumbai",
		"localityName": "Dadar West",
		"localityId": "ZWL004692",
		"latitude": 19.021199,
		"longitude": 72.835378,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Mumbai",
		"localityName": "Andheri West",
		"localityId": "ZWL007667",
		"latitude": 19.137106,
		"longitude": 72.834828,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Mumbai",
		"localityName": "Vile Parle West",
		"localityId": "ZWL009338",
		"latitude": 19.109560,
		"longitude": 72.832194,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Mumbai",
		"localityName": "Byculla",
		"localityId": "ZWL009167",
		"latitude": 18.974283,
		"longitude": 72.833712,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Mumbai",
		"localityName": "Vasai",
		"localityId": "ZWL006032",
		"latitude": 19.364358,
		"longitude": 72.836612,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Mumbai",
		"localityName": "Kalyan,East (Mumbai)",
		"localityId": "ZWL007397",
		"latitude": 19.221503,
		"longitude": 73.138111,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Mumbai",
		"localityName": "Ulwe, Mumbai",
		"localityId": "ZWL009360",
		"latitude": 18.974217,
		"longitude": 73.024914,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Mumbai",
		"localityName": "Fort",
		"localityId": "ZWL002205",
		"latitude": 18.940613,
		"longitude": 72.834235,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Bengaluru",
		"localityName": "JP Nagar",
		"localityId": "ZWL005530",
		"latitude": 12.893441,
		"longitude": 77.560436,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Bengaluru",
		"localityName": "Mahadevapura",
		"localityId": "ZWL007643",
		"latitude": 12.985322,
		"longitude": 77.687578,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Bengaluru",
		"localityName": "Jalahalli",
		"localityId": "ZWL003159",
		"latitude": 13.031518,
		"longitude": 77.530986,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Bengaluru",
		"localityName": "RT Nagar",
		"localityId": "ZWL002736",
		"latitude": 13.021267,
		"longitude": 77.601234,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Bengaluru",
		"localityName": "KR Puram",
		"localityId": "ZWL006369",
		"latitude": 13.016987,
		"longitude": 77.706819,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Bengaluru",
		"localityName": "Electronic City",
		"localityId": "ZWL006274",
		"latitude": 12.833101,
		"longitude": 77.673182,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Bengaluru",
		"localityName": "Vijayanagar",
		"localityId": "ZWL005375",
		"latitude": 12.973219,
		"longitude": 77.519303,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Bengaluru",
		"localityName": "Marathahalli",
		"localityId": "ZWL008600",
		"latitude": 12.955103,
		"longitude": 77.696507,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Bengaluru",
		"localityName": "Sarjapur road",
		"localityId": "ZWL002292",
		"latitude": 12.900225,
		"longitude": 77.697451,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Bengaluru",
		"localityName": "Brookefields",
		"localityId": "ZWL004341",
		"latitude": 12.967420,
		"longitude": 77.717851,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Bengaluru",
		"localityName": "Whitefield",
		"localityId": "ZWL007633",
		"latitude": 12.975224,
		"longitude": 77.740422,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Bengaluru",
		"localityName": "Nagavara",
		"localityId": "ZWL009212",
		"latitude": 13.048370,
		"longitude": 77.625534,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Pune",
		"localityName": "NIGDI(Pune)",
		"localityId": "ZWL007698",
		"latitude": 18.646511,
		"longitude": 73.775411,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Pune",
		"localityName": "Bibvewadi (Pune)",
		"localityId": "ZWL005773",
		"latitude": 18.492332,
		"longitude": 73.861939,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Pune",
		"localityName": "Nanded-Nahre",
		"localityId": "ZWL009577",
		"latitude": 18.453179,
		"longitude": 73.811077,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Pune",
		"localityName": "Bhosari (Pune)",
		"localityId": "ZWL002253",
		"latitude": 18.643893,
		"longitude": 73.858653,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Pune",
		"localityName": "Camp Area",
		"localityId": "ZWL003498",
		"latitude": 18.513693,
		"longitude": 73.877293,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Pune",
		"localityName": "Magarpatta",
		"localityId": "ZWL004311",
		"latitude": 18.519482,
		"longitude": 73.934360,
		"device_type": "1 - Automated weather system"
	},

	{
		"cityName": "Hyderabad",
		"localityName": "Nagole",
		"localityId": "ZWL003370",
		"latitude": 17.359969,
		"longitude": 78.565724,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Hyderabad",
		"localityName": "Attapur",
		"localityId": "ZWL002088",
		"latitude": 17.380875,
		"longitude": 78.415717,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Hyderabad",
		"localityName": "Peerzadiguda",
		"localityId": "ZWL006702",
		"latitude": 17.411644,
		"longitude": 78.578220,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Chennai",
		"localityName": "Potheri",
		"localityId": "ZWL006789",
		"latitude": 12.799983,
		"longitude": 80.029865,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Chennai",
		"localityName": "Pallavaram",
		"localityId": "ZWL004297",
		"latitude": 12.973055,
		"longitude": 80.151271,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Chennai",
		"localityName": "Nungambakkam",
		"localityId": "ZWL005190",
		"latitude": 13.060471,
		"longitude": 80.255887,
		"device_type": "1 - Automated weather system"
	},
	{
		"cityName": "Lucknow",
		"localityName": "Hazratganj",
		"localityId": "ZWL003425",
		"latitude": 26.844819,
		"longitude": 80.940833,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Lucknow",
		"localityName": "Aminabad",
		"localityId": "ZWL006490",
		"latitude": 26.856770,
		"longitude": 80.925103,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Lucknow",
		"localityName": "Chowk",
		"localityId": "ZWL009091",
		"latitude": 26.873686,
		"longitude": 80.894502,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Kochi",
		"localityName": "Kakkanad",
		"localityId": "ZWL005555",
		"latitude": 10.014153,
		"longitude": 76.358626,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Kochi",
		"localityName": "Nedumbassery, Kochi",
		"localityId": "ZWL002986",
		"latitude": 10.178008,
		"longitude": 76.386636,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Kochi",
		"localityName": "North Paravur, Kochi",
		"localityId": "ZWL004273",
		"latitude": 10.162441,
		"longitude": 76.216317,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Jaipur",
		"localityName": "Mansarovar-2",
		"localityId": "ZWL005082",
		"latitude": 26.844258,
		"longitude": 75.768570,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Jaipur",
		"localityName": "Tonk road 2",
		"localityId": "ZWL003863",
		"latitude": 26.853567,
		"longitude": 75.794945,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Ahmedabad",
		"localityName": "Bodakdev",
		"localityId": "ZWL009990",
		"latitude": 23.055398,
		"longitude": 72.491724,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Ahmedabad",
		"localityName": "Gota",
		"localityId": "ZWL003455",
		"latitude": 23.131231,
		"longitude": 72.543606,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Chandigarh",
		"localityName": "Sector 15 (Chandigarh)",
		"localityId": "ZWL007561",
		"latitude": 30.764466,
		"longitude": 76.774815,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Chandigarh",
		"localityName": "Sector 8 (Chandigarh)",
		"localityId": "ZWL006687",
		"latitude": 30.749265,
		"longitude": 76.801584,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Goa",
		"localityName": "Porvorim, Goa",
		"localityId": "ZWL005568",
		"latitude": 15.535007,
		"longitude": 73.827229,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Ludhiana",
		"localityName": "Sector 32, Ludhiana",
		"localityId": "ZWL009021",
		"latitude": 30.895881,
		"longitude": 75.906050,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Guwahati",
		"localityName": "Zoo Tiniali - Christian basti",
		"localityId": "ZWL005708",
		"latitude": 26.177033,
		"longitude": 91.779799,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Amritsar",
		"localityName": "Himatpura, Amritsar",
		"localityId": "ZWL001780",
		"latitude": 31.608999,
		"longitude": 74.863051,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Bhopal",
		"localityName": "People's Mall, Bhopal",
		"localityId": "ZWL003417",
		"latitude": 23.293081,
		"longitude": 77.396385,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Visakhapatnam",
		"localityName": "NAD, Vizag",
		"localityId": "ZWL001466",
		"latitude": 17.749616,
		"longitude": 83.230677,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Trivandrum",
		"localityName": "Nemom, Thiruvananthapuram",
		"localityId": "ZWL002223",
		"latitude": 8.430376,
		"longitude": 77.027424,
		"device_type": "2 - Rain gauge system"
	},
	{
		"cityName": "Jammu",
		"localityName": "OLD JAMMU, Jammu",
		"localityId": "ZWL008047",
		"latitude": 32.727614,
		"longitude": 74.856395,
		"device_type": "2 - Rain gauge system"
	}
]









export default citiesData;