```
 npm create vite@latest
 ```
```
npm install -D tailwindcss postcss autoprefixer
```
```
npx tailwindcss init -p
```
# Edit Index.css ♥
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
# Edit tsconfig.json file
```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  },
  "include": [
    "tsconfig.app.json"
  ]
}
```
# Edit Vite.config.js File
```
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

```
Add the following code to the vite.config.ts so your app can resolve paths without error
```
 (so you can import "path" without error)
 npm i -D @types/node
```
```
npx shadcn-ui@latest init
```
```
npx shadcn-ui@latest add button

```
