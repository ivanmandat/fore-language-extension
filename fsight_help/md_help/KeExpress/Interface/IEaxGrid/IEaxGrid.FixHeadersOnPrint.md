# IEaxGrid.FixHeadersOnPrint

IEaxGrid.FixHeadersOnPrint
-


# IEaxGrid.FixHeadersOnPrint


## Синтаксис


FixHeadersOnPrint: Boolean;


## Описание


Свойство FixHeadersOnPrint определяет,
 будут ли фиксированные заголовки у таблицы при печати экспресс-отчета.


## Комментарии


Допустимые значения:


	- True. Заголовки у таблицы
	 при печати экспресс-отчета будут фиксированные;


	- False. Заголовки у таблицы
	 при печати экспресс-отчета не будут фиксированные.


## Пример


Для выполнения примера предполагается наличие экспресс-отчета с идентификатором
 EXPRESS_REPORT.


Добавьте ссылки на системные сборки: Express, Metabase.


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

	    Grid.FixHeadersOnPrint := False;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет отключена фиксация заголовков у таблицы
 при печати отчета.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
