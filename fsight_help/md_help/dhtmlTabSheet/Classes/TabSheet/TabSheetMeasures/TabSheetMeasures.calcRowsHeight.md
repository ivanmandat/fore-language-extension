# TabSheetMeasures.calcRowsHeight

TabSheetMeasures.calcRowsHeight
-


**


# TabSheetMeasures.calcRowsHeight


## Синтаксис


calcRowsHeight(startRowIndex: Number, endRowIndex: Number, action: function, context: Object, reverseCalc: Boolean);


## Параметры


*startRowIndex.* Индекс строки, соответствующей началу диапазона;


*endRowIndex.* Индекс строки, соответствующей концу диапазона;


*action.* Функция, выполняемая на каждой итерации расчёта общей высоты строк. Необязательный параметр, по умолчанию равен значению null;


*context.* Контекст, из которого вызван данный метод. Необязательный параметр, по умолчанию равен текущему контексту this;


*reverseCalc.* Признак, определяющий направление обхода по строкам. Если параметр равен значению true, то обход осуществляется с конца диапазона в начало, если false - то с начала диапазона в конец. Необязательный параметр, по умолчанию равен значению false.


## Описание


Метод calcRowsHeight** вычисляет значение общей высоты строк таблицы в заданном диапазоне.


## Комментарии


Метод возвращает значение типа Number.


## Пример


Пример использования приведён на странице описания метода [TabSheetMeasures.calcColumnsWidth](TabSheetMeasures.calcColumnsWidth.htm).


См. также:


[TabSheetMeasures](TabSheetMeasures.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
