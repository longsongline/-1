const fs = require('fs');

let c = fs.readFileSync('/app/applet/build_epic_xiuxian.cjs', 'utf8');

// Line 720: doCutStone
c = c.replace(/onclick="doCutStone\\?'low\\?'/g, 'onclick="doCutStone(&apos;low&apos;');
c = c.replace(/onclick="doCutStone\\?'mid\\?'/g, 'onclick="doCutStone(&apos;mid&apos;');
c = c.replace(/onclick="doCutStone\\?'high\\?'/g, 'onclick="doCutStone(&apos;high&apos;');

// Line 828: doPlant
c = c.replace(/onclick="doPlant\([^"]+\)"/g, 'onclick="doPlant(\'+idx+\',&apos;\'+k+\'&apos;)"');

// Line 883-884: doBuySeed
c = c.replace(/onclick="doBuySeed\([^,]+,1,/g, 'onclick="doBuySeed(&apos;\'+k+\'&apos;,1,');
c = c.replace(/onclick="doBuySeed\([^,]+,5,/g, 'onclick="doBuySeed(&apos;\'+k+\'&apos;,5,');

// Line 916-917: doSellItem
c = c.replace(/onclick="doSellItem\([^,]+,1,/g, 'onclick="doSellItem(&apos;\'+k+\'&apos;,1,');
c = c.replace(/onclick="doSellItem\([^,]+,\'\+cnt\+\',/g, 'onclick="doSellItem(&apos;\'+k+\'&apos;,\'+cnt+\',');

// Line 946: doBuildBiz
c = c.replace(/onclick="doBuildBiz\([^"]+\)"/g, 'onclick="doBuildBiz(&apos;\'+b.id+\'&apos;)"');

// Line 1019: interactLead
c = c.replace(/onclick="interactLead\([^"]+\)"/g, 'onclick="interactLead(&apos;\'+m.id+\'&apos;)"');

// Line 1038: chooseLeadOpt
c = c.replace(/onclick="chooseLeadOpt\([^"]+\)"/g, 'onclick="chooseLeadOpt(&apos;\'+m.id+\'&apos;, \'+stage+\', \'+j+\')"');

// Line 1110-1112: chooseCatch
c = c.replace(/onclick="chooseCatch\([^,]+,\\?'sword\\?'\)"/g, 'onclick="chooseCatch(&apos;\'+ch.name+\'&apos;,&apos;sword&apos;)"');
c = c.replace(/onclick="chooseCatch\([^,]+,\\?'book\\?'\)"/g, 'onclick="chooseCatch(&apos;\'+ch.name+\'&apos;,&apos;book&apos;)"');
c = c.replace(/onclick="chooseCatch\([^,]+,\\?'abacus\\?'\)"/g, 'onclick="chooseCatch(&apos;\'+ch.name+\'&apos;,&apos;abacus&apos;)"');

// Line 1127-1129: chooseChildDao
c = c.replace(/onclick="chooseChildDao\([^,]+,\\?'top\\?'\)"/g, 'onclick="chooseChildDao(&apos;\'+ch.name+\'&apos;,&apos;top&apos;)"');
c = c.replace(/onclick="chooseChildDao\([^,]+,\\?'family\\?'\)"/g, 'onclick="chooseChildDao(&apos;\'+ch.name+\'&apos;,&apos;family&apos;)"');
c = c.replace(/onclick="chooseChildDao\([^,]+,\\?'sword\\?'\)"/g, 'onclick="chooseChildDao(&apos;\'+ch.name+\'&apos;,&apos;sword&apos;)"');

// Line 1147-1148: chooseChildMarriage
c = c.replace(/onclick="chooseChildMarriage\([^,]+,\\?'bless\\?'\)"/g, 'onclick="chooseChildMarriage(&apos;\'+ch.name+\'&apos;,&apos;bless&apos;)"');
c = c.replace(/onclick="chooseChildMarriage\([^,]+,\\?'reject\\?'\)"/g, 'onclick="chooseChildMarriage(&apos;\'+ch.name+\'&apos;,&apos;reject&apos;)"');

// Line 1353: go
c = c.replace(/onclick="go\([^"]+\)"/g, 'onclick="go(&apos;\'+k+\'&apos;)"');

// Line 1378: doAct
c = c.replace(/onclick="doAct\([^"]+\)"/g, 'onclick="doAct(&apos;\'+k+\'&apos;)"');

// Line 1457: loadSaveSlot('auto')
c = c.replace(/onclick="loadSaveSlot\([^"]+\)"/g, 'onclick="loadSaveSlot(&apos;auto&apos;)"');

fs.writeFileSync('/app/applet/build_epic_xiuxian.cjs', c);
console.log('Fixed build_epic_xiuxian.cjs quotes!');
