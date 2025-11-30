# TabSheet.CoordUnderMouseChanged

TabSheet.CoordUnderMouseChanged
-


**


# TabSheet.CoordUnderMouseChanged


## Синтаксис


CoordUnderMouseChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.
 Доступные аргументы: Event - событие изменения координат ячейки под курсором
 мыши, Element - DOM-элемент ячейки под курсором мыши, Break - признак
 отмены события (если равен true, то событие отменено, иначе - разрешено),
 newCoord - координаты конечной ячейки типа [TabSheetCoord](../TabSheetCoord/TabSheetCoord.htm).


## Описание


Событие CoordUnderMouseChanged**
 генерируется при изменении координат ячейки под курсором мыши.


## Пример


Пример использования приведён на странице описания метода [TabSheet.removeFilter](TabSheet.removeFilter.htm).


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
