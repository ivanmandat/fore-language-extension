# IPivotEvaluatorTotals.RowTotalName

IPivotEvaluatorTotals.RowTotalName
-


# IPivotEvaluatorTotals.RowTotalName


## Синтаксис


RowTotalName(Type: [PivotEvaluatorElementType](../../Enums/PivotEvaluatorElementType.htm)):
 String;


## Параметры


Type. Тип итогов, рассчитанных
 по строкам.


## Описание


Свойство RowTotalName определяет
 [пользовательское
 наименование](UiAnalyticalArea.chm::/Totals/Calculate_totals.htm#user_naming) итоговых значений, отображаемых по строкам.


## Комментарии


Если значение свойства не задано, то отображается наименование итогов
 по умолчанию.


Для определения пользовательских наименований итоговых значений, отображаемых
 по столбцам, используйте свойство [IPivotEvaluatorTotals.ColumnTotalName](IPivotEvaluatorTotals.ColumnTotalName.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта
 с идентификатором EXPRESS. В отчёте должна содержаться таблица данных,
 построенная на основе куба.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MBDes: IMetabaseObjectDescriptor;

	    Express: IEaxAnalyzer;

	    Pivot: IPivot;

	    PivEv: IPivotEvaluator;

	    Totals: IPivotEvaluatorTotals;

	    Sum, Avg: PivotEvaluatorElementType;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    MBDes := MB.ItemById("EXPRESS");

	    // Откроем экспресс-отчёт на редактирование

	    Express := MBDes.Edit As IEaxAnalyzer;

	    // Получим настройки отображения таблицы данных отчёта

	    Pivot := Express.Pivot;

	    // Получим настройки вычисляемых показателей таблицы

	    PivEv := Pivot.Evaluator;

	    // Получим коллекцию итогов таблицы

	    Totals := PivEv.Totals;

	    Totals.ColumnTotalsEnabled := True;

	    Totals.RowTotalsEnabled := True;

	    // Установим тип итогов, рассчитываемых для строк

	    Sum := PivotEvaluatorElementType.Sum;

	    Totals.RowTypes := Sum;

	    // Установим тип итогов, рассчитываемых для столбцов

	    Avg := PivotEvaluatorElementType.Avg;

	    Totals.ColumnTypes := Avg;

	    // Зададим пользовательское наименование для итогов по строкам

	    Totals.RowTotalName(Sum) := "Итого";

	    // Зададим пользовательское наименование для итогов по столбцам

	    Totals.ColumnTotalName(Avg) := "В среднем";

	    // Сохраним изменения

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера для строк и столбцов таблицы будут рассчитаны
 итоги, для которых будут заданы пользовательские наименования: «Итого»
 для итогов, рассчитанных по строкам, и «В среднем» для итогов, рассчитанных
 по столбцам.


См. также:


[IPivotEvaluatorTotals](IPivotEvaluatorTotals.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
