# IVZMapChartPie.StartAngle

IVZMapChartPie.StartAngle
-


# IVZMapChartPie.StartAngle


## Синтаксис


StartAngle: Double;


## Описание


Свойство StartAngle определяет
 угол поворота [кругового
 показателя](UiMaps.chm::/Configure/Diagrams.htm)
 на карте против часовой стрелки.


## Комментарии


По умолчанию свойство принимает значение «0».


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS, содержащего карту с [круговыми показателями](UiMaps.chm::/Configure/Diagrams.htm).


Добавьте ссылки на системные сборки: Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Map: IVZMapChart;

	    Layer: IVZMapChartLayer;

	    PiesArray: IVZPiesArray;

	    Pie: IVZMapChartPie;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Express := MB.ItemById("Bars2_copy1").Edit As IEaxAnalyzer;

	    // Получим карту

	    Map := Express.MapChart.MapChart;

	    // Получим слой на карте

	    Layer := Map.RootLayer.SubLayers.Item(0);

	    // Получим коллекцию круговых показателей на слое

	    PiesArray := Layer.Pies;

	    // Получим объект для работы с круговыми показателями

	    Pie := PiesArray.Item(0);

	    // Зададим угол поворота круговых показателей против часовой стрелки

	    Pie.StartAngle := 90.0;

	    // Задаим толщину границ круговых показателей

	    Pie.BorderThickness := 2.0;

	    // Зададим минимальное значение радиуса круговых показателей

	    Pie.LeastRadiusPart := 15.0;

	    // Зададим максимальное количество секторов в круговых показателях

	    Pie.MaxPiesCount := 2;

	    // Очистим коллекцию круговых показателей

	    PiesArray.Clear;

	    // Добавим ранее полученный объект для работы с круговыми показателями

	    PiesArray.Add(Pie);

	    // Обновим и сохраним отчёт

	    Express.RefreshAll;

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера для круговых показателей на карте экспресс-отчёта
 будут заданы настройки:


	- угол поворота круговых показателей - 90 градусов против часовой
	 стрелки;


	- толщина границ круговых показателей - 2;


	- минимальное значение радиуса круговых показателей - 15;


	- максимальное количество секторов в круговых показателях - 2.


См. также:


[IVZMapChartPie](IVZMapChartPie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
