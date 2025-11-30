# ISlEquation.AutoRegressionOrder

ISlEquation.AutoRegressionOrder
-


# ISlEquation.AutoRegressionOrder


## Синтаксис


AutoRegressionOrder: Array;


## Описание


Свойство AutoRegressionOrder
 определяет порядки авторегрессии.


## Комментарии


Для векторной авторегрессии значение данного свойства будет проигнорировано,
 если одновременно заданы свойства [ISmVectorAutoRegress.ImpulseAROrder](../ISmVectorAutoRegress/ISmVectorAutoRegress.ImpulseAROrder.htm)
 и [ISmVectorAutoRegress.ImpulsePeriod](../ISmVectorAutoRegress/ISmVectorAutoRegress.ImpulsePeriod.htm),
 то модель будет рассчитываться с авторегрессией порядка 1, 2, 3, … ImpulseAROrder.
 Также будет рассчитана матрица значений функции импульсивного отклика
 [ISlEquation.ImpulseMatrix](ISlEquation.ImpulseMatrix.htm).


## Пример


Использование свойства приведено в примере для [ISlEquation.Fitted](ISlEquation.Fitted.htm).


См. также:


[ISlEquation](ISlEquation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
