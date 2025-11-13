# FORe Language Context for AI Assistants

This file provides context about FORe (Foresight BI Desktop) language to help AI assistants generate correct code.

## Language Identity

**FORe** is a Pascal-like scripting language for Foresight BI Desktop platform. It is **NOT**:
- ❌ .NET (fore.net) - different syntax
- ❌ JavaScript/TypeScript
- ❌ C# or VB.NET

## Syntax Characteristics

### Pascal-like Structure
- Uses `Begin/End` blocks
- Semicolons after statements: `statement;`
- Type declarations: `Var name: Type;`
- Case-insensitive keywords (but conventionally PascalCase)

### Key Differences from .NET
- No `this.` keyword
- No parentheses after Sub/Function in declarations: `Sub Name;` not `Sub Name()`
- Assignment operator: `:=` not `=`
- Null value: `Null` not `null` or `nil`
- Logical operators: `And`, `Or`, `Not` not `&&`, `||`, `!`

## Common Code Patterns

### 1. Event Handler Class
```fore
Public Class EventsClass: ReportEvents

	Public Sub OnBeforeOpenReport(Report: IPrxReport; Var Cancel: Boolean);
	Var
		ctrl: IPrxControl;
	Begin
		ctrl := Report.Controls.FindById("CONTROL_ID");
		ctrl.Value := defaultValue;
		Report.Recalc;
	End Sub OnBeforeOpenReport;

End Class EventsClass;
```

### 2. Function with Parameters
```fore
Public Function ProcessData(input: String; count: Integer): Variant;
Var
	result: Variant;
Begin
	// Process data
	Return result;
End Function ProcessData;
```

### 3. SQL Query Execution
```fore
Var
	db: IDatabaseInstance;
	cmd: IDalCommand;
	cur: IDalCursor;
	value: Variant;
Begin
	db := MetabaseClass.Active.ItemByIdNamespace("APPLICATION_DB", BA_KEY).Open(Null) As IDatabaseInstance;
	cmd := db.Connection.CreateCommand("");
	cmd.SQL := "select value from table where id = " + id.ToString;
	cur := cmd.CreateCursor;
	If Not cur.Eof Then
		value := cur.Fields.Item(0).Value;
	End If;
	cur.Close;
	cmd.Close;
	Return value;
End
```

### 4. Dimension Iteration
```fore
Var
	dim: IDimInstance;
	i: Integer;
	elementName: String;
Begin
	dim := MetabaseClass.Active.ItemByIdNamespace("DICT_ID", BA_KEY).Open(Null) As IDimInstance;
	For i := 0 To dim.Elements.Count - 1 Do
		elementName := dim.Elements.Name(i);
		// Process element
	End For;
End
```

### 5. Error Handling
```fore
Try
	// Risky operation
Except On e: Exception Do
	Debug.WriteLine("Error: " + e.Message);
	Return Null;
End Try;
```

## Interface Access Patterns

### Metabase Objects
```fore
Var
	mb: IMetabase;
	objDesc: IMetabaseObjectDescriptor;
	objInst: IMetabaseObjectInstance;
Begin
	mb := MetabaseClass.Active;
	objDesc := mb.ItemByIdNamespace("OBJECT_ID", BA_KEY);
	objInst := objDesc.Open(Null);
End
```

### Report Controls
```fore
Var
	report: IPrxReport;
	control: IPrxControl;
Begin
	report := PrxReport.ActiveReport;
	control := report.Controls.FindById("CONTROL_ID");
	control.Value := newValue;
	report.Recalc;
End
```

### Cube Operations
```fore
Var
	cube: ICubeInstance;
	segment: ICubeSegment;
Begin
	cube := MetabaseClass.Active.ItemByIdNamespace("CUBE_ID", BA_KEY).Open(Null) As ICubeInstance;
	segment := cube.Segments.Item(0);
	// Work with segment
End
```

## String Operations

```fore
Var
	str: String;
	arr: Array;
Begin
	str := "Hello, World";
	arr := str.Split(","); // Returns array
	str := String.Format("Value: {0}", 123);
	str := String.Replace(str, "old", "new");
End
```

## Date Operations

```fore
Var
	dt: DateTime;
	str: String;
Begin
	dt := DateTime.Now;
	str := DateTime.Format(dt, "yyyy-MM-dd");
	If DateTime.IsLeapYear(dt.Year) Then
		// Handle leap year
	End If;
End
```

## Common Mistakes to Avoid

1. **Assignment**: Use `:=` not `=`
   ```fore
   ❌ value = 5;
   ✅ value := 5;
   ```

2. **Null value**: Use `Null` not `null`
   ```fore
   ❌ If value = null Then
   ✅ If value = Null Then
   ```

3. **Comparison**: Use `=` not `==`
   ```fore
   ❌ If x == 5 Then
   ✅ If x = 5 Then
   ```

4. **Logical operators**: Use `And`, `Or` not `&&`, `||`
   ```fore
   ❌ If (x > 0) && (y < 10) Then
   ✅ If (x > 0) And (y < 10) Then
   ```

5. **Variable declaration**: Use `Var` not `Dim` or `var`
   ```fore
   ❌ Dim x: Integer;
   ✅ Var x: Integer;
   ```

6. **Procedure declaration**: No parentheses
   ```fore
   ❌ Public Sub Name();
   ✅ Public Sub Name;
   ```

## Type System Notes

- **Variant** is the most flexible type (like `object` in C#)
- **String** is immutable
- **Array** is zero-indexed
- All collections use `.Count` property (not `.Length` or `.Count()`)
- Interfaces start with `I`: `IPrxReport`, `IMetabase`, etc.
- Classes: `MetabaseClass`, `PrxReport`, `Debug`, `Exception`

## Resources

- Official documentation: https://help.fsight.ru/ru/
- Interface reference: See `interface-docs.json` in extension
- Code examples: See `codebase/` folder

