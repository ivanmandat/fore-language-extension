# Using FORe Extension with AI Assistants

This extension includes special files to help AI assistants (like Cursor, GitHub Copilot, etc.) generate correct FORe code.

## Files for AI Context

### `.cursorrules`
This file contains rules and patterns for Cursor AI. Cursor automatically reads this file to understand FORe syntax and best practices.

**Location**: Root of the extension folder

**Usage**: Cursor reads this automatically. No action needed.

### `AI_CONTEXT.md`
Detailed context file with code examples and patterns. Useful for any AI assistant.

**Location**: Root of the extension folder

**Usage**: Reference this file when asking AI to write FORe code, or include it in your prompt.

## How to Use

### With Cursor

1. **Automatic**: Cursor reads `.cursorrules` automatically
2. **Manual**: Reference `AI_CONTEXT.md` in your prompts:
   ```
   Using the patterns from AI_CONTEXT.md, write a function that...
   ```

### With Other AI Assistants

1. Copy relevant sections from `AI_CONTEXT.md` into your prompt
2. Reference the file when asking for FORe code
3. Use the code patterns as examples

## Example Prompts

### Good Prompts
```
Using FORe syntax (not .NET), write a function that:
- Takes a string parameter
- Executes a SQL query
- Returns the first result

Remember: use := for assignment, Null for null values, Var for declarations.
```

```
Write an EventsClass handler for OnBeforeOpenReport that:
- Finds a control by ID "DATE_FROM"
- Sets its value to current date
- Recalculates the report

Use FORe desktop syntax (see AI_CONTEXT.md for patterns).
```

### Bad Prompts (will generate wrong code)
```
Write a C# function that...  ❌ (FORe is not C#)
Write a .NET method that...  ❌ (FORe desktop is not .NET)
Write JavaScript code that... ❌ (FORe is not JavaScript)
```

## Key Points for AI

When asking AI to write FORe code, always mention:

1. **Language**: "FORe (Foresight BI Desktop)" - not .NET
2. **Syntax**: Pascal-like, uses `:=`, `Begin/End`, `Var`
3. **Key differences**: No `this.`, no `()` after Sub/Function names
4. **Reference**: Point to `.cursorrules` or `AI_CONTEXT.md`

## Tips

- Include code examples from `AI_CONTEXT.md` in your prompts
- Reference specific patterns (SQL execution, dimension iteration, etc.)
- Mention common mistakes to avoid
- Ask AI to follow the patterns in `.cursorrules`

## Extension Features That Help AI

1. **Syntax Highlighting**: Highlights 4900+ interfaces and classes from documentation
2. **Snippets**: 170+ code snippets with correct patterns
3. **Hover Documentation**: Shows interface descriptions, properties, and methods count (offline, no internet required)
4. **IntelliSense**: Auto-completion for interfaces, classes, properties, and methods
5. **Linting**: Catches syntax errors
6. **Navigation**: Helps understand code structure

## Contributing

If you find patterns that help AI generate better FORe code, consider:
1. Adding them to `.cursorrules`
2. Adding examples to `AI_CONTEXT.md`
3. Improving snippet descriptions

