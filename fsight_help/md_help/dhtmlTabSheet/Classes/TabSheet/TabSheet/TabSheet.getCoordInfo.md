# TabSheet.getCoordInfo

TabSheet.getCoordInfo
-


**


# TabSheet.getCoordInfo


## Синтаксис


getCoordInfo(coord: PP.Ui.[TabSheetCoord](../TabSheetCoord/TabSheetCoord.htm));


## Параметры


*coord.* Координата, информацию о которой требуется получить.


## Описание


Метод getCoordInfo** возвращает объект с информацией о координате.


## Комментарии


Метод возвращает JSON-объект со следующими полями: cellspan - признак вхождения координаты в диапазон объединённых ячеек, colHeader - признак вхождения в заголовок столбцов, fixedColumns - признак вхождения в фиксированный столбец, fixedRows - признак вхождения в фиксированную строку, rowHeader - признак вхождения в заголовок строк, valid - признак допустимости координаты.


## Пример


Пример использования приведён на странице описания метода [TabSheet.getCoordUnderMouse](TabSheet.getCoordUnderMouse.htm).


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
