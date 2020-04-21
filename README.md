# jest-prettier-test

Test repo to see if your Prettier config is picked up when Jest runs Prettier on your files with inline snapshots.

1. `npm ci`
2. `npx jest --watch`
3. Make a change inside `expect()` in index.test.js
4. Press `u` in the Jest runner to update the snapshot.
5. Check if index.test.js still uses 4-space indentation.

Result: The Prettier config does seem to be picked up.
