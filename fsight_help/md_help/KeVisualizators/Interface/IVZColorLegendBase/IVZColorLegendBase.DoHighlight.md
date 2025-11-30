# IVZColorLegendBase.DoHighlight

IVZColorLegendBase.DoHighlight
-


# IVZColorLegendBase.DoHighlight


## Синтаксис


DoHighlight: Boolean;


## Описание


Свойство DoHighlight определяет
 признак, разрешающий подсветку элементов цветовой шкалы в легенде.


## Комментарии


Свойство содержит значение True,
 если подсветка элементов цветовой шкалы разрешена, и значение False,
 если запрещена. По умолчанию используется значение False.


Для определения цвета подсветки элементов легенды используйте свойство
 [IVZColorLegendBase.HighlightBrush](IVZColorLegendBase.HighlightBrush.htm).


Для задания действия, при выполнении
 которого будет подсвечиваться элемент легенды, используйте свойство
 [IVZColorLegendBase.HoverMode](IVZColorLegendBase.HoverMode.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта
 с идентификатором EXPRESS, содержащего пузырьковое дерево.


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

	    Analyzer := Metabase.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := Analyzer.BubbleTree.BubbleTree;

	    // Получим цветовую легенду дерева

	    ColorLegend := BubbleTree.Legends.Item(0) As IVZColorLegendBase;

	    // Разрешим подсветку элементов шкалы

	    ColorLegend.DoHighlight := True;

	    // Определим кисть

	    Brush := New GxSolidBrush.Create(New GxColor.CreateRGB(202, 218, 186));

	    ColorLegend.HighlightBrush := Brush;

	    // Определим режим выделения элементов легенды - посредством щелчка мыши

	    ColorLegend.HoverMode := VisualizatorHoverMode.Click;

	    // Сохраним изменения, сделанные в экспресс-отчёте

	    (Analyzer As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в экспресс-отчете при щелчке на элементе легенды
 происходит его подсветка заданным цветом.


См. также:


[IVZColorLegendBase](IVZColorLegendBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
