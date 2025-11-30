# IStyledEntity

IStyledEntity
-


# IStyledEntity


Сборка: Drawing;


## Описание


Интерфейс IStyledEntity
 предназначен для работы со стилем визуализатора.


## Иерархия наследования


           IStyledEntity


## Комментарии


Для получения стиля визуализатора приведите его интерфейс к интерфейсу
 IStyledEntity:


	- [ITabCellStyle](TabSheet.chm::/Interface/ITabCellStyle/ITabCellStyle.htm).
	 Интерфейс стиля таблицы;


	- [IChart](Chart.chm::/Interface/IChart/IChart.htm).
	 Интерфейс диаграммы;


	- [IChartExternLegend](Chart.chm::/Interface/IChartExternLegend/IChartExternLegend.htm).
	 Внешняя легенда диаграмм;


	- [IVZMapChart](KeVisualizators.chm::/Interface/IVZMapChart/IVZMapChart.htm) или
	 [IMap](Map.chm::/Interface/IMap/IMap.htm).
	 Интерфейс карты;


	- [IVZBubbleChart](KeVisualizators.chm::/Interface/IVZBubbleChart/IVZBubbleChart.htm). Интерфейс
	 пузырьковой диаграммы;


	- [IVZBubbleTree](KeVisualizators.chm::/Interface/IVZBubbleTree/IVZBubbleTree.htm).
	 Интерфейс пузырькового дерева;


	- [IVZTreeMap](KeVisualizators.chm::/Interface/IVZTreeMap/IVZTreeMap.htm). Интерфейс
	 плоского дерева.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ContainerKey](IStyledEntity.ContainerKey.htm)
		 Свойство ContainerKey
		 определяет ключ контейнера стилей, в котором содержится стиль.


		 ![](../../Property_Image.gif)
		 [ContainerTag](IStyledEntity.ContainerTag.htm)
		 Свойство ContainerTag
		 возвращает текстовую метку контейнера, в котором содержится стиль.


		 ![](../../Property_Image.gif)
		 [PredefinedStyle](IStyledEntity.PredefinedStyle.htm)
		 Свойство PredefinedStyle
		 возвращает стандартный стиль.


		 ![](../../Property_Image.gif)
		 [PredefinedStyleCount](IStyledEntity.PredefinedStyleCount.htm)
		 Свойство PredefinedStyleCount
		 возвращает количество стандартных стилей.


		 ![](../../Property_Image.gif)
		 [PredefinedStyleIndex](IStyledEntity.PredefinedStyleIndex.htm)
		 Свойство PredefinedStyleIndex
		 определяет индекс стандартного стиля.


		 ![](../../Property_Image.gif)
		 [PredefinedStylePreview](IStyledEntity.PredefinedStylePreview.htm)
		 Свойство PredefinedStylePreview
		 возвращает изображение, используемое для предварительного просмотра
		 стандартного стиля.


		 ![](../../Property_Image.gif)
		 [SheetType](IStyledEntity.SheetType.htm)
		 Свойство SheetType
		 определяет тип используемой таблицы стилей.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [LoadStyleFromContainer](IStyledEntity.LoadStyleFromContainer.htm)
		 Метод LoadStyleFromContainer
		 импортирует стиль из указанного контейнера.


		 ![](../../Sub_Image.gif)
		 [SaveStyleToContainer](IStyledEntity.SaveStyleToContainer.htm)
		 Метод SaveStyleToContainer
		 экспортирует стиль в указанный контейнер.


См. также:


[Интерфейсы
 сборки Drawing](../ModDrawing_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
