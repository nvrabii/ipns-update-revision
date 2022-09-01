const core = require('@actions/core')
const Name = require('w3name')
const uint8arrays = require('uint8arrays')

const { createOrUpdateRevision } = require('./revision')

async function run() {
	try {
		const b64SigningKey = core.getInput('signing_key')
		const newCid = core.getInput('new_cid')
		const name = await Name.from(uint8arrays.fromString(b64SigningKey, 'base64pad'))
		const revision = await createOrUpdateRevision(name, newCid);
		await Name.publish(revision, name.key)
		core.setOutput('name', name.toString());
	} catch (e) {
		core.setFailed(e.message)
	}
}

run()
