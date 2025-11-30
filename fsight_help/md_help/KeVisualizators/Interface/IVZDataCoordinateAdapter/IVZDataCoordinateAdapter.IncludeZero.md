# IVZDataCoordinateAdapter.IncludeZero

IVZDataCoordinateAdapter.IncludeZero
-


# IVZDataCoordinateAdapter.IncludeZero


## Синтаксис


IncludeZero: Boolean;


## Описание


Свойство IncludeZero определяет,
 будут ли в преобразователе исключаться нулевые значения.


## Комментарии


Допустимые значения:


	- True. По умолчанию.
	 Нулевые значения будут исключены;


	- False. По умолчанию
	 для [столбиковых показателей](../IVZMapChartBar/IVZMapChartBar.htm).
	 Нулевые значения исключены не будут.


Данное свойство выполняет операцию min(MinValue, 0) при определении
 минимального значения по данным ([IVZDataNormalizeAdapter.MinValue](../IVZDataNormalizeAdapter/IVZDataNormalizeAdapter.MinValue.htm)).


Для определения, будут ли данные в преобразователе обрабатываться по
 модулю, используйте [IVZDataCoordinateAdapter.UseSignDivision](IVZDataCoordinateAdapter.UseSignDivision.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта
 с идентификатором EXPRESS, содержащего на карте столбиковые показатели.


Добавьте ссылки на системные сборки: Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    Express: IEaxAnalyzer;

	    Map: IVZMapChart;

	    Layer: IVZMapChartLayer;

	    DataSourceMapping: IVZMultipleDataSourceMapping;

	    BarVisual: IVZMapChartBarVisual;

	    DataTransformer: IVZDataCoordinateAdapter;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Express := Metabase.ItemById("EXPRESS").Bind As IEaxAnalyzer;

	    // Получим карту

	    Map := Express.MapChart.MapChart;

	    // Получим слой карты

	    Layer := Map.RootLayer.SubLayers.Item(0);

	    // Получим визуальное представление

	    BarVisual := Layer.Bars.Item(0).BarVisual;

	    // Получим настройки сопоставления данных

	    DataSourceMapping := BarVisual.HeightMapping;

	    DataTransformer := DataSourceMapping.Item(0).DataTransformer As IVZDataCoordinateAdapter;

	    // Зададим верхнюю границу интервала

	    DataTransformer.MaxValue := 30;

	    // Зададим нижнюю границу интервала

	    DataTransformer.MinValue := 2;

	    // Обрабатывать значение по модулю

	    DataTransformer.UseSignDivision := True;

	    // Исключать нулевые значения

	    DataTransformer.IncludeZero := True;

	    // Выведем в окно консоли

	    Debug.WriteLine("Преобразование данных:");

	    Debug.WriteLine("Вход: -10, выход: " +

	        ((DataTransformer.GetData(-10)) As Double).ToString);

	    Debug.WriteLine("Вход: -5, выход: " +

	        ((DataTransformer.GetData(-5)) As Double).ToString);

	    Debug.WriteLine("Вход: 0, выход: " +

	        ((DataTransformer.GetData(0)) As Double).ToString);

	    Debug.WriteLine("Вход: 5, выход: " +

	        ((DataTransformer.GetData(5)) As Double).ToString);

	End Sub UserProc;


В результате выполнения примера в окно консоли выведутся значения на
 выходе.


См. также:


[IVZDataCoordinateAdapter](IVZDataCoordinateAdapter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
