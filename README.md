# tslint-config-ilemon

A TSLint Shareable Config.

## Install

```bash
npm i tslint-config-ilemon -D
```

## Useage

Install peerDependencies:
```bash
npm i typescript tslint -D
```

If you use it in react project, then install additional  peerDependencies:
```bash
npm i tslint-react -D
```

Then, add this to your `tslint.json` file:
```json
{
  "extends": ["tslint-config-ilemon"]
}
```
or react project:
```json
{
  "extends": ["tslint-config-ilemon/react"]
}
```
