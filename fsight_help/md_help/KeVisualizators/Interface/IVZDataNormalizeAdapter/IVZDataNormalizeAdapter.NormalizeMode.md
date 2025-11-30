# IVZDataNormalizeAdapter.NormalizeMode

IVZDataNormalizeAdapter.NormalizeMode
-


# IVZDataNormalizeAdapter.NormalizeMode


## Синтаксис


NormalizeMode: [VisualizatorDataAdapterMode](../../Enums/VisualizatorDataAdapterMode.htm);


## Описание


Свойство NormalizeMode определяет
 режим нормализации данных.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXP. В отчете для пузырькового дерева должна быть выбрана
 метрика «Размер». Модуль, в котором размещается пример, должен иметь ссылки
 на системные сборки Express, Metabase и Visualizators. Указанная
 процедура должна вызываться из точки входа Main.


Выполним логарифмическое преобразование чисел -0.05, 0, 0.05, 5 и 1000:


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    DataSourceMapping: IVZDataSourceMapping;

	    SizeVisual: IVZNumericVisual;

	    DataSource: IVZMultiplyDataSource;

	    DataTransformer: IVZDataNormalizeAdapter;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXP").Edit As IEaxAnalyzer;

	    // Получим визуализатор текста

	    SizeVisual := EaxAnalyzer.BubbleTree.BubbleTree.SizeVisual;

	    // Получим настройки сопоставления данных

	    DataSourceMapping := SizeVisual.NumericMapping;

	    // Установим тип сопоставления «Преобразователь данных»

	    DataSourceMapping.MappingType := VisualizatorDataMappingType.DataMappingTransformer;

	    // Установим заголовок для источника данных, соответствующий идентификатору

	    DataSource := DataSourceMapping.DataSource;

	    // Создадим преобразователь данных

	    DataTransformer := New VZDataNormalizeAdapter.Create;

	    // Загрузим данные из источника

	    DataTransformer.InitializeFromDataSource(DataSource);

	    // Установим логарифмический режим нормализации данных

	    DataTransformer.NormalizeMode := VisualizatorDataAdapterMode.Logarithm;

	    // Установим данный преобразователь

	    DataSourceMapping.DataTransformer := DataTransformer As IVZDataAdapter;

	    Debug.WriteLine("Преобразование данных:");

	    Debug.IndentLevel := 1;

	    Debug.WriteLine("Вход: -0.05, выход: " +

	        ((DataTransformer.GetData(-0.05)) As Double).ToString);

	    Debug.WriteLine("Вход: 0, выход: " +

	        ((DataTransformer.GetData(0)) As Double).ToString);

	    Debug.WriteLine("Вход: 0.05, выход: " +

	        ((DataTransformer.GetData(0.05)) As Double).ToString);

	    Debug.WriteLine("Вход: 5, выход: " +

	        ((DataTransformer.GetData(5)) As Double).ToString);

	    Debug.WriteLine("Вход: 1000, выход: " +

	        ((DataTransformer.GetData(1000)) As Double).ToString);

	End Sub UserProc;


В результате выполнения примера было выполнено логарифмическое преобразование
 чисел -0.05, 0, 0.05, 5 и 1000. Результаты данного преобразования были
 выведены в консоли среды разработки:


Преобразование данных:


    Вход: -0.05, выход: -1.#IND


    Вход: 0, выход: 0.2


    Вход: 0.05, выход: 0.2


    Вход: 5, выход: 1.6094379124341


    Вход: 1000, выход: 6.90775527898214


См. также:


[IVZDataNormalizeAdapter](IVZDataNormalizeAdapter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
