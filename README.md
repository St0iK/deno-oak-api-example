# deno-oak-api-example 🦕

Example of a small API build with Deno and Oak (A middleware framework for Deno's net server).

* Deno: https://deno.land/
* Oak: https://github.com/oakserver/oak 

## Running the app
```
deno run --allow-net --allow-env --allow-read index.ts
```

Visit: http://localhost:4000/users


## What did we use:

* Global Deno object to write to and read files
* uuid from the Deno standard library to create a unique id
* oak - a third-party framework inspired by Node.js Koa framework
* The rest ist pure typescript, objects such as `TextEncoder` or `JSON` are standard Javascript objects