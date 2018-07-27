# graphiql-and-more

Static deployment of GraphiQL with additional features.

**Additions:**

- Editable request URL & headers
- Evironments - Localize GraphiQL data by user defined environment(s)
- Prettier for GraphQL query formatting

[View Demo](https://graphiql-and-more.now.sh)

## Getting Started

## Usage

1.  Clone repo
2.  Run `npm install`
3.  Run `npm run build`
4.  Copy content of `./out` to a static dir of some web server

## How To

### Create new environment

Define "env" search param in URL (e.g. `http://localhost:3000?env=dev`).

**Note:** "default" is used when env param is not defined.

### Switch environment

Use "Environment" select button in UI.

### Delete or reset environment

Manually clear entries in browser local storage.

### Edit request config

Click "Settings" button in UI > Modify request config (json) > Click "Save".
