# IPrxReport.IsDirty

IPrxReport.IsDirty
-


# IPrxReport.IsDirty


## Синтаксис


IsDirty: Boolean;


## Описание


Свойство IsDirty определяет
 признак наличия несохраненных изменений в регламентном отчете.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REPORT.


Добавьте ссылки на системные сборки: Metabase, Report, Tab.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    Sheet: IPrxSheet;

    SheetTab: IPrxTable;

    Table: ITabSheet;

Begin

    MB := MetabaseClass.Active;

    // Получим регламентный отчёт

    Report := MB.ItemById("REPORT").Bind As IPrxReport;

    // Добавим значение в ячейку A0

    Sheet := Report.ActiveSheet;

    SheetTab := Sheet As IPrxTable;

    Table := SheetTab.TabSheet;

    Table.Cell(0, 0).Value := "Ячейка А0";

    If Report.IsDirty Then

        Debug.WriteLine("В отчёте содержатся несохраненные изменения");

    Else

        Debug.WriteLine("Все изменения сохранены");

    End If;

End Sub UserProc;


После выполнения примера в консоль будет выведен признак наличия несохраненных изменений
 в регламентном отчёте:


В отчёте содержатся несохраненные изменения


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
