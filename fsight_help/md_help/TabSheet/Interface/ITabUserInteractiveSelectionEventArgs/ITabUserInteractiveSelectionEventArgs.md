# ITabUserInteractiveSelectionEventArgs

ITabUserInteractiveSelectionEventArgs
-


# ITabUserInteractiveSelectionEventArgs


Сборка: Tab;


## Описание


Интерфейс ITabUserInteractiveSelectionEventArgs
 содержит базовые свойства аргументов событий, связанных с изменением интерактивных
 диапазонов ячеек.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [ITabSheetEventArgs](../ITabSheetEventArgs/ITabSheetEventArgs.htm)


           ITabUserInteractiveSelectionEventArgs


## Комментарии


Данный аргумент используется при обработке следующих событий:


	- [OnBeginUserInteractiveSelectionChange](../../Class/TabSheetBox/TabSheetBox.OnBeginUserInteractiveSelectionChange.htm);


	- [OnEndUserInteractiveSelectionChange](../../Class/TabSheetBox/TabSheetBox.OnEndUserInteractiveSelectionChange.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Selection](ITabUserInteractiveSelectionEventArgs.Selection.htm)
		 Свойство Selection
		 возвращает интерактивный диапазон, при изменении которого было
		 инициализировано событие.


		 ![](../../Property_Image.gif)
		 [Type](ITabUserInteractiveSelectionEventArgs.Type.htm)
		 Свойство Type возвращает
		 разрешенные варианты изменения интерактивного диапазона.


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
