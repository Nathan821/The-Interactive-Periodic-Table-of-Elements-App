
const hoverSound = new Audio('assets/hovering over.mp3');
const clickSound = new Audio('assets/zapsplat_multimedia_game_sound_menu_click_004_76690.mp3');

function playHoverSound() {
  hoverSound.currentTime = 0; 
  hoverSound.play();
}


function playClickSound() {
  clickSound.currentTime = 0; 
  clickSound.play();
}


const elements = document.querySelectorAll('td');


const buttons = document.querySelectorAll('.legend-button');


elements.forEach((element) => {
  element.addEventListener('mouseenter', playHoverSound); 
  element.addEventListener('mousedown', playClickSound);  
});


buttons.forEach((button) => {
  button.addEventListener('mouseenter', playHoverSound); 
  button.addEventListener('mousedown', playClickSound);  
});


function highlightGroup(groupClass) {
  
  const allElements = document.querySelectorAll('#table1 td, #table2 td');
  allElements.forEach(element => {
    element.classList.remove('highlight');
  });

  
  const allLegendButtons = document.querySelectorAll('.legend-button');
  allLegendButtons.forEach(button => {
    button.classList.remove('active');
  });

  
  const groupElements = document.querySelectorAll(`.${groupClass}`);
  groupElements.forEach(element => {
    element.classList.add('highlight');
  });

  
  const activeButton = document.getElementById(getButtonIdFromGroupClass(groupClass));
  if (activeButton) {
    activeButton.classList.add('active');
  }
}


function resetHighlight() {
const highlightedElements = document.querySelectorAll('.highlight');
  highlightedElements.forEach(el => el.classList.remove('highlight'));

  
  const legendButtons = document.querySelectorAll('.legend-button');
  legendButtons.forEach(btn => btn.classList.remove('active'));
}


function getButtonIdFromGroupClass(groupClass) {
  const groupMapping = {
    'litm': 'alkali-metals',
    'be': 'alkaline-earth-metals',
    'sc': 'transition-metals',
    'alum': 'post-transition-metals',
    'bo': 'metalloids',
    'carbo': 'reactive-non-metals',
    'Helium': 'noble-gases',
    'lact': 'actinides' 
  };

  return groupMapping[groupClass];
}


let elementementName = document.getElementById('aluminium-name');
let elementImage = document.getElementById('aluminium-image');
let elementDescription = document.getElementById('aluminium-description');
let elementAtomicNumber = document.getElementById('aluminium-atomic-mass-value-left');
let elementAtomicMass = document.getElementById('aluminium-atomic-mass-value-right');

let hydrogen = document.getElementById('hydro');
hydrogen.onclick = function() {
  elementementName.innerHTML = 'Hydrogen';
  elementImage.src = 'assets/s-l400.jpg';
  elementDescription.innerHTML = 'Hydrogen is a colorless, odorless, tasteless, flammable gaseous substance that is the simplest member of the family of chemical elements.';
  elementAtomicNumber.innerHTML = '1';
  elementAtomicMass.innerHTML = '1.008';
}

let ltm = document.getElementById('li');
ltm.onclick = function(){
  elementementName.innerHTML = 'Lithium';
  elementImage.src = 'assets/Lithium_element.jpg';
  elementDescription.innerHTML = 'Lithium is a soft, silvery-white alkali metal. Under standard conditions, it is the least dense metal and the least dense solid element. Like all alkali metals, lithium is highly reactive and flammable, and must be stored in vacuum, inert atmosphere, or inert liquid such as purified kerosene or mineral oil.';
  elementAtomicNumber.innerHTML = '3';
  elementAtomicMass.innerHTML = '6.9410';
}

let na = document.getElementById('na');
na.onclick = function(){
  elementementName.innerHTML = 'Sodium';
  elementImage.src = 'assets/Sodium.jpg';
  elementDescription.innerHTML = 'Sodium is a chemical element; it has symbol Na and atomic number 11. It is a soft, silvery-white, highly reactive metal. Sodium is an alkali metal, being in group 1 of the periodic table. Its only stable isotope is ²³Na.';
  elementAtomicNumber.innerHTML = '11';
  elementAtomicMass.innerHTML = '22.9900';
}

let k = document.getElementById('k');
k.onclick = function(){
  elementementName.innerHTML = 'Potassium';
  elementImage.src = 'assets/Potassium.jpg';
  elementDescription.innerHTML = 'Potassium is a mineral that your body needs to work properly. It is a type of electrolyte. It helps your nerves to function and muscles to contract. It helps your heartbeat stay regular. It also helps move nutrients into cells and waste products out of cells. It is an essential element in the body.';
  elementAtomicNumber.innerHTML = '19';
  elementAtomicMass.innerHTML = '39.098';
}

let rb = document.getElementById('rb');
rb.onclick = function(){
  elementementName.innerHTML = 'Potassium';
  elementImage.src = 'assets/Rubidium.jpg';
  elementDescription.innerHTML = 'Rubidium is a very soft, ductile, silvery-white metal. It is the second most electropositive of the stable alkali metals and melts at a temperature of 39.3 °C (102.7 °F).';
  elementAtomicNumber.innerHTML = '37';
  elementAtomicMass.innerHTML = '85.468';
}

let sc = document.getElementById('rb');
cs.onclick = function(){
  elementementName.innerHTML = 'Cesium';
  elementImage.src = 'assets/Cesium.jpg';
  elementDescription.innerHTML = 'Cesium is the most electropositive and most alkaline element, and thus, more easily than all other elements, it loses its single valence in the noble gas state.';
  elementAtomicNumber.innerHTML = '55';
  elementAtomicMass.innerHTML = '132.91';
}

let fr = document.getElementById('fr');
fr.onclick = function(){
  elementementName.innerHTML = 'Francium';
  elementImage.src = 'assets/francium-metal.jpg';
  elementDescription.innerHTML = 'francium (Fr), heaviest chemical element of Group 1 (Ia) in the periodic table, the alkali metal group. It exists only in short-lived radioactive forms.';
  elementAtomicNumber.innerHTML = '87';
  elementAtomicMass.innerHTML = '223';
}

let be = document.getElementById('be');
be.onclick = function(){
  elementementName.innerHTML = 'Beryllium';
  elementImage.src = 'assets/220px-BERYLLIUM_-_KUGEL_1.jpg';
  elementDescription.innerHTML = 'Beryllium is a silvery-white metal. It is relatively soft and has a low density. Uses. Beryllium is used in alloys with copper or nickel to make gyroscopes, springs, electrical contacts, spot-welding electrodes and non-sparking tools.';
  elementAtomicNumber.innerHTML = '4';
  elementAtomicMass.innerHTML = '9.012';
}
let mg = document.getElementById('mg');
mg.onclick = function(){
  elementementName.innerHTML = 'Magnesium';
  elementImage.src = 'assets/Magnesium.jpg';
  elementDescription.innerHTML = 'Magnesium is a cofactor in more than 300 enzyme systems that regulate diverse biochemical reactions in the body, including protein synthesis, muscle and nerve function, blood glucose control, and blood pressure regulation [1-3].';
  elementAtomicNumber.innerHTML = '12';
  elementAtomicMass.innerHTML = '24.305';
}

let ca = document.getElementById('ca');
ca.onclick = function(){
  elementementName.innerHTML = 'Calcium';
  elementImage.src = 'assets/1200px-Calcium_unter_Argon_Schutzgasatmosphäre.jpg';
  elementDescription.innerHTML = 'Calcium is a mineral your body needs to build and maintain strong bones and to carry out many important functions Calcium is the most abundant mineral in the body. Almost all calcium in the body is stored in bones and teeth, giving them structure and hardness.';
  elementAtomicNumber.innerHTML = '20';
  elementAtomicMass.innerHTML = '40.078';
}

let sr = document.getElementById('sr');
sr.onclick = function(){
  elementementName.innerHTML = 'Strontium';
  elementImage.src = 'assets/Strontium_destilled_crystals.jpg';
  elementDescription.innerHTML = 'Strontium is a chemical element with symbol Sr and atomic number 38. Classified as an alkaline earth metal, Strontium is a solid at room temperature.';
  elementAtomicNumber.innerHTML = '38';
  elementAtomicMass.innerHTML = '87.620';
}

let ba = document.getElementById('ba');
ba.onclick = function(){
  elementementName.innerHTML = 'Barium';
  elementImage.src = 'assets/Barium_unter_Argon_Schutzgas_Atmosphäre.jpg';
  elementDescription.innerHTML = 'Barium is a soft, silvery metal that rapidly tarnishes in air and reacts with water. Uses. Barium is not an extensively used element. Most is used in drilling fluids for oil and gas wells. It is also used in paint and in glassmaking.';
  elementAtomicNumber.innerHTML = '56';
  elementAtomicMass.innerHTML = '137.33';
}

let rad = document.getElementById('rad');
rad.onclick = function(){
  elementementName.innerHTML = 'Radium';
  elementImage.src = 'assets/Radium226.jpg';
  elementDescription.innerHTML = 'Radium (chemical symbol Ra) is a naturally occurring radioactive metal. Radium is a radionuclide formed by the decay of uranium and thorium in the environment. The most common isotopes.';
  elementAtomicNumber.innerHTML = '88';
  elementAtomicMass.innerHTML = '226';
}

let sc2 = document.getElementById('sc2');
sc2.onclick = function(){
  elementementName.innerHTML = 'Scandium';
  elementImage.src = 'assets/Scandium.jpg';
  elementDescription.innerHTML = 'Scandium is a silvery white, moderately soft metal. It is fairly stable in air but will slowly change its colour from silvery white to a light brown when exposed to air. Uses. Scandium is used in the production of batteries.';
  elementAtomicNumber.innerHTML = '21';
  elementAtomicMass.innerHTML = '44.956';
}

let yt = document.getElementById('yt');
yt.onclick = function(){
  elementementName.innerHTML = 'Yttrium';
  elementImage.src = 'assets/Ytterbium.jpg';
  elementDescription.innerHTML = 'Yttrium is a silvery white, moderately soft, ductile metal. It is quite stable in air; rapid oxidation begins above approximately 450 °C (840 °F).';
  elementAtomicNumber.innerHTML = '39';
  elementAtomicMass.innerHTML = '88.906';
}

let la = document.getElementById('la');
la.onclick = function(){
  elementementName.innerHTML = 'Lanthanum';
  elementImage.src = 'assets/Lanthanum.jpg';
  elementDescription.innerHTML = 'Lanthanum is a silvery white, moderately soft, ductile metal. It is quite stable in air; rapid oxidation begins above approximately 450 °C (840 °F).';
  elementAtomicNumber.innerHTML = '57';
  elementAtomicMass.innerHTML = '138.905';
}


let ac = document.getElementById('ac');
ac.onclick = function(){
  elementementName.innerHTML = 'Actinium';
  elementImage.src = 'assets/Actinium.webp';
  elementDescription.innerHTML = 'Actinium, the ions of which in solution are colourless, exhibits an oxidation state of +3, closely resembling the rare-earth lanthanoid elements in its chemical properties';
  elementAtomicNumber.innerHTML = '89';
  elementAtomicMass.innerHTML = '227';
}

let ti = document.getElementById('ti');
ti.onclick = function(){
  elementementName.innerHTML = 'Titanium';
  elementImage.src = 'assets/Titanium.jpg';
  elementDescription.innerHTML = 'Titanium is a lightweight, high-strength, low-corrosion structural metal and is used in alloy form for parts in high-speed aircraft.';
  elementAtomicNumber.innerHTML = '22';
  elementAtomicMass.innerHTML = '47.867';
}

let zr = document.getElementById('zr');
zr.onclick = function(){
  elementementName.innerHTML = 'Zirconium';
  elementImage.src = 'assets/Zirconium.jpg';
  elementDescription.innerHTML = 'Zirconium is a shiny silver-grey metal with a high melting point. It is highly ductile and extremely resistant to corrosion and heat. Its symbol in the periodic table is Zr, and its atomic number is 40. It melts at 1855 degrees Celsius (°C) and boils at 4409 °C, and it is not corroded by acids, alkalis or seawater.';
  elementAtomicNumber.innerHTML = '40';
  elementAtomicMass.innerHTML = '91.224';
}


let hf = document.getElementById('hf');
hf.onclick = function(){
  elementementName.innerHTML = 'Hafnium';
  elementImage.src = 'assets/hafnium.jpg';
  elementDescription.innerHTML = 'Hafnium is a good absorber of neutrons and is used to make control rods, such as those found in nuclear submarines. It also has a very high melting point.';
  elementAtomicNumber.innerHTML = '72';
  elementAtomicMass.innerHTML = '178.49';
}



let rf = document.getElementById('rf');
rf.onclick = function(){
  elementementName.innerHTML = 'Rutherfordium';
  elementImage.src = 'assets/rutherfordium.jpg';
  elementDescription.innerHTML = 'Rutherfordium (Rf), an artificially produced radioactive transuranium element in Group IVb of the periodic table, atomic number 104, has been discovered. It is a member of the lanthanide series. It is named after the scientist who discovered it: Rutherford, William.';
  elementAtomicNumber.innerHTML = '104';
  elementAtomicMass.innerHTML = '267';
}


let va = document.getElementById('va');
va.onclick = function(){
  elementementName.innerHTML = 'Vanadium';
  elementImage.src = 'assets/vanadium.jpg';
  elementDescription.innerHTML = 'Vanadium is a chemical element; it has symbol V and atomic number 23. It is a hard, silvery-grey, malleable transition metal. The elemental metal is rarely found in nature, but once isolated artificially, the formation of an oxide layer (passivation) somewhat stabilizes the free metal against further oxidation.';
  elementAtomicNumber.innerHTML = '23';
  elementAtomicMass.innerHTML = '50.942';
}


let nb = document.getElementById('nb');
nb.onclick = function(){
  elementementName.innerHTML = 'Niobium';
  elementImage.src = 'assets/niobium.jpg';
  elementDescription.innerHTML = 'Niobium is a chemical element with symbol Nb and atomic number 41. Classified as a transition metal, Niobium is a solid at room temperature.';
  elementAtomicNumber.innerHTML = '41';
  elementAtomicMass.innerHTML = '92.906';
}


let ta = document.getElementById('ta');
ta.onclick = function(){
  elementementName.innerHTML = 'Tantalum';
  elementImage.src = 'assets/tantalum.jpg';
  elementDescription.innerHTML = 'Tantalum is a chemical element with symbol Ta and atomic number 73. Classified as a transition metal, Tantalum is a solid at room temperature.';
  elementAtomicNumber.innerHTML = '73';
  elementAtomicMass.innerHTML = '180.95';
}


let db = document.getElementById('db');
db.onclick = function(){
  elementementName.innerHTML = 'Dubnium';
  elementImage.src = 'assets/Dubnium-2.jpg';
  elementDescription.innerHTML = 'Dubnium is a synthetic chemical element; it has symbol Db and atomic number 105. It is highly radioactive: the most stable known isotope, dubnium-268, with a half-life of approximately 10 seconds.';
  elementAtomicNumber.innerHTML = '105';
  elementAtomicMass.innerHTML = '262';
}

let cr = document.getElementById('cr');
cr.onclick = function(){
  elementementName.innerHTML = 'Chromium';
  elementImage.src = 'assets/chromium.jpg';
  elementDescription.innerHTML = 'Chromium is a chemical element with atomic number 24 and represented by the symbol Cr in the Periodic Table. Chromium is a lustrous, hard metal';
  elementAtomicNumber.innerHTML = '24';
  elementAtomicMass.innerHTML = '51.996';
}


let mo = document.getElementById('mo');
mo.onclick = function(){
  elementementName.innerHTML = 'Molybdenum';
  elementImage.src = 'assets/molybdenum.jpg';
  elementDescription.innerHTML = 'Molybdenum (Mo), chemical element, silver-gray refractory metal of Group 6 (VIb) of the periodic table, used to impart superior strength to steel and other metals.';
  elementAtomicNumber.innerHTML = '42';
  elementAtomicMass.innerHTML = '95.950';
}


let w = document.getElementById('w');
w.onclick = function(){
  elementementName.innerHTML = 'Tungsten';
  elementImage.src = 'assets/tungsten.jpg';
  elementDescription.innerHTML = 'tungsten (W), chemical element, an exceptionally strong refractory metal of Group 6 (VIb) of the periodic table, used in steels to increase hardness and strength and in lamp filaments.';
  elementAtomicNumber.innerHTML = '74';
  elementAtomicMass.innerHTML = '183.84';
}


let sea = document.getElementById('sea');
sea.onclick = function(){
  elementementName.innerHTML = 'Seaborgium';
  elementImage.src = 'assets/Seaborgium-2.jpg';
  elementDescription.innerHTML = 'Seaborgium is a chemical element with symbol Sg and atomic number 106. Classified as a transition metal, Seaborgium is a solid at room temperature';
  elementAtomicNumber.innerHTML = '106';
  elementAtomicMass.innerHTML = '269';
}

let mang = document.getElementById('mang');
mang.onclick = function(){
  elementementName.innerHTML = 'Manganese';
  elementImage.src = 'assets/manganese.jpg';
  elementDescription.innerHTML = 'Manganese is a trace mineral that is essential to our bodies in small amounts. Because we cannot make it, we must obtain it in food or supplements.It is found mostly in bones, the liver, kidneys, and pancreas. Manganese helps the body form connective tissue, bones, blood clotting factors, and sex hormones.';
  elementAtomicNumber.innerHTML = '25';
  elementAtomicMass.innerHTML = '54.938';
}


let tc = document.getElementById('tc');
tc.onclick = function(){
  elementementName.innerHTML = 'Technetium';
  elementImage.src = 'assets/technetium.jpg';
  elementDescription.innerHTML = 'Technetium is a chemical element with symbol Tc and atomic number 43. Classified as a transition metal, Technetium is a solid at room temperature. 43. Tc.';
  elementAtomicNumber.innerHTML = '43';
  elementAtomicMass.innerHTML = '98';
}


let re = document.getElementById('re');
re.onclick = function(){
  elementementName.innerHTML = 'Rhenium';
  elementImage.src = 'assets/Rhenium_single_crystal_bar_and_1cm3_cube.jpg';
  elementDescription.innerHTML = 'Rhenium · The element is mainly used as a petroleum reforming catalyst and also in the turbine engine of high-temperature components as superalloys.';
  elementAtomicNumber.innerHTML = '75';
  elementAtomicMass.innerHTML = '186.21';
}




let bh = document.getElementById('bh');
bh.onclick = function(){
  elementementName.innerHTML = 'Bohrium';
  elementImage.src = 'assets/bohrium.jpg';
  elementDescription.innerHTML = 'Bohrium is a synthetic chemical element which is represented with the symbol Bh and has an atomic number 107. Its name is derived from a Danish physicist named Niels Bohr.';
  elementAtomicNumber.innerHTML = '107';
  elementAtomicMass.innerHTML = '264';
}



let iron = document.getElementById('iron');
iron.onclick = function(){
  elementementName.innerHTML = 'Iron';
  elementImage.src = 'assets/iron.jpg';
  elementDescription.innerHTML = 'Iron is a mineral that is naturally present in many foods, added to some food products, and available as a dietary supplement. Iron is an essential component of hemoglobin, an erythrocyte (red blood cell) protein that transfers oxygen from the lungs to the tissues [1].';
  elementAtomicNumber.innerHTML = '26';
  elementAtomicMass.innerHTML = '55.845';
}


let ru = document.getElementById('ru');
ru.onclick = function(){
  elementementName.innerHTML = 'Ruthenium';
  elementImage.src = 'assets/ruthenium.jpg';
  elementDescription.innerHTML = 'ruthenium (Ru), chemical element, one of the platinum metals of Groups 8–10 (VIIIb), Periods 5 and 6, of the periodic table, used as an alloying agent to harden platinum and palladium. Silver-gray ruthenium metal looks like platinum but is rarer, harder, and more brittle.';
  elementAtomicNumber.innerHTML = '44';
  elementAtomicMass.innerHTML = '101.07';
}


let os = document.getElementById('os');
os.onclick = function(){
  elementementName.innerHTML = 'Osmium';
  elementImage.src = 'assets/osmium.jpg';
  elementDescription.innerHTML = 'Osmium is a lustrous and silvery metal with an atomic number of 76 in the periodic table. It tends to be a dense metal';
  elementAtomicNumber.innerHTML = '76';
  elementAtomicMass.innerHTML = '190.23';
}



let Hassium = document.getElementById('Hassium');
Hassium.onclick = function(){
  elementementName.innerHTML = 'Hassium';
  elementImage.src = 'assets/Hassium.jpg';
  elementDescription.innerHTML = 'Hassium is a synthetic chemical element, expected to have chemical properties similar to those of osmium and a silvery white or metallic gray colour.';
  elementAtomicNumber.innerHTML = '108';
  elementAtomicMass.innerHTML = '269';
}


let coba = document.getElementById('coba');
coba.onclick = function(){
  elementementName.innerHTML = 'Cobalt';
  elementImage.src = 'assets/cobalt.jpg';
  elementDescription.innerHTML = 'Cobalt is a lustrous very hard silvery metal belonging to a group called the "transition metals". It is one of only 3 ferromagnetic transition elements along with iron and nickel.';
  elementAtomicNumber.innerHTML = '27';
  elementAtomicMass.innerHTML = '58.933';
}

//Rhodium


let Rhodium = document.getElementById('Rhodium');
Rhodium.onclick = function(){
  elementementName.innerHTML = 'Rhodium';
  elementImage.src = 'assets/rhodium.jpg';
  elementDescription.innerHTML = 'Rhodium (Rh), chemical element, one of the platinum metals of Groups 8–10 (VIIIb), Periods 5 and 6, of the periodic table, predominantly used as an alloying agent to harden platinum.';
  elementAtomicNumber.innerHTML = '45';
  elementAtomicMass.innerHTML = '102.91';
}


let Iridium = document.getElementById('Iridium');
Iridium.onclick = function(){
  elementementName.innerHTML = 'Iridium';
  elementImage.src = 'assets/iridium.jpg';
  elementDescription.innerHTML = 'Iridium is a hard, silvery metal. It is almost as unreactive as gold. It has a very high density and melting point. Uses. Iridium is the most corrosion-resistant material known.';
  elementAtomicNumber.innerHTML = '77';
  elementAtomicMass.innerHTML = '192.22';
}


//Meitnerium
let Meitnerium = document.getElementById('Meitnerium');
Meitnerium.onclick = function(){
  elementementName.innerHTML = 'Meitnerium';
  elementImage.src = 'assets/meitnerium.jpg';
  elementDescription.innerHTML = 'Meitnerium (Mt) is a synthetic chemical element with the atomic number 109 and symbol Mt in the periodic table.';
  elementAtomicNumber.innerHTML = '109';
  elementAtomicMass.innerHTML = '278';
}


//Nickel


let Nikel = document.getElementById('Nikel');
Nikel.onclick = function(){
  elementementName.innerHTML = 'Nickel';
  elementImage.src = 'assets/nickel.jpg';
  elementDescription.innerHTML = 'Nickel, chemical element, ferromagnetic metal of Group 10 (VIIIb) of the periodic table, markedly resistant to oxidation and corrosion.';
  elementAtomicNumber.innerHTML = '28';
  elementAtomicMass.innerHTML = '58.693';
}


//Palladium
let Palladium = document.getElementById('Palladium');
Palladium.onclick = function(){
  elementementName.innerHTML = 'Palladium';
  elementImage.src = 'assets/palladium.jpg';
  elementDescription.innerHTML = 'Palladium is a chemical element; it has symbol Pd and atomic number 46. It is a rare and lustrous silvery-white metal discovered in 1802.';
  elementAtomicNumber.innerHTML = '46';
  elementAtomicMass.innerHTML = '106.42';
}


//Platinum
let Platinum = document.getElementById('Platinum');
Platinum.onclick = function(){
  elementementName.innerHTML = 'Platinum';
  elementImage.src = 'assets/platinum.jpg';
  elementDescription.innerHTML = 'Platinum is one of the least reactive metals. It has remarkable resistance to corrosion, even at high temperatures, and is therefore considered a noble metal.';
  elementAtomicNumber.innerHTML = '78';
  elementAtomicMass.innerHTML = '195.08';
}



//Darmstadtium

let Darmstadtium = document.getElementById('Darmstadtium');
Darmstadtium.onclick = function(){
  elementementName.innerHTML = 'Darmstadtium';
  elementImage.src = 'assets/darmstadtium.jpg';
  elementDescription.innerHTML = 'A man-made element of which only a few atoms have ever been created. It that is formed by fusing nickel and lead atoms in a heavy ion accelerator.';
  elementAtomicNumber.innerHTML = '110';
  elementAtomicMass.innerHTML = '281';
}


//Copper

let Copper = document.getElementById('Copper');
Copper.onclick = function(){
  elementementName.innerHTML = 'Copper';
  elementImage.src = 'assets/copper.jpg';
  elementDescription.innerHTML = 'copper (Cu), chemical element, a reddish, extremely ductile metal of Group 11 (Ib) of the periodic table that is an unusually good conductor of electricity and heat. Copper is found in the free metallic state in nature.';
  elementAtomicNumber.innerHTML = '29';
  elementAtomicMass.innerHTML = '63.546';
}


//Silver

let Silver = document.getElementById('Silver');
Silver.onclick = function(){
  elementementName.innerHTML = 'Silver';
  elementImage.src = 'assets/silver.jpg';
  elementDescription.innerHTML = 'Silver refers to a precious metal commonly used in the production of jewelry, coins, electronics, and photography.';
  elementAtomicNumber.innerHTML = '47';
  elementAtomicMass.innerHTML = '107.87';
}

//Gold


let Gold = document.getElementById('Gold');
Gold.onclick = function(){
  elementementName.innerHTML = 'Gold';
  elementImage.src = 'assets/gold.jpg';
  elementDescription.innerHTML = 'Gold (Au), chemical element, a dense lustrous yellow precious metal of Group 11 (Ib), Period 6, of the periodic table of the elements. Gold has several qualities that have made it exceptionally valuable throughout history.';
  elementAtomicNumber.innerHTML = '79';
  elementAtomicMass.innerHTML = '196.97';
}

//Roentgenium


let Roentgenium = document.getElementById('Roentgenium');
Roentgenium.onclick = function(){
  elementementName.innerHTML = 'Roentgenium';
  elementImage.src = 'assets/roentgenium.jpg';
  elementDescription.innerHTML = 'Roentgenium is a synthetic chemical element; it has symbol Rg and atomic number 111. It is extremely radioactive and can only be created in a laboratory';
  elementAtomicNumber.innerHTML = '111';
  elementAtomicMass.innerHTML = '282';
}


//Zinc

let Zinc = document.getElementById('Zinc');
Zinc.onclick = function(){
  elementementName.innerHTML = 'Zinc';
  elementImage.src = 'assets/zinc.jpg';
  elementDescription.innerHTML = 'Zinc is an antioxidant that occurs naturally in many foods, such as beans, meat, and fish. It supports immune function and may help treat diarrhea, promote wound healing, and more.';
  elementAtomicNumber.innerHTML = '30';
  elementAtomicMass.innerHTML = '65.380';
}


//Cadmium
let Cadmium = document.getElementById('Cadmium');
Cadmium.onclick = function(){
  elementementName.innerHTML = 'Cadmium';
  elementImage.src = 'assets/cadmium.jpg';
  elementDescription.innerHTML = 'Cadmium (Cd) is a soft, malleable, bluish white metal found in zinc ores, and to a much lesser extent, in the cadmium mineral greenockite. Most of the cadmium produced today is obtained from zinc byproducts and recovered from spent nickel-cadmium batteries.';
  elementAtomicNumber.innerHTML = '48';
  elementAtomicMass.innerHTML = '112.41';
}

//Mercury
let Mercury = document.getElementById('Mercury');
Mercury.onclick = function(){
  elementementName.innerHTML = 'Mercury';
  elementImage.src = 'assets/mercury.jpg';
  elementDescription.innerHTML = 'Mercury is a chemical element; it has symbol Hg and atomic number 80. It is also known as quicksilver and was formerly named hydrargyrum from the Greek';
  elementAtomicNumber.innerHTML = '80';
  elementAtomicMass.innerHTML = '200.59';
}

//Copernicium

let Copernicium = document.getElementById('Copernicium');
Copernicium.onclick = function(){
  elementementName.innerHTML = 'Copernicium';
  elementImage.src = 'assets/copernicium.jpg';
  elementDescription.innerHTML = 'Copernicium is a synthetic chemical element; it has symbol Cn and atomic number 112. Its known isotopes are extremely radioactive, and have only been created in a laboratory.';
  elementAtomicNumber.innerHTML = '112';
  elementAtomicMass.innerHTML = '285';
}

//Boron

let Boron = document.getElementById('Boron');
Boron.onclick = function(){
  elementementName.innerHTML = 'Boron';
  elementImage.src = 'assets/boron.jpg';
  elementDescription.innerHTML = 'Boron (B), chemical element, semimetal of main Group 13 (IIIa, or boron group) of the periodic table, essential to plant growth and of wide industrial application. ';
  elementAtomicNumber.innerHTML = '5';
  elementAtomicMass.innerHTML = '10.811';
}

//Aluminium
let Aluminium = document.getElementById('Aluminium');
Aluminium.onclick = function(){
  elementementName.innerHTML = 'Aluminium';
  elementImage.src = 'assets/aluminium.jpg';
  elementDescription.innerHTML = 'Aluminium is a chemical element; it has symbol Al and atomic number 13. Aluminium has a density lower than that of other common metals, about one-third that of steel. It has a great affinity towards oxygen, forming a protective layer of oxide on the surface when exposed to air';
  elementAtomicNumber.innerHTML = '13';
  elementAtomicMass.innerHTML = '26.982';
}

//Gallium
let Gallium = document.getElementById('Gallium');
Gallium.onclick = function(){
  elementementName.innerHTML = 'Gallium';
  elementImage.src = 'assets/gallium.jpg';
  elementDescription.innerHTML = 'Gallium is a soft, silvery-white metal, similar to aluminium. Uses. Gallium arsenide has a similar structure to silicon and is a useful silicon substitute for the electronics industry. It is an important component of many semiconductors.';
  elementAtomicNumber.innerHTML = '31';
  elementAtomicMass.innerHTML = '69.723';
}


//Indium

let Indium = document.getElementById('Indium');
Indium.onclick = function(){
  elementementName.innerHTML = 'Indium';
  elementImage.src = 'assets/indium.jpg';
  elementDescription.innerHTML = 'Indium is a chemical element; it has symbol In and atomic number 49. It is a silvery-white post-transition metal and one of the softest elements.';
  elementAtomicNumber.innerHTML = '49';
  elementAtomicMass.innerHTML = '114.82';
}


//Thallium

let Thallium = document.getElementById('Thallium');
Thallium.onclick = function(){
  elementementName.innerHTML = 'Thallium';
  elementImage.src = 'assets/thallium.jpg';
  elementDescription.innerHTML = 'Thallium is not freely found in nature. It is a soft grey post-transition metal. It resembles tin when isolated but when exposed to air it may discolour.';
  elementAtomicNumber.innerHTML = '81';
  elementAtomicMass.innerHTML = '204.38';
}

//Nihonium
let Nihonium = document.getElementById('Nihonium');
Nihonium.onclick = function(){
  elementementName.innerHTML = 'Nihonium';
  elementImage.src = 'assets/Nihonium.png';
  elementDescription.innerHTML = 'Nihonium is a synthetic chemical element; it has the symbol Nh and atomic number 113. It is extremely radioactive: its most stable known isotope, nihonium-286, has a half-life of about 10 seconds.';
  elementAtomicNumber.innerHTML = '113';
  elementAtomicMass.innerHTML = '286';
}

//Carbon

let Carbon = document.getElementById('Carbon');
Carbon.onclick = function(){
  elementementName.innerHTML = 'Carbon';
  elementImage.src = 'assets/Carbon.jpg';
  elementDescription.innerHTML = 'Carbon provides the framework for all tissues of plants and animals. These tissues are built of elements grouped around chains or rings made of carbon atoms.';
  elementAtomicNumber.innerHTML = '6';
  elementAtomicMass.innerHTML = '12.011';
}

//Silicon
let Silicon = document.getElementById('Silicon');
Silicon.onclick = function(){
  elementementName.innerHTML = 'Silicon';
  elementImage.src = 'assets/Silicon.jpg';
  elementDescription.innerHTML = 'Silicon is the most important semiconductor in the electronics and technology sector';
  elementAtomicNumber.innerHTML = '14';
  elementAtomicMass.innerHTML = '28.086';
}

//Germanium

let Germanium = document.getElementById('Germanium');
Germanium.onclick = function(){
  elementementName.innerHTML = 'Germanium';
  elementImage.src = 'assets/germanium.jpg';
  elementDescription.innerHTML = 'Germanium is a chemical element; it has symbol Ge and atomic number 32. It is lustrous, hard-brittle, grayish-white and similar in appearance to silicon.';
  elementAtomicNumber.innerHTML = '32';
  elementAtomicMass.innerHTML = '72.640';
}

//Tin
let Tin = document.getElementById('Tin');
Tin.onclick = function(){
  elementementName.innerHTML = 'Tin';
  elementImage.src = 'assets/tin.jpg';
  elementDescription.innerHTML = 'Tin is a chemical element; it has symbol Sn and atomic number 50. A silvery-colored metal, tin is soft enough to be cut with little force.';
  elementAtomicNumber.innerHTML = '50';
  elementAtomicMass.innerHTML = '118.71';
}


//Lead

let pb = document.getElementById('pb');
pb.onclick = function(){
  elementementName.innerHTML = 'Lead';
  elementImage.src = 'assets/lead.jpg';
  elementDescription.innerHTML = 'Lead is a chemical element; it has symbol Pb and atomic number 82. It is a heavy metal that is denser than most common materials. Lead is soft and malleable, and also has a relatively low melting point.';
  elementAtomicNumber.innerHTML = '82';
  elementAtomicMass.innerHTML = '207.20';
}

//Flerovium
let fl = document.getElementById('fl');
fl.onclick = function(){
  elementementName.innerHTML = 'Flerovium';
  elementImage.src = 'assets/Flerovium.png';
  elementDescription.innerHTML = 'A highly radioactive metal, of which only a few atoms have ever been made. Uses: At present, it is only used in research.';
  elementAtomicNumber.innerHTML = '114';
  elementAtomicMass.innerHTML = '289';
}

//Nitrogen
let nitro = document.getElementById('nitro');
nitro.onclick = function(){
  elementementName.innerHTML = 'Nitrogen';
  elementImage.src = 'assets/Nitrogen.jpg';
  elementDescription.innerHTML = 'Nitrogen is a chemical element; it has symbol N and atomic number 7. Nitrogen is a nonmetal and the lightest member of group 15 of the periodic table, often called the pnictogens. It is a common element in the universe, estimated at seventh in total abundance in the Milky Way and the Solar System.';
  elementAtomicNumber.innerHTML = '7';
  elementAtomicMass.innerHTML = '14.007';
}

//Phosphorus
let posper = document.getElementById('posper');
posper.onclick = function(){
  elementementName.innerHTML = 'Phosphorus';
  elementImage.src = 'assets/phosphorus.jpg';
  elementDescription.innerHTML = 'Phosphorus is a mineral that naturally occurs in many foods and is also available as a supplement. It plays multiple roles in the body. It is a key element of bones, teeth, and cell membranes. It helps to activate enzymes, and keeps blood pH within a normal range.';
  elementAtomicNumber.innerHTML = '15';
  elementAtomicMass.innerHTML = '30.974';
}

//Arsenic
let arsi = document.getElementById('arsi');
arsi.onclick = function(){
  elementementName.innerHTML = 'Arsenic';
  elementImage.src = 'assets/arsenic.jpg';
  elementDescription.innerHTML = 'Arsenic is a naturally occurring, semimetallic element widely distributed in the Earth\'s crust.';
  elementAtomicNumber.innerHTML = '33';
  elementAtomicMass.innerHTML = '74.922';
}

//Antimony
let antimo = document.getElementById('antimo');
antimo.onclick = function(){
  elementementName.innerHTML = 'Antimony';
  elementImage.src = 'assets/antimony.jpg';
  elementDescription.innerHTML = 'Antimony is a chemical element; it has symbol Sb and atomic number 51. A lustrous grey metal or metalloid, it is found in nature mainly as the sulfide mineral';
  elementAtomicNumber.innerHTML = '51';
  elementAtomicMass.innerHTML = '121.76';
}

//Bismuth
let Bismuth = document.getElementById('Bismuth');
Bismuth.onclick = function(){
  elementementName.innerHTML = 'Bismuth';
  elementImage.src = 'assets/bismuth.jpg';
  elementDescription.innerHTML = 'Bismuth is a chemical element; it has symbol Bi and atomic number 83. It is a post-transition metal and one of the pnictogens, with chemical properties';
  elementAtomicNumber.innerHTML = '83';
  elementAtomicMass.innerHTML = '208.98';
}


//Moscovium

let Moscovium = document.getElementById('Moscovium');
Moscovium.onclick = function(){
  elementementName.innerHTML = 'Moscovium';
  elementImage.src = 'assets/Electron_shell_115_Moscovium.svg.png';
  elementDescription.innerHTML = 'Moscovium is a synthetic chemical element; it has symbol Mc and atomic number 115. It was first synthesized in 2003 by a joint team of Russian and American scientists at the Joint Institute for Nuclear Research (JINR) in Dubna, Russia.';
  elementAtomicNumber.innerHTML = '115';
  elementAtomicMass.innerHTML = '289';
}
//Oxygen
let Oxygen = document.getElementById('Oxygen');
Oxygen.onclick = function(){
  elementementName.innerHTML = 'Oxygen';
  elementImage.src = 'assets/Oxygen.jpg';
  elementDescription.innerHTML = 'Oxygen is a chemical element with an atomic number of 8 (it has eight protons in its nucleus). Oxygen forms a molecule (O2) of two atoms which is a colorless gas at normal temperatures and pressures. Four representations chemists use for molecular oxygen.';
  elementAtomicNumber.innerHTML = '8';
  elementAtomicMass.innerHTML = '15.999';
}


//Sulfur
let sulf = document.getElementById('sulf');
sulf.onclick = function(){
  elementementName.innerHTML = 'Sulfur';
  elementImage.src = 'assets/sulfur.jpg';
  elementDescription.innerHTML = 'sulfur (S), nonmetallic chemical element belonging to the oxygen group (Group 16 [VIa] of the periodic table), one of the most reactive of the elements. Pure sulfur is a tasteless, odourless, brittle solid that is pale yellow in colour, a poor conductor of electricity, and insoluble in water.';
  elementAtomicNumber.innerHTML = '16';
  elementAtomicMass.innerHTML = '32.065';
}

//Selenium
let sele = document.getElementById('sele');
sele.onclick = function(){
  elementementName.innerHTML = 'Selenium';
  elementImage.src = 'assets/Selenium.jpg';
  elementDescription.innerHTML = 'Selenium is a chemical element with symbol Se and atomic number 34. It is a moderately hard, silvery metal. Selenium is an element in the group of nonmetals.';
  elementAtomicNumber.innerHTML = '34';
  elementAtomicMass.innerHTML = '78.96';
}

//Tellurium
let tell = document.getElementById('tell');
tell.onclick = function(){
  elementementName.innerHTML = 'Tellurium';
  elementImage.src = 'assets/tellurium.jpg';
  elementDescription.innerHTML = 'Tellurium is a chemical element with symbol Te and atomic number 52. It is a brittle, mildly toxic, rare, silver-white metal.';
  elementAtomicNumber.innerHTML = '52';
  elementAtomicMass.innerHTML = '127.6';
}

//Polonium

let polo = document.getElementById('polo');
polo.onclick = function(){
  elementementName.innerHTML = 'Polonium';
  elementImage.src = 'assets/polonium.jpg';
  elementDescription.innerHTML = 'Polonium is a chemical element with symbol Po and atomic number 84, and a rare earth element. Polonium is a synthetic chemical element with chemical properties similar to those of silicon.';
  elementAtomicNumber.innerHTML = '84';
  elementAtomicMass.innerHTML = '209';
}


//Fluorine
let flo = document.getElementById('flo');
flo.onclick = function(){
  elementementName.innerHTML = 'Fluorine';
  elementImage.src = 'assets/fluorine.jpg';
  elementDescription.innerHTML = 'Fluorine is a chemical element with symbol F and atomic number 9. It is a lightest pnictogen and at room temperature, it is a highly toxic pale yellow diatomic gas.';
  elementAtomicNumber.innerHTML = '9';
  elementAtomicMass.innerHTML = '18.998';
}

//Chlorine
let clo = document.getElementById('clo');
clo.onclick = function(){
  elementementName.innerHTML = 'Chlorine';
  elementImage.src = 'assets/chlorine.jpg';
  elementDescription.innerHTML = 'Chlorine is a chemical element with symbol Cl and atomic number 17. It also has a single electron in its outer shell, which it readily gases. Chlorine is a naturally occurring chemical element.';
  elementAtomicNumber.innerHTML = '17';
  elementAtomicMass.innerHTML = '35.453';
}

//Bromine
let brom = document.getElementById('brom');
brom.onclick = function(){
  elementementName.innerHTML = 'Bromine';
  elementImage.src = 'assets/bromine.jpg';
  elementDescription.innerHTML = 'Bromine is a chemical element with symbol Br, and atomic number 35. It is adbgass, a liquid, and a gas. Bromine is a chemical element.';
  elementAtomicNumber.innerHTML = '35';
  elementAtomicMass.innerHTML = '79.904';
}


//Iodine
let iod = document.getElementById('iod');
iod.onclick = function(){
  elementementName.innerHTML = 'Iodine';
  elementImage.src = 'assets/Iodine.jpg';
  elementDescription.innerHTML = 'Iodine is a chemical element with symbol I and atomic number 53. It is a diatomic element with no stable isotopes.';
  elementAtomicNumber.innerHTML = '53';
  elementAtomicMass.innerHTML = '126.904';
}

//Astatine
let ats = document.getElementById('ats');
ats.onclick = function(){
  elementementName.innerHTML = 'Astatine';
  elementImage.src = 'assets/Astatine.webp';
  elementDescription.innerHTML = 'Astatine is a chemical element with symbol At and atomic number 85. It is an extremely rare synthetic element.';
  elementAtomicNumber.innerHTML = '85';
  elementAtomicMass.innerHTML = '210';
}

//Helium
let he = document.getElementById('he');
he.onclick = function(){
  elementementName.innerHTML = 'Helium';
  elementImage.src = 'assets/helium.jpg';
  elementDescription.innerHTML = 'Helium is a chemical element with symbol He and atomic number 2. It is a noble gas at standard conditions, and occurs in many minerals.';
  elementAtomicNumber.innerHTML = '2';
  elementAtomicMass.innerHTML = '4.0026';
}

//Neon
let neo = document.getElementById('neo');
neo.onclick = function(){
  elementementName.innerHTML = 'Neon';
  elementImage.src = 'assets/neon.jpg';
  elementDescription.innerHTML = 'Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas. Neon is a colorless, odorless, inert monatomic gas.';
  elementAtomicNumber.innerHTML = '10';
  elementAtomicMass.innerHTML = '20.18';
}

//Argon
let arg = document.getElementById('arg');
arg.onclick = function(){
  elementementName.innerHTML = 'Argon';
  elementImage.src = 'assets/argon.jpg';
  elementDescription.innerHTML = 'Argon is a chemical element with symbol Ar and atomic number 18. It is in group 18 of the periodic table, and an noble gas. Argon is a noble gas.';
  elementAtomicNumber.innerHTML = '18';
  elementAtomicMass.innerHTML = '39.948';
}

//Krypton
let krp = document.getElementById('krp');
krp.onclick = function(){
  elementementName.innerHTML = 'Krypton';
  elementImage.src = 'assets/krypton.jpg';
  elementDescription.innerHTML = 'Krypton is a chemical element with symbol Kr and atomic number 36. It is a member of group 18 (noble gases) elements. A colorless, odorless, tasteless noble gas.';
  elementAtomicNumber.innerHTML = '36';
  elementAtomicMass.innerHTML = '83.798';
}

//Xenon
let xen = document.getElementById('xen');
xen.onclick = function(){
  elementementName.innerHTML = 'Xenon';
  elementImage.src = 'assets/xenon.jpg';
  elementDescription.innerHTML = 'Xenon is a chemical element with symbol Xe and atomic number 54. It is a colorless, dense, odorless noble gas. Xenon is a noble gas.';
  elementAtomicNumber.innerHTML = '54';
  elementAtomicMass.innerHTML = '131.293';
}

//Radon
let radon = document.getElementById('radon');
radon.onclick = function(){
  elementementName.innerHTML = 'Radon';
  elementImage.src = 'assets/Radon.png';
  elementDescription.innerHTML = 'Radon is a chemical element with symbol Rn and atomic number 86. It is a radioactive synthetic chemical element with no stable isotopes.';
  elementAtomicNumber.innerHTML = '86';
  elementAtomicMass.innerHTML = '222';
}

//Cerium
let Actinides1 = document.getElementById('Actinides1');
Actinides1.onclick = function(){
  elementementName.innerHTML = 'Cerium';
  elementImage.src = 'assets/cerium.jpg';
  elementDescription.innerHTML = 'Cerium is a chemical element with symbol Ce and atomic number 58. It is a soft, silvery, ductile metal.';
  elementAtomicNumber.innerHTML = '58';
  elementAtomicMass.innerHTML = '140.116';
}

//Praseodymium
let Actinides2 = document.getElementById('Actinides2');
Actinides2.onclick = function(){
  elementementName.innerHTML = 'Praseodymium';
  elementImage.src = 'assets/praseodymium.jpg';
  elementDescription.innerHTML = 'Praseodymium is a chemical element with symbol Pr and atomic number 59. It is a moderately hard silvery metal.';
  elementAtomicNumber.innerHTML = '59';
  elementAtomicMass.innerHTML = '140.90765';
}

//Neodymium
let Actinides3 = document.getElementById('Actinides3');
Actinides3.onclick = function(){
  elementementName.innerHTML = 'Neodymium';
  elementImage.src = 'assets/neodymium.jpg';
  elementDescription.innerHTML = 'Neodymium is a chemical element with symbol Nd and atomic number 60. It is a soft silvery metal.';
  elementAtomicNumber.innerHTML = '60';
  elementAtomicMass.innerHTML = '144.24';
}

//Promethium
let Actinides4 = document.getElementById('Actinides4');
Actinides4.onclick = function(){
  elementementName.innerHTML = 'Promethium';
  elementImage.src = 'assets/promethium.jpg';
  elementDescription.innerHTML = 'Promethium is a chemical element with symbol Pm and atomic number 61. It is a very soft silvery metal.';
  elementAtomicNumber.innerHTML = '61';
  elementAtomicMass.innerHTML = '145';
}

//Samarium
let Actinides5 = document.getElementById('Actinides5');
Actinides5.onclick = function(){
  elementementName.innerHTML = 'Samarium';
  elementImage.src = 'assets/samarium.jpg';
  elementDescription.innerHTML = 'Samarium is a chemical element with symbol Sm and atomic number 62. It is a moderately hard silvery metal.';
  elementAtomicNumber.innerHTML = '62';
  elementAtomicMass.innerHTML = '150.36';
}

//Europium
let Actinides6 = document.getElementById('Actinides6');
Actinides6.onclick = function(){
  elementementName.innerHTML = 'Europium';
  elementImage.src = 'assets/europium.jpg';
  elementDescription.innerHTML = 'Europium is a chemical element with symbol Eu and atomic number 63. It was isolated independently of its neighbouring element Oganesson.';
  elementAtomicNumber.innerHTML = '63';
  elementAtomicMass.innerHTML = '151.964';
}

//Gadolinium
let Actinides7 = document.getElementById('Actinides7');
Actinides7.onclick = function(){
  elementementName.innerHTML = 'Gadolinium';
  elementImage.src = 'assets/gadolinium.jpg';
  elementDescription.innerHTML = 'Gadolinium is a chemical element with symbol Gd and atomic number 64. It is a popular soft, heavy, and chemically inert metal.';
  elementAtomicNumber.innerHTML = '64';
  elementAtomicMass.innerHTML = '157.25';
}

//Terbium
let Actinides8 = document.getElementById('Actinides8');
Actinides8.onclick = function(){
  elementementName.innerHTML = 'Terbium';
  elementImage.src = 'assets/terbium.jpg';
  elementDescription.innerHTML = 'Terbium is a chemical element with symbol Tb and atomic number 65. A silvery-white, malleable and ductile metal.';
  elementAtomicNumber.innerHTML = '65';
  elementAtomicMass.innerHTML = '158.92535';
}
//Dysprosium
let Actinides9 = document.getElementById('Actinides9');
Actinides9.onclick = function(){
  elementementName.innerHTML = 'Dysprosium';
  elementImage.src = 'assets/dysprosium.jpg';
  elementDescription.innerHTML = 'Dysprosium is a chemical element with symbol Dy and atomic number 66. A rare, silvery-white metal.';
  elementAtomicNumber.innerHTML = '66';
  elementAtomicMass.innerHTML = '162.5';
}
//Holmium
let Actinides10 = document.getElementById('Actinides10');
Actinides10.onclick = function(){
  elementementName.innerHTML = 'Holmium';
  elementImage.src = 'assets/holmium.jpg';
  elementDescription.innerHTML = 'Holmium is a chemical element with symbol Ho and atomic number 67. A rare, silvery-white, malleable and ductile metal.';
  elementAtomicNumber.innerHTML = '67';
  elementAtomicMass.innerHTML = '164.93033';
}

//Erbium
let Actinides11 = document.getElementById('Actinides11');
Actinides11.onclick = function(){
  elementementName.innerHTML = 'Erbium';
  elementImage.src = 'assets/erbium.jpg';
  elementDescription.innerHTML = 'Erbium is a chemical element with symbol Er and atomic number 68. A silvery-white, malleable and ductile metal.';
  elementAtomicNumber.innerHTML = '68';
  elementAtomicMass.innerHTML = '167.259';
}
//Thulium
let Actinides12 = document.getElementById('Actinides12');
Actinides12.onclick = function(){
  elementementName.innerHTML = 'Thulium';
  elementImage.src = 'assets/thulium.jpg';
  elementDescription.innerHTML = 'Thulium is a chemical element with symbol Tm and atomic number 69. A silvery-white, ductile and malleable metal.';
  elementAtomicNumber.innerHTML = '69';
  elementAtomicMass.innerHTML = '168.93421';
}

//Ytterbium
let Actinides13 = document.getElementById('Actinides13');
Actinides13.onclick = function(){
  elementementName.innerHTML = 'Ytterbium';
  elementImage.src = 'assets/ytterbium.jpg';
  elementDescription.innerHTML = 'Ytterbium is a chemical element with symbol Yb and atomic number 70. A silvery-white, malleable and ductile metal.';
  elementAtomicNumber.innerHTML = '70';
  elementAtomicMass.innerHTML = '173.04';
}
//Lutetium
let Actinides14 = document.getElementById('Actinides14');
Actinides14.onclick = function(){
  elementementName.innerHTML = 'Lutetium';
  elementImage.src = 'assets/lutetium.jpg';
  elementDescription.innerHTML = 'Lutetium is a chemical element with symbol Lu and atomic number 71. A silvery white metal.';
  elementAtomicNumber.innerHTML = '71';
  elementAtomicMass.innerHTML = '174.967';
}

//Thorium
let Lanthanides1 = document.getElementById('Lanthanides1');
Lanthanides1.onclick = function(){
  elementementName.innerHTML = 'Thorium';
  elementImage.src = 'assets/thorium.jpg';
  elementDescription.innerHTML = 'Thorium is a chemical element with symbol Th and atomic number 90. A radioactive element, thorium is one of the rarest elements in the Earth\'s crust.';
  elementAtomicNumber.innerHTML = '90';
  elementAtomicMass.innerHTML = '232.03806';
}

//Protactinium
let Lanthanides2 = document.getElementById('Lanthanides2');
Lanthanides2.onclick = function(){
  elementementName.innerHTML = 'Protactinium';
  elementImage.src = 'assets/Protactinium.webp';
  elementDescription.innerHTML = 'Protactinium is a chemical element with symbol Pa and atomic number 91. It is a dense, malleable and ductile rare-earth metal.';
  elementAtomicNumber.innerHTML = '91';
  elementAtomicMass.innerHTML = '231.03588';
}

//Uranium
let Lanthanides3 = document.getElementById('Lanthanides3');
Lanthanides3.onclick = function(){
  elementementName.innerHTML = 'Uranium';
  elementImage.src = 'assets/uranium.jpg';
  elementDescription.innerHTML = 'Uranium is a chemical element with symbol U and atomic number 92. It is a silvery, malleable and ductile rare-earth metal.';
  elementAtomicNumber.innerHTML = '92';
  elementAtomicMass.innerHTML = '238.02891';
}

//Neptunium
let Lanthanides4 = document.getElementById('Lanthanides4');
Lanthanides4.onclick = function(){
  elementementName.innerHTML = 'Neptunium';
  elementImage.src = 'assets/neptunium.jpg';
  elementDescription.innerHTML = 'Neptunium is a chemical element with symbol Np and atomic number 93. A radioactive chemical element, neptunium is a rare-earth element.';
  elementAtomicNumber.innerHTML = '93';
  elementAtomicMass.innerHTML = '237.04816';
}

//Plutonium
let Lanthanides5 = document.getElementById('Lanthanides5');
Lanthanides5.onclick = function(){
  elementementName.innerHTML = 'Plutonium';
  elementImage.src = 'assets/plutonium.jpg';
  elementDescription.innerHTML = 'Plutonium is a chemical element with symbol Pu and atomic number 94. A rare-earth element.';
  elementAtomicNumber.innerHTML = '94';
  elementAtomicMass.innerHTML = '244.06421';
}

//Americium
let Lanthanides6 = document.getElementById('Lanthanides6');
Lanthanides6.onclick = function(){
  elementementName.innerHTML = 'Americium';
  elementImage.src = 'assets/americium.jpg';
  elementDescription.innerHTML = 'Americium is a chemical element with symbol Am and atomic number 95. A radioactive element in the actinide series.';
  elementAtomicNumber.innerHTML = '95';
  elementAtomicMass.innerHTML = '243.06138';
}

//Curium
let Lanthanides7 = document.getElementById('Lanthanides7');
Lanthanides7.onclick = function(){
  elementementName.innerHTML = 'Curium';
  elementImage.src = 'assets/curium.webp';
  elementDescription.innerHTML = 'Curium is a chemical element with symbol Cm and atomic number 96. A rare earth element.';
  elementAtomicNumber.innerHTML = '96';
  elementAtomicMass.innerHTML = '247.07035';
}
//Berkelium
let Lanthanides8 = document.getElementById('Lanthanides8');
Lanthanides8.onclick = function(){
  elementementName.innerHTML = 'Berkelium';
  elementImage.src = 'assets/berkelium.jpg';
  elementDescription.innerHTML = 'Berkelium is a chemical element with symbol Bk and atomic number 97. A radioactive element in the actinide series.';
  elementAtomicNumber.innerHTML = '97';
  elementAtomicMass.innerHTML = '247.07031';
}

//Californium
let Lanthanides9 = document.getElementById('Lanthanides9');
Lanthanides9.onclick = function(){
  elementementName.innerHTML = 'Californium';
  elementImage.src = 'assets/californium.jpg';
  elementDescription.innerHTML = 'Californium is a chemical element with symbol Cf and atomic number 98. A radioactive element in the actinide series.';
  elementAtomicNumber.innerHTML = '98';
  elementAtomicMass.innerHTML = '251.07958';
}

//Einsteinium
let Lanthanides10 = document.getElementById('Lanthanides10');
Lanthanides10.onclick = function(){
  elementementName.innerHTML = 'Einsteinium';
  elementImage.src = 'assets/Einsteinium.jpg';
  elementDescription.innerHTML = 'Einsteinium is a chemical element with symbol Es and atomic number 99. A radioactive element in the actinide series.';
  elementAtomicNumber.innerHTML = '99';
  elementAtomicMass.innerHTML = '252.08368';
}

//Fermium
let Lanthanides11 = document.getElementById('Lanthanides11');
Lanthanides11.onclick = function(){
  elementementName.innerHTML = 'Fermium';
  elementImage.src = 'assets/fermium.jpg';
  elementDescription.innerHTML = 'Fermium is a chemical element with symbol Fm and atomic number 100. A synthetic element.';
  elementAtomicNumber.innerHTML = '100';
  elementAtomicMass.innerHTML = '257.09511';
}

//Mendelevium
let Lanthanides12 = document.getElementById('Lanthanides12');
Lanthanides12.onclick = function(){
  elementementName.innerHTML = 'Mendelevium';
  elementImage.src = 'assets/mendelevium.jpg';
  elementDescription.innerHTML = 'Mendelevium is a chemical element with symbol Md and atomic number 101. A synthetic element.';
  elementAtomicNumber.innerHTML = '101';
  elementAtomicMass.innerHTML = '258.1';
} 

//Nobelium
let Lanthanides13 = document.getElementById('Lanthanides13');
Lanthanides13.onclick = function(){
  elementementName.innerHTML = 'Nobelium';
  elementImage.src = 'assets/nobelium.jpg';
  elementDescription.innerHTML = 'Nobelium is a chemical element with symbol No and atomic number 102. A synthetic element.';
  elementAtomicNumber.innerHTML = '102';
  elementAtomicMass.innerHTML = '259.1011';
}

//Lawrencium
let Lanthanides14 = document.getElementById('Lanthanides14');
Lanthanides14.onclick = function(){
  elementementName.innerHTML = 'Lawrencium';
  elementImage.src = 'assets/lawrencium.jpg';
  elementDescription.innerHTML = 'Lawrencium is a chemical element with symbol Lr and atomic number 103. A synthetic element.';
  elementAtomicNumber.innerHTML = '103';
  elementAtomicMass.innerHTML = '262.11';
}

const ken = document.getElementById("ken");
const amet = new Date().getFullYear();
ken.innerHTML = amet;