# IVZDataNormalizeAdapter.MaxValue

IVZDataNormalizeAdapter.MaxValue
-


# IVZDataNormalizeAdapter.MaxValue


## Синтаксис


MaxValue: Double;


## Описание


Свойство MaxValue определяет
 верхнюю границу интервала, к которому приводятся данные.


## Комментарии


Для определения нижней границы интервала используйте свойство [IVZDataNormalizeAdapter.MinValue](IVZDataNormalizeAdapter.MinValue.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS_IVZ, содержащего пузырьковую диаграмму.


Добавьте ссылки на системные сборки: Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    DataSourceMapping: IVZDataSourceMapping;

	    SizeVisual: IVZNumericVisual;

	    DataSource: IVZMultiplyDataSource;

	    DataTransformer: IVZDataNormalizeAdapter;

	    i, j: Integer;

	    val: Variant;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXPRESS_IVZ").Edit As IEaxAnalyzer;

	    // Активируем пузырьковую диаграмму и обновим ее

	    EaxAnalyzer.BubbleChart.Enabled := True;

	    EaxAnalyzer.BubbleChart.Visible := True;

	    EaxAnalyzer.BubbleChart.Refresh;

	    // Получим визуализатор оси X

	    SizeVisual := EaxAnalyzer.BubbleChart.BubbleChart.XVisual;

	    // Получим настройки сопоставления данных

	    DataSourceMapping := SizeVisual.NumericMapping;

	    // Установим тип сопоставления «Преобразователь данных»

	    DataSourceMapping.MappingType := VisualizatorDataMappingType.DataMappingTransformer;

	    // Установим заголовок для источника данных, соответствующий идентификатору

	    DataSource := DataSourceMapping.DataSource;

	    // Создадим преобразователь данных

	    DataTransformer := New VZDataNormalizeAdapter.Create;

	    // Зададим верхнюю границу интервала

	    DataTransformer.MaxValue := 100;

	    // Зададим минимальное значение, которое выводится, если значения из источника данных меньше его

	    DataTransformer.MinCutValue := 10;

	    // Зададим нижнюю границу интервала

	    DataTransformer.MinValue := 0;

	    // Зададим значение, если в источнике есть пустые значения

	    DataTransformer.NoDataValue := "Нет данных";

	    // Загрузим данные из источника

	    DataTransformer.InitializeFromDataSourceEx(DataSource, DataSourceMapping.AttributeId, 1);

	    // Установим логарифмический режим нормализации данных

	    DataTransformer.NormalizeMode := VisualizatorDataAdapterMode.Linear;

	    // Установим данный преобразователь

	    DataSourceMapping.DataTransformer := DataTransformer;

	    // Преобразуем данные из источника и выведем их в окно консоли

	    Debug.WriteLine("Преобразование данных:");

	    For i := 0 To DataSource.GetObjects.Count - 1 Do

	        For j := 0 To EaxAnalyzer.BubbleChart.BubbleChart.TimeLine.StepsNames.Count - 1 Do

	            val := DataSource.GetDataEx(DataSource.GetObjects.Item(i), DataSourceMapping.AttributeId, j);

	            Debug.WriteLine("Вход: " + ((val.IsNull)? "Null" :(val As String))

	                + ", выход: " + (DataTransformer.GetData(val)) As String);

	        End For;

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли выведутся приведенные к границам
 интервала значения из заданного источника данных.


См. также:


[IVZDataNormalizeAdapter](IVZDataNormalizeAdapter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
