const INTEREST_DEPENDENCIES = ['company', 'language', 'age-rating', 'genre', 'subgenre', 'platform'];

$('#dd-dubbed-languages').multi({
    non_selected_header: 'Languages',
    selected_header: 'Selected Languages',

});

$('#dd-subtitled-languages').multi({
    non_selected_header: 'Languages',
    selected_header: 'Selected Languages'
});

$('#dd-genre').multi({
    non_selected_header: 'Genres',
    selected_header: 'Selected Genres'
});


$('#dd-subgenre').multi({
    non_selected_header: 'Subgenres',
    selected_header: 'Selected Subgenres'
});


$('#dd-platform').multi({
    non_selected_header: 'Platform',
    selected_header: 'Selected Platform'
});



document.addEventListener("DOMContentLoaded", function () {
    INTEREST_DEPENDENCIES.forEach(type => {
        loadDropDowns(type);
    })
});

document.getElementById("register-interest").addEventListener("submit", function (event) {
    event.preventDefault();
    registerInterest();
});


async function getAll(type) {
    const response = await fetch(`http://localhost:8080/api/admin/get/${type}/all`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

async function loadDropDowns(type) {
    if (type == 'language') {
        loadLanguagesDropDowns();
        return;
    }
    try {
        const json = await getAll(type);
        populateDropDown(json, document.getElementById('dd-' + type));
    } catch (error) {
        alert(`Deu errado! (loadDropDowns) -> ${error}`);
    }
}

async function loadLanguagesDropDowns() {
    ///frontend/admin-pages/script/languages.json
    //frontend/admin-pages/script/languages.json
    try {
        /* const response = await fetch('/workspaces/TCC-Matchup-Allysson-e-Henrique/frontend/admin-pages/script/languages.json');
        if (!response.ok) {
            throw new Error(response.statusText);
        } 
        console.log(response); */
        const json = languages;
        //const json = await response.json();
        populateDropDown(json, document.getElementById('dd-dubbed-languages'));
        populateDropDown(json, document.getElementById('dd-subtitled-languages'));
    } catch (error) {
        console.error('Erro ao carregar o arquivo JSON:', error);
        throw error;
    }
}

function populateDropDown(json, dropdown) {
    json.forEach(function (item) {
        let option = document.createElement('option');
        option.value = item.id;
        option.text = item.name;
        dropdown.appendChild(option);
    });
}


function addOptionToDropDown(type, item) {
    if(type == 'interest') return;
    let option = document.createElement('option');
    option.value = item.id;
    option.text = item.name;
    document.getElementById('dd-' + type).appendChild(option);
}

function getAll(type) {
    return fetch(`http://localhost:8080/api/admin/get/${type}/all`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .catch(error => {
            alert("Deu errado! (getAll) -> " + error);
            throw error;
        });
}


function register(type, jsonObject) {

    fetch("http://localhost:8080/api/admin/register/" + type, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonObject)
    })
        .then(async response => {
            if (!response.ok) {
                throw new Error("Erro ao enviar dados " + response);
            }
            addOptionToDropDown(type, await response.json());
        })
        .catch(error => {
            alert("Deu errado! -> (register())" + error);
        });
}

function registerInterestDependency(type) {
    var jsonObject = {};
    let name = prompt('Inform the name of the ' + (type).toUpperCase() + ':');
    if (name == null || name == '') return;
    jsonObject['name'] = name;
    register(type, jsonObject);
}

async function registerInterest() {
    let game = await generateInterestJSON();
    console.log(game);
    register('interest', game);
}

function generateInterestJSON() {
    let nameGame = document.getElementById('txt-name').value;
    let idCompany = parseInt(document.getElementById('dd-company').value);
    let idAgeRating = parseInt(document.getElementById("dd-age-rating").value);
    let lowestPrice = parseFloat(document.getElementById('txt-lowest-price').value); 
    let highestPrice = parseFloat(document.getElementById('txt-highest-price').value);

    console.log(lowestPrice);
    console.log(highestPrice);

    let dubbingLanguagesIdList = [];
    for (let option of $("#dd-dubbed-languages option:selected")) {
        dubbingLanguagesIdList.push(option.value);
    }
    let subtitleLanguagesIdList = [];
    for (let option of $("#dd-subtitled-languages option:selected")) {
        subtitleLanguagesIdList.push(option.value);
    }
    let genresIdList = [];
    for (let option of $("#dd-genre option:selected")) {
        genresIdList.push(option.value);
    }
    let subGenresIdList = [];
    for (let option of $("#dd-subgenre option:selected")) {
        subGenresIdList.push(option.value);
    }
    let platformsIdList = [];
    for (let option of $("#dd-platform option:selected")) {
        platformsIdList.push(parseInt(option.value));
    }

    game = {
        "name": nameGame,
        "companyId": idCompany,
        "lowestPrice": lowestPrice,
        "highestPrice": highestPrice,
        "ageRatingId": idAgeRating,
        "dubbingLanguagesIdList": dubbingLanguagesIdList,
        "subtitleLanguagesIdList": subtitleLanguagesIdList,
        "genresIdList": genresIdList,
        "subGenresIdList": subGenresIdList,
        "platformsIdList": platformsIdList
    }

    return game;
}




var languages = [
    {
        "id": "ab",
        "name": "Abkhazian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ace",
        "name": "Achinese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ach",
        "name": "Acoli",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ada",
        "name": "Adangme",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ady",
        "name": "Adyghe",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "aa",
        "name": "Afar",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "afh",
        "name": "Afrihili",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "af",
        "name": "Afrikaans",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "agq",
        "name": "Aghem",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ain",
        "name": "Ainu",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ak",
        "name": "Akan",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "akk",
        "name": "Akkadian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bss",
        "name": "Akoose",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "akz",
        "name": "Alabama",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sq",
        "name": "Albanian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ale",
        "name": "Aleut",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "arq",
        "name": "Algerian Arabic",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "am",
        "name": "Amarik",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "en_US",
        "name": "American English",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ase",
        "name": "American Sign Language",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "egy",
        "name": "Ancient Egyptian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "grc",
        "name": "Ancient Greek",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "anp",
        "name": "Angika",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "njo",
        "name": "Ao Naga",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ar",
        "name": "Arabik",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "an",
        "name": "Aragonese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "arc",
        "name": "Aramaic",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "aro",
        "name": "Araona",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "arp",
        "name": "Arapaho",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "arw",
        "name": "Arawak",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "hy",
        "name": "Armenian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "rup",
        "name": "Aromanian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "frp",
        "name": "Arpitan",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "as",
        "name": "Assamese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ast",
        "name": "Asturian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "asa",
        "name": "Asu",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "cch",
        "name": "Atsam",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "en_AU",
        "name": "Australian English",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "de_AT",
        "name": "Austrian German",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "av",
        "name": "Avaric",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ae",
        "name": "Avestan",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "awa",
        "name": "Awadhi",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ay",
        "name": "Aymara",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "az",
        "name": "Azerbaijani",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bfq",
        "name": "Badaga",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ksf",
        "name": "Bafia",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bfd",
        "name": "Bafut",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bqi",
        "name": "Bakhtiari",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ban",
        "name": "Balinese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bal",
        "name": "Baluchi",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bm",
        "name": "Bambara",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bax",
        "name": "Bamun",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bjn",
        "name": "Banjar",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bas",
        "name": "Basaa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ba",
        "name": "Bashkir",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "eu",
        "name": "Basque",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bbc",
        "name": "Batak Toba",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bar",
        "name": "Bavarian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bej",
        "name": "Beja",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "be",
        "name": "Belarus kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bem",
        "name": "Bemba",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bez",
        "name": "Bena",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bn",
        "name": "Bengali kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bew",
        "name": "Betawi",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "my",
        "name": "Bɛɛmis kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bho",
        "name": "Bhojpuri",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bik",
        "name": "Bikol",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bin",
        "name": "Bini",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bpy",
        "name": "Bishnupriya",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bi",
        "name": "Bislama",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "byn",
        "name": "Blin",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "zbl",
        "name": "Blissymbols",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "brx",
        "name": "Bodo",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "en",
        "name": "Borɔfo",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bs",
        "name": "Bosnian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bg",
        "name": "Bɔlgeria kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "brh",
        "name": "Brahui",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bra",
        "name": "Braj",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "pt_BR",
        "name": "Brazilian Portuguese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "br",
        "name": "Breton",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "en_GB",
        "name": "British English",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bug",
        "name": "Buginese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bum",
        "name": "Bulu",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bua",
        "name": "Buriat",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "cad",
        "name": "Caddo",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "frc",
        "name": "Cajun French",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "en_CA",
        "name": "Canadian English",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "fr_CA",
        "name": "Canadian French",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "yue",
        "name": "Cantonese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "cps",
        "name": "Capiznon",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "car",
        "name": "Carib",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ca",
        "name": "Catalan",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "cay",
        "name": "Cayuga",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ceb",
        "name": "Cebuano",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tzm",
        "name": "Central Atlas Tamazight",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "dtp",
        "name": "Central Dusun",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ckb",
        "name": "Central Kurdish",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "esu",
        "name": "Central Yupik",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "shu",
        "name": "Chadian Arabic",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "chg",
        "name": "Chagatai",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ch",
        "name": "Chamorro",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ce",
        "name": "Chechen",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "chr",
        "name": "Cherokee",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "chy",
        "name": "Cheyenne",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "chb",
        "name": "Chibcha",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "cgg",
        "name": "Chiga",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "qug",
        "name": "Chimborazo Highland Quichua",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "chn",
        "name": "Chinook Jargon",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "chp",
        "name": "Chipewyan",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "cho",
        "name": "Choctaw",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "cu",
        "name": "Church Slavic",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "chk",
        "name": "Chuukese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "cv",
        "name": "Chuvash",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "nwc",
        "name": "Classical Newari",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "syc",
        "name": "Classical Syriac",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ksh",
        "name": "Colognian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "swb",
        "name": "Comorian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "swc",
        "name": "Congo Swahili",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "cop",
        "name": "Coptic",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kw",
        "name": "Cornish",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "co",
        "name": "Corsican",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "cr",
        "name": "Cree",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mus",
        "name": "Creek",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "crh",
        "name": "Crimean Turkish",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "hr",
        "name": "Croatian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "dak",
        "name": "Dakota",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "da",
        "name": "Danish",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "dar",
        "name": "Dargwa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "dzg",
        "name": "Dazaga",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "del",
        "name": "Delaware",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "nl",
        "name": "Dɛɛkye",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "din",
        "name": "Dinka",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "dv",
        "name": "Divehi",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "doi",
        "name": "Dogri",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "dgr",
        "name": "Dogrib",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "dua",
        "name": "Duala",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "dyu",
        "name": "Dyula",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "dz",
        "name": "Dzongkha",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "frs",
        "name": "Eastern Frisian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "efi",
        "name": "Efik",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "arz",
        "name": "Egyptian Arabic",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "eka",
        "name": "Ekajuk",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "elx",
        "name": "Elamite",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ebu",
        "name": "Embu",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "egl",
        "name": "Emilian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "myv",
        "name": "Erzya",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "eo",
        "name": "Esperanto",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "et",
        "name": "Estonian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "pt_PT",
        "name": "European Portuguese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "es_ES",
        "name": "European Spanish",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ee",
        "name": "Ewe",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ewo",
        "name": "Ewondo",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ext",
        "name": "Extremaduran",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "fan",
        "name": "Fang",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "fat",
        "name": "Fanti",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "fo",
        "name": "Faroese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "hif",
        "name": "Fiji Hindi",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "fj",
        "name": "Fijian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "fil",
        "name": "Filipino",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "fi",
        "name": "Finnish",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "nl_BE",
        "name": "Flemish",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "fon",
        "name": "Fon",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "gur",
        "name": "Frafra",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "fr",
        "name": "Frɛnkye",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "fur",
        "name": "Friulian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ff",
        "name": "Fulah",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "gaa",
        "name": "Ga",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "gag",
        "name": "Gagauz",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "gl",
        "name": "Galician",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "gan",
        "name": "Gan Chinese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "lg",
        "name": "Ganda",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "gay",
        "name": "Gayo",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "gba",
        "name": "Gbaya",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "gez",
        "name": "Geez",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ka",
        "name": "Georgian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "aln",
        "name": "Gheg Albanian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bbj",
        "name": "Ghomala",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "glk",
        "name": "Gilaki",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "gil",
        "name": "Gilbertese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "gom",
        "name": "Goan Konkani",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "gon",
        "name": "Gondi",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "gor",
        "name": "Gorontalo",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "got",
        "name": "Gothic",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "grb",
        "name": "Grebo",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "el",
        "name": "Greek kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "gn",
        "name": "Guarani",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "gu",
        "name": "Gujarati",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "guz",
        "name": "Gusii",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "gwi",
        "name": "Gwichʼin",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "de",
        "name": "Gyaaman",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "jv",
        "name": "Gyabanis kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ja",
        "name": "Gyapan kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "hai",
        "name": "Haida",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ht",
        "name": "Haitian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "hak",
        "name": "Hakka Chinese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "hu",
        "name": "Hangri kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ha",
        "name": "Hausa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "haw",
        "name": "Hawaiian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "he",
        "name": "Hebrew",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "hz",
        "name": "Herero",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "hil",
        "name": "Hiligaynon",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "hi",
        "name": "Hindi",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ho",
        "name": "Hiri Motu",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "hit",
        "name": "Hittite",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "hmn",
        "name": "Hmong",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "hup",
        "name": "Hupa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "iba",
        "name": "Iban",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ibb",
        "name": "Ibibio",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "is",
        "name": "Icelandic",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "io",
        "name": "Ido",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ig",
        "name": "Igbo",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ilo",
        "name": "Iloko",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "smn",
        "name": "Inari Sami",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "id",
        "name": "Indonihyia kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "izh",
        "name": "Ingrian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "inh",
        "name": "Ingush",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ia",
        "name": "Interlingua",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ie",
        "name": "Interlingue",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "iu",
        "name": "Inuktitut",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ik",
        "name": "Inupiaq",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ga",
        "name": "Irish",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "it",
        "name": "Italy kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "jam",
        "name": "Jamaican Creole English",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kaj",
        "name": "Jju",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "dyo",
        "name": "Jola-Fonyi",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "jrb",
        "name": "Judeo-Arabic",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "jpr",
        "name": "Judeo-Persian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "jut",
        "name": "Jutish",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kbd",
        "name": "Kabardian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kea",
        "name": "Kabuverdianu",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kab",
        "name": "Kabyle",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kac",
        "name": "Kachin",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kgp",
        "name": "Kaingang",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kkj",
        "name": "Kako",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kl",
        "name": "Kalaallisut",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kln",
        "name": "Kalenjin",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "xal",
        "name": "Kalmyk",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kam",
        "name": "Kamba",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "km",
        "name": "Kambodia kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kbl",
        "name": "Kanembu",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kn",
        "name": "Kannada",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kr",
        "name": "Kanuri",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kaa",
        "name": "Kara-Kalpak",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "krc",
        "name": "Karachay-Balkar",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "krl",
        "name": "Karelian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ks",
        "name": "Kashmiri",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "csb",
        "name": "Kashubian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kaw",
        "name": "Kawi",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kk",
        "name": "Kazakh",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ken",
        "name": "Kenyang",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kha",
        "name": "Khasi",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kho",
        "name": "Khotanese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "khw",
        "name": "Khowar",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ki",
        "name": "Kikuyu",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kmb",
        "name": "Kimbundu",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "krj",
        "name": "Kinaray-a",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kiu",
        "name": "Kirmanjki",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tlh",
        "name": "Klingon",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bkm",
        "name": "Kom",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kv",
        "name": "Komi",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "koi",
        "name": "Komi-Permyak",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kg",
        "name": "Kongo",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kok",
        "name": "Konkani",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ko",
        "name": "Korea kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kfo",
        "name": "Koro",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kos",
        "name": "Kosraean",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "avk",
        "name": "Kotava",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "khq",
        "name": "Koyra Chiini",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ses",
        "name": "Koyraboro Senni",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kpe",
        "name": "Kpelle",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kri",
        "name": "Krio",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kj",
        "name": "Kuanyama",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kum",
        "name": "Kumyk",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ku",
        "name": "Kurdish",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kru",
        "name": "Kurukh",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kut",
        "name": "Kutenai",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "nmg",
        "name": "Kwasio",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "zh",
        "name": "Kyaena kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "cs",
        "name": "Kyɛk kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ky",
        "name": "Kyrgyz",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "quc",
        "name": "Kʼicheʼ",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "lad",
        "name": "Ladino",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "lah",
        "name": "Lahnda",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "lkt",
        "name": "Lakota",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "lam",
        "name": "Lamba",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "lag",
        "name": "Langi",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "lo",
        "name": "Lao",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ltg",
        "name": "Latgalian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "la",
        "name": "Latin",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "es_419",
        "name": "Latin American Spanish",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "lv",
        "name": "Latvian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "lzz",
        "name": "Laz",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "lez",
        "name": "Lezghian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "lij",
        "name": "Ligurian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "li",
        "name": "Limburgish",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ln",
        "name": "Lingala",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "lfn",
        "name": "Lingua Franca Nova",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "lzh",
        "name": "Literary Chinese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "lt",
        "name": "Lithuanian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "liv",
        "name": "Livonian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "jbo",
        "name": "Lojban",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "lmo",
        "name": "Lombard",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "nds",
        "name": "Low German",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sli",
        "name": "Lower Silesian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "dsb",
        "name": "Lower Sorbian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "loz",
        "name": "Lozi",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "lu",
        "name": "Luba-Katanga",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "lua",
        "name": "Luba-Lulua",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "lui",
        "name": "Luiseno",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "smj",
        "name": "Lule Sami",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "lun",
        "name": "Lunda",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "luo",
        "name": "Luo",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "lb",
        "name": "Luxembourgish",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "luy",
        "name": "Luyia",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mde",
        "name": "Maba",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mk",
        "name": "Macedonian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "jmc",
        "name": "Machame",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mad",
        "name": "Madurese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "maf",
        "name": "Mafa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mag",
        "name": "Magahi",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "vmf",
        "name": "Main-Franconian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mai",
        "name": "Maithili",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mak",
        "name": "Makasar",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mgh",
        "name": "Makhuwa-Meetto",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kde",
        "name": "Makonde",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mg",
        "name": "Malagasy",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ms",
        "name": "Malay kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ml",
        "name": "Malayalam",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mt",
        "name": "Maltese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mnc",
        "name": "Manchu",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mdr",
        "name": "Mandar",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "man",
        "name": "Mandingo",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mni",
        "name": "Manipuri",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "gv",
        "name": "Manx",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mi",
        "name": "Maori",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "arn",
        "name": "Mapuche",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mr",
        "name": "Marathi",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "chm",
        "name": "Mari",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mh",
        "name": "Marshallese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mwr",
        "name": "Marwari",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mas",
        "name": "Masai",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mzn",
        "name": "Mazanderani",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "byv",
        "name": "Medumba",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "men",
        "name": "Mende",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mwv",
        "name": "Mentawai",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mer",
        "name": "Meru",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mgo",
        "name": "Metaʼ",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "es_MX",
        "name": "Mexican Spanish",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mic",
        "name": "Micmac",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "dum",
        "name": "Middle Dutch",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "enm",
        "name": "Middle English",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "frm",
        "name": "Middle French",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "gmh",
        "name": "Middle High German",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mga",
        "name": "Middle Irish",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "nan",
        "name": "Min Nan Chinese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "min",
        "name": "Minangkabau",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "xmf",
        "name": "Mingrelian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mwl",
        "name": "Mirandese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "lus",
        "name": "Mizo",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ar_001",
        "name": "Modern Standard Arabic",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "moh",
        "name": "Mohawk",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mdf",
        "name": "Moksha",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ro_MD",
        "name": "Moldavian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "lol",
        "name": "Mongo",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mn",
        "name": "Mongolian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mfe",
        "name": "Morisyen",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ary",
        "name": "Moroccan Arabic",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mos",
        "name": "Mossi",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mul",
        "name": "Multiple Languages",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mua",
        "name": "Mundang",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ttt",
        "name": "Muslim Tat",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mye",
        "name": "Myene",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "naq",
        "name": "Nama",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "na",
        "name": "Nauru",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "nv",
        "name": "Navajo",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ng",
        "name": "Ndonga",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "nap",
        "name": "Neapolitan",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "new",
        "name": "Newari",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ne",
        "name": "Nɛpal kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sba",
        "name": "Ngambay",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "nnh",
        "name": "Ngiemboon",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "jgo",
        "name": "Ngomba",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "yrl",
        "name": "Nheengatu",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "nia",
        "name": "Nias",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "niu",
        "name": "Niuean",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "zxx",
        "name": "No linguistic content",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "nog",
        "name": "Nogai",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "nd",
        "name": "North Ndebele",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "frr",
        "name": "Northern Frisian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "se",
        "name": "Northern Sami",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "nso",
        "name": "Northern Sotho",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "no",
        "name": "Norwegian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "nb",
        "name": "Norwegian Bokmål",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "nn",
        "name": "Norwegian Nynorsk",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "nov",
        "name": "Novial",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "nus",
        "name": "Nuer",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "nym",
        "name": "Nyamwezi",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ny",
        "name": "Nyanja",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "nyn",
        "name": "Nyankole",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tog",
        "name": "Nyasa Tonga",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "nyo",
        "name": "Nyoro",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "nzi",
        "name": "Nzima",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "nqo",
        "name": "NʼKo",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "oc",
        "name": "Occitan",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "oj",
        "name": "Ojibwa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ang",
        "name": "Old English",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "fro",
        "name": "Old French",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "goh",
        "name": "Old High German",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sga",
        "name": "Old Irish",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "non",
        "name": "Old Norse",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "peo",
        "name": "Old Persian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "pro",
        "name": "Old Provençal",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "or",
        "name": "Oriya",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "om",
        "name": "Oromo",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "osa",
        "name": "Osage",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "os",
        "name": "Ossetic",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ota",
        "name": "Ottoman Turkish",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "pal",
        "name": "Pahlavi",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "pfl",
        "name": "Palatine German",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "pau",
        "name": "Palauan",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "pi",
        "name": "Pali",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "pam",
        "name": "Pampanga",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "pag",
        "name": "Pangasinan",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "pap",
        "name": "Papiamento",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ps",
        "name": "Pashto",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "pdc",
        "name": "Pennsylvania German",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "fa",
        "name": "Pɛɛhyia kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "phn",
        "name": "Phoenician",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "pcd",
        "name": "Picard",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "pms",
        "name": "Piedmontese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "pdt",
        "name": "Plautdietsch",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "pon",
        "name": "Pohnpeian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "pnt",
        "name": "Pontic",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "pl",
        "name": "Pɔland kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "pt",
        "name": "Pɔɔtugal kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "prg",
        "name": "Prussian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "pa",
        "name": "Pungyabi kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "qu",
        "name": "Quechua",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ru",
        "name": "Rahyia kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "raj",
        "name": "Rajasthani",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "rap",
        "name": "Rapanui",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "rar",
        "name": "Rarotongan",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "rw",
        "name": "Rewanda kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "rif",
        "name": "Riffian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "rgn",
        "name": "Romagnol",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "rm",
        "name": "Romansh",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "rom",
        "name": "Romany",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "rof",
        "name": "Rombo",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ro",
        "name": "Romenia kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "root",
        "name": "Root",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "rtm",
        "name": "Rotuman",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "rug",
        "name": "Roviana",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "rn",
        "name": "Rundi",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "rue",
        "name": "Rusyn",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "rwk",
        "name": "Rwa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ssy",
        "name": "Saho",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sah",
        "name": "Sakha",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sam",
        "name": "Samaritan Aramaic",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "saq",
        "name": "Samburu",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sm",
        "name": "Samoan",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sgs",
        "name": "Samogitian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sad",
        "name": "Sandawe",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sg",
        "name": "Sango",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sbp",
        "name": "Sangu",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sa",
        "name": "Sanskrit",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sat",
        "name": "Santali",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sc",
        "name": "Sardinian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sas",
        "name": "Sasak",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sdc",
        "name": "Sassarese Sardinian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "stq",
        "name": "Saterland Frisian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "saz",
        "name": "Saurashtra",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sco",
        "name": "Scots",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "gd",
        "name": "Scottish Gaelic",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sly",
        "name": "Selayar",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sel",
        "name": "Selkup",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "seh",
        "name": "Sena",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "see",
        "name": "Seneca",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sr",
        "name": "Serbian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sh",
        "name": "Serbo-Croatian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "srr",
        "name": "Serer",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sei",
        "name": "Seri",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ksb",
        "name": "Shambala",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "shn",
        "name": "Shan",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sn",
        "name": "Shona",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ii",
        "name": "Sichuan Yi",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "scn",
        "name": "Sicilian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sid",
        "name": "Sidamo",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bla",
        "name": "Siksika",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "szl",
        "name": "Silesian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "zh_Hans",
        "name": "Simplified Chinese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sd",
        "name": "Sindhi",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "si",
        "name": "Sinhala",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sms",
        "name": "Skolt Sami",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "den",
        "name": "Slave",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sk",
        "name": "Slovak",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sl",
        "name": "Slovenian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "xog",
        "name": "Soga",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sog",
        "name": "Sogdien",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "so",
        "name": "Somalia kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "snk",
        "name": "Soninke",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "azb",
        "name": "South Azerbaijani",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "nr",
        "name": "South Ndebele",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "alt",
        "name": "Southern Altai",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sma",
        "name": "Southern Sami",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "st",
        "name": "Southern Sotho",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "es",
        "name": "Spain kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "srn",
        "name": "Sranan Tongo",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "zgh",
        "name": "Standard Moroccan Tamazight",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "suk",
        "name": "Sukuma",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sux",
        "name": "Sumerian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "su",
        "name": "Sundanese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sus",
        "name": "Susu",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sw",
        "name": "Swahili",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ss",
        "name": "Swati",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "sv",
        "name": "Sweden kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "fr_CH",
        "name": "Swiss French",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "gsw",
        "name": "Swiss German",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "de_CH",
        "name": "Swiss High German",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "syr",
        "name": "Syriac",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "shi",
        "name": "Tachelhit",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "th",
        "name": "Taeland kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tl",
        "name": "Tagalog",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ty",
        "name": "Tahitian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "dav",
        "name": "Taita",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tg",
        "name": "Tajik",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tly",
        "name": "Talysh",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tmh",
        "name": "Tamashek",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ta",
        "name": "Tamil kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "trv",
        "name": "Taroko",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "twq",
        "name": "Tasawaq",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tt",
        "name": "Tatar",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "te",
        "name": "Telugu",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ter",
        "name": "Tereno",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "teo",
        "name": "Teso",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tet",
        "name": "Tetum",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tr",
        "name": "Tɛɛki kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "bo",
        "name": "Tibetan",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tig",
        "name": "Tigre",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ti",
        "name": "Tigrinya",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tem",
        "name": "Timne",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tiv",
        "name": "Tiv",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tli",
        "name": "Tlingit",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tpi",
        "name": "Tok Pisin",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tkl",
        "name": "Tokelau",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "to",
        "name": "Tongan",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "fit",
        "name": "Tornedalen Finnish",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "zh_Hant",
        "name": "Traditional Chinese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tkr",
        "name": "Tsakhur",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tsd",
        "name": "Tsakonian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tsi",
        "name": "Tsimshian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ts",
        "name": "Tsonga",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tn",
        "name": "Tswana",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tcy",
        "name": "Tulu",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tum",
        "name": "Tumbuka",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "aeb",
        "name": "Tunisian Arabic",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tk",
        "name": "Turkmen",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tru",
        "name": "Turoyo",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tvl",
        "name": "Tuvalu",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tyv",
        "name": "Tuvinian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "tw",
        "name": "Twi",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "kcg",
        "name": "Tyap",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "udm",
        "name": "Udmurt",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "uga",
        "name": "Ugaritic",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "uk",
        "name": "Ukren kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "umb",
        "name": "Umbundu",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "und",
        "name": "Unknown Language",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "hsb",
        "name": "Upper Sorbian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ur",
        "name": "Urdu kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ug",
        "name": "Uyghur",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "uz",
        "name": "Uzbek",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "vai",
        "name": "Vai",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ve",
        "name": "Venda",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "vec",
        "name": "Venetian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "vep",
        "name": "Veps",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "vi",
        "name": "Viɛtnam kasa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "vo",
        "name": "Volapük",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "vro",
        "name": "Võro",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "vot",
        "name": "Votic",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "vun",
        "name": "Vunjo",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "wa",
        "name": "Walloon",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "wae",
        "name": "Walser",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "war",
        "name": "Waray",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "wbp",
        "name": "Warlpiri",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "was",
        "name": "Washo",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "guc",
        "name": "Wayuu",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "cy",
        "name": "Welsh",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "vls",
        "name": "West Flemish",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "fy",
        "name": "Western Frisian",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "mrj",
        "name": "Western Mari",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "wal",
        "name": "Wolaytta",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "wo",
        "name": "Wolof",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "wuu",
        "name": "Wu Chinese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "xh",
        "name": "Xhosa",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "hsn",
        "name": "Xiang Chinese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "yav",
        "name": "Yangben",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "yao",
        "name": "Yao",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "yap",
        "name": "Yapese",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "ybb",
        "name": "Yemba",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "yi",
        "name": "Yiddish",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "yo",
        "name": "Yoruba",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "zap",
        "name": "Zapotec",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "dje",
        "name": "Zarma",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "zza",
        "name": "Zaza",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "zea",
        "name": "Zeelandic",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "zen",
        "name": "Zenaga",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "za",
        "name": "Zhuang",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "gbz",
        "name": "Zoroastrian Dari",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "zu",
        "name": "Zulu",
        "dubbedInterests": [],
        "subtitledInterest": []
    },
    {
        "id": "zun",
        "name": "Zuni",
        "dubbedInterests": [],
        "subtitledInterest": []
    }
]