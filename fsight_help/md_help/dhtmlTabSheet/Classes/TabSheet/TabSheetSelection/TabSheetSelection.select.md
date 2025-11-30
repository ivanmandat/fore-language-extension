# TabSheetSelection.select

TabSheetSelection.select
-


**


# TabSheetSelection.select


## Синтаксис


select(range: PP.Ui.[TabSheetRange](../TabSheetRange/TabSheetRange.htm), saveCurrentSelections: Boolean, startCoord: PP.Ui.[TabSheetCoord](../TabSheetCoord/TabSheetCoord.htm), fireEvent: Boolean);


## Параметры


*range.* Диапазон ячеек таблицы, который необходимо выбрать;


*saveCurrentSelections.* Признак дополнительного выделения (если равен значению true, то новое выделение будет добавлено к существующему, если false, то старое выделение будет сброшено);


*startCoord.* Начальная координата выделения;


*fireEvent. Определяет, генерировать ли событие выделения*. Если параметр равен значению true, то данное событие будет сгенерировано, иначе - не будет. Необязательный параметр, по умолчанию равен значению true.


## Описание


Метод select** выделяет заданный диапазон ячеек.


## Пример


Пример использования приведён на странице описания метода [TabSheetSelection.eachSelectedArea](TabSheetSelection.eachSelectedArea.htm).


См. также:


[TabSheetSelection](TabSheetSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
