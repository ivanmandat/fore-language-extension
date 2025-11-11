# Build (short)

1) Install vsce (once):
   ```bash
   npm i -g @vscode/vsce
   ```
2) Package:
   ```bash
   cd fore-language
   vsce package
   ```
   Output: `foresight-fore-language-x.y.z.vsix`

Optional (Open VSX):
```bash
npm i -g ovsx
ovsx publish -p $OVSX_TOKEN
```

