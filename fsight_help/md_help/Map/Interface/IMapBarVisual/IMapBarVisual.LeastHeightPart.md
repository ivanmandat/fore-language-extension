# IMapBarVisual.LeastHeightPart

IMapBarVisual.LeastHeightPart
-


# IMapBarVisual.LeastHeightPart


## Синтаксис


LeastHeightPart: Double;


## Описание


Свойство LeastHeightPart определяет
 долю минимальной высоты столбиков показателя.


## Комментарии


Допустимые значения ограничены диапазоном [0..1]. По умолчанию свойство
 имеет значение «0.2».


## Пример


Для выполнения примера предполагается наличие регламентного отчёта
 с идентификатором REGULAR_REPORT, на листе которого расположена таблица
 с данными по каким-либо регионам и карта (.tbs) со слоем «Regions», где
 добавлен столбиковый показатель.


Добавьте ссылки на системные сборки: Drawing, Map, Metabase, Report,
 Tab.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    MetabaseObject: IMetabaseObject;

	    Report: IPrxReport;

	    Map: IMap;

	    MapBar: IMapBarVisual;

	Begin

	    Metabase := MetabaseClass.Active;

	    Report := Metabase.ItemById("REGULAR_REPORT").Edit As IPrxReport;

	    // Определим карту на листе регламентного отчета

	    Map := Report.ActiveSheet.Table.Objects.Item(0).Extension As IMap;

	    // Определим столбиковый показатель

	    MapBar := Map.Layers.FindByName("Regions").Visuals.Item(0) As IMapBarVisual;

	    // Зададим долю минимальной высоты и ширины столбиков показателя

	    MapBar.LeastHeightPart := 0.4;

	    MapBar.LeastWidthPart := 0.5;

	    // Зададим максимальное количество столбиков

	    MapBar.BarsCount := 2;

	    // Определим параметры заливки столбиков показателя

	    MapBar.Color.Values.Count := 2;

	    MapBar.Color.Values.Item(0) := GxColor.FromName("Red");

	    MapBar.Color.Values.Item(1) := GxColor.FromName("Blue");

	    // Зададим цвет штриховки для столбиков показателя

	    MapBar.Fill.Value := GxHatchStyle.Cross;

	    MapBar.FillColor.Values.Item(0) := GxColor.FromName("Green");

	    // Определим высоту частей показателя и расстояние между ними

	    MapBar.Height.Value := 12;

	    MapBar.InterBarDistance := 2;

	    // Включим использование процентной шкалы для столбикового показателя

	    MapBar.Percentage := True;

	    // Зададим ширину частей показателя и начальный угол поворота

	    MapBar.Width.Value := 12;

	    MapBar.StartAngle := 50;

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера откройте и обновите регламентный отчет, на
 карте отобразятся столбиковые показатели по всем заданным параметрам.


См. также:


[IMapBarVisual](IMapBarVisual.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
