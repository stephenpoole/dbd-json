![build](https://travis-ci.org/stephenpoole/dbd-json.svg?branch=master)

# dbd-json

A complete Dead by Daylight dataset in JSON.

## Getting Started

`npm install dbd-json`

```
import * as dbd from 'dbd-json';  

dbd.Killers.map(killer => console.log(killer.name));
console.log(dbd.Enum)
```
