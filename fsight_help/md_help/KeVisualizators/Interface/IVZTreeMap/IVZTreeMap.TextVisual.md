# IVZTreeMap.TextVisual

IVZTreeMap.TextVisual
-


# IVZTreeMap.TextVisual


## Синтаксис


TextVisual: [IVZTextVisual](../IVZTextVisual/IVZTextVisual.htm);


## Описание


Свойство TextVisual определяет
 визуализатор текста.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXP. Модуль, в котором размещается пример, должен иметь
 ссылки на системные сборки Express, Metabase и Visualizators. Указанная
 процедура должна вызываться из точки входа Main.


Далее будем первую букву входящих строк изменять на заглавную:


	// Определим собственный преобразователь

	Class MyAdapter: object, IVZDataAdapter

	    // Будем первую букву всех строк делать заглавной

	    Function GetData(Value: Variant): Variant;

	    Var

	        str: String;

	        chr: Char;

	    Begin

	        str := Value As String;

	        // Получим первый символ строки

	        chr := str.Chars(0);

	        // Сделаем данный символ заглавным

	        chr := Char.ToUpper(chr);

	        // Получим строку с большой буквой

	        str := chr + str.SubString(1, str.Length -1);

	        Return str;

	    End Function GetData;

	End Class MyAdapter;


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    TreeMap: IVZTreeMap;

	    TextVisual: IVZTextVisual;

	    DataSourceMapping: IVZDataSourceMapping;

	    DataTransformer: IVZDataAdapter;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXP").Edit As IEaxAnalyzer;

	    // Получим плоское дерево

	    TreeMap := EaxAnalyzer.TreeMap.TreeMap;

	    // Создадим новый экземпляр визуализатора текста

	    TextVisual := New VZTextVisual.Create;

	    // Получим настройки сопоставления данных

	    DataSourceMapping := TextVisual.TextMapping;

	    // Установим тип сопоставления «Преобразователь данных»

	    DataSourceMapping.MappingType := VisualizatorDataMappingType.DataMappingTransformer;

	    // Создадим и установим собственный преобразователь данных

	    DataTransformer := New MyAdapter.Create;

	    DataSourceMapping.DataTransformer := DataTransformer As IVZDataAdapter;

	    Debug.WriteLine("Преобразование строк:");

	    Debug.IndentLevel := 1;

	    Debug.WriteLine("Вход: ""анализ данных"", выход: " +

	        (DataTransformer.GetData("прогноз") As String ));

	    Debug.WriteLine("Вход: ""плоское дерево"", выход: " +

	        (DataTransformer.GetData("плоское дерево") As String ));

	    // Установим визуализатор для определения размеров элемента дерева

	    TreeMap.TextVisual := TextVisual;

	End Sub UserProc;


В результате выполнения примера был создан собственный преобразователь,
 изменяющий первую букву входящих строк на заглавную:


Преобразование строк:


    Вход: "анализ данных",
 выход: Анализ данных


    Вход: "плоское дерево",
 выход: Плоское дерево


См. также:


[IVZTreeMap](IVZTreeMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
