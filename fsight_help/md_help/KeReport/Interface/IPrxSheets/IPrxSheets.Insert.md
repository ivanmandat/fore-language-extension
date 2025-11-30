# IPrxSheets.Insert

IPrxSheets.Insert
-


# IPrxSheets.Insert


## Синтаксис


Insert(Index: Integer, Name: String; [Type: [PrxSheetType](../../Enums/PrxSheetType.htm)
 = 1]): [IPrxSheet](../IPrxSheet/IPrxSheet.htm);


## Параметры


Index. Индекс
 позиции листа;


Name. Наименование нового листа;


Type. Тип добавляемого
 листа, по умолчанию будет добавлен лист табличного типа.


## Описание


Метод Insert осуществляет вставку
 нового листа в заданную позицию.


## Комментарии


Если значение параметра Type
 равно [PrxSheetType.Table](../../Enums/PrxSheetType.htm), возвращаемый
 методом Insert лист может быть
 приведен к интерфейсу [IPrxTable](../IPrxTable/IPrxTable.htm),
 если равно [PrxSheetType.JsPlugin](../../Enums/PrxSheetType.htm)
 - к интерфейсу [IPrxJsPlugin](../IPrxJsPlugin/IPrxJsPlugin.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT.


Добавьте ссылки на системные сборки: Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Sheets: IPrxSheets;

	    Sheet: IPrxSheet;

	    i: Integer;

	Begin

	    // Получим текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получим отчёт

	    Report := Mb.ItemById("REPORT").Edit As IPrxReport;

	    // Получим листы отчёта

	    Sheets := Report.Sheets;

	    i := Sheets.Count;

	    // Вставим лист

	    Sheet := Sheets.Insert(1, "Sheet" + (i + 1).ToString, PrxSheetType.Table);

	    Debug.WriteLine("Вставлен лист: " + Sheet.Name + ";");

	    // Сохраним отчёт

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера в отчёт вторым листом будет вставлен
 табличный лист, в консоль среды разработки будет выведена информация о
 вставке листа.


См. также:


[IPrxSheets](IPrxSheets.htm) | [IPrxTable](../IPrxTable/IPrxTable.htm)
 | [IPrxJsPlugin](../IPrxJsPlugin/IPrxJsPlugin.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
