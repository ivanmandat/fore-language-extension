# TabSheetMeasures.iterateTopOffset

TabSheetMeasures.iterateTopOffset
-


**


# TabSheetMeasures.iterateTopOffset


## Синтаксис


iterateTopOffset(action: function, context: Object, isVirtual: Boolean, reverseCalc: Boolean);


## Параметры


*action.* Функция, вызываемая при каждом обходе значений высоты строк таблицы;


*context.* Контекст, из которого вызван данный метод. Необязательный параметр, по умолчанию равен текущему контексту this;


*isVirtual.* Признак, показывающий, какие координаты используются - виртуальные или реальные. Если параметр равен true, то используются виртуальные координаты, иначе - реальные. Необязательный параметр, по умолчанию равен значению false;


*reverseCalc.* Признак, определяющий направление обхода по значениям высоты строк таблицы. Если параметр равен значению true, то обход начинается со значения высоты последней строки, если false - то наоборот. Необязательный параметр, по умолчанию равен значению false.


## Описание


Метод iterateTopOffset** перебирает значения высоты строк таблицы.


## Пример


Пример использования приведён на странице описания метода [TabSheetMeasures.iterateLeftOffset](TabSheetMeasures.iterateLeftOffset.htm).


См. также:


[TabSheetMeasures](TabSheetMeasures.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
