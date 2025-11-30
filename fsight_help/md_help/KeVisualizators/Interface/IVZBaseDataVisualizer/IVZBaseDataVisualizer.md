# IVZBaseDataVisualizer

IVZBaseDataVisualizer
-


# IVZBaseDataVisualizer


Сборка: Visualizators;


## Описание


Интерфейс IVZBaseDataVisualizer
 используется для работы с базовыми настройками визуализатора.


## Иерархия наследования


           [IVZInteractable](../IVZInteractable/IVZInteractable.htm)


           IVZBaseDataVisualizer


## Комментарии


Является базовым интерфейсом для [IVZDataVisualizer](../IVZDataVisualizer/IVZDataVisualizer.htm).


Для получения объекта для работы с базовыми настройками визуализатора
 необходимо интерфейс визуализатора (например: [IVZBubbleTree](../IVZBubbleTree/IVZBubbleTree.htm))
 привести к IVZBaseDataVisualizer.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Background](IVZBaseDataVisualizer.Background.htm)
		 Свойство Background
		 определяет настройки кисти для фона визуализатора.


		 ![](../../Property_Image.gif)
		 [EnableAnimating](IVZBaseDataVisualizer.EnableAnimating.htm)
		 Свойство EnableAnimating
		 определяет включена ли анимация визуализатора.


		 ![](../../Property_Image.gif)
		 [Formatter](IVZBaseDataVisualizer.Formatter.htm)
		 Свойство Formatter возвращает
		 объект для форматирования данных визуализатора.


		 ![](../../Property_Image.gif)
		 [IsDirty](IVZBaseDataVisualizer.IsDirty.htm)
		 Свойство IsDirty определяет,
		 присутствуют ли изменения в визуализаторе.


		 ![](../../Property_Image.gif)
		 [IsPrintMode](IVZBaseDataVisualizer.IsPrintMode.htm)
		 Свойство IsPrintMode определяет,
		 активен ли режим печати.


		 ![](../../Property_Image.gif)
		 [UndoRedo](IVZBaseDataVisualizer.UndoRedo.htm)
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
		 [Draw](IVZBaseDataVisualizer.Draw.htm)
		 Метод Draw отрисовывает
		 визуализатор на графический объект.


		 ![](../../Sub_Image.gif)
		 [GetBitmap](IVZBaseDataVisualizer.GetBitmap.htm)
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
