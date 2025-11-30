# IPivotTableHeader.IsStairElement

IPivotTableHeader.IsStairElement
-


# IPivotTableHeader.IsStairElement


## Синтаксис


IsStairElement(SlotNumber: Integer; ElementNumber:
 Integer): Boolean;


## Параметры


SlotNumber. Индекс строки/столбца
 в заголовке таблицы;


ElementNumber. Индекс элемента
 в заголовке таблицы.


## Описание


Свойство IsStairElement возвращает
 признак того, является ли элемент заголовка таблицы ступенькой иерархии.


## Комментарии


Допустимые значения:


	- True. Элемент заголовка
	 является ступенькой иерархии;


	- False. Элемент не является
	 ступенькой иерархии.


Для определения, будет ли использоваться [ступенчатая
 иерархия](uianalyticalarea.chm::/tableview/layout/layout_dim.htm#stairs_hierarchy), используйте [IPivotHeader.StairsHierarchy](../IPivotHeader/IPivotHeader.StairsHierarchy.htm).


## Пример


Использование свойства приведено в примере для [IPivotHeader.StairsHierarchy](../IPivotHeader/IPivotHeader.StairsHierarchy.htm).


См. также:


[IPivotTableHeader](IPivotTableHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
