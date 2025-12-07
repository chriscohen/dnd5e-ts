# How to Build and Link this Library

### 1. Initial Setup
1.  Ensure `tsconfig.json` has:
    ```json
    "compilerOptions": {
      "module": "CommonJS",
      "outDir": "./dist",
      "declaration": true
    }
    ```
2.  Ensure `package.json` has:
    ```json
    "main": "dist/index.js",
    "types": "dist/index.d.ts",
    "scripts": {
      "build": "node build-index.js && tsc",
      "prepublishOnly": "npm run build"
    }
    ```

### 2. How to Build
Run this command to generate the `dist/` folder:
```bash
npm run build
