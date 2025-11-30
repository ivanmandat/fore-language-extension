# IPrxReport.MoveSelectedGridToSheet

IPrxReport.MoveSelectedGridToSheet
-


# IPrxReport.MoveSelectedGridToSheet


## Синтаксис


MoveSelectedGridToSheet(Value: String);


## Параметры


Value. Наименование листа,
 на который осуществляется перемещение выделенной области данных.


## Описание


Метод MoveSelectedGridToSheet
 осуществляет перемещение выделенной таблицы области данных на другой лист.


## Комментарии


Лист, на котором расположена перемещаемая таблица области данных, должен
 быть активным. После перемещения рекомендуется перевычислить отчёт с помощью
 метода [Recalc](IPrxReport.Recalc.htm)/[RecalcC](IPrxReport.RecalcC.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT. В отчёте добавлен источник, на базе которого
 на активном листе создана область данных. В отчёте имеется минимум два
 листа с наименованиями по умолчанию.


Добавьте ссылки на системные сборки: Express, Metabase, Report, Tab.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Report: IPrxReport;

	    ViewRange: ITabRange;

	    Tab: ITabSheet;

	Begin

	    Mb := MetabaseClass.Active;

	    Report := Mb.ItemById("OBJ347911").Edit As IPrxReport;

	    // Диапазон расположения таблицы области данных

	    ViewRange := (Report.DataArea.Views.Item(0) As IEaxGrid).Range;

	    // Выделение области таблицы

	    Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

	    Tab.View.Selection.Range := ViewRange;

	    // Перемещение на другой лист

	    Report.MoveSelectedGridToSheet("Лист2");

	    Report.ActiveSheet := Report.Sheets.FindByName("Лист2");

	    Report.Recalc;

	    // Сохранение изменений

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера таблица области данных будет перемещена с первого
 на второй лист отчёта.


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
