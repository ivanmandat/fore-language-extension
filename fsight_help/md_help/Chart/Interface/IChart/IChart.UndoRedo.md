# IChart.UndoRedo

IChart.UndoRedo
-


# IChart.UndoRedo


## Синтаксис


UndoRedo: [IUndoRedo](ForeSys.chm::/Interface/IUndoRedo/IUndoRedo.htm);


## Описание


Свойство UndoRedo определяет
 параметры стека изменений (отмены/повтора) диаграммы.


## Пример


Для выполнения примера предполагается наличие диаграммы в регламентном
 отчете с идентификатором REGULAR_REPORT.


Добавьте ссылки на системные сборки: Metabase, Chart, Report, Tab.


			Sub UserProc;

Var

    Report: IPrxReport;

    Sheet: IPrxSheet;

    PrxTable: IPrxTable;

    TabSheet: ITabSheet;

    Chart: IChart;

    MB: IMetabase;

    UndoRedo: IUndoRedo;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим диаграмму в регламентном отчёте

    Report := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

    Sheet := Report.Sheets.Item(0);

    PrxTable := Sheet As IPrxTable;

    TabSheet := PrxTable.TabSheet;

    Chart := TabSheet.Objects.Item(0).Extension As IChart;

    // Получим стек изменений диаграммы

    UndoRedo := Chart.UndoRedo;

    // Зададим доступность и количество изменений стека

    UndoRedo.Enabled:= True;

    UndoRedo.Limit:= 5;

    (Report As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для диаграммы будет доступен стек изменений
 с ограничением по количеству операций отмены/повтора до 5 действий.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
