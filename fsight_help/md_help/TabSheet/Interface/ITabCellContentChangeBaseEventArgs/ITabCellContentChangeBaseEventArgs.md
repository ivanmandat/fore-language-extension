# ITabCellContentChangeBaseEventArgs

ITabCellContentChangeBaseEventArgs
-


# ITabCellContentChangeBaseEventArgs


Сборка: Tab;


## Описание


Интерфейс ITabCellContentChangeBaseEventArgs
 содержит свойства аргумента события, возникающего при изменении содержимого
 ячейки таблицы компонента [LanerBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/LanerBox.htm).


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [ITabSheetBaseEventArgs](../ITabSheetBaseEventArgs/ITabSheetBaseEventArgs.htm)


           [ITabCellBaseEventArgs](../ITabCellBaseEventArgs/ITabCellBaseEventArgs.htm)


           ITabCellContentChangeBaseEventArgs


## Комментарии


Используя свойства данного интерфейса, можно проверить, что [изменяется
 для ячейки](ITabCellContentChangeBaseEventArgs.Type.htm), откорректировать [устанавливаемое
 значение](ITabCellContentChangeBaseEventArgs.Value.htm), либо полностью [отменить
 изменение](ITabCellContentChangeBaseEventArgs.Cancel.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](ITabCellContentChangeBaseEventArgs.Cancel.htm)
		 Свойство Cancel определяет,
		 будет ли отменено изменение содержимого ячейки.


		 ![](../../Property_Image.gif)
		 [Type](ITabCellContentChangeBaseEventArgs.Type.htm)
		 Свойство Type возвращает
		 тип изменения.


		 ![](../../Property_Image.gif)
		 [Value](ITabCellContentChangeBaseEventArgs.Value.htm)
		 Свойство Value определяет
		 новое значение, которое будет изменено для ячейки.


## Свойства, унаследованные от [ITabCellBaseEventArgs](../ITabCellBaseEventArgs/ITabCellBaseEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Column](../ITabCellBaseEventArgs/ITabCellBaseEventArgs.Column.htm)
		 Свойство Column возвращает
		 индекс столбца, в котором расположена ячейка таблицы.


		 ![](../../Property_Image.gif)
		 [Row](../ITabCellBaseEventArgs/ITabCellBaseEventArgs.Row.htm)
		 Свойство Row возвращает
		 индекс строки, в которой расположена ячейка таблицы.


## Свойства, унаследованные от [ITabSheetBaseEventArgs](../ITabSheetBaseEventArgs/ITabSheetBaseEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [TabSheet](../ITabSheetBaseEventArgs/ITabSheetBaseEventArgs.TabSheet.htm)
		 Свойство TabSheet возвращает
		 таблицу компонента, для которого сгенерировано событие.


См. также:


[Интерфейсы
 сборки Tab](../TabSheet_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
