# TabSheetMeasures.calcColumnsWidthByPosition

TabSheetMeasures.calcColumnsWidthByPosition
-


**


# TabSheetMeasures.calcColumnsWidthByPosition


## Синтаксис


calcColumnsWidthByPosition(startColPos: Number, endColPos: Number, action: function, context: Object, isVirtual: Boolean, reverseCalc: Boolean);


## Параметры


*startColPos.* Индекс столбца, соответствующего началу диапазона;


*endColPos.* Индекс столбца, соответствующего концу диапазона;


*action.* Функция, выполняемая на каждой итерации расчёта общей ширины столбцов. Необязательный параметр, по умолчанию равен значению null;


*context.* Контекст, из которого вызван данный метод. Необязательный параметр, по умолчанию равен текущему контексту this;


*isVirtual.* Признак, показывающий, какие координаты используются - виртуальные или реальные. Если параметр равен true, то используются виртуальные координаты, иначе - реальные. Необязательный параметр, по умолчанию равен значению false;


*reverseCalc.* Признак, определяющий направление обхода по столбцам. Если параметр равен значению true, то обход осуществляется с конца диапазона в начало, если false - то с начала диапазона в конец. Необязательный параметр, по умолчанию равен значению false.


## Описание


Метод calcColumnsWidthByPosition** вычисляет значение общей ширины столбцов в заданном диапазоне.


## Комментарии


Метод возвращает значение типа Number.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Определим общую ширину столбцов таблицы в диапазоне A0-C0 и общую высоту строк в диапазоне A0-A2:


// Получим измерения таблицы
var measures = tabSheet.getMeasures();
// Получим значение общей ширины колонок в диапазоне A0-C0
var columnsWidth = measures.calcColumnsWidthByPosition(0, 2);
console.log("Общая ширина колонок в диапазоне A0-C0: " + columnsWidth);
// Получим значение общей высоты строк в диапазоне A0-A2
var rowsHeight = measures.calcRowsHeightByPosition(0, 2);
console.log("Общая высота строк в диапазоне A0-A3: " + rowsHeight);

В результате выполнения примера в консоль браузера были выведены значения общей ширины столбцов в диапазоне A0-B2 и общей высоты строк в диапазоне A0-A2 таблицы:


Общая ширина столбцов в диапазоне A0-С0: 300


Общая высота строк в диапазоне A0-A3: 150


См. также:


[TabSheetMeasures](TabSheetMeasures.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
