# IPivotTable.IsChangedCell

IPivotTable.IsChangedCell
-


# IPivotTable.IsChangedCell


## Синтаксис


IsChangedCell(Row: Integer; Column: Integer): Boolean;


## Параметры


Row. Индекс строки, в которой
 расположена ячейка;


Column. Индекс столбца, в которой расположена ячейка.


## Описание


Свойство IsChangedCell возвращает
 признак наличия измененных данных в ячейке, индекс строки и столбца которой
 передаются посредством параметров Row
 и Column, соответственно.


## Комментарии


Свойство вернет значение True,
 если были изменены данные, но не был вызван метод [Post](IPivotTable.Post.htm),
 либо [Cancel](IPivotTable.Cancel.htm).


См. также:


[IPivotTable](IPivotTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
