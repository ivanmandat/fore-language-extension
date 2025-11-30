# TabSheetMeasures.calcRowsHeightByPosition

TabSheetMeasures.calcRowsHeightByPosition
-


**


# TabSheetMeasures.calcRowsHeightByPosition


## Синтаксис


calcRowsHeightByPosition(startRowPos: Number, endRowPos: Number, action: function, context: Object, isVirtual: Boolean, reverseCalc: Boolean);


## Параметры


*startRowIndex.* Индекс строки, соответствующей началу диапазона;


*endRowIndex.* Индекс строки, соответствующей концу диапазона;


*action.* Функция, выполняемая на каждой итерации расчёта общей высоты строк. Необязательный параметр, по умолчанию равен значению null;


*context.* Контекст, из которого вызван данный метод. Необязательный параметр, по умолчанию равен текущему контексту this;


*isVirtual.* Признак, показывающий, какие координаты используются - виртуальные или реальные. Если параметр равен true, то используются виртуальные координаты, иначе - реальные. Необязательный параметр, по умолчанию равен значению false;


*reverseCalc.* Признак, определяющий направление обхода по строкам. Если параметр равен значению true, то обход осуществляется с конца диапазона в начало, если false - то с начала диапазона в конец. Необязательный параметр, по умолчанию равен значению false.


## Описание


Метод calcRowsHeightByPosition** вычисляет значение общей высоты строк в заданном диапазоне.


## Комментарии


Метод возвращает значение типа Number.


## Пример


Пример использования приведён на странице метода [TabSheetMeasures.calcColumnsWidth](TabSheetMeasures.calcColumnsWidth.htm).


См. также:


[TabSheetMeasures](TabSheetMeasures.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
