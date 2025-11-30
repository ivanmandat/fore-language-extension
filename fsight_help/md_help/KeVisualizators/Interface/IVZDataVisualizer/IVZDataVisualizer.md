# IVZDataVisualizer

IVZDataVisualizer
-


# IVZDataVisualizer


Сборка: Visualizators;


## Описание


Интерфейс IVZDataVisualizer
 предназначен для работы с визуализаторами.


## Иерархия наследования


           [IVZInteractable](../IVZInteractable/IVZInteractable.htm)


           [IVZBaseDataVisualizer](../IVZBaseDataVisualizer/IVZBaseDataVisualizer.htm)


           IVZDataVisualizer


## Комментарии


Данный интерфейс является базовым для следующих интерфейсов:


	- [IVZBubbleChart](../IVZBubbleChart/IVZBubbleChart.htm);


	- [IVZTreeDataVisualizer](../IVZTreeDataVisualizer/IVZTreeDataVisualizer.htm);


	- [IVZMapChart](../IVZMapChart/IVZMapChart.htm).


Параметры визуализатора могут быть получены в свойстве [IEaxTreeMap.TreeMap](KeExpress.chm::/Interface/IEaxTreeMap/IEaxTreeMap.TreeMap.htm)
 после последовательного приведения к типам [IVZTreeMap](../IVZTreeMap/IVZTreeMap.htm),
 [IVZTreeDataVisualizer](../IVZTreeDataVisualizer/IVZTreeDataVisualizer.htm),
 [IVZDataVisualizer](IVZDataVisualizer.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DataMappingToLegendAssignment](IVZDataVisualizer.VisualToLegendAssignment.htm)


		 Свойство DataMappingToLegendAssignment
		 определяет привязку данных дерева к легенде.


		 ![](../../Property_Image.gif)
		 [HoverActiveEffects](IVZDataVisualizer.HoverActiveEffects.htm)


		 Свойство HoverActiveEffects
		 определяет эффекты, которые применяются для элемента, на который
		 была наведена мышь.


		 ![](../../Property_Image.gif)
		 [HoverInactiveEffects](IVZDataVisualizer.HoverInactiveEffects.htm)


		 Свойство HoverInactiveEffects
		 определяет эффекты, которые применяются для неактивных элементов,
		 на которые не попало наведение мыши.


		 ![](../../Property_Image.gif)
		 [Index](IVZDataVisualizer.Index.htm)


		 Свойство Index определяет
		 уровень измерения, по которому происходит выборка данных.


		 ![](../../Property_Image.gif)
		 [Legends](IVZDataVisualizer.Legends.htm)


		 Свойство Legends определяет
		 коллекцию легенд визуализатора.


		 ![](../../Property_Image.gif)
		 [SelectActiveEffects](IVZDataVisualizer.SelectActiveEffects.htm)


		 Свойство SelectActiveEffects
		 определяет эффекты, которые применяются для выделенных элементов.


		 ![](../../Property_Image.gif)
		 [SelectInactiveEffects](IVZDataVisualizer.SelectInactiveEffects.htm)


		 Свойство SelectInactiveEffects
		 определяет эффекты, которые применяются для неактивных элементов,
		 которые не попали в выделение.


		 ![](../../Property_Image.gif)
		 [TimeLine](IVZDataVisualizer.TimeLine.htm)


		 Свойство TimeLine определяет
		 временную шкалу визуализатора.


		 ![](../../Property_Image.gif)
		 [UseSelectOnRightClick](IVZDataVisualizer.UseSelectOnRightClick.htm)


		 Свойство UseSelectOnRightClick
		 определяет, нужно ли выделять элементы по щелчку правой кнопки
		 мыши.


## Свойства, унаследованные от [IVZBaseDataVisualizer](../IVZBaseDataVisualizer/IVZBaseDataVisualizer.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Background](../IVZBaseDataVisualizer/IVZBaseDataVisualizer.Background.htm)
		 Свойство Background
		 определяет настройки кисти для фона визуализатора.


		 ![](../../Property_Image.gif)
		 [EnableAnimating](../IVZBaseDataVisualizer/IVZBaseDataVisualizer.EnableAnimating.htm)
		 Свойство EnableAnimating
		 определяет включена ли анимация визуализатора.


		 ![](../../Property_Image.gif)
		 [Formatter](../IVZBaseDataVisualizer/IVZBaseDataVisualizer.Formatter.htm)
		 Свойство Formatter возвращает
		 объект для форматирования данных визуализатора.


		 ![](../../Property_Image.gif)
		 [IsDirty](../IVZBaseDataVisualizer/IVZBaseDataVisualizer.IsDirty.htm)
		 Свойство IsDirty определяет,
		 присутствуют ли изменения в визуализаторе.


		 ![](../../Property_Image.gif)
		 [IsPrintMode](../IVZBaseDataVisualizer/IVZBaseDataVisualizer.IsPrintMode.htm)
		 Свойство IsPrintMode определяет,
		 активен ли режим печати.


		 ![](../../Property_Image.gif)
		 [UndoRedo](../IVZBaseDataVisualizer/IVZBaseDataVisualizer.UndoRedo.htm)
		 Свойство UndoRedo возвращает
		 параметры стека изменений настроек визуализатора.


## Свойства, унаследованные от [IVZInteractable](../IVZInteractable/IVZInteractable.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Hover](../IVZInteractable/IVZInteractable.Hover.htm)
		 Свойство Hover возвращает
		 идентификатор подсвеченного элемента.


		 ![](../../Property_Image.gif)
		 [Selection](../IVZInteractable/IVZInteractable.Selection.htm)
		 Свойство Selection
		 определяет список выделенных элементов.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [LoadFromXml](IVZDataVisualizer.LoadFromXml.htm)


		 Метод LoadFromXml загружает
		 XML-параметры визуализатора: стиль и данные.


		 ![](../../Sub_Image.gif)
		 [LoadStyleFromXml](IVZDataVisualizer.LoadStyleFromXml.htm)


		 Метод LoadStyleFromXml загружает
		 XML-параметры стиля визуализатора.


		 ![](../../Sub_Image.gif)
		 [SaveStyleToXml](IVZDataVisualizer.SaveStyleToXml.htm)


		 Метод SaveStyleToXml сохраняет
		 параметры стиля визуализатора в XML-формате.


		 ![](../../Sub_Image.gif)
		 [SaveToXml](IVZDataVisualizer.SaveToXml.htm)


		 Метод SaveToXml сохраняет
		 параметры визуализатора в XML-формате: стиль
		 и данные.


## Методы, унаследованные от [IVZBaseDataVisualizer](../IVZBaseDataVisualizer/IVZBaseDataVisualizer.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Draw](../IVZBaseDataVisualizer/IVZBaseDataVisualizer.Draw.htm)
		 Метод Draw отрисовывает
		 визуализатор на графический объект.


		 ![](../../Sub_Image.gif)
		 [GetBitmap](../IVZBaseDataVisualizer/IVZBaseDataVisualizer.GetBitmap.htm)
		 Метод GetBitmap получает
		 растровое изображение визуализатора.


## Методы, унаследованные от [IVZInteractable](../IVZInteractable/IVZInteractable.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [SetHover](../IVZInteractable/IVZInteractable.SetHover.htm)
		 Метод SetHover устанавливает
		 подсветку элемента.


См. также:


[Интерфейсы сборки
 Visualizators](../KeVisualizators_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
