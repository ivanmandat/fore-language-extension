# IEaxTableStyle.InternalFormatConditions

IEaxTableStyle.InternalFormatConditions
-


# IEaxTableStyle.InternalFormatConditions


## Синтаксис


InternalFormatConditions: [ITabFormatConditions](TabSheet.chm::/Interface/ITabFormatConditions/ITabFormatConditions.htm);


## Описание


Свойство InternalFormatConditions
 возвращает коллекцию условных форматов применяемых для ячеек области данных
 таблицы.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    GridStyle: IEaxTableStyle;

	    Conditions: ITabFormatConditions;

	    Condition: ITabFormatCondition;

	    ValFormat: ITabFormatAverage;

	    Style: ITabCellStyle;

	Begin

	    // Стиль для условного формата

	    Style := New TabCellStyle.Create;

	    Style.BackgroundColor := GxColor.FromName("Yellow");

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    Grid := Expr.Grid;

	    GridStyle := Grid.Style;

	    Conditions := GridStyle.InternalFormatConditions;

	    Condition := Conditions.Add;

	    Condition.Type := TabConditionType.Average;

	    ValFormat := Condition.Details As ITabFormatAverage;

	    ValFormat.Style := Style;

	    ValFormat.Type := TabFormatAverageType.EqualAbove;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в экспресс-отчете будет добавлен условный формат
 для ячеек области данных. Ячейки, содержащие значение большее либо равное
 среднему, будут иметь желтый фон.


См. также:


[IEaxTableStyle](IEaxTableStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
