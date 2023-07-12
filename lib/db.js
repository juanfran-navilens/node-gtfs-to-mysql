//import Database from 'better-sqlite3';
import Database from './mysql-navilens/mysql-db';
import untildify from 'untildify';

import { setDefaultConfig } from './utils.js';

// Database variable
let db;

function setupDb() {
  db = new Database();
  return db;
}

export function openDb(config) {
  // If config is passed
  if (config) {
    if (db) {
      return db;
    }
    return setupDb();
  }

  throw new Error('Unable to find database connection.');
}

// Not used
export function closeDb(db) {
  /*if (Object.keys(dbs).length === 0) {
    throw new Error(
      'No database connection. Call `openDb(config)` before using any methods.'
    );
  }

  if (!db) {
    if (Object.keys(dbs).length > 1) {
      throw new Error(
        'Multiple database connections. Pass the db you want to close as a parameter to `closeDb`.'
      );
    }

    db = dbs[Object.keys(dbs)[0]];
  }

  db.close();
  delete dbs[db.name];*/
}
