# IVZDataSourceMapping.Value

IVZDataSourceMapping.Value
-


# IVZDataSourceMapping.Value


## Синтаксис


Value: Variant;


## Описание


Свойство Value определяет значение,
 соответствующее всем элементам визуализатора.


## Комментарии


Свойство Value используется
 в том случае, если свойство [MappingType](IVZDataSourceMapping.MappingType.htm)
 принимает значение константного преобразования [VisualizatorDataMappingType](../../Enums/VisualizatorDataMappingType.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта
 с идентификатором EXPRESS_REPORT, в котором содержится [пузырьковое
 дерево](UiVisualizators.chm::/BubbleTree/BubbleTree.htm). Установим константное преобразование в виде
 одного цвета для визуализатора.


Добавьте ссылки на системные сборки: Metabase, Express, Drawing, Visualizators.
 Указанная процедура должна вызываться из точки входа Main.


	Sub UsecProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	    ColorVisual: IVZColorVisual;

	    DataSourceMapping: IVZDataSourceMapping;

	    Brush: IGxSolidBrush;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := EaxAnalyzer.BubbleTree.BubbleTree;

	    // Получим цвета визуализатора

	    ColorVisual := BubbleTree.ColorVisual;

	    // Получим настройки сопоставления данных

	    DataSourceMapping := ColorVisual.ColorMapping;

	    // Установим константное преобразование

	    DataSourceMapping.MappingType := VisualizatorDataMappingType.DataMappingConstant;

	    // Зададим голубой цвет для элементов пузырькового дерева

	    Brush := New GxSolidBrush.Create(New GxColor.CreateRGB(0, 255, 255));

	    DataSourceMapping.Value := Brush;

	    // Выведем в консоль тип сопоставления данных

	    Debug.WriteLine("Тип сопоставления данных: " + DataSourceMapping.MappingType.ToString);

	    // Сохраним изменения в экспресс-отчёте

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UsecProc;


После выполнения примера в экспресс отчёте элементы пузырькового дерева
 будут отображаться в заданном цвете. В консоль будет выведен тип сопоставления
 данных:


Тип сопоставления данных: 2


См. также:


[IVZDataSourceMapping](IVZDataSourceMapping.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
