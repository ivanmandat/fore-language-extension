# IVZTreeMap.SizeVisual

IVZTreeMap.SizeVisual
-


# IVZTreeMap.SizeVisual


## Синтаксис


SizeVisual: [IVZNumericVisual](../IVZNumericVisual/IVZNumericVisual.htm);


## Описание


Свойство SizeVisual определяет
 визуализатор для определения размеров дочерних элементов [плоского
 дерева](IVZTreeMap.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXP. Чтобы был доступен визуализатор для определения
 размеров дочерних элементов плоского дерева нужно открыть данный экспресс-отчёт
 и перейти на вкладку «Отметка»
 боковой панели. Далее требуется раскрыть вкладку измерения метрик, нажать
 на кнопку «Размер» и из списка
 выбрать один из доступных пунктов:


![](IVZTreeMap_SizeVisual.png)


Модуль, в котором размещается пример, должен иметь ссылки на системные
 сборки Express, Metabase и Visualizators. Указанная процедура должна
 вызываться из точки входа Main.


Преобразуем набор чисел с помощью собственного преобразователя,
 увеличивающего значение на входе в 20 раз:


	// Определим собственный преобразователь

	Class MyAdapter: object, IVZDataAdapter

	    // Значение на входе будем увеличивать в 20 раз

	    Function GetData(Value: Variant): Variant;

	        Begin

	        Return Value * 20

	    End Function GetData;

	End Class MyAdapter;


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    TreeMap: IVZTreeMap;

	    SizeVisual: IVZNumericVisual;

	    DataSourceMapping: IVZDataSourceMapping;

	    DataTransformer: IVZDataAdapter;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXP").Edit As IEaxAnalyzer;

	    // Получим плоское дерево

	    TreeMap := EaxAnalyzer.TreeMap.TreeMap;

	    // Получим визуализатор размера элементов диаграммы

	    SizeVisual := TreeMap.SizeVisual;

	    // Получим настройки сопоставления данных

	    DataSourceMapping := SizeVisual.NumericMapping;

	    // Установим тип сопоставления «Преобразователь данных»

	    DataSourceMapping.MappingType := VisualizatorDataMappingType.DataMappingTransformer;

	    // Создадим и установим собственный преобразователь данных

	    DataTransformer := New MyAdapter.Create;

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

	    // Установим визуализатор для определения размеров элемента дерева

	    TreeMap.SizeVisual := SizeVisual;

	End Sub UserProc;


В результате выполнения примера был создан собственный преобразователь,
 увеличивающий значение на входе в 20 раз, а в консоли среды разработки
 были выведены результаты преобразования чисел -0.05, 0, 0.05, 5 и 1000:


Преобразование данных:


    Вход: -0.05, выход: -1


    Вход: 0, выход: 0


    Вход: 0.05, выход: 1


    Вход: 5, выход: 100


    Вход: 1000, выход: 20000


См. также:


[IVZTreeMap](IVZTreeMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
