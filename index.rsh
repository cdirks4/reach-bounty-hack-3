'reach 0.1';
const main = Reach.App(() => {
	const A = Participant('Alice', aliceInteract);
	const whitelisted = new Set();
	A.only(() => {
		whitelisted.insert(this);
	});
	commit();
});
