# IVZResourceImage.Bitmap

IVZResourceImage.Bitmap
-


# IVZResourceImage.Bitmap


## Синтаксис


Bitmap: [IGxBitmap](ModDrawing.chm::/Interface/IGxBitmap/IGxBitmap.htm);


## Описание


Свойство Bitmap определяет изображение,
 которое будет использоваться в качестве маркера элемента легенды.


## Комментарии


Перед заданием изображения должен быть определен пользовательский тип
 маркера с помощью свойства [IVZSizeLegendMarker.Marker](../IVZSizeLegendMarker/IVZSizeLegendMarker.Marker.htm),
 принимающего значение Custom перечисления
 [VisualizatorSizeMarkerShape](../../Enums/VisualizatorSizeMarkerShape.htm).


Примечание.
 Для изменения маркера элемента легенды используйте свойство [IVZResourceImage.ResourceId](IVZResourceImage.ResourceId.htm)
 или IVZResourceImage.Bitmap.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS. В экспресс-отчёте должен быть выбран [источник
 данных](UIExpress.chm::/purpose/UiExpress_Tree_Multivariate_Object.htm) и [визуализатор](UIExpress.chm::/Setup_express_report/UiExpress_control.htm)
 «Пузырьковое дерево» для отображения
 данных. В корне диска C должны содержаться пиктограммы Icon_big.ico, Icon_small.ico,
 которые будут использоваться в качестве маркеров легенды.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase, Visualizators.


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

	    BigImage.Bitmap := New GxBitmap.CreateFromFile("C:\Icon_big.ico");

	    // Зададим пиктограмму для минимального значения

	    SmallImage := LegendMarker.SmallImage;

	    SmallImage.Bitmap := New GxBitmap.CreateFromFile("C:\Icon_small.ico");

	    // Сохраним изменения в экспресс-отчёте

	    (Analyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера в экспресс-отчёте будут изменены пиктограммы
 размерной легенды пузырькового дерева на пользовательские пиктограммы
 Icon_big.ico, Icon_small.ico.


См. также:


[IVZResourceImage](IVZResourceImage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
