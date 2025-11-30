# IVZSizeLegendMarker.BigImage

IVZSizeLegendMarker.BigImage
-


# IVZSizeLegendMarker.BigImage


## Синтаксис


BigImage: [IVZResourceImage](../IVZResourceImage/IVZResourceImage.htm);


## Описание


Свойство BigImage определяет
 пиктограмму для максимального значения размерной легенды.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS. В экспресс-отчёте должен быть выбран [источник
 данных](UIExpress.chm::/purpose/UiExpress_Tree_Multivariate_Object.htm) и [визуализатор](UIExpress.chm::/Setup_express_report/UiExpress_control.htm)
 «Пузырьковое дерево» для отображения
 данных.


Добавьте ссылки на системные сборки: Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    Analyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	    SizeLegend: IVZSizeLegend;

	    LegendMarker: IVZSizeLegendMarker;

	    BigImage, SmallImage: IVZResourceImage;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Analyzer := Metabase.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := Analyzer.BubbleTree.BubbleTree;

	    // Получим размерную шкалу

	    SizeLegend := BubbleTree.Legends.Item(1) As IVZSizeLegend;

	    // Получим маркеры легенды

	    LegendMarker := SizeLegend.Marker;

	    // Установим маркеры

	    LegendMarker.BigImage := New VZResourceImage.Create;

	    LegendMarker.SmallImage := New VZResourceImage.Create;

	    LegendMarker.Marker := VisualizatorSizeMarkerShape.Custom;

	    // Зададим пиктограмму для максимального значения

	    BigImage := LegendMarker.BigImage;

	    BigImage.ResourceId := VisualizersResourceId.SizeLegendArrowBig;

	    // Зададим пиктограмму для минимального значения

	    SmallImage := LegendMarker.SmallImage;

	    SmallImage.ResourceId := VisualizersResourceId.SizeLegendCubeSmall;

	    // Сохраним изменения в экспресс-отчёте

	    (Analyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера в экспресс-отчёте будут изменены пиктограммы
 размерной легенды пузырькового дерева:


![](IVZSizeLegendMarker_BigImage.png)


См. также:


[IVZSizeLegendMarker](IVZSizeLegendMarker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
