# ITabInteractiveSelectionChangeEventArgs

ITabInteractiveSelectionChangeEventArgs
-


# ITabInteractiveSelectionChangeEventArgs


Сборка: Tab;


## Описание


Интерфейс ITabInteractiveSelectionChangeEventArgs
 содержит свойства аргумента события, происходящего в момент перемещения
 выделенной области ячеек таблицы.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [ITabSheetEventArgs](../ITabSheetEventArgs/ITabSheetEventArgs.htm)


           [ITabInteractiveSelectionEventArgs](../ITabInteractiveSelectionEventArgs/ITabInteractiveSelectionEventArgs.htm)


           ITabInteractiveSelectionChangeEventArgs


## Комментарии


Данный аргумент используется при обработке следующих событий:


	- [OnInteractiveSelectionChange](../../Class/TabSheetBox/TabSheetBox.OnInteractiveSelectionChange.htm)


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](ITabInteractiveSelectionChangeEventArgs.Cancel.htm)
		 Свойство Cancel определяет
		 признак допустимости перемещения выделенной области ячеек.


## Свойства, унаследованные от [ITabInteractiveSelectionEventArgs](../ITabInteractiveSelectionEventArgs/ITabInteractiveSelectionEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Range](../ITabInteractiveSelectionEventArgs/ITabInteractiveSelectionEventArgs.Range.htm)
		 Свойство Range возвращает
		 диапазон ячеек, в который перемещена в текущий момент выделенная
		 область ячеек.


		 ![](../../Property_Image.gif)
		 [Type](../ITabInteractiveSelectionEventArgs/ITabInteractiveSelectionEventArgs.Type.htm)
		 Свойство Type возвращает
		 тип события, при котором происходит визуальное перемещение выделенной
		 области ячеек таблицы.


## Свойства, унаследованные от [ITabSheetEventArgs](../ITabSheetEventArgs/ITabSheetEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [TabSheet](../ITabSheetEventArgs/ITabSheetEventArgs.TabSheet.htm)
		 Свойство TabSheet возвращает
		 компонент, для которого сгенерировано событие.


См. также:


[Интерфейсы
 сборки Tab](../TabSheet_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
