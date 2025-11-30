# IPrxChartLegend.UndoRedo

IPrxChartLegend.UndoRedo
-


# IPrxChartLegend.UndoRedo


## Синтаксис


UndoRedo: [IUndoRedo](ForeSys.chm::/Interface/IUndoRedo/IUndoRedo.htm);


## Описание


Свойство UndoRedo определяет
 параметры стека изменений (отмены/повтора) внешней легенды диаграммы регламентного
 отчета.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REGULAR_REPORT», в котором добавлена диаграмма и внешняя
 легенда. Подключите системные сборки: Metabase, Report, Tab.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    Legend: IPrxChartLegend;

    Objects: ITabObjects;

    UnRed: IUndoRedo;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

    Objects := (Report.ActiveSheet As IprxTable).TabSheet.Objects;

    Legend := Objects.Item(1).Extension As IPrxChartLegend;

    UnRed := Legend.UndoRedo;

    UnRed.Enabled := True;

    UnRed.Limit := 5;

    (Report As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для внешней легенды диаграммы будет доступен
 стек изменений с ограничением по количеству операций отмены/повтора до
 5 действий.


См. также:


[IPrxChartLegend](IPrxChartLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
