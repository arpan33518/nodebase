import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const testConnection = async (urlName: string) => {
  const url = process.env[urlName];
  console.log(`Testing ${urlName}: ${url?.replace(/:([^:@]+)@/, ':***@')}`);
  const client = new Client({ connectionString: url });
  try {
    await client.connect();
    console.log(`[SUCCESS] Connected to ${urlName}`);
    await client.end();
  } catch (err) {
    console.error(`[ERROR] Failed to connect to ${urlName}:`, err);
  }
};

async function main() {
  await testConnection('DATABASE_URL');
  await testConnection('DIRECT_URL');
}

main();
