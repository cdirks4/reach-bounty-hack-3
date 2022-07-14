import { loadStdlib } from '@reach-sh/stdlib';

const stdlib = loadStdlib(process.env);
const suStr = stdlib.standardUnit;
const startingBalance = stdlib.parseCurrency(1000);
const [alice] = await stdlib.newTestAccounts(1, startingBalance);

const ctcAlice = alice.contract(backend);
const aliceInteract = {};
await Promise.all([ctcAlice.p.Alice({})]);
