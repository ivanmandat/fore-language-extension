# IVZMapChartMarker.MarkerVisual

IVZMapChartMarker.MarkerVisual
-


# IVZMapChartMarker.MarkerVisual


## Синтаксис


MarkerVisual: [IVZMapChartMarkerVisual](../IVZMapChartMarkerVisual/IVZMapChartMarkerVisual.htm);


## Описание


Свойство MarkerVisual возвращает
 графическое представление маркера геолокации.


## Комментарии


Графическое представление включает настройки:


	- [цвета
	 заливки](../IVZMapChartMarkerVisual/IVZMapChartMarkerVisual.BackgroundMapping.htm);


	- [географической
	 широты](../IVZMapChartMarkerVisual/IVZMapChartMarkerVisual.LatitudeMapping.htm);


	- [географической
	 долготы](../IVZMapChartMarkerVisual/IVZMapChartMarkerVisual.LongitudeMapping.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS, содержащего карту с маркерами геолокации.


Добавьте ссылки на системные сборки: Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Map: IVZMapChart;

	    MarkerVisual: IVZMapChartMarkerVisual;

	    BackroundMapping, LatMapping, LongMapping: IVZDataSourceMapping;

	Begin

	    // Получим текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Express := MB.ItemById("EXPRESS").Bind As IEaxAnalyzer;

	    // Получим карту

	    Map := Express.MapChart.MapChart;

	    // Получим визуальное представление

	    MarkerVisual := Map.Markers.Item(0).MarkerVisual;

	    // Получим настройки сопоставления данных маркера геолокации

	    BackroundMapping := MarkerVisual.BackgroundMapping;

	    LatMapping := MarkerVisual.LatitudeMapping;

	    LongMapping := MarkerVisual.LongitudeMapping;

	    // Выведем в консоль идентификаторы атрибутов для настройки сопоставления данных

	    Debug.WriteLine("Идентификатор атрибута для настройки сопоставления данных цвету заливки маркера - " + BackroundMapping.AttributeId);

	    Debug.WriteLine("Идентификатор атрибута для настройки сопоставления данных географической широте маркера - " + LatMapping.AttributeId);

	    Debug.WriteLine("Идентификатор атрибута для настройки сопоставления данных географической долготе маркера - " + LongMapping.AttributeId);

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены идентификаторы
 атрибутов для различных настроек сопоставлений.


См. также:


[IVZMapChartMarker](IVZMapChartMarker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
