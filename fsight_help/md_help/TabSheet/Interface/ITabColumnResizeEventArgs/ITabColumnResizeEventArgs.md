# ITabColumnResizeEventArgs

ITabColumnResizeEventArgs
-


# ITabColumnResizeEventArgs


Сборка: Tab;


## Описание


Интерфейс ITabColumnResizeEventArgs
 содержит свойства аргумента события, происходящего после изменения размера
 столбца таблицы.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [ITabSheetEventArgs](../ITabSheetEventArgs/ITabSheetEventArgs.htm)


           [ITabColumnEventArgs](../ITabColumnEventArgs/ITabColumnEventArgs.htm)


           ITabColumnResizeEventArgs


## Комментарии


Данный аргумент используется при обработке следующих событий:


	- [OnColumnResize](../../Class/TabSheetBox/TabSheetBox.OnColumnResize.htm)


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Type](ITabColumnResizeEventArgs.Type.htm)
		 Свойство Type возвращает
		 тип действия, в результате которого изменяется размер столбца.


## Свойства, унаследованные от [ITabColumnEventArgs](../ITabColumnEventArgs/ITabColumnEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Column](../ITabColumnEventArgs/ITabColumnEventArgs.Column.htm)
		 Свойство Column возвращает
		 номер столбца, для которого произошло событие.


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
