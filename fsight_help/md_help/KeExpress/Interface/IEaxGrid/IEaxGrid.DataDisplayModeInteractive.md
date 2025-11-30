# IEaxGrid.DataDisplayModeInteractive

IEaxGrid.DataDisplayModeInteractive
-


# IEaxGrid.DataDisplayModeInteractive


## Синтаксис


DataDisplayModeInteractive: Boolean;


## Описание


Свойство DataDisplayModeInteractive
 определяет, будут ли автоматически обновляться данные таблицы экспресс-отчета.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    Grid: IEaxGrid;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    Grid := Expr.Grid;

	    Grid.DataDisplayModeInteractive:=False;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет отключено автоматическое обновление данных
 таблицы. Идентификатор экспресс-отчета - EXPRESS_REPORT.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
