# foresight FORE Language — VS Code Extension for FORe

Complete language support for FORe (Foresight BI Desktop): syntax highlighting, 170+ snippets, code formatting, linting, navigation, hover documentation, and AI assistant support.

## Features

### Syntax Highlighting
- **Keywords**: Control flow (`If/Then/Else`, `For/To/Do`, `While`, `Try/Except`), types (`Class`, `Sub`, `Function`), declarations (`Var`, `Const`)
- **Types**: Primitives (`Integer`, `String`, `Variant`, `Boolean`, `DateTime`), collections (`Array`, `ArrayList`, `HashTable`)
- **Interfaces**: 200+ interfaces including `IPrxReport`, `IMetabase`, `ICubeInstance`, `IDimInstance`, `IDatabaseInstance`, and more
- **Comments**: `//`, `{ ... }`, `/* ... */`, `///`
- **Operators**: `:=` (assignment), `=`, `<>`, `<=`, `>=`, `And`, `Or`, `Not`

### Code Snippets (170+)
- **Event handlers**: `events`, `events-all`, `events-grid-params`, `evt-before-transfer`, `evt-after-refresh-grid`
- **Common patterns**: `try`, `sql-exec`, `foreach-controls`, `foreach-dim-elements`, `mb-open`, `for-range`
- **Type completions**: Type any interface/class name (e.g., `IPrxReport`) for autocomplete

### Code Formatting
- Format with `Shift+Alt+F` or enable `Format on Save`
- Normalizes indentation, operators, keyword casing
- Handles Begin/End blocks, If/Then/Else, Try/Except

### Linting
- Real-time syntax validation
- Checks balanced blocks (Begin/End, If/End If, Try/End Try, etc.)
- Detects unclosed blocks and mismatched closures

### IntelliSense & Autocomplete
- **IntelliSense**: Auto-completion for interfaces, classes, properties, and methods
- **Context-aware**: Suggests properties and methods when typing after a dot (e.g., `IPrxReport.`)
- **Type hints**: Shows type information and descriptions in hover tooltips

### Navigation
- **F12** — Go to Definition
- **Shift+F12** — Find References
- **Ctrl+Shift+O** — Symbol Search

### Hover Documentation
- Hover over interfaces and classes to see descriptions from offline Foresight documentation
- Shows properties and methods count
- Works completely offline - no internet connection required

### Themes
- **FORe Dark** and **FORe Light** themes included

## Quick Start

1. **Install**: From [Open VSX Marketplace](https://open-vsx.org/) or install `.vsix` locally
2. **Use**: Files with `.fore` extension automatically get language support
3. **Snippets**: Type prefix (e.g., `events`, `sql-exec`) and press `Tab`
4. **Format**: `Shift+Alt+F` or enable `Format on Save`
5. **Navigate**: `F12` (Go to Definition), `Shift+F12` (Find References)
6. **Documentation**: Hover over interfaces for help

## Examples

**EventsClass** (type `events`):
```fore
Public Class EventsClass: ReportEvents
	Public Sub OnBeforeOpenReport(Report: IPrxReport; Var Cancel: Boolean);
	Begin
		Report.Recalc;
	End Sub OnBeforeOpenReport;
End Class EventsClass;
```

**SQL Execution** (type `sql-exec`):
```fore
db := MetabaseClass.Active.ItemByIdNamespace("APPLICATION_DB", BA_KEY).Open(Null) As IDatabaseInstance;
cmd := db.Connection.CreateCommand("");
cmd.SQL := "select 1";
cur := cmd.CreateCursor;
While Not cur.Eof Do
	cur.MoveNext;
End While;
cur.Close;
cmd.Close;
```

## Documentation

The extension includes offline documentation for 4900+ interfaces and classes extracted from Foresight BI help system. Documentation is indexed and available through:
- Hover tooltips
- IntelliSense autocomplete
- Syntax highlighting

To rebuild the documentation index after updating help files, run:
```bash
npm run build:docs-index
```

## Limitations

- Basic grammar (no full semantic analysis)
- Desktop FORe syntax only (not fore.net)
- Single-file navigation

## Repository

- **GitHub:** [ivanmandat/fore-language-extension](https://github.com/ivanmandat/fore-language-extension)
- **License:** MIT
- **Publisher:** ForeCode

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## AI Assistant Support

Includes `.cursorrules`, `AI_CONTEXT.md`, and `AI_USAGE.md` to help AI assistants (Cursor, Copilot, etc.) generate correct FORe code. Cursor automatically reads `.cursorrules`.

## Version History

- **0.3.0** — Migrated to offline documentation (4900+ interfaces/classes), enhanced IntelliSense with autocomplete for properties and methods, improved syntax highlighting
- **0.2.2** — Added AI assistant support files (`.cursorrules`, `AI_CONTEXT.md`, `AI_USAGE.md`)
- **0.2.1** — Fixed linting: improved Then/If detection, ignore Case in SQL strings
- **0.2.0** — Added formatting, linting, navigation, hover docs, themes
- **0.1.2** — Added hover documentation provider
- **0.1.0** — Improved language configuration
- **0.0.5** — Added 90+ interfaces and classes
- **0.0.3** — Initial release
