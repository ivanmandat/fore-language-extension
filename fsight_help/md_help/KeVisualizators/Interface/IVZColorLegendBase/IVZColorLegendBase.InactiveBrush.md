# IVZColorLegendBase.InactiveBrush

IVZColorLegendBase.InactiveBrush
-


# IVZColorLegendBase.InactiveBrush


## Синтаксис


InactiveBrush: [IGxBrush](ModDrawing.chm::/Interface/IGxBrush/IGxBrush.htm);


## Описание


Свойство InactiveBrush определяет
 кисть для подсветки неактивных элементов визуализатора.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта
 с идентификатором BUBBLE_TREE, в котором содержится [пузырьковое
 дерево](UiVisualizators.chm::/BubbleTree/BubbleTree.htm).


Добавьте ссылки на системные сборки: Drawing, Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    Analyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	    ColorLegend: IVZColorLegendBase;

	    Brush: IGxBrush;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Analyzer := Metabase.ItemById("BUBBLE_TREE").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := Analyzer.BubbleTree.BubbleTree;

	    // Получим цветовую легенду визуализатора

	    ColorLegend := BubbleTree.Legends.Item(0) As IVZColorLegendBase;

	    // Разрешим подсветку элементов шкалы

	    ColorLegend.DoHighlight := True;

	    // Определим кисть
	 для подсветки неактивных элементов

	    Brush := New GxSolidBrush.Create(New GxColor.CreateRGB(238, 238, 143));

	    ColorLegend.InactiveBrush := Brush;

	    // Определим кисть
	 для подсветки активных элементов

	    Brush := New GxSolidBrush.Create(New GxColor.CreateRGB(49, 202, 206));

	    ColorLegend.HighlightBrush := Brush;

	    // Определим режим выделения элементов легенды - посредством щелчка мыши

	    ColorLegend.HoverMode := VisualizatorHoverMode.Click;

	    // Сохраним изменения в экспресс-отчёте

	    (Analyzer As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в экспресс-отчёте легенда пузырькового дерева
 будет содержать подсветку элементов:


![](IVZColorLegendBase_InactiveBrush.gif)


См. также:


[IVZColorLegendBase](IVZColorLegendBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
