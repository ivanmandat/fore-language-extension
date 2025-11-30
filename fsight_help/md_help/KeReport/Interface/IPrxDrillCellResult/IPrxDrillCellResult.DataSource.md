# IPrxDrillCellResult.DataSource

IPrxDrillCellResult.DataSource
-


# IPrxDrillCellResult.DataSource


## Синтаксис


DataSource: [IPrxDataSource](../IPrxDataSource/IPrxDataSource.htm);


## Описание


Свойство DataSource возвращает
 источник данных, содержащий срез являющийся источником данных для ячейки.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REPORT, в котором содержится область данных,
 привязанная к ячейке B1.


Добавьте ссылки на системные сборки: Metabase, Report, Tab.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    Sheet: IPrxSheet;

    Drill: IPrxDrillCellResult;

    SheetTab: IPrxTable;

    Data: IPrxTableDataBinding;

    Source: IPrxDataSource;

Begin

    MB := MetabaseClass.Active;

    // Получим регламентный отчёт

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    // Получим активный лист отчёта

    Sheet := Report.ActiveSheet;

    Sheet.Recalc;

    SheetTab := Sheet As IPrxTable;

    // Получим информацию о привязке ячейки B1 к срезу данных

    Data := SheetTab.DataBinding;

    Drill := Data.DrillCell(1,1);

    // Выведем в консоль наименование источника данных

    Source := Drill.DataSource;

    Debug.WriteLine(Source.Name);

End Sub UserProc;


После выполнения примера в консоль будет выведено наименование источника
 данных среза, привязанного к ячейке B1.


См. также:


[IPrxDrillCellResult](IPrxDrillCellResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
