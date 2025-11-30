# IPrxSheet.Type

IPrxSheet.Type
-


# IPrxSheet.Type


## Синтаксис


Type: [PrxSheetType](../../Enums/PrxSheetType.htm);


## Описание


Свойство Type возвращает тип
 листа.


## Комментарии


Для работы с листом регламентного отчета в зависимости от его типа применяются
 различные интерфейсы: [IPrxTable](../IPrxTable/IPrxTable.htm)
 для значения [PrxSheetType.Table](../../Enums/PrxSheetType.htm)
 и [IPrxJsPlugin](../IPrxJsPlugin/IPrxJsPlugin.htm)
 для значения [PrxSheetType.JsPlugin](../../Enums/PrxSheetType.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчета с идентификатором REPORT.


Добавьте ссылки на системные сборки: Metabase, Report, Ui.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    Sheet: IPrxSheet;

    Sheets: IPrxSheets;

    SheetTab: IPrxTable;

    i: Integer;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Получаем отчёт

    Report := Mb.ItemById("REPORT").Edit As IPrxReport;

    // Получаем листы отчёта

    Sheets := Report.Sheets;

    // Определяем, какие листы табличного типа

    For i := 0 To Report.Sheets.Count - 1 Do

        Sheet := Report.Sheets.Item(i);

        If Sheet.Type = PrxSheetType.Table Then

            SheetTab := Sheet As IPrxTable;

            //Выводим сообщение

            WinApplication.InformationBox("Лист " + Sheet.Name + " табличного типа");

        End If;

    End For;

End Sub UserProc;


В результате выполнения примера будет
 выведено сообщение о наличии табличного листа в отчёте, содержащие наименование
 листа. Сообщение будет выводится столько раз сколько табличных листов
 в отчёте.


См. также:


[IPrxSheet](IPrxSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
