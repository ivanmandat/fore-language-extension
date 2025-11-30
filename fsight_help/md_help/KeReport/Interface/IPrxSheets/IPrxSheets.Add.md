# IPrxSheets.Add

IPrxSheets.Add
-


# IPrxSheets.Add


## Синтаксис


Add(Name: String, [Type: [PrxSheetType](../../Enums/PrxSheetType.htm)
 = 1]): [IPrxSheet](../IPrxSheet/IPrxSheet.htm);


## Параметры


Name. Наименование
 нового листа;


Type. Тип добавляемого листа,
 по умолчанию будет добавлен лист табличного типа.


## Описание


Метод Add добавляет лист в регламентный
 отчет.


## Комментарии


Если значение параметра Type
 равно [PrxSheetType.Table](../../Enums/PrxSheetType.htm), возвращаемый
 методом Add лист может быть приведен
 к интерфейсу [IPrxTable](../IPrxTable/IPrxTable.htm),
 если равно [PrxSheetType.JsPlugin](../../Enums/PrxSheetType.htm)
 - к интерфейсу [IPrxJsPlugin](../IPrxJsPlugin/IPrxJsPlugin.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчета с идентификатором REPORT.


Добавьте ссылки на системные сборки: Metabase, Report.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    Sheets: IPrxSheets;

    Sheet: IPrxSheet;

    SheetTab: IPrxTable;

    i: Integer;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Получаем отчёт

    Report := Mb.ItemById("REPORT").Edit As IPrxReport;

    // Получаем листы отчёта

    Sheets := Report.Sheets;

    i := Sheets.Count;

    // Добавляем табличный лист

    Sheet := Sheets.Add("Sheet" + (i).ToString, PrxSheetType.Table);

    Debug.WriteLine("Добавлен табличный лист " + Sheet.Name + ";");

    // Вводим значение на табличный лист

    SheetTab := Sheet As IPrxTable;

    SheetTab.TabSheet.Cell(0, 0).Value := i;

    // Сохраняем отчёт

    (Report As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в отчёт будет добавлен табличный
 лист, в ячейку A0 этого листа будет выведено количество листов в отчёте.


См. также:


[IPrxSheets](IPrxSheets.htm) | [IPrxTable](../IPrxTable/IPrxTable.htm)
 | [IPrxJsPlugin](../IPrxJsPlugin/IPrxJsPlugin.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
