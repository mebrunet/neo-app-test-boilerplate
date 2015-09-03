const timezones = [
    {
        displayName: "Africa/Abidjan",
        value: "Africa/Abidjan"
    },
    {
        displayName: "Africa/Accra",
        value: "Africa/Accra"
    },
    {
        displayName: "Africa/Addis_Ababa",
        value: "Africa/Addis_Ababa"
    },
    {
        displayName: "Africa/Algiers",
        value: "Africa/Algiers"
    },
    {
        displayName: "Africa/Asmara",
        value: "Africa/Asmara"
    },
    {
        displayName: "Africa/Asmera",
        value: "Africa/Asmera"
    },
    {
        displayName: "Africa/Bamako",
        value: "Africa/Bamako"
    },
    {
        displayName: "Africa/Bangui",
        value: "Africa/Bangui"
    },
    {
        displayName: "Africa/Banjul",
        value: "Africa/Banjul"
    },
    {
        displayName: "Africa/Bissau",
        value: "Africa/Bissau"
    },
    {
        displayName: "Africa/Blantyre",
        value: "Africa/Blantyre"
    },
    {
        displayName: "Africa/Brazzaville",
        value: "Africa/Brazzaville"
    },
    {
        displayName: "Africa/Bujumbura",
        value: "Africa/Bujumbura"
    },
    {
        displayName: "Africa/Cairo",
        value: "Africa/Cairo"
    },
    {
        displayName: "Africa/Casablanca",
        value: "Africa/Casablanca"
    },
    {
        displayName: "Africa/Ceuta",
        value: "Africa/Ceuta"
    },
    {
        displayName: "Africa/Conakry",
        value: "Africa/Conakry"
    },
    {
        displayName: "Africa/Dakar",
        value: "Africa/Dakar"
    },
    {
        displayName: "Africa/Dar_es_Salaam",
        value: "Africa/Dar_es_Salaam"
    },
    {
        displayName: "Africa/Djibouti",
        value: "Africa/Djibouti"
    },
    {
        displayName: "Africa/Douala",
        value: "Africa/Douala"
    },
    {
        displayName: "Africa/El_Aaiun",
        value: "Africa/El_Aaiun"
    },
    {
        displayName: "Africa/Freetown",
        value: "Africa/Freetown"
    },
    {
        displayName: "Africa/Gaborone",
        value: "Africa/Gaborone"
    },
    {
        displayName: "Africa/Harare",
        value: "Africa/Harare"
    },
    {
        displayName: "Africa/Johannesburg",
        value: "Africa/Johannesburg"
    },
    {
        displayName: "Africa/Juba",
        value: "Africa/Juba"
    },
    {
        displayName: "Africa/Kampala",
        value: "Africa/Kampala"
    },
    {
        displayName: "Africa/Khartoum",
        value: "Africa/Khartoum"
    },
    {
        displayName: "Africa/Kigali",
        value: "Africa/Kigali"
    },
    {
        displayName: "Africa/Kinshasa",
        value: "Africa/Kinshasa"
    },
    {
        displayName: "Africa/Lagos",
        value: "Africa/Lagos"
    },
    {
        displayName: "Africa/Libreville",
        value: "Africa/Libreville"
    },
    {
        displayName: "Africa/Lome",
        value: "Africa/Lome"
    },
    {
        displayName: "Africa/Luanda",
        value: "Africa/Luanda"
    },
    {
        displayName: "Africa/Lubumbashi",
        value: "Africa/Lubumbashi"
    },
    {
        displayName: "Africa/Lusaka",
        value: "Africa/Lusaka"
    },
    {
        displayName: "Africa/Malabo",
        value: "Africa/Malabo"
    },
    {
        displayName: "Africa/Maputo",
        value: "Africa/Maputo"
    },
    {
        displayName: "Africa/Maseru",
        value: "Africa/Maseru"
    },
    {
        displayName: "Africa/Mbabane",
        value: "Africa/Mbabane"
    },
    {
        displayName: "Africa/Mogadishu",
        value: "Africa/Mogadishu"
    },
    {
        displayName: "Africa/Monrovia",
        value: "Africa/Monrovia"
    },
    {
        displayName: "Africa/Nairobi",
        value: "Africa/Nairobi"
    },
    {
        displayName: "Africa/Ndjamena",
        value: "Africa/Ndjamena"
    },
    {
        displayName: "Africa/Niamey",
        value: "Africa/Niamey"
    },
    {
        displayName: "Africa/Nouakchott",
        value: "Africa/Nouakchott"
    },
    {
        displayName: "Africa/Ouagadougou",
        value: "Africa/Ouagadougou"
    },
    {
        displayName: "Africa/Porto-Novo",
        value: "Africa/Porto-Novo"
    },
    {
        displayName: "Africa/Sao_Tome",
        value: "Africa/Sao_Tome"
    },
    {
        displayName: "Africa/Timbuktu",
        value: "Africa/Timbuktu"
    },
    {
        displayName: "Africa/Tripoli",
        value: "Africa/Tripoli"
    },
    {
        displayName: "Africa/Tunis",
        value: "Africa/Tunis"
    },
    {
        displayName: "Africa/Windhoek",
        value: "Africa/Windhoek"
    },
    {
        displayName: "America/Adak",
        value: "America/Adak"
    },
    {
        displayName: "America/Anchorage",
        value: "America/Anchorage"
    },
    {
        displayName: "America/Anguilla",
        value: "America/Anguilla"
    },
    {
        displayName: "America/Antigua",
        value: "America/Antigua"
    },
    {
        displayName: "America/Araguaina",
        value: "America/Araguaina"
    },
    {
        displayName: "America/Argentina/Buenos_Aires",
        value: "America/Argentina/Buenos_Aires"
    },
    {
        displayName: "America/Argentina/Catamarca",
        value: "America/Argentina/Catamarca"
    },
    {
        displayName: "America/Argentina/ComodRivadavia",
        value: "America/Argentina/ComodRivadavia"
    },
    {
        displayName: "America/Argentina/Cordoba",
        value: "America/Argentina/Cordoba"
    },
    {
        displayName: "America/Argentina/Jujuy",
        value: "America/Argentina/Jujuy"
    },
    {
        displayName: "America/Argentina/La_Rioja",
        value: "America/Argentina/La_Rioja"
    },
    {
        displayName: "America/Argentina/Mendoza",
        value: "America/Argentina/Mendoza"
    },
    {
        displayName: "America/Argentina/Rio_Gallegos",
        value: "America/Argentina/Rio_Gallegos"
    },
    {
        displayName: "America/Argentina/Salta",
        value: "America/Argentina/Salta"
    },
    {
        displayName: "America/Argentina/San_Juan",
        value: "America/Argentina/San_Juan"
    },
    {
        displayName: "America/Argentina/San_Luis",
        value: "America/Argentina/San_Luis"
    },
    {
        displayName: "America/Argentina/Tucuman",
        value: "America/Argentina/Tucuman"
    },
    {
        displayName: "America/Argentina/Ushuaia",
        value: "America/Argentina/Ushuaia"
    },
    {
        displayName: "America/Aruba",
        value: "America/Aruba"
    },
    {
        displayName: "America/Asuncion",
        value: "America/Asuncion"
    },
    {
        displayName: "America/Atikokan",
        value: "America/Atikokan"
    },
    {
        displayName: "America/Atka",
        value: "America/Atka"
    },
    {
        displayName: "America/Bahia",
        value: "America/Bahia"
    },
    {
        displayName: "America/Bahia_Banderas",
        value: "America/Bahia_Banderas"
    },
    {
        displayName: "America/Barbados",
        value: "America/Barbados"
    },
    {
        displayName: "America/Belem",
        value: "America/Belem"
    },
    {
        displayName: "America/Belize",
        value: "America/Belize"
    },
    {
        displayName: "America/Blanc-Sablon",
        value: "America/Blanc-Sablon"
    },
    {
        displayName: "America/Boa_Vista",
        value: "America/Boa_Vista"
    },
    {
        displayName: "America/Bogota",
        value: "America/Bogota"
    },
    {
        displayName: "America/Boise",
        value: "America/Boise"
    },
    {
        displayName: "America/Buenos_Aires",
        value: "America/Buenos_Aires"
    },
    {
        displayName: "America/Cambridge_Bay",
        value: "America/Cambridge_Bay"
    },
    {
        displayName: "America/Campo_Grande",
        value: "America/Campo_Grande"
    },
    {
        displayName: "America/Cancun",
        value: "America/Cancun"
    },
    {
        displayName: "America/Caracas",
        value: "America/Caracas"
    },
    {
        displayName: "America/Catamarca",
        value: "America/Catamarca"
    },
    {
        displayName: "America/Cayenne",
        value: "America/Cayenne"
    },
    {
        displayName: "America/Cayman",
        value: "America/Cayman"
    },
    {
        displayName: "America/Chicago",
        value: "America/Chicago"
    },
    {
        displayName: "America/Chihuahua",
        value: "America/Chihuahua"
    },
    {
        displayName: "America/Coral_Harbour",
        value: "America/Coral_Harbour"
    },
    {
        displayName: "America/Cordoba",
        value: "America/Cordoba"
    },
    {
        displayName: "America/Costa_Rica",
        value: "America/Costa_Rica"
    },
    {
        displayName: "America/Creston",
        value: "America/Creston"
    },
    {
        displayName: "America/Cuiaba",
        value: "America/Cuiaba"
    },
    {
        displayName: "America/Curacao",
        value: "America/Curacao"
    },
    {
        displayName: "America/Danmarkshavn",
        value: "America/Danmarkshavn"
    },
    {
        displayName: "America/Dawson",
        value: "America/Dawson"
    },
    {
        displayName: "America/Dawson_Creek",
        value: "America/Dawson_Creek"
    },
    {
        displayName: "America/Denver",
        value: "America/Denver"
    },
    {
        displayName: "America/Detroit",
        value: "America/Detroit"
    },
    {
        displayName: "America/Dominica",
        value: "America/Dominica"
    },
    {
        displayName: "America/Edmonton",
        value: "America/Edmonton"
    },
    {
        displayName: "America/Eirunepe",
        value: "America/Eirunepe"
    },
    {
        displayName: "America/El_Salvador",
        value: "America/El_Salvador"
    },
    {
        displayName: "America/Ensenada",
        value: "America/Ensenada"
    },
    {
        displayName: "America/Fort_Wayne",
        value: "America/Fort_Wayne"
    },
    {
        displayName: "America/Fortaleza",
        value: "America/Fortaleza"
    },
    {
        displayName: "America/Glace_Bay",
        value: "America/Glace_Bay"
    },
    {
        displayName: "America/Godthab",
        value: "America/Godthab"
    },
    {
        displayName: "America/Goose_Bay",
        value: "America/Goose_Bay"
    },
    {
        displayName: "America/Grand_Turk",
        value: "America/Grand_Turk"
    },
    {
        displayName: "America/Grenada",
        value: "America/Grenada"
    },
    {
        displayName: "America/Guadeloupe",
        value: "America/Guadeloupe"
    },
    {
        displayName: "America/Guatemala",
        value: "America/Guatemala"
    },
    {
        displayName: "America/Guayaquil",
        value: "America/Guayaquil"
    },
    {
        displayName: "America/Guyana",
        value: "America/Guyana"
    },
    {
        displayName: "America/Halifax",
        value: "America/Halifax"
    },
    {
        displayName: "America/Havana",
        value: "America/Havana"
    },
    {
        displayName: "America/Hermosillo",
        value: "America/Hermosillo"
    },
    {
        displayName: "America/Indiana/Indianapolis",
        value: "America/Indiana/Indianapolis"
    },
    {
        displayName: "America/Indiana/Knox",
        value: "America/Indiana/Knox"
    },
    {
        displayName: "America/Indiana/Marengo",
        value: "America/Indiana/Marengo"
    },
    {
        displayName: "America/Indiana/Petersburg",
        value: "America/Indiana/Petersburg"
    },
    {
        displayName: "America/Indiana/Tell_City",
        value: "America/Indiana/Tell_City"
    },
    {
        displayName: "America/Indiana/Vevay",
        value: "America/Indiana/Vevay"
    },
    {
        displayName: "America/Indiana/Vincennes",
        value: "America/Indiana/Vincennes"
    },
    {
        displayName: "America/Indiana/Winamac",
        value: "America/Indiana/Winamac"
    },
    {
        displayName: "America/Indianapolis",
        value: "America/Indianapolis"
    },
    {
        displayName: "America/Inuvik",
        value: "America/Inuvik"
    },
    {
        displayName: "America/Iqaluit",
        value: "America/Iqaluit"
    },
    {
        displayName: "America/Jamaica",
        value: "America/Jamaica"
    },
    {
        displayName: "America/Jujuy",
        value: "America/Jujuy"
    },
    {
        displayName: "America/Juneau",
        value: "America/Juneau"
    },
    {
        displayName: "America/Kentucky/Louisville",
        value: "America/Kentucky/Louisville"
    },
    {
        displayName: "America/Kentucky/Monticello",
        value: "America/Kentucky/Monticello"
    },
    {
        displayName: "America/Knox_IN",
        value: "America/Knox_IN"
    },
    {
        displayName: "America/Kralendijk",
        value: "America/Kralendijk"
    },
    {
        displayName: "America/La_Paz",
        value: "America/La_Paz"
    },
    {
        displayName: "America/Lima",
        value: "America/Lima"
    },
    {
        displayName: "America/Los_Angeles",
        value: "America/Los_Angeles"
    },
    {
        displayName: "America/Louisville",
        value: "America/Louisville"
    },
    {
        displayName: "America/Lower_Princes",
        value: "America/Lower_Princes"
    },
    {
        displayName: "America/Maceio",
        value: "America/Maceio"
    },
    {
        displayName: "America/Managua",
        value: "America/Managua"
    },
    {
        displayName: "America/Manaus",
        value: "America/Manaus"
    },
    {
        displayName: "America/Marigot",
        value: "America/Marigot"
    },
    {
        displayName: "America/Martinique",
        value: "America/Martinique"
    },
    {
        displayName: "America/Matamoros",
        value: "America/Matamoros"
    },
    {
        displayName: "America/Mazatlan",
        value: "America/Mazatlan"
    },
    {
        displayName: "America/Mendoza",
        value: "America/Mendoza"
    },
    {
        displayName: "America/Menominee",
        value: "America/Menominee"
    },
    {
        displayName: "America/Merida",
        value: "America/Merida"
    },
    {
        displayName: "America/Metlakatla",
        value: "America/Metlakatla"
    },
    {
        displayName: "America/Mexico_City",
        value: "America/Mexico_City"
    },
    {
        displayName: "America/Miquelon",
        value: "America/Miquelon"
    },
    {
        displayName: "America/Moncton",
        value: "America/Moncton"
    },
    {
        displayName: "America/Monterrey",
        value: "America/Monterrey"
    },
    {
        displayName: "America/Montevideo",
        value: "America/Montevideo"
    },
    {
        displayName: "America/Montreal",
        value: "America/Montreal"
    },
    {
        displayName: "America/Montserrat",
        value: "America/Montserrat"
    },
    {
        displayName: "America/Nassau",
        value: "America/Nassau"
    },
    {
        displayName: "America/New_York",
        value: "America/New_York"
    },
    {
        displayName: "America/Nipigon",
        value: "America/Nipigon"
    },
    {
        displayName: "America/Nome",
        value: "America/Nome"
    },
    {
        displayName: "America/Noronha",
        value: "America/Noronha"
    },
    {
        displayName: "America/North_Dakota/Beulah",
        value: "America/North_Dakota/Beulah"
    },
    {
        displayName: "America/North_Dakota/Center",
        value: "America/North_Dakota/Center"
    },
    {
        displayName: "America/North_Dakota/New_Salem",
        value: "America/North_Dakota/New_Salem"
    },
    {
        displayName: "America/Ojinaga",
        value: "America/Ojinaga"
    },
    {
        displayName: "America/Panama",
        value: "America/Panama"
    },
    {
        displayName: "America/Pangnirtung",
        value: "America/Pangnirtung"
    },
    {
        displayName: "America/Paramaribo",
        value: "America/Paramaribo"
    },
    {
        displayName: "America/Phoenix",
        value: "America/Phoenix"
    },
    {
        displayName: "America/Port-au-Prince",
        value: "America/Port-au-Prince"
    },
    {
        displayName: "America/Port_of_Spain",
        value: "America/Port_of_Spain"
    },
    {
        displayName: "America/Porto_Acre",
        value: "America/Porto_Acre"
    },
    {
        displayName: "America/Porto_Velho",
        value: "America/Porto_Velho"
    },
    {
        displayName: "America/Puerto_Rico",
        value: "America/Puerto_Rico"
    },
    {
        displayName: "America/Rainy_River",
        value: "America/Rainy_River"
    },
    {
        displayName: "America/Rankin_Inlet",
        value: "America/Rankin_Inlet"
    },
    {
        displayName: "America/Recife",
        value: "America/Recife"
    },
    {
        displayName: "America/Regina",
        value: "America/Regina"
    },
    {
        displayName: "America/Resolute",
        value: "America/Resolute"
    },
    {
        displayName: "America/Rio_Branco",
        value: "America/Rio_Branco"
    },
    {
        displayName: "America/Rosario",
        value: "America/Rosario"
    },
    {
        displayName: "America/Santa_Isabel",
        value: "America/Santa_Isabel"
    },
    {
        displayName: "America/Santarem",
        value: "America/Santarem"
    },
    {
        displayName: "America/Santiago",
        value: "America/Santiago"
    },
    {
        displayName: "America/Santo_Domingo",
        value: "America/Santo_Domingo"
    },
    {
        displayName: "America/Sao_Paulo",
        value: "America/Sao_Paulo"
    },
    {
        displayName: "America/Scoresbysund",
        value: "America/Scoresbysund"
    },
    {
        displayName: "America/Shiprock",
        value: "America/Shiprock"
    },
    {
        displayName: "America/Sitka",
        value: "America/Sitka"
    },
    {
        displayName: "America/St_Barthelemy",
        value: "America/St_Barthelemy"
    },
    {
        displayName: "America/St_Johns",
        value: "America/St_Johns"
    },
    {
        displayName: "America/St_Kitts",
        value: "America/St_Kitts"
    },
    {
        displayName: "America/St_Lucia",
        value: "America/St_Lucia"
    },
    {
        displayName: "America/St_Thomas",
        value: "America/St_Thomas"
    },
    {
        displayName: "America/St_Vincent",
        value: "America/St_Vincent"
    },
    {
        displayName: "America/Swift_Current",
        value: "America/Swift_Current"
    },
    {
        displayName: "America/Tegucigalpa",
        value: "America/Tegucigalpa"
    },
    {
        displayName: "America/Thule",
        value: "America/Thule"
    },
    {
        displayName: "America/Thunder_Bay",
        value: "America/Thunder_Bay"
    },
    {
        displayName: "America/Tijuana",
        value: "America/Tijuana"
    },
    {
        displayName: "America/Toronto",
        value: "America/Toronto"
    },
    {
        displayName: "America/Tortola",
        value: "America/Tortola"
    },
    {
        displayName: "America/Vancouver",
        value: "America/Vancouver"
    },
    {
        displayName: "America/Virgin",
        value: "America/Virgin"
    },
    {
        displayName: "America/Whitehorse",
        value: "America/Whitehorse"
    },
    {
        displayName: "America/Winnipeg",
        value: "America/Winnipeg"
    },
    {
        displayName: "America/Yakutat",
        value: "America/Yakutat"
    },
    {
        displayName: "America/Yellowknife",
        value: "America/Yellowknife"
    },
    {
        displayName: "Antarctica/Casey",
        value: "Antarctica/Casey"
    },
    {
        displayName: "Antarctica/Davis",
        value: "Antarctica/Davis"
    },
    {
        displayName: "Antarctica/DumontDUrville",
        value: "Antarctica/DumontDUrville"
    },
    {
        displayName: "Antarctica/Macquarie",
        value: "Antarctica/Macquarie"
    },
    {
        displayName: "Antarctica/Mawson",
        value: "Antarctica/Mawson"
    },
    {
        displayName: "Antarctica/McMurdo",
        value: "Antarctica/McMurdo"
    },
    {
        displayName: "Antarctica/Palmer",
        value: "Antarctica/Palmer"
    },
    {
        displayName: "Antarctica/Rothera",
        value: "Antarctica/Rothera"
    },
    {
        displayName: "Antarctica/South_Pole",
        value: "Antarctica/South_Pole"
    },
    {
        displayName: "Antarctica/Syowa",
        value: "Antarctica/Syowa"
    },
    {
        displayName: "Antarctica/Troll",
        value: "Antarctica/Troll"
    },
    {
        displayName: "Antarctica/Vostok",
        value: "Antarctica/Vostok"
    },
    {
        displayName: "Arctic/Longyearbyen",
        value: "Arctic/Longyearbyen"
    },
    {
        displayName: "Asia/Aden",
        value: "Asia/Aden"
    },
    {
        displayName: "Asia/Almaty",
        value: "Asia/Almaty"
    },
    {
        displayName: "Asia/Amman",
        value: "Asia/Amman"
    },
    {
        displayName: "Asia/Anadyr",
        value: "Asia/Anadyr"
    },
    {
        displayName: "Asia/Aqtau",
        value: "Asia/Aqtau"
    },
    {
        displayName: "Asia/Aqtobe",
        value: "Asia/Aqtobe"
    },
    {
        displayName: "Asia/Ashgabat",
        value: "Asia/Ashgabat"
    },
    {
        displayName: "Asia/Ashkhabad",
        value: "Asia/Ashkhabad"
    },
    {
        displayName: "Asia/Baghdad",
        value: "Asia/Baghdad"
    },
    {
        displayName: "Asia/Bahrain",
        value: "Asia/Bahrain"
    },
    {
        displayName: "Asia/Baku",
        value: "Asia/Baku"
    },
    {
        displayName: "Asia/Bangkok",
        value: "Asia/Bangkok"
    },
    {
        displayName: "Asia/Beirut",
        value: "Asia/Beirut"
    },
    {
        displayName: "Asia/Bishkek",
        value: "Asia/Bishkek"
    },
    {
        displayName: "Asia/Brunei",
        value: "Asia/Brunei"
    },
    {
        displayName: "Asia/Calcutta",
        value: "Asia/Calcutta"
    },
    {
        displayName: "Asia/Chita",
        value: "Asia/Chita"
    },
    {
        displayName: "Asia/Choibalsan",
        value: "Asia/Choibalsan"
    },
    {
        displayName: "Asia/Chongqing",
        value: "Asia/Chongqing"
    },
    {
        displayName: "Asia/Chungking",
        value: "Asia/Chungking"
    },
    {
        displayName: "Asia/Colombo",
        value: "Asia/Colombo"
    },
    {
        displayName: "Asia/Dacca",
        value: "Asia/Dacca"
    },
    {
        displayName: "Asia/Damascus",
        value: "Asia/Damascus"
    },
    {
        displayName: "Asia/Dhaka",
        value: "Asia/Dhaka"
    },
    {
        displayName: "Asia/Dili",
        value: "Asia/Dili"
    },
    {
        displayName: "Asia/Dubai",
        value: "Asia/Dubai"
    },
    {
        displayName: "Asia/Dushanbe",
        value: "Asia/Dushanbe"
    },
    {
        displayName: "Asia/Gaza",
        value: "Asia/Gaza"
    },
    {
        displayName: "Asia/Harbin",
        value: "Asia/Harbin"
    },
    {
        displayName: "Asia/Hebron",
        value: "Asia/Hebron"
    },
    {
        displayName: "Asia/Ho_Chi_Minh",
        value: "Asia/Ho_Chi_Minh"
    },
    {
        displayName: "Asia/Hong_Kong",
        value: "Asia/Hong_Kong"
    },
    {
        displayName: "Asia/Hovd",
        value: "Asia/Hovd"
    },
    {
        displayName: "Asia/Irkutsk",
        value: "Asia/Irkutsk"
    },
    {
        displayName: "Asia/Istanbul",
        value: "Asia/Istanbul"
    },
    {
        displayName: "Asia/Jakarta",
        value: "Asia/Jakarta"
    },
    {
        displayName: "Asia/Jayapura",
        value: "Asia/Jayapura"
    },
    {
        displayName: "Asia/Jerusalem",
        value: "Asia/Jerusalem"
    },
    {
        displayName: "Asia/Kabul",
        value: "Asia/Kabul"
    },
    {
        displayName: "Asia/Kamchatka",
        value: "Asia/Kamchatka"
    },
    {
        displayName: "Asia/Karachi",
        value: "Asia/Karachi"
    },
    {
        displayName: "Asia/Kashgar",
        value: "Asia/Kashgar"
    },
    {
        displayName: "Asia/Kathmandu",
        value: "Asia/Kathmandu"
    },
    {
        displayName: "Asia/Katmandu",
        value: "Asia/Katmandu"
    },
    {
        displayName: "Asia/Khandyga",
        value: "Asia/Khandyga"
    },
    {
        displayName: "Asia/Kolkata",
        value: "Asia/Kolkata"
    },
    {
        displayName: "Asia/Krasnoyarsk",
        value: "Asia/Krasnoyarsk"
    },
    {
        displayName: "Asia/Kuala_Lumpur",
        value: "Asia/Kuala_Lumpur"
    },
    {
        displayName: "Asia/Kuching",
        value: "Asia/Kuching"
    },
    {
        displayName: "Asia/Kuwait",
        value: "Asia/Kuwait"
    },
    {
        displayName: "Asia/Macao",
        value: "Asia/Macao"
    },
    {
        displayName: "Asia/Macau",
        value: "Asia/Macau"
    },
    {
        displayName: "Asia/Magadan",
        value: "Asia/Magadan"
    },
    {
        displayName: "Asia/Makassar",
        value: "Asia/Makassar"
    },
    {
        displayName: "Asia/Manila",
        value: "Asia/Manila"
    },
    {
        displayName: "Asia/Muscat",
        value: "Asia/Muscat"
    },
    {
        displayName: "Asia/Nicosia",
        value: "Asia/Nicosia"
    },
    {
        displayName: "Asia/Novokuznetsk",
        value: "Asia/Novokuznetsk"
    },
    {
        displayName: "Asia/Novosibirsk",
        value: "Asia/Novosibirsk"
    },
    {
        displayName: "Asia/Omsk",
        value: "Asia/Omsk"
    },
    {
        displayName: "Asia/Oral",
        value: "Asia/Oral"
    },
    {
        displayName: "Asia/Phnom_Penh",
        value: "Asia/Phnom_Penh"
    },
    {
        displayName: "Asia/Pontianak",
        value: "Asia/Pontianak"
    },
    {
        displayName: "Asia/Pyongyang",
        value: "Asia/Pyongyang"
    },
    {
        displayName: "Asia/Qatar",
        value: "Asia/Qatar"
    },
    {
        displayName: "Asia/Qyzylorda",
        value: "Asia/Qyzylorda"
    },
    {
        displayName: "Asia/Rangoon",
        value: "Asia/Rangoon"
    },
    {
        displayName: "Asia/Riyadh",
        value: "Asia/Riyadh"
    },
    {
        displayName: "Asia/Saigon",
        value: "Asia/Saigon"
    },
    {
        displayName: "Asia/Sakhalin",
        value: "Asia/Sakhalin"
    },
    {
        displayName: "Asia/Samarkand",
        value: "Asia/Samarkand"
    },
    {
        displayName: "Asia/Seoul",
        value: "Asia/Seoul"
    },
    {
        displayName: "Asia/Shanghai",
        value: "Asia/Shanghai"
    },
    {
        displayName: "Asia/Singapore",
        value: "Asia/Singapore"
    },
    {
        displayName: "Asia/Srednekolymsk",
        value: "Asia/Srednekolymsk"
    },
    {
        displayName: "Asia/Taipei",
        value: "Asia/Taipei"
    },
    {
        displayName: "Asia/Tashkent",
        value: "Asia/Tashkent"
    },
    {
        displayName: "Asia/Tbilisi",
        value: "Asia/Tbilisi"
    },
    {
        displayName: "Asia/Tehran",
        value: "Asia/Tehran"
    },
    {
        displayName: "Asia/Tel_Aviv",
        value: "Asia/Tel_Aviv"
    },
    {
        displayName: "Asia/Thimbu",
        value: "Asia/Thimbu"
    },
    {
        displayName: "Asia/Thimphu",
        value: "Asia/Thimphu"
    },
    {
        displayName: "Asia/Tokyo",
        value: "Asia/Tokyo"
    },
    {
        displayName: "Asia/Ujung_Pandang",
        value: "Asia/Ujung_Pandang"
    },
    {
        displayName: "Asia/Ulaanbaatar",
        value: "Asia/Ulaanbaatar"
    },
    {
        displayName: "Asia/Ulan_Bator",
        value: "Asia/Ulan_Bator"
    },
    {
        displayName: "Asia/Urumqi",
        value: "Asia/Urumqi"
    },
    {
        displayName: "Asia/Ust-Nera",
        value: "Asia/Ust-Nera"
    },
    {
        displayName: "Asia/Vientiane",
        value: "Asia/Vientiane"
    },
    {
        displayName: "Asia/Vladivostok",
        value: "Asia/Vladivostok"
    },
    {
        displayName: "Asia/Yakutsk",
        value: "Asia/Yakutsk"
    },
    {
        displayName: "Asia/Yekaterinburg",
        value: "Asia/Yekaterinburg"
    },
    {
        displayName: "Asia/Yerevan",
        value: "Asia/Yerevan"
    },
    {
        displayName: "Atlantic/Azores",
        value: "Atlantic/Azores"
    },
    {
        displayName: "Atlantic/Bermuda",
        value: "Atlantic/Bermuda"
    },
    {
        displayName: "Atlantic/Canary",
        value: "Atlantic/Canary"
    },
    {
        displayName: "Atlantic/Cape_Verde",
        value: "Atlantic/Cape_Verde"
    },
    {
        displayName: "Atlantic/Faeroe",
        value: "Atlantic/Faeroe"
    },
    {
        displayName: "Atlantic/Faroe",
        value: "Atlantic/Faroe"
    },
    {
        displayName: "Atlantic/Jan_Mayen",
        value: "Atlantic/Jan_Mayen"
    },
    {
        displayName: "Atlantic/Madeira",
        value: "Atlantic/Madeira"
    },
    {
        displayName: "Atlantic/Reykjavik",
        value: "Atlantic/Reykjavik"
    },
    {
        displayName: "Atlantic/South_Georgia",
        value: "Atlantic/South_Georgia"
    },
    {
        displayName: "Atlantic/St_Helena",
        value: "Atlantic/St_Helena"
    },
    {
        displayName: "Atlantic/Stanley",
        value: "Atlantic/Stanley"
    },
    {
        displayName: "Australia/ACT",
        value: "Australia/ACT"
    },
    {
        displayName: "Australia/Adelaide",
        value: "Australia/Adelaide"
    },
    {
        displayName: "Australia/Brisbane",
        value: "Australia/Brisbane"
    },
    {
        displayName: "Australia/Broken_Hill",
        value: "Australia/Broken_Hill"
    },
    {
        displayName: "Australia/Canberra",
        value: "Australia/Canberra"
    },
    {
        displayName: "Australia/Currie",
        value: "Australia/Currie"
    },
    {
        displayName: "Australia/Darwin",
        value: "Australia/Darwin"
    },
    {
        displayName: "Australia/Eucla",
        value: "Australia/Eucla"
    },
    {
        displayName: "Australia/Hobart",
        value: "Australia/Hobart"
    },
    {
        displayName: "Australia/LHI",
        value: "Australia/LHI"
    },
    {
        displayName: "Australia/Lindeman",
        value: "Australia/Lindeman"
    },
    {
        displayName: "Australia/Lord_Howe",
        value: "Australia/Lord_Howe"
    },
    {
        displayName: "Australia/Melbourne",
        value: "Australia/Melbourne"
    },
    {
        displayName: "Australia/NSW",
        value: "Australia/NSW"
    },
    {
        displayName: "Australia/North",
        value: "Australia/North"
    },
    {
        displayName: "Australia/Perth",
        value: "Australia/Perth"
    },
    {
        displayName: "Australia/Queensland",
        value: "Australia/Queensland"
    },
    {
        displayName: "Australia/South",
        value: "Australia/South"
    },
    {
        displayName: "Australia/Sydney",
        value: "Australia/Sydney"
    },
    {
        displayName: "Australia/Tasmania",
        value: "Australia/Tasmania"
    },
    {
        displayName: "Australia/Victoria",
        value: "Australia/Victoria"
    },
    {
        displayName: "Australia/West",
        value: "Australia/West"
    },
    {
        displayName: "Australia/Yancowinna",
        value: "Australia/Yancowinna"
    },
    {
        displayName: "Brazil/Acre",
        value: "Brazil/Acre"
    },
    {
        displayName: "Brazil/DeNoronha",
        value: "Brazil/DeNoronha"
    },
    {
        displayName: "Brazil/East",
        value: "Brazil/East"
    },
    {
        displayName: "Brazil/West",
        value: "Brazil/West"
    },
    {
        displayName: "CET",
        value: "CET"
    },
    {
        displayName: "CST6CDT",
        value: "CST6CDT"
    },
    {
        displayName: "Canada/Atlantic",
        value: "Canada/Atlantic"
    },
    {
        displayName: "Canada/Central",
        value: "Canada/Central"
    },
    {
        displayName: "Canada/East-Saskatchewan",
        value: "Canada/East-Saskatchewan"
    },
    {
        displayName: "Canada/Eastern",
        value: "Canada/Eastern"
    },
    {
        displayName: "Canada/Mountain",
        value: "Canada/Mountain"
    },
    {
        displayName: "Canada/Newfoundland",
        value: "Canada/Newfoundland"
    },
    {
        displayName: "Canada/Pacific",
        value: "Canada/Pacific"
    },
    {
        displayName: "Canada/Saskatchewan",
        value: "Canada/Saskatchewan"
    },
    {
        displayName: "Canada/Yukon",
        value: "Canada/Yukon"
    },
    {
        displayName: "Chile/Continental",
        value: "Chile/Continental"
    },
    {
        displayName: "Chile/EasterIsland",
        value: "Chile/EasterIsland"
    },
    {
        displayName: "Cuba",
        value: "Cuba"
    },
    {
        displayName: "EET",
        value: "EET"
    },
    {
        displayName: "EST",
        value: "EST"
    },
    {
        displayName: "EST5EDT",
        value: "EST5EDT"
    },
    {
        displayName: "Egypt",
        value: "Egypt"
    },
    {
        displayName: "Eire",
        value: "Eire"
    },
    {
        displayName: "Etc/GMT",
        value: "Etc/GMT"
    },
    {
        displayName: "Etc/GMT+0",
        value: "Etc/GMT+0"
    },
    {
        displayName: "Etc/GMT+1",
        value: "Etc/GMT+1"
    },
    {
        displayName: "Etc/GMT+10",
        value: "Etc/GMT+10"
    },
    {
        displayName: "Etc/GMT+11",
        value: "Etc/GMT+11"
    },
    {
        displayName: "Etc/GMT+12",
        value: "Etc/GMT+12"
    },
    {
        displayName: "Etc/GMT+2",
        value: "Etc/GMT+2"
    },
    {
        displayName: "Etc/GMT+3",
        value: "Etc/GMT+3"
    },
    {
        displayName: "Etc/GMT+4",
        value: "Etc/GMT+4"
    },
    {
        displayName: "Etc/GMT+5",
        value: "Etc/GMT+5"
    },
    {
        displayName: "Etc/GMT+6",
        value: "Etc/GMT+6"
    },
    {
        displayName: "Etc/GMT+7",
        value: "Etc/GMT+7"
    },
    {
        displayName: "Etc/GMT+8",
        value: "Etc/GMT+8"
    },
    {
        displayName: "Etc/GMT+9",
        value: "Etc/GMT+9"
    },
    {
        displayName: "Etc/GMT-0",
        value: "Etc/GMT-0"
    },
    {
        displayName: "Etc/GMT-1",
        value: "Etc/GMT-1"
    },
    {
        displayName: "Etc/GMT-10",
        value: "Etc/GMT-10"
    },
    {
        displayName: "Etc/GMT-11",
        value: "Etc/GMT-11"
    },
    {
        displayName: "Etc/GMT-12",
        value: "Etc/GMT-12"
    },
    {
        displayName: "Etc/GMT-13",
        value: "Etc/GMT-13"
    },
    {
        displayName: "Etc/GMT-14",
        value: "Etc/GMT-14"
    },
    {
        displayName: "Etc/GMT-2",
        value: "Etc/GMT-2"
    },
    {
        displayName: "Etc/GMT-3",
        value: "Etc/GMT-3"
    },
    {
        displayName: "Etc/GMT-4",
        value: "Etc/GMT-4"
    },
    {
        displayName: "Etc/GMT-5",
        value: "Etc/GMT-5"
    },
    {
        displayName: "Etc/GMT-6",
        value: "Etc/GMT-6"
    },
    {
        displayName: "Etc/GMT-7",
        value: "Etc/GMT-7"
    },
    {
        displayName: "Etc/GMT-8",
        value: "Etc/GMT-8"
    },
    {
        displayName: "Etc/GMT-9",
        value: "Etc/GMT-9"
    },
    {
        displayName: "Etc/GMT0",
        value: "Etc/GMT0"
    },
    {
        displayName: "Etc/Greenwich",
        value: "Etc/Greenwich"
    },
    {
        displayName: "Etc/UCT",
        value: "Etc/UCT"
    },
    {
        displayName: "Etc/UTC",
        value: "Etc/UTC"
    },
    {
        displayName: "Etc/Universal",
        value: "Etc/Universal"
    },
    {
        displayName: "Etc/Zulu",
        value: "Etc/Zulu"
    },
    {
        displayName: "Europe/Amsterdam",
        value: "Europe/Amsterdam"
    },
    {
        displayName: "Europe/Andorra",
        value: "Europe/Andorra"
    },
    {
        displayName: "Europe/Athens",
        value: "Europe/Athens"
    },
    {
        displayName: "Europe/Belfast",
        value: "Europe/Belfast"
    },
    {
        displayName: "Europe/Belgrade",
        value: "Europe/Belgrade"
    },
    {
        displayName: "Europe/Berlin",
        value: "Europe/Berlin"
    },
    {
        displayName: "Europe/Bratislava",
        value: "Europe/Bratislava"
    },
    {
        displayName: "Europe/Brussels",
        value: "Europe/Brussels"
    },
    {
        displayName: "Europe/Bucharest",
        value: "Europe/Bucharest"
    },
    {
        displayName: "Europe/Budapest",
        value: "Europe/Budapest"
    },
    {
        displayName: "Europe/Busingen",
        value: "Europe/Busingen"
    },
    {
        displayName: "Europe/Chisinau",
        value: "Europe/Chisinau"
    },
    {
        displayName: "Europe/Copenhagen",
        value: "Europe/Copenhagen"
    },
    {
        displayName: "Europe/Dublin",
        value: "Europe/Dublin"
    },
    {
        displayName: "Europe/Gibraltar",
        value: "Europe/Gibraltar"
    },
    {
        displayName: "Europe/Guernsey",
        value: "Europe/Guernsey"
    },
    {
        displayName: "Europe/Helsinki",
        value: "Europe/Helsinki"
    },
    {
        displayName: "Europe/Isle_of_Man",
        value: "Europe/Isle_of_Man"
    },
    {
        displayName: "Europe/Istanbul",
        value: "Europe/Istanbul"
    },
    {
        displayName: "Europe/Jersey",
        value: "Europe/Jersey"
    },
    {
        displayName: "Europe/Kaliningrad",
        value: "Europe/Kaliningrad"
    },
    {
        displayName: "Europe/Kiev",
        value: "Europe/Kiev"
    },
    {
        displayName: "Europe/Lisbon",
        value: "Europe/Lisbon"
    },
    {
        displayName: "Europe/Ljubljana",
        value: "Europe/Ljubljana"
    },
    {
        displayName: "Europe/London",
        value: "Europe/London"
    },
    {
        displayName: "Europe/Luxembourg",
        value: "Europe/Luxembourg"
    },
    {
        displayName: "Europe/Madrid",
        value: "Europe/Madrid"
    },
    {
        displayName: "Europe/Malta",
        value: "Europe/Malta"
    },
    {
        displayName: "Europe/Mariehamn",
        value: "Europe/Mariehamn"
    },
    {
        displayName: "Europe/Minsk",
        value: "Europe/Minsk"
    },
    {
        displayName: "Europe/Monaco",
        value: "Europe/Monaco"
    },
    {
        displayName: "Europe/Moscow",
        value: "Europe/Moscow"
    },
    {
        displayName: "Europe/Nicosia",
        value: "Europe/Nicosia"
    },
    {
        displayName: "Europe/Oslo",
        value: "Europe/Oslo"
    },
    {
        displayName: "Europe/Paris",
        value: "Europe/Paris"
    },
    {
        displayName: "Europe/Podgorica",
        value: "Europe/Podgorica"
    },
    {
        displayName: "Europe/Prague",
        value: "Europe/Prague"
    },
    {
        displayName: "Europe/Riga",
        value: "Europe/Riga"
    },
    {
        displayName: "Europe/Rome",
        value: "Europe/Rome"
    },
    {
        displayName: "Europe/Samara",
        value: "Europe/Samara"
    },
    {
        displayName: "Europe/San_Marino",
        value: "Europe/San_Marino"
    },
    {
        displayName: "Europe/Sarajevo",
        value: "Europe/Sarajevo"
    },
    {
        displayName: "Europe/Simferopol",
        value: "Europe/Simferopol"
    },
    {
        displayName: "Europe/Skopje",
        value: "Europe/Skopje"
    },
    {
        displayName: "Europe/Sofia",
        value: "Europe/Sofia"
    },
    {
        displayName: "Europe/Stockholm",
        value: "Europe/Stockholm"
    },
    {
        displayName: "Europe/Tallinn",
        value: "Europe/Tallinn"
    },
    {
        displayName: "Europe/Tirane",
        value: "Europe/Tirane"
    },
    {
        displayName: "Europe/Tiraspol",
        value: "Europe/Tiraspol"
    },
    {
        displayName: "Europe/Uzhgorod",
        value: "Europe/Uzhgorod"
    },
    {
        displayName: "Europe/Vaduz",
        value: "Europe/Vaduz"
    },
    {
        displayName: "Europe/Vatican",
        value: "Europe/Vatican"
    },
    {
        displayName: "Europe/Vienna",
        value: "Europe/Vienna"
    },
    {
        displayName: "Europe/Vilnius",
        value: "Europe/Vilnius"
    },
    {
        displayName: "Europe/Volgograd",
        value: "Europe/Volgograd"
    },
    {
        displayName: "Europe/Warsaw",
        value: "Europe/Warsaw"
    },
    {
        displayName: "Europe/Zagreb",
        value: "Europe/Zagreb"
    },
    {
        displayName: "Europe/Zaporozhye",
        value: "Europe/Zaporozhye"
    },
    {
        displayName: "Europe/Zurich",
        value: "Europe/Zurich"
    },
    {
        displayName: "GB",
        value: "GB"
    },
    {
        displayName: "GB-Eire",
        value: "GB-Eire"
    },
    {
        displayName: "GMT",
        value: "GMT"
    },
    {
        displayName: "GMT+0",
        value: "GMT+0"
    },
    {
        displayName: "GMT-0",
        value: "GMT-0"
    },
    {
        displayName: "GMT0",
        value: "GMT0"
    },
    {
        displayName: "Greenwich",
        value: "Greenwich"
    },
    {
        displayName: "HST",
        value: "HST"
    },
    {
        displayName: "Hongkong",
        value: "Hongkong"
    },
    {
        displayName: "Iceland",
        value: "Iceland"
    },
    {
        displayName: "Indian/Antananarivo",
        value: "Indian/Antananarivo"
    },
    {
        displayName: "Indian/Chagos",
        value: "Indian/Chagos"
    },
    {
        displayName: "Indian/Christmas",
        value: "Indian/Christmas"
    },
    {
        displayName: "Indian/Cocos",
        value: "Indian/Cocos"
    },
    {
        displayName: "Indian/Comoro",
        value: "Indian/Comoro"
    },
    {
        displayName: "Indian/Kerguelen",
        value: "Indian/Kerguelen"
    },
    {
        displayName: "Indian/Mahe",
        value: "Indian/Mahe"
    },
    {
        displayName: "Indian/Maldives",
        value: "Indian/Maldives"
    },
    {
        displayName: "Indian/Mauritius",
        value: "Indian/Mauritius"
    },
    {
        displayName: "Indian/Mayotte",
        value: "Indian/Mayotte"
    },
    {
        displayName: "Indian/Reunion",
        value: "Indian/Reunion"
    },
    {
        displayName: "Iran",
        value: "Iran"
    },
    {
        displayName: "Israel",
        value: "Israel"
    },
    {
        displayName: "Jamaica",
        value: "Jamaica"
    },
    {
        displayName: "Japan",
        value: "Japan"
    },
    {
        displayName: "Kwajalein",
        value: "Kwajalein"
    },
    {
        displayName: "Libya",
        value: "Libya"
    },
    {
        displayName: "MET",
        value: "MET"
    },
    {
        displayName: "MST",
        value: "MST"
    },
    {
        displayName: "MST7MDT",
        value: "MST7MDT"
    },
    {
        displayName: "Mexico/BajaNorte",
        value: "Mexico/BajaNorte"
    },
    {
        displayName: "Mexico/BajaSur",
        value: "Mexico/BajaSur"
    },
    {
        displayName: "Mexico/General",
        value: "Mexico/General"
    },
    {
        displayName: "NZ",
        value: "NZ"
    },
    {
        displayName: "NZ-CHAT",
        value: "NZ-CHAT"
    },
    {
        displayName: "Navajo",
        value: "Navajo"
    },
    {
        displayName: "PRC",
        value: "PRC"
    },
    {
        displayName: "PST8PDT",
        value: "PST8PDT"
    },
    {
        displayName: "Pacific/Apia",
        value: "Pacific/Apia"
    },
    {
        displayName: "Pacific/Auckland",
        value: "Pacific/Auckland"
    },
    {
        displayName: "Pacific/Bougainville",
        value: "Pacific/Bougainville"
    },
    {
        displayName: "Pacific/Chatham",
        value: "Pacific/Chatham"
    },
    {
        displayName: "Pacific/Chuuk",
        value: "Pacific/Chuuk"
    },
    {
        displayName: "Pacific/Easter",
        value: "Pacific/Easter"
    },
    {
        displayName: "Pacific/Efate",
        value: "Pacific/Efate"
    },
    {
        displayName: "Pacific/Enderbury",
        value: "Pacific/Enderbury"
    },
    {
        displayName: "Pacific/Fakaofo",
        value: "Pacific/Fakaofo"
    },
    {
        displayName: "Pacific/Fiji",
        value: "Pacific/Fiji"
    },
    {
        displayName: "Pacific/Funafuti",
        value: "Pacific/Funafuti"
    },
    {
        displayName: "Pacific/Galapagos",
        value: "Pacific/Galapagos"
    },
    {
        displayName: "Pacific/Gambier",
        value: "Pacific/Gambier"
    },
    {
        displayName: "Pacific/Guadalcanal",
        value: "Pacific/Guadalcanal"
    },
    {
        displayName: "Pacific/Guam",
        value: "Pacific/Guam"
    },
    {
        displayName: "Pacific/Honolulu",
        value: "Pacific/Honolulu"
    },
    {
        displayName: "Pacific/Johnston",
        value: "Pacific/Johnston"
    },
    {
        displayName: "Pacific/Kiritimati",
        value: "Pacific/Kiritimati"
    },
    {
        displayName: "Pacific/Kosrae",
        value: "Pacific/Kosrae"
    },
    {
        displayName: "Pacific/Kwajalein",
        value: "Pacific/Kwajalein"
    },
    {
        displayName: "Pacific/Majuro",
        value: "Pacific/Majuro"
    },
    {
        displayName: "Pacific/Marquesas",
        value: "Pacific/Marquesas"
    },
    {
        displayName: "Pacific/Midway",
        value: "Pacific/Midway"
    },
    {
        displayName: "Pacific/Nauru",
        value: "Pacific/Nauru"
    },
    {
        displayName: "Pacific/Niue",
        value: "Pacific/Niue"
    },
    {
        displayName: "Pacific/Norfolk",
        value: "Pacific/Norfolk"
    },
    {
        displayName: "Pacific/Noumea",
        value: "Pacific/Noumea"
    },
    {
        displayName: "Pacific/Pago_Pago",
        value: "Pacific/Pago_Pago"
    },
    {
        displayName: "Pacific/Palau",
        value: "Pacific/Palau"
    },
    {
        displayName: "Pacific/Pitcairn",
        value: "Pacific/Pitcairn"
    },
    {
        displayName: "Pacific/Pohnpei",
        value: "Pacific/Pohnpei"
    },
    {
        displayName: "Pacific/Ponape",
        value: "Pacific/Ponape"
    },
    {
        displayName: "Pacific/Port_Moresby",
        value: "Pacific/Port_Moresby"
    },
    {
        displayName: "Pacific/Rarotonga",
        value: "Pacific/Rarotonga"
    },
    {
        displayName: "Pacific/Saipan",
        value: "Pacific/Saipan"
    },
    {
        displayName: "Pacific/Samoa",
        value: "Pacific/Samoa"
    },
    {
        displayName: "Pacific/Tahiti",
        value: "Pacific/Tahiti"
    },
    {
        displayName: "Pacific/Tarawa",
        value: "Pacific/Tarawa"
    },
    {
        displayName: "Pacific/Tongatapu",
        value: "Pacific/Tongatapu"
    },
    {
        displayName: "Pacific/Truk",
        value: "Pacific/Truk"
    },
    {
        displayName: "Pacific/Wake",
        value: "Pacific/Wake"
    },
    {
        displayName: "Pacific/Wallis",
        value: "Pacific/Wallis"
    },
    {
        displayName: "Pacific/Yap",
        value: "Pacific/Yap"
    },
    {
        displayName: "Poland",
        value: "Poland"
    },
    {
        displayName: "Portugal",
        value: "Portugal"
    },
    {
        displayName: "ROC",
        value: "ROC"
    },
    {
        displayName: "ROK",
        value: "ROK"
    },
    {
        displayName: "Singapore",
        value: "Singapore"
    },
    {
        displayName: "Turkey",
        value: "Turkey"
    },
    {
        displayName: "UCT",
        value: "UCT"
    },
    {
        displayName: "US/Alaska",
        value: "US/Alaska"
    },
    {
        displayName: "US/Aleutian",
        value: "US/Aleutian"
    },
    {
        displayName: "US/Arizona",
        value: "US/Arizona"
    },
    {
        displayName: "US/Central",
        value: "US/Central"
    },
    {
        displayName: "US/East-Indiana",
        value: "US/East-Indiana"
    },
    {
        displayName: "US/Eastern",
        value: "US/Eastern"
    },
    {
        displayName: "US/Hawaii",
        value: "US/Hawaii"
    },
    {
        displayName: "US/Indiana-Starke",
        value: "US/Indiana-Starke"
    },
    {
        displayName: "US/Michigan",
        value: "US/Michigan"
    },
    {
        displayName: "US/Mountain",
        value: "US/Mountain"
    },
    {
        displayName: "US/Pacific",
        value: "US/Pacific"
    },
    {
        displayName: "US/Pacific-New",
        value: "US/Pacific-New"
    },
    {
        displayName: "US/Samoa",
        value: "US/Samoa"
    },
    {
        displayName: "UTC",
        value: "UTC"
    },
    {
        displayName: "Universal",
        value: "Universal"
    },
    {
        displayName: "W-SU",
        value: "W-SU"
    },
    {
        displayName: "WET",
        value: "WET"
    },
    {
        displayName: "Zulu",
        value: "Zulu"
    }
];

export default timezones;
