# foresight FORE Language — syntax highlighting and snippets for FORe (Foresight BI Desktop)

Lightweight VS Code extension for FORe scripts: comprehensive syntax highlighting and practical snippets for desktop FORe (not fore.net).

## Features

### Syntax Highlighting

**Keywords:**
- Control flow: `If/Then/Elseif/Else If/Else/End If`, `For/Each/To/Step/End For`, `While/Do/End While`, `Select/Case`, `Try/Except/Finally`, `Return`, `Exit`, `Break`, `Continue`
- Type definitions: `Class/End Class`, `Sub/Function/End Sub/End Function`, `Constructor`, `Destructor`
- Variable declarations: `Var`, `Const`, `Public`, `Private`, `Shared`
- Other: `Begin/End`, `New`, `As`, `Array`, `Of`

**Types and Interfaces:**
- Primitives: `Integer`, `String`, `Variant`, `Boolean`, `DateTime`, `TimeSpan`, `ArrayList`, `HashTable`, `TriState`
- Report interfaces: `IPrxReport`, `IPrxControl`, `IPrxSheet`, `IPrxControls`, `IPrxDataIsland`, `IPrxFormulaIsland`
- Grid/Table interfaces: `IEaxGrid`, `ITabSheet`, `ITabRange`, `ITabView`, `ITabRegion`, `ITabCellStyle`, `ITabHyperlink`
- Metabase interfaces: `IMetabase`, `IMetabaseObject`, `IMetabaseObjectDescriptor`, `IMetabaseObjectInstance`, `IMetabaseObjectParamValues`, `IMetabaseObjectParams`, `IMetabaseObjectParam`, `IMetabaseObjectCache`, `IMetabaseUser`, `IMetabaseUsers`, `IMetabaseGroup`, `IMetabaseGroups`, `IMetabaseSecurity`
- Dimension interfaces: `IDimInstance`, `IDimSelection`, `IDimSelectionSet`, `IDimElements`, `IDimAttributesInstance`, `IDimAttributeInstance`, `IDimAttribute`, `IDimIterator`, `IDimIndexInstance`, `IDimIndexAttributes`, `IDimElement`, `IDimElementArray`, `IDimElementGroup`, `IDimBlockLoader`, `IDimBuilder`, `IUserDimension`
- Cube interfaces: `ICubeInstance`, `ICubeSegment`, `ICubeSegmentContainer`, `ICubeSegments`, `ICubeSegmentDimensions`, `IStandardCube`, `IStandardCubeDestination`, `IStandardCubeDimension`, `IStandardCubeDataset`, `IStandardCubeFactBindings`, `IStandardCubeFactBinding`, `IStandardCubeCalculatedFactBinding`, `IStandardCubeDimensions`, `IStandardCubeDimensionBinding`, `ICubeInstanceDestination`, `ICubeInstanceDimensions`, `ICubeInstanceStorage`, `ICubeModelDestination`, `ICubeModelDimensions`
- Database interfaces: `IDatabaseInstance`, `IDalCommand`, `IDalCursor`, `IDalCommandParams`, `ISQLCommandInstance`, `ISQLCallback`, `ISQLComponents`
- Dictionary interfaces: `IRdsDictionary`, `IRdsDictionaryInstance`, `IRdsDictionaryElement`, `IRdsDictionaryElementData`, `IRdsDictionaryElements`, `IRdsAttributes`
- Security interfaces: `IAccessControlList`, `ISecuritySubject`, `ISecurityDescriptor`, `ISecurityLabels`, `ISid`
- Algorithm interfaces: `ICalcAlgorithm`, `ICalcObject`, `IAlgorithmCalculationResult`, `IAlgorithmCalculationExecutor`, `IAlgorithmParameterValues`, `IAlgorithmParamValue`
- Other interfaces: `IPivot`, `IPivotHeader`, `ITable`, `ITableFields`, `ITableField`, `IArrayList`, `IHashTable`, `ICultureInfo`, `IDatasetInstance`, `IDatasetInstanceField`, `ICachedDataset`, `IDimensionModel`, `IDictionary`, `IDatabase`, `IEtlTask`, `IMatrix`, `IMatrixCoord`, `ITimeSeries`, `IView`, `IStyleContainer`, `IStyleContainerCollection`, `IStyledEntity`, `IStyleSheet`, `ILog`, `ICryptoPackage`, `IApplicationVersion`, `ISortedList`, `IAccessAttributeValue`, `IAccessElement`, `IAccessElementsIterator`, `IABACAttributeInstance`, `IMetabaseUpdate`, `IMetabaseUpdateLogRecord`, `IMetabaseUpdateObjectNode`, `IMetabaseUpdateProperties`, `IMetabaseUpdateProperty`, `IMetabaseUsersUpdate`, `IUiPrxReportBaseSubstitutionEventArgs`, `IPythonClassObject`, `IPrxTableIsland`, `IPrxDataChange`
- Event args: `IEventArgs`, `IMouseEventArgs`, `IDimensionViewerEventArgs`, `ITreeControlEventArgs`, `IUiPrxReportAuditOperationEventArgs`
- Classes: `MetabaseClass`, `PrxReport`, `ArrayList`, `HashTable`, `DateTime`, `TimeSpan`, `TriState`, `CubeClass`, `SqlResultClass`, `Debug`, `Exception`, `Console`
- Graphics: `GxColor`, `GxKnownColor`, `GxSolidBrush`

**Comments:**
- Line comments: `//`
- Block comments: `{ ... }` and `/* ... */`
- Documentation comments: `///`

**Operators:**
- Assignment: `:=`, `=`
- Arithmetic: `+`, `-`, `*`, `/`, `%`
- Comparison: `<=`, `>=`, `<>`, `<`, `>`
- Ternary: `?`
- Accessor: `.`

**Constants:**
- `True`, `False`, `Null`

### Code Snippets

**Event Handlers:**
- `events` — `EventsClass: ReportEvents` skeleton with `OnBeforeOpenReport` and `OnChangeControlValue`
- `events-all` — Complete `EventsClass` with all common handlers (BeforeOpenReport, BeforeTransferData, AfterTransferData, BeforeChangeControlValue, ChangeControlValue, AfterRefreshEaxGrid, AfterRecalcSheet)
- `events-grid-params` — Template for setting cube parameters for a grid data area
- `evt-before-transfer` — `OnBeforeTransferData` handler
- `evt-after-refresh-grid` — `OnAfterRefreshEaxGrid` handler
- `evt-before-change-control` — `OnBeforeChangeControlValue` handler
- `evt-after-recalc-sheet` — `OnAfterRecalcSheet` handler

**Common Patterns:**
- `try` — Try/Except block with exception handling
- `foreach-controls` — Iterate through report controls
- `control-select-by-id` — Select control element by Id
- `date-days` — Set control date in `DAYS:dd.MM.yyyy` format
- `sql-exec` — Execute SQL via DAL (Database Access Layer)
- `foreach-dim-elements` — Iterate through dimension elements
- `for-range` — Double loop over a rectangular cell range
- `mb-open` — Open metabase object with parameters

**Type Completions:**
- 170+ type completion snippets for all major interfaces and classes
- Type names match exactly — just type the interface/class name and get autocomplete

### Language Configuration

- **Comments:** `//` for line comments, `{ ... }` and `/* ... */` for block comments
- **Brackets:** Auto-pairing for `{}`, `[]`, `()`
- **Auto-closing:** Automatically closes brackets and quotes
- **Folding:** Supports `// #region` and `// #endregion` markers for code folding
- **Word pattern:** Optimized for FORe identifiers

## Usage

1. **Installation:**
   - Install from [Open VSX Marketplace](https://open-vsx.org/) or VS Code Marketplace
   - Or install locally from `.vsix` file

2. **File Association:**
   - Files with `.fore` extension automatically get syntax highlighting and snippets
   - Manual association: Add to VS Code settings:
     ```json
     "files.associations": {
       "*.fore": "fore"
     }
     ```

3. **Using Snippets:**
   - Type snippet prefix (e.g., `events`, `try`, `sql-exec`)
   - Press `Tab` or `Enter` to insert the snippet
   - Use `Tab` to navigate between placeholders

4. **Type Completions:**
   - Type interface/class name (e.g., `IPrxReport`, `IMetabase`)
   - Autocomplete will suggest the full type name

## Examples

### Creating an EventsClass

Type `events` and press Tab:

```fore
Public Class EventsClass: ReportEvents

	Public Sub OnBeforeOpenReport(Report: IPrxReport; Var Cancel: Boolean);
	Var
		ctrl: IPrxControl;
	Begin
		// TODO: init controls/parameters
		Report.Recalc;
	End Sub OnBeforeOpenReport;

	Public Sub OnChangeControlValue(Control: IPrxControl);
	Begin
		// TODO: react to control changes
		PrxReport.ActiveReport.Recalc;
	End Sub OnChangeControlValue;

End Class EventsClass;
```

### Executing SQL

Type `sql-exec` and press Tab:

```fore
Var
	db: IDatabaseInstance;
	cmd: IDalCommand;
	cur: IDalCursor;
Begin
	db := MetabaseClass.Active.ItemByIdNamespace("APPLICATION_DB", BA_KEY).Open(Null) As IDatabaseInstance;
	cmd := db.Connection.CreateCommand("");
	cmd.SQL := "select 1";
	cur := cmd.CreateCursor;
	While Not cur.Eof Do
		// val := cur.Fields.Item(0).Value;
		cur.MoveNext;
	End While;
	cur.Close;
	cmd.Close;
End
```

### Error Handling

Type `try` and press Tab:

```fore
Try
	// ...
Except On e: Exception Do
	Debug.WriteLine(e.Message);
End Try;
```

## Limitations

- Basic TextMate grammar (no semantic analysis or type checking)
- Targeted at desktop FORe syntax (not fore.net)
- No IntelliSense for method/property completion (only type names)
- No debugging support (use Foresight IDE for debugging)

## Repository

- **GitHub:** [ivanmandat/fore-language-extension](https://github.com/ivanmandat/fore-language-extension)
- **License:** MIT
- **Publisher:** ForeCode

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Version History

- **0.0.5** — Added 90+ new interfaces and classes, expanded type completions
- **0.0.4** — Added icon, improved snippets
- **0.0.3** — Initial release with syntax highlighting and basic snippets
