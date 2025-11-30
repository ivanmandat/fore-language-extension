# IMatrixModel.UpperBoundI

IMatrixModel.UpperBoundI
-


# IMatrixModel.UpperBoundI


## Синтаксис


UpperBoundI(DimIndex: Integer): Integer;


## Параметры


DimIndex.
 Номер измерения, у которого необходимо получить верхнюю границу.


## Описание


Свойство UpperBoundI возвращает
 верхнюю границу измерения, номер которого передается в качестве входного
 параметра.


## Комментарии


Отличием свойства UpperBoundI
 от свойства [UpperBound](IMatrixModel.UpperBound.htm) является
 его внутренняя реализация, в которой оптимизирована работа с типами данными,
 что в свою очередь ускоряет работу и позволяет экономить память при больших
 размерах матриц.


## Пример


Использование свойства приведено в примере для [IMatrixModel.LowerBoundI](IMatrixModel.LowerBoundI.htm).


См. также:


[IMatrixModel](IMatrixModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
