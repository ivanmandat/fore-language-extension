# IMapColorScale.Color

IMapColorScale.Color
-


# IMapColorScale.Color


## Синтаксис


Color(Index: Integer; Impact: [MapScaleSettingImpact](../../Enums/MapScaleSettingImpact.htm)):
 [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Параметры


Index. Индекс деления шкалы;


Impact.
 Определяет положение относительно значения деления шкалы.


## Описание


Свойство Color определяет цвет
 заливки относительно заданного значения деления шкалы.


## Комментарии


Каждому значению деления шкалы ([IMapScale.Value](../IMapScale/IMapScale.Value.htm))
 соответствует три цветовых деления. [Показатели](UiReport.chm::/Desktop/Maps/UiMaps_Report_property_1.htm)
 будут закрашены следующим образом:


	- если значение показателя больше или меньше значения деления,
	 то заливка примет цвет, заданный с параметром MapScaleSettingImpact.Less
	 или MapScaleSettingImpact.Greater
	 соответственно;


	- если значение показателя совпадает со значением деления шкалы,
	 то заливка примет цвет, заданный с параметром MapScaleSettingImpact.Exact.


## Пример


В рассматриваемом примере предполагается существование объекта Report типа IPrxReport.


Добавьте ссылки на системные сборки: Drawing, Map, Report.


	Sub UserProc;

	Var

	    Report: IPrxReport;

	    MapScale : IMapColorScale;

	    i : Integer;

	Begin

	    MapScale := Report.Scales.Add(PrxMapScale.Color).MapScale As IMapColorScale;

	    MapScale.Count := 7;

	    For i := 0 To MapScale.Count - 1 Do

	        MapScale.Value(i) := (i + 1) * 3000;

	        MapScale.Color(i, MapScaleSettingImpact.Less) := New GxColor.CreateRGB(120, 100 + (i*15), 225);

	        MapScale.Color(i, MapScaleSettingImpact.Exact) := New GxColor.CreateRGB(170, 100 + (i*15), 225);

	        MapScale.Color(i, MapScaleSettingImpact.Greater) := New GxColor.CreateRGB(220, 100 + (i*15), 225);

	    End For;

	End Sub UserProc;


Для регламентного отчета будет создана цветовая шкала.


См. также:


[IMapColorScale](IMapColorScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
