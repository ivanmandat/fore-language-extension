# IVZBubbleChart

IVZBubbleChart
-


# IVZBubbleChart


Сборка: Visualizators;


## Описание


Интерфейс IVZBubbleChart предназначен
 для работы с [пузырьковой
 диаграммой](UiVisualizators.chm::/BubbleChart/BubbleChart.htm).


## Иерархия наследования


           [IVZInteractable](../IVZInteractable/IVZInteractable.htm)


           [IVZBaseDataVisualizer](../IVZBaseDataVisualizer/IVZBaseDataVisualizer.htm)


           [IVZDataVisualizer](../IVZDataVisualizer/IVZDataVisualizer.htm)


           IVZBubbleChart


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AxisX](IVZBubbleChart.AxisX.htm)
		 Свойство AxisX определяет
		 ось X пузырьковой диаграммы.


		 ![](../../Property_Image.gif)
		 [AxisY](IVZBubbleChart.AxisY.htm)
		 Свойство AxisY определяет
		 ось Y пузырьковой диаграммы.


		 ![](../../Property_Image.gif)
		 [ChartArea](IVZBubbleChart.ChartArea.htm)
		 Свойство ChartArea
		 определяет область построения диаграммы.


		 ![](../../Property_Image.gif)
		 [Series](IVZBubbleChart.Series.htm)
		 Свойство Series определяет
		 ряды данных пузырьковой диаграммы.


		 ![](../../Property_Image.gif)
		 [ShowBubbleHistory](IVZBubbleChart.ShowBubbleHistory.htm)
		 Свойство ShowBubbleHistory
		 определяет, будет ли отображаться история перемещения пузырька
		 диаграммы.


		 ![](../../Property_Image.gif)
		 [ShowBubbleHistoryLabels](IVzBubbleChart.ShowBubbleHistoryLabels.htm)
		 Свойство ShowBubbleHistoryLabels
		 определяет, будут ли отображаться годовые подсказки у пузырьков
		 при включенной истории перемещения.


		 ![](../../Property_Image.gif)
		 [ShowHistoryMode](IVZBubbleChart.ShowHistoryMode.htm)
		 Свойство ShowHistoryMode
		 определяет режим отображения истории перемещения пузырьков.


		 ![](../../Property_Image.gif)
		 [ShowHistoryPreviousStepsOnly](IVZBubbleChart.ShowHistoryPreviousStepsOnly.htm)
		 Свойство ShowHistoryPreviousStepsOnly
		 определяет, будет ли отображаться история до текущей позиции (года).


		 ![](../../Property_Image.gif)
		 [TrendLine](IVZBubbleChart.TrendLine.htm)
		 Свойство TrendLine
		 определяет параметры линии тренда пузырьковой диаграммы.


		 ![](../../Property_Image.gif)
		 [UseZoomOnWheel](IVZBubbleChart.UseZoomOnWheel.htm)
		 Свойство UseZoomOnWheel
		 определяет возможность изменения масштаба пузырьковой диаграммы
		 при прокрутке колесика мыши.


## Свойства, унаследованные от интерфейса [IVZDataVisualizer](../IVZDataVisualizer/IVZDataVisualizer.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DataMappingToLegendAssignment](../IVZDataVisualizer/IVZDataVisualizer.VisualToLegendAssignment.htm)


		 Свойство DataMappingToLegendAssignment
		 определяет привязку данных дерева к легенде.


		 ![](../../Property_Image.gif)
		 [HoverActiveEffects](../IVZDataVisualizer/IVZDataVisualizer.HoverActiveEffects.htm)


		 Свойство HoverActiveEffects
		 определяет эффекты, которые применяются для элемента, на который
		 была наведена мышь.


		 ![](../../Property_Image.gif)
		 [HoverInactiveEffects](../IVZDataVisualizer/IVZDataVisualizer.HoverInactiveEffects.htm)


		 Свойство HoverInactiveEffects
		 определяет эффекты, которые применяются для неактивных элементов,
		 на которые не попало наведение мыши.


		 ![](../../Property_Image.gif)
		 [Index](../IVZDataVisualizer/IVZDataVisualizer.Index.htm)


		 Свойство Index определяет
		 уровень измерения, по которому происходит выборка данных.


		 ![](../../Property_Image.gif)
		 [Legends](../IVZDataVisualizer/IVZDataVisualizer.Legends.htm)


		 Свойство Legends определяет
		 коллекцию легенд визуализатора.


		 ![](../../Property_Image.gif)
		 [SelectActiveEffects](../IVZDataVisualizer/IVZDataVisualizer.SelectActiveEffects.htm)


		 Свойство SelectActiveEffects
		 определяет эффекты, которые применяются для выделенных элементов.


		 ![](../../Property_Image.gif)
		 [SelectInactiveEffects](../IVZDataVisualizer/IVZDataVisualizer.SelectInactiveEffects.htm)


		 Свойство SelectInactiveEffects
		 определяет эффекты, которые применяются для неактивных элементов,
		 которые не попали в выделение.


		 ![](../../Property_Image.gif)
		 [TimeLine](../IVZDataVisualizer/IVZDataVisualizer.TimeLine.htm)


		 Свойство TimeLine определяет
		 временную шкалу визуализатора.


		 ![](../../Property_Image.gif)
		 [UseSelectOnRightClick](../IVZDataVisualizer/IVZDataVisualizer.UseSelectOnRightClick.htm)


		 Свойство UseSelectOnRightClick
		 определяет, нужно ли выделять элементы по щелчку правой кнопки
		 мыши.


## Методы, унаследованные от интерфейса [IVZDataVisualizer](../IVZDataVisualizer/IVZDataVisualizer.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [LoadFromXml](../IVZDataVisualizer/IVZDataVisualizer.LoadFromXml.htm)


		 Метод LoadFromXml загружает
		 XML-параметры визуализатора: стиль и данные.


		 ![](../../Sub_Image.gif)
		 [LoadStyleFromXml](../IVZDataVisualizer/IVZDataVisualizer.LoadStyleFromXml.htm)


		 Метод LoadStyleFromXml загружает
		 XML-параметры стиля визуализатора.


		 ![](../../Sub_Image.gif)
		 [SaveStyleToXml](../IVZDataVisualizer/IVZDataVisualizer.SaveStyleToXml.htm)


		 Метод SaveStyleToXml сохраняет
		 параметры стиля визуализатора в XML-формате.


		 ![](../../Sub_Image.gif)
		 [SaveToXml](../IVZDataVisualizer/IVZDataVisualizer.SaveToXml.htm)


		 Метод SaveToXml сохраняет
		 параметры визуализатора в XML-формате: стиль
		 и данные.


См. также:


[Интерфейсы сборки
 Visualizators](../KeVisualizators_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
