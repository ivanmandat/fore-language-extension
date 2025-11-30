# ICalcObjectComparer.CompareCalcObject

ICalcObjectComparer.CompareCalcObject
-


# ICalcObjectComparer.CompareCalcObject


## Синтаксис


CompareCalcObject(Obj1: [ICalcObject](../ICalcObject/ICalcObject.htm),
 Obj2: [ICalcObject](../ICalcObject/ICalcObject.htm)): Integer;


## Параметры


Obj1. Первый объект алгоритма
 расчёта;


Obj2. Второй объект алгоритма
 расчёта.


## Описание


Метод CompareCalcObject осуществляет
 сравнение объектов алгоритма расчёта.


## Комментарии


Данный метод может быть переопределён в пользовательском классе.


Метод должен возвращать следующие значения:


	- 1. Если Obj1
	 по каким-либо критериям больше Obj2.


	- -1. Если Obj1
	 по каким-либо критериям меньше Obj2.


	- 0. Если Obj1
	 и Obj2 равны.


## Пример


Использование свойства приведено в примере для [ICalcObjectsList.Sort](../ICalcObjectsList/ICalcObjectsList.Sort.htm).


См. также:


[ICalcObjectComparer](ICalcObjectComparer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
