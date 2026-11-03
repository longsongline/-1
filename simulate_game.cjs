const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('public/xiuxian_female.html', 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];

const localStorageData = {};
const mockElement = () => ({
  innerHTML: '',
  textContent: '',
  style: {},
  classList: {
    add: () => {},
    remove: () => {},
    contains: () => false
  },
  appendChild: () => {},
  removeChild: () => {},
  addEventListener: () => {}
});

const sandbox = {
  console: console,
  window: {
    innerWidth: 1024,
    innerHeight: 768,
    addEventListener: () => {},
    removeEventListener: () => {},
    AudioContext: function() {
      return {
        createOscillator: () => ({
          type: '',
          frequency: { setValueAtTime: () => {} },
          connect: () => {},
          start: () => {},
          stop: () => {}
        }),
        createGain: () => ({
          gain: {
            setValueAtTime: () => {},
            exponentialRampToValueAtTime: () => {}
          },
          connect: () => {}
        }),
        currentTime: 0,
        destination: {}
      };
    }
  },
  document: {
    getElementById: () => mockElement(),
    querySelectorAll: () => [],
    querySelector: () => mockElement(),
    createElement: () => mockElement(),
    createDocumentFragment: () => ({
      appendChild: () => {}
    }),
    body: {
      className: '',
      style: {},
      appendChild: () => {},
      removeChild: () => {}
    },
    addEventListener: () => {}
  },
  localStorage: {
    getItem: (k) => localStorageData[k] || null,
    setItem: (k, v) => { localStorageData[k] = String(v); },
    removeItem: (k) => { delete localStorageData[k]; },
    clear: () => { Object.keys(localStorageData).forEach(k => delete localStorageData[k]); }
  },
  navigator: {
    userAgent: 'Mozilla/5.0 Chrome/120.0.0.0'
  },
  setTimeout: (fn) => fn(),
  clearTimeout: () => {},
  setInterval: () => {},
  clearInterval: () => {},
  Math: Math,
  JSON: JSON,
  String: String,
  Array: Array,
  Object: Object,
  parseInt: parseInt,
  parseFloat: parseFloat,
  isNaN: isNaN
};
sandbox.window.window = sandbox.window;
sandbox.window.document = sandbox.document;
sandbox.window.localStorage = sandbox.localStorage;

const context = vm.createContext(sandbox);

try {
  vm.runInContext(script, context);
  console.log('Script loaded in VM successfully!');

  // Check globals
  console.log('Testing newGame()...');
  vm.runInContext('newGame();', context);
  const G = sandbox.G;
  console.log('Initial Realm:', G.realm, 'HP:', G.health, 'Stones:', G.stones, 'Year:', G.year, 'Xun:', G.xun);

  // Test page navigations
  const pages = ['cave', 'farm', 'palace', 'market', 'daoist', 'children', 'adventure'];
  pages.forEach(p => {
    vm.runInContext(`go('${p}');`, context);
  });
  console.log('All 7 page renders tested successfully.');

  // Test Mother curing quest stages
  console.log('Testing Mother curing quest...');
  vm.runInContext('G.store.洗髓草 = 5; G.store.凝霜花 = 5; G.store.千年何首乌 = 5; G.stones = 5000;', context);
  vm.runInContext('cureMomStage(1);', context);
  vm.runInContext('cureMomStage(2);', context);
  vm.runInContext('cureMomStage(3);', context);
  console.log('Mother cured stage:', G.mom.stage, 'Sick status:', G.mom.sick, 'Health:', G.mom.health);

  // Test Father quest stages
  console.log('Testing Father quest...');
  vm.runInContext('advanceFatherQuest(1);', context);
  vm.runInContext('advanceFatherQuest(2);', context);
  vm.runInContext('advanceFatherQuest(3);', context);
  vm.runInContext('advanceFatherQuest(4);', context);
  vm.runInContext('finishFatherQuest();', context);
  console.log('Father quest finished! Step:', G.fatherQuest);

  // Unlock harem first to test marrying multiple male leads
  vm.runInContext('G.flags.canHarem = true;', context);

  // Test 8 male leads interaction and marriage
  console.log('Testing 8 male leads...');
  const leads = ['master', 'guard', 'demon', 'rich', 'medic', 'brother', 'beast_lord', 'sword_lord'];
  leads.forEach(id => {
    // Stage 30
    vm.runInContext(`interactLead('${id}');`, context);
    vm.runInContext(`chooseLeadOpt('${id}', 30, 0);`, context);
    // Stage 60
    vm.runInContext(`interactLead('${id}');`, context);
    vm.runInContext(`chooseLeadOpt('${id}', 60, 0);`, context);
    // Stage 90
    vm.runInContext(`interactLead('${id}');`, context);
    vm.runInContext(`chooseLeadOpt('${id}', 90, 0);`, context);
  });
  console.log('Married spouses count:', G.spouseList.length, G.spouseList.map(s => s.name).join(', '));

  // Test twin cultivation and having child
  console.log('Testing Twin Cultivation and Child birth...');
  vm.runInContext('doTwinCultivation();', context);
  // Force child birth event
  vm.runInContext('G.children.push({name:"长生儿",gender:"男",age:1,catchItem:null,root:{name:"先天混沌天灵根",color:"#d946ef"}});', context);
  vm.runInContext('childCatchDialog(G.children[0]);', context);
  vm.runInContext('chooseCatch("长生儿", "sword");', context);
  vm.runInContext('G.children[0].age = 10;', context);
  vm.runInContext('childEducationDialog(G.children[0]);', context);
  vm.runInContext('chooseChildDao("长生儿", "top");', context);
  vm.runInContext('G.children[0].age = 16;', context);
  vm.runInContext('childMarriageDialog(G.children[0]);', context);
  vm.runInContext('chooseChildMarriage("长生儿", "bless");', context);
  console.log('Child catch item:', G.children[0].catchItem, 'Age:', G.children[0].age);

  // Test Market and Farm
  console.log('Testing Farming and Trading...');
  vm.runInContext('openSeedShop();', context);
  vm.runInContext('doBuySeed("洗髓草", 5, 50);', context);
  vm.runInContext('doPlant(0, "洗髓草");', context);
  vm.runInContext('doWater(0);', context);
  vm.runInContext('doHarvest(0);', context);
  vm.runInContext('openPawnShop();', context);
  vm.runInContext('doSellItem("洗髓草", 1, 35);', context);
  vm.runInContext('cookMedFood();', context);

  // Test Gambling stone & Tournament & Ruins
  console.log('Testing mini-games...');
  vm.runInContext('doCutStone("low", 100);', context);
  vm.runInContext('doCutStone("mid", 500);', context);
  vm.runInContext('doCutStone("high", 2000);', context);
  vm.runInContext('doFightTournament();', context);
  vm.runInContext('exploreRuinsEvent();', context);

  // Test Breakthrough
  console.log('Testing Breakthrough...');
  vm.runInContext('G.exp = 20000; G.mind = 100;', context);
  vm.runInContext('confirmBreakthrough(100);', context);
  console.log('New Realm after breakthrough:', G.realm, sandbox.REALMS[G.realm].name);

  // Test 36 Xuns progression (1 full year)
  console.log('Simulating 36 Xuns cycle...');
  for(let i=0; i<36; i++){
    vm.runInContext('endCurrentXun();', context);
  }
  console.log('Current Year:', G.year, 'Xun:', G.xun, 'HP:', G.health, 'Exp:', G.exp);

  // Test Save and Export
  console.log('Testing Save & Export...');
  vm.runInContext('saveToSlot(1);', context);
  vm.runInContext('loadSaveSlot(1);', context);
  vm.runInContext('exportSaveCode();', context);

  console.log('\n=======================================');
  console.log('🎉 ALL DEEP SIMULATION TESTS PASSED WITH 0 ERRORS!');
  console.log('=======================================\n');

} catch (err) {
  console.error('TEST FAILED WITH ERROR:', err);
  process.exit(1);
}
