# foresight FORE Language — syntax highlighting and snippets for FORe (Foresight BI Desktop)

Lightweight extension for FORe scripts: syntax highlighting and practical snippets for desktop FORe (not fore.net).

## Features
- Syntax highlighting:
  - Keywords: Class/Sub/Function/Begin/End/If/Elseif/Else If/For/Try/Except/Return…
  - Types/interfaces: IPrx*, ITab*, IEax*, Metabase*, DateTime/TimeSpan, ArrayList/HashTable, TriState
  - Comments: //, { … }, /* … */
  - Operators: assignment (:=), comparison, arithmetic, ternary “?”
- Snippets (prefix examples):
  - events — `EventsClass: ReportEvents` scaffold (OnBeforeOpenReport, OnChangeControlValue)
  - events-all — common handlers set (Before/After Transfer, Refresh, Recalc, ControlValue)
  - try — Try/Except
  - sql-exec — execute SQL via DAL
  - foreach-controls — iterate report controls
  - control-select-by-id — select control element by Id
  - date-days — set date in `DAYS:dd.MM.yyyy` format
  - foreach-dim-elements — iterate dimension elements
  - for-range — double loop over cell range
  - mb-open — open Metabase object with parameters
  - Plus short completions for IPrxReport, IEaxGrid, ITabSheet, IMetabaseObjectDescriptor, etc.

## Usage
- Save files with `.fore` extension — highlighting and snippets will apply automatically.
- Type the prefixes above and accept the completion to insert a template.

## Limitations
- Basic TextMate grammar (no semantic analysis or type checking).
- Targeted at desktop FORe syntax (not fore.net).
