const TOKEN = process.argv.slice(2)[0];
const ENVIRONMENT_ID = '95ac4393-db7a-4bcf-800f-89de14d70e6e';
const SERVICE_ID = '52e26c3c-aac6-49c6-9b89-97f68554385d';

const resp = await fetch('https://backboard.railway.com/graphql/v2', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${TOKEN}`,
  },
  body: JSON.stringify({
    query: `
      mutation ServiceInstanceRedeploy {
          serviceInstanceRedeploy(
              environmentId: "${ENVIRONMENT_ID}"
              serviceId: "${SERVICE_ID}"
          )
      }`,
  }),
});

const data = await resp.json();

if (data.errors) {
  console.error(data.errors);
  throw new Error('Failed to redeploy service');
}

console.log(data);
