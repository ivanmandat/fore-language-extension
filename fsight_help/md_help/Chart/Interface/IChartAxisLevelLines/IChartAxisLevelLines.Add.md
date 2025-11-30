# IChartAxisLevelLines.Add

IChartAxisLevelLines.Add
-


# IChartAxisLevelLines.Add


## Синтаксис


Add(Value: Double; [Pen: [IGxPen](ModDrawing.chm::/Interface/IGxPen/IGxPen.htm)
 = Null]): Integer;


## Параметры


Value. Значение добавляемого
 уровня.


Pen. Необязательный параметр,
 определяет параметры линии добавляемого уровня. Значение по умолчанию
 - Null.


## Описание


Метод Add добавляет новую линию
 уровня на диаграмму и возвращает индекс этого уровня.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REGULAR_REPORT», на листе которого расположена диаграмма
 с исходными данными и добавлены как минимум три [линии
 уровня](UiDiagrams.chm::/Tuning_format/Format_Axis/UiDiagrams_FormatAxis_Levels.htm). В модуле подключите системные сборки: Metabase,
 Report, Tab, Chart, Drawing.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    Tab: ITabSheet;

    Chart: IChart;

    LevelLine: IChartAxisLevelLine;

    Pen: IGxPen;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

    Tab := (Report.Sheets.Item(0) As IPrxTable).TabSheet;

    Chart := Tab.Objects.Item(0).Extension As IChart;

    Chart.AxisY.LevelLines.Remove(0);

    Pen := New GxPen.CreateSolid(GxColor.FromKnownColor(GxKnownColor.Blue), 0.40);

    Chart.AxisY.LevelLines.Add(12.2, Pen);

    LevelLine := Chart.AxisY.LevelLines.Item(1);

    LevelLine.Value := 15.4;

    (Report As IMetabaseObject).Save;

End Sub UserProc;


В регламентном отчете на диаграмме изменятся линии уровня: первая линия
 будет удалена, значение третьей линии изменится, добавится заданная линия
 определенной толщины и цвета.


См. также:


[IChartAxisLevelLines](IChartAxisLevelLines.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
