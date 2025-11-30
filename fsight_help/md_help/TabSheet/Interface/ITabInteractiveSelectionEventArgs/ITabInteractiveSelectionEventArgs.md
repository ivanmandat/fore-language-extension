# ITabInteractiveSelectionEventArgs

ITabInteractiveSelectionEventArgs
-


# ITabInteractiveSelectionEventArgs


Сборка: Tab;


## Описание


Интерфейс ITabInteractiveSelectionEventArgs
 содержит свойства аргумента событий, происходящих при перемещении выделенной
 области ячеек в таблице.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [ITabSheetEventArgs](../ITabSheetEventArgs/ITabSheetEventArgs.htm)


           ITabInteractiveSelectionEventArgs


## Комментарии


Данный аргумент используется при обработке следующих событий:


	- [OnBeginInteractiveSelectionChange](../../Class/TabSheetBox/TabSheetBox.OnBeginInteractiveSelectionChange.htm)


	- [OnEndInteractiveSelectionChange](../../Class/TabSheetBox/TabSheetBox.OnEndInteractiveSelectionChange.htm)


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Range](ITabInteractiveSelectionEventArgs.Range.htm)
		 Свойство Range возвращает
		 диапазон ячеек, в который перемещена в текущий момент выделенная
		 область ячеек.


		 ![](../../Property_Image.gif)
		 [Type](ITabInteractiveSelectionEventArgs.Type.htm)
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
