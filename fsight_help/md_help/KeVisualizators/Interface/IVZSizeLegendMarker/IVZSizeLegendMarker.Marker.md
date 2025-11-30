# IVZSizeLegendMarker.Marker

IVZSizeLegendMarker.Marker
-


# IVZSizeLegendMarker.Marker


## Синтаксис


Marker: [VisualizatorSizeMarkerShape](../../Enums/VisualizatorSizeMarkerShape.htm);


## Описание


Свойство Marker определяет фигуру,
 используемую в качестве маркера размерной легенды.


## Пример


Для выполнения примера необходимо наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS. В отчёте задан тип метрики «[Размер](UiSelection.chm::/Selection/Dimension_type.htm#metric)» для пузырькового
 дерева.


Добавьте ссылки на системные сборки: Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    Analyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	    SizeLegend: IVZSizeLegend;

	    LegendMarker: IVZSizeLegendMarker;

	    Style: IVZControlStyle;

	    BigImage, SmallImage: IVZResourceImage;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Analyzer := Metabase.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := Analyzer.BubbleTree.BubbleTree;

	    // Получим размерную легенду

	    SizeLegend := BubbleTree.Legends.Item(1) As IVZSizeLegend;

	    // Установим маркер в виде трапеции

	    LegendMarker := SizeLegend.Marker;

	    LegendMarker.Marker := VisualizatorSizeMarkerShape.Trapezoid;

	    // Сохраним изменения, сделанные в экспресс-отчёте

	    (Analyzer As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера фигура маркера размерной легенды будет изменена
 на трапецию:


![](trapezoid.gif)


См. также:


[IVZSizeLegendMarker](IVZSizeLegendMarker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
