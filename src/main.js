const core = require('@actions/core');

async function run() {
  try {
    const webhookUrl = core.getInput('webhook-url', { required: true });
    const shouldAwait = core.getInput('await-response') === 'true' || false;

    const fetchRequest = fetch(webhookUrl, {
      method: core.getInput('method') || 'POST',
      body: core.getInput('body') || undefined,
    });

    if (shouldAwait) {
      const response = await fetchRequest;
      if (response.status !== 200) {
        throw new Error(
          `Request failed with status code ${
            response.status
          }\n${await response.text()}`
        );
      }
    }

    core.setOutput('status', 'completed');
  } catch (error) {
    core.setFailed(await error.message);
  }
}

module.exports = { run };
