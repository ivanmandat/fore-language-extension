# ISmVectorAutoRegress.ImpulsePeriod

ISmVectorAutoRegress.ImpulsePeriod
-


# ISmVectorAutoRegress.ImpulsePeriod


## Синтаксис


ImpulsePeriod: Integer;


## Описание


Свойство ImpulsePeriod определяет
 период для импульсной функции.


## Комментарии


Если одновременно заданы свойства [ImpulseAROrder](ISmVectorAutoRegress.ImpulseAROrder.htm)
 и ImpulsePeriod, то значения параметра [ISlEquation.AutoRegressionOrder](../ISlEquation/ISlEquation.AutoRegressionOrder.htm)
 игнорируется, модель рассчитывается с авторегрессией порядка 1, 2, 3,
 … ImpulseAROrder, при этом будет рассчитана матрица значений функции импульсивного
 отклика [ISlEquation.ImpulseMatrix](../ISlEquation/ISlEquation.ImpulseMatrix.htm).


## Пример


Использование свойства приведено в примере для [ISmVectorAutoRegress.ImpulseAROrder](ISmVectorAutoRegress.ImpulseAROrder.htm).


См. также:


[ISmVectorAutoRegress](ISmVectorAutoRegress.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
