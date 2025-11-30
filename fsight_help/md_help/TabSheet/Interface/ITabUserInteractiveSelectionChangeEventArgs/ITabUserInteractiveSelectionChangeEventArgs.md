# ITabUserInteractiveSelectionChangeEventArgs

ITabUserInteractiveSelectionChangeEventArgs
-


# ITabUserInteractiveSelectionChangeEventArgs


Сборка: Tab;


## Описание


Интерфейс ITabUserInteractiveSelectionChangeEventArgs
 содержит свойства аргумента события, наступающего при изменении интерактивного
 диапазона.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [ITabSheetEventArgs](../ITabSheetEventArgs/ITabSheetEventArgs.htm)


           [ITabUserInteractiveSelectionEventArgs](../ITabUserInteractiveSelectionEventArgs/ITabUserInteractiveSelectionEventArgs.htm)


           ITabUserInteractiveSelectionChangeEventArgs


## Комментарии


Данный аргумент используется при обработке следующих событий:


	- [OnUserInteractiveSelectionChange](../../Class/TabSheetBox/TabSheetBox.OnUserInteractiveSelectionChange.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](ITabUserInteractiveSelectionChangeEventArgs.Cancel.htm)
		 Свойство Cancel определяет
		 признак допустимости изменения интерактивного диапазона.


## Свойства, унаследованные от [ITabUserInteractiveSelectionEventArgs](../ITabUserInteractiveSelectionEventArgs/ITabUserInteractiveSelectionEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Selection](../ITabUserInteractiveSelectionEventArgs/ITabUserInteractiveSelectionEventArgs.Selection.htm)
		 Свойство Selection
		 возвращает интерактивный диапазон, при изменении которого было
		 инициализировано событие.


		 ![](../../Property_Image.gif)
		 [Type](../ITabUserInteractiveSelectionEventArgs/ITabUserInteractiveSelectionEventArgs.Type.htm)
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
