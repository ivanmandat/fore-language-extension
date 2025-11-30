# IVZMapChart.Markers

IVZMapChart.Markers
-


# IVZMapChart.Markers


## Синтаксис


Markers: [IVZMapChartMarkers](../IVZMapChartMarkers/IVZMapChartMarkers.htm);


## Описание


Свойство Markers определяет
 коллекцию маркеров геолокации карты.


## Комментарии


Маркер геолокации - это
 точка, привязанная к территории. Маркеры позволяют отображать на карте
 места, необходимые пользователю, например: расположение магазинов или
 станций метро.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты:


	- EaxDocumentViewerBox с наименованием «EaxDocumentViewerBox1»;


	- UiErAnalyzer с наименованием «UiErAnalyzer1», который служит
	 источником данных для «EaxDocumentViewerBox1».


В качестве источника данных для компонента «UiErAnalyzer1» укажите экспресс-отчёт
 с картой. Отчет содержит единственное измерение объектов геолокации и
 несколько маркеров геолокации.


Добавьте ссылки на системные сборки: Drawing, Visualizatrors.


	Sub UserProc;

	Var

	    Express: IEaxAnalyzer;

	    MapChart: IEaxMapChart;

	    VisMapChart: IVZMapChart;

	    Markers: IVZMapChartMarkers;

	    Marker, MarkerAdd: IVZMapChartMarker;

	    Color: IGxColor;

	    ToolTipStyle: IVZToolTipStyle;

	    Topo: IVZMapChartTopobase;

	    MetaInfo: IVZMapChartTopobaseMetaInfo;

	    LeftGeoItem, RightGeoItem: IVZMapChartTopobaseGeoItem;

	Begin

	    // Получим экспресс-отчёт

	    Express := UiErAnalyzer1.ErAnalyzer;

	    // Получим карту в качестве визуализатора

	    MapChart := Express.MapChart;

	    VisMapChart := MapChart.MapChart;

	    // Получим коллекцию маркеров геолокации

	    Markers := VisMapChart.Markers;

	    // Получим маркер геолокации

	    Marker := Markers.Item(0);

	    // Создадим новый маркер геолокации

	    MarkerAdd := New VZMapChartMarker.Create;

	    // Добавим созданный маркер в коллекцию

	    Markers.Add(MarkerAdd);

	    // Вставим указанный маркер во вторую позицию в коллекции

	    Markers.InsertAt(2, MarkerAdd);

	    // Изменим идентификатор маркера

	    Marker.MarkerId := "GeoMarker";

	    // Создадим новый стиль всплывающих подсказок

	    ToolTipStyle := New VZToolTipStyle.Create;

	    // Изменим цвет шрифта подсказок

	    Color := New GxColor.CreateRGB(120, 0, 120);

	    ToolTipStyle.FontColor := Color;

	    // Применим стиль к всплывающим подсказкам маркера геолокации

	    Marker.ToolTipStyle := ToolTipStyle;

	    // Получим топооснову карты

	    Topo := VisMapChart.Topobase;

	    // Получим метаданные топоосновы

	    MetaInfo := Topo.Meta;

	    // Создадим новые координаты маркера и применим их

	    LeftGeoItem := New VZMapChartTopobaseGeoItem.Create;

	    LeftGeoItem.Longitude := 50;

	    MetaInfo.GeoLeftBottom := LeftGeoItem;

	    RightGeoItem := New VZMapChartTopobaseGeoItem.Create;

	    RightGeoItem.Longitude := -50;

	    MetaInfo.GeoRightTop := RightGeoItem;

	    // Обновим карту

	    MapChart.Refresh;

	End Sub UserProc;


После выполнения примера:


	- в определенную позицию коллекции добавится новый маркер геолокации;


	- изменится идентификатор полученного маркера геолокации;


	- изменится цвет шрифта всплывающей подсказки маркера геолокации;


	- будет создана область привязки с новыми координатами, маркер
	 геолокации сместится согласно ее размерам.


См. также:


[IVZMapChart](IVZMapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
