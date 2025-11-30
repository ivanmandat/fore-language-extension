# IVZTreeMap.HeightVisual

IVZTreeMap.HeightVisual
-


# IVZTreeMap.HeightVisual


## Синтаксис


HeightVisual: [IVZNumericVisual](../IVZNumericVisual/IVZNumericVisual.htm);


## Описание


Свойство HeightVisual определяет
 визуализатор для определения высоты дочерних элементов [плоского
 дерева](IVZTreeMap.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXP. Модуль, в котором размещается пример, должен иметь
 ссылки на системные сборки Express, Metabase и Visualizators. Указанная
 процедура должна вызываться из точки входа Main.


Преобразуем набор чисел с помощью собственного преобразователя,
 увеличивающего значение на входе в 5 раз:


	// Определим собственный преобразователь

	Class MyAdapter: object, IVZDataAdapter

	    // Значение на входе будем увеличивать в 5 раз

	    Function GetData(Value: Variant): Variant;

	        Begin

	        Return Value * 5

	    End Function GetData;

	End Class MyAdapter;


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    TreeMap: IVZTreeMap;

	    HeightVisual: IVZNumericVisual;

	    DataSourceMapping: IVZDataSourceMapping;

	    DataTransformer: IVZDataAdapter;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXP").Edit As IEaxAnalyzer;

	    // Получим плоское дерево

	    TreeMap := EaxAnalyzer.TreeMap.TreeMap;

	    // Создадим новый объект визуализатора

	    HeightVisual := New VZNumericVisual.Create;

	    // Получим настройки сопоставления данных

	    DataSourceMapping := HeightVisual.NumericMapping;

	    // Установим тип сопоставления «Преобразователь данных»

	    DataSourceMapping.MappingType := VisualizatorDataMappingType.DataMappingTransformer;

	    // Создадим и установим собственный преобразователь данных

	    DataTransformer := New MyAdapter.Create;

	    DataSourceMapping.DataTransformer := DataTransformer;

	    Debug.WriteLine("Преобразование данных:");

	    Debug.IndentLevel := 1;

	    Debug.WriteLine("Вход: 1, выход: " +

	        ((DataTransformer.GetData(1)) As Double).ToString);

	    Debug.WriteLine("Вход: 5, выход: " +

	        ((DataTransformer.GetData(5)) As Double).ToString);

	    Debug.WriteLine("Вход: 30, выход: " +

	        ((DataTransformer.GetData(30)) As Double).ToString);

	    // Установим визуализатор для определения высоты элементов дерева

	    TreeMap.HeightVisual := HeightVisual;

	End Sub UserProc;


В результате выполнения примера был создан собственный преобразователь,
 увеличивающий значение на входе в 5 раз, а в консоли среды разработки
 были выведены результаты преобразования чисел 1, 5 и 30:


Преобразование данных:


    Вход: 1, выход: 5


    Вход: 5, выход: 25


    Вход: 30, выход: 150


См. также:


[IVZTreeMap](IVZTreeMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
