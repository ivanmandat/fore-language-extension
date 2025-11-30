# IVZBubbleTree.TextVisual

IVZBubbleTree.TextVisual
-


# IVZBubbleTree.TextVisual


## Синтаксис


TextVisual: [IVZTextVisual](../IVZTextVisual/IVZTextVisual.htm);


## Описание


Свойство TextVisual определяет
 визуализатор текста.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRES. В экспресс-отчете должно быть настроено отображение
 визуализатора «Пузырьковое дерево», для которого должна быть выбрана метрика
 «Цвет». Модуль, в котором размещается пример, должен иметь ссылки на системные
 сборки Dimension, Express, Metabase и Visualizators. Указанная процедура
 должна вызываться из точки входа Main.


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

	    EaxBubbleTree: IEaxBubbleTree;

	    TextVisual: IVZTextVisual;

	    DataSourceMapping: IVZDataSourceMapping;

	    DataTransformer: IVZDataAdapter;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXPRES").Edit As IEaxAnalyzer;

	    EaxBubbleTree := EaxAnalyzer.BubbleTree;

	    // Установим отметку для метрики «Значение»

	    EaxBubbleTree.IndicatorSelection(EaxBubbleTreeIndicators.Color).CopyTo(EaxBubbleTree.IndicatorSelection(EaxBubbleTreeIndicators.Value), True);

	    // Получим визуализатор текста

	    TextVisual := EaxBubbleTree.BubbleTree.TextVisual;

	    // Получим настройки сопоставления данных

	    DataSourceMapping := TextVisual.TextMapping;

	    // Установим тип сопоставления «Преобразователь данных»

	    DataSourceMapping.MappingType := VisualizatorDataMappingType.DataMappingTransformer;

	    // Создадим и установим собственный преобразователь данных

	    DataTransformer := New MyAdapter.Create;

	    DataSourceMapping.DataTransformer := DataTransformer;

	    Debug.WriteLine("Преобразование строк:");

	    Debug.IndentLevel := 1;

	    Debug.WriteLine("Вход: ""прогноз"", выход: " +

	        (DataTransformer.GetData("прогноз") As String ));

	    Debug.WriteLine("Вход: ""пузырьковое дерево"", выход: " +

	        (DataTransformer.GetData("пузырьковое дерево") As String ));

	End Sub UserProc;


В результате выполнения примера был создан собственный преобразователь,
 изменяющий первую букву входящих строк на заглавную:


Преобразование строк:


    Вход: "прогноз",
 выход: Прогноз


    Вход: "пузырьковое
 дерево", выход: Пузырьковое дерево


См. также:


[IVZBubbleTree](IVZBubbleTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
