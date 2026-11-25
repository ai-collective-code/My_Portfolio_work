# AiC + Debojit Work (one React project)

Two pages in a single Vite + React 18 project:

| URL | Page | Source |
|---|---|---|
| `/` | AiC — India's Invitation Only AI Creator Collective | `src/aic` |
| `/Debojit_work/` | Debojit Saha portfolio (BC[f]W) | `src/work` |

The **My Work** button in the AiC nav opens `/Debojit_work/` in a new tab.
Each page keeps its own stylesheet, so their global CSS never clashes.

## Run

```bash
npm install
npm run dev      # http://localhost:5173/  and  /Debojit_work/
npm run build    # outputs both pages to dist/
```

Set `VITE_MY_WORK_URL` to point the My Work button somewhere else.

Note: the AiC application form posts to Web3Forms (key in `src/aic/data.js`), so real submissions email the owner.
