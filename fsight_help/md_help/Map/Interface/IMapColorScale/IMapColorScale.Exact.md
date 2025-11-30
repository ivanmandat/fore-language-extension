# IMapColorScale.Exact

IMapColorScale.Exact
-


# IMapColorScale.Exact


## Синтаксис


Exact(Index: Integer): [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Параметры


Index. Индекс деления шкалы.


## Описание


Свойство Exact определяет цвет
 заливки показателя, значения которого равны значению деления шкалы.


## Комментарии


Каждому [значению деления
 шкалы](../IMapScale/IMapScale.Value.htm) соответствует три цветовых деления (меньше, равно, больше).


## Пример


В рассматриваемом примере предполагается существование объекта Report типа IPrxReport.
 В регламентном отчете должна быть создана цветовая шкала.


Добавьте ссылки на системные сборки: Drawing, Map, Report.


	Sub UserProc;

	Var

	    Report : IPrxReport;

	    MapScale : IMapColorScale;

	    i: Integer;

	Begin

	    MapScale := Report.Scales.Item(0).MapScale As IMapColorScale;

	    For i := 0 To MapScale.Count - 1 Do

	        MapScale.Less(i) := New GxColor.CreateRGB(120, 100 + (i*15), 225);

	        MapScale.Exact(i) := New GxColor.CreateRGB(170, 100 + (i*15), 225);

	        MapScale.Greater(i) := New GxColor.CreateRGB(220, 100 + (i*15), 225);

	    End For;

	    MapScale.NoData := New GxColor.CreateRGB(250, 0, 0);

	End Sub UserProc;


После выполнения примера для всех делений цветовой шкалы будут изменены
 цвета.


См. также:


[IMapColorScale](IMapColorScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
