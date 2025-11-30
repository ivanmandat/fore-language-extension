# TabSheet.select

TabSheet.select
-


**


# TabSheet.select


## Синтаксис


select(range: PP.Ui.[TabSheetRange](../TabSheetRange/TabSheetRange.htm), saveCurrentSelections: Boolean, startCoord: PP.Ui.[TabSheetCoord](../TabSheetCoord/TabSheetCoord.htm), fireEvent: PP.Delegate);


## Параметры


*range.* Диапазон, который необходимо выбрать;


*saveCurrentSelections.* Флаг дополнительного выделения (если равен значению true, то новое выделение будет добавлено к существующему, если false, то старое выделение будет сброшено);


*startCoord.* Новая стартовая координата;


*fireEvent.* *Определяет, генерировать ли событие выделения*. Если параметр равен значению true, то данное событие будет сгенерировано, иначе - не будет. Необязательный параметр.


## Описание


Метод select** выбирает указанный диапазон ячеек.


## Пример


Пример использования метода приведён на странице описания свойства [TabSheetSettings.EnableCopyPaste](../../../Interfaces/TabSheetSettings/TabSheetSettings.EnableCopyPaste.htm) и [TabSheetCell.Value](../TabSheetCell/TabSheetCell.Value.htm).


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
