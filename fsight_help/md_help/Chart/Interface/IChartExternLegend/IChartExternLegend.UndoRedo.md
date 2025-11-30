# IChartExternLegend.UndoRedo

IChartExternLegend.UndoRedo
-


# IChartExternLegend.UndoRedo


## Синтаксис


UndoRedo: [IUndoRedo](ForeSys.chm::/Interface/IUndoRedo/IUndoRedo.htm);


## Описание


Свойство UndoRedo определяет параметры стека изменений (отмены/повтора) внешней легенды диаграммы.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с идентификатором «Report». В отчете присутствуют объекты: диаграмма и внешняя легенда.


			Sub UserProc;

Var

    mb: IMetabase;

    rep: IPrxReport;

    chartlegend: IChartExternLegend;

    objects: ITabObjects;

    UnRed: IUndoRedo;

Begin

    mb := MetabaseClass.Active;

    rep := mb.ItemById("Report").Edit As IPrxReport;

    objects := (rep.ActiveSheet As IprxTable).TabSheet.Objects;

    chartlegend := objects.Item(1) As IChartExternLegend;

    chartlegend.AddChart(objects.Item(2) As ichart);

    UnRed:=chartlegend.UndoRedo;

    UnRed.Enabled:= True;

    UnRed.Limit:= 50;

    (rep As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для внешней легенды диаграммы будет доступен стек изменений с ограничением по количеству операций отмены/повтора до 50 действий.


См. также:


[IChartExternLegend](IChartExternLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
