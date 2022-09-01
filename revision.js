const Name = require('w3name')

async function createOrUpdateRevision(name, newCid) {
	let revision
	try {
		revision = await Name.resolve(name)
		revision = await Name.increment(revision, newCid)
	} catch (err) {
		if (!err.message.includes('not found')) throw err
		revision = await Name.v0(name, newCid)
	}
	return revision;
}

module.exports = {
	createOrUpdateRevision
}
