# Ampath Root Config For Single SPA applications

[![Build Status](https://travis-ci.org/openmrs/openmrs-esm-root-config.svg?branch=master)](https://travis-ci.org/openmrs/openmrs-esm-root-config)

`@openmrs/root-config`

A javascript module for setting up and configuring your SPA. See [openmrs-rfc-frontend](https://github.com/openmrs/openmrs-rfc-frontend)
for what this project is and how it works.

## Local development

```sh
npm install
npm start <port-number> # e.g., npm start 8080
```

Then go to a deployed environment (such as https://openmrs-spa.org/openmrs/spa) and run the following in the browser console:

```js
importMapOverrides.addOverride(
  "@openmrs/root-config",
  "https://localhost:<port-number>/root-config.js"
);
```
