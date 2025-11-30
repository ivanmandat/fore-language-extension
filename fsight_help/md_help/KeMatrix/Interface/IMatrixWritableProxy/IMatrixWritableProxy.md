# IMatrixWritableProxy

IMatrixWritableProxy
-


# IMatrixWritableProxy


Сборка: Matrix;


## Описание


Интерфейс IMatrixWritableProxy
 используется для работы с объектом-посредником матрицы.


## Иерархия наследования


           IMatrixWritableProxy


## Комментарии


Для получения объекта данного типа необходимо матрицу, получаемую в
 [IMatrixEx.CreateWritableProxyO](../IMatrixEx/IMatrixEx.CreateWritableProxyO.htm),
 привести к IMatrixWritableProxy.
 Объект-посредник позволяет раздельно работать с исходными и изменёнными
 данными матрицы. При создании объекта-посредника в матрицу [BaseMatrix](IMatrixWritableProxy.BaseMatrix.htm)
 будут скопированы данные исходной матрицы. Матрица [ChangeMatrix](IMatrixWritableProxy.ChangeMatrix.htm)
 также будет создана, но она будет пустая.


При изменении данных в исходной матрице все изменения также будут фиксироваться
 в матрице [ChangeMatrix](IMatrixWritableProxy.ChangeMatrix.htm).
 В это время в матрице [BaseMatrix](IMatrixWritableProxy.BaseMatrix.htm)
 по прежнему будут доступны исходные данные. При вызове метода [ApplyChanges](IMatrixWritableProxy.ApplyChanges.htm)
 изменения из матрицы [ChangeMatrix](IMatrixWritableProxy.ChangeMatrix.htm)
 будут применены к матрице [BaseMatrix](IMatrixWritableProxy.BaseMatrix.htm).
 При вызове метода [RevertChanges](IMatrixWritableProxy.RevertChanges.htm)
 матрица [ChangeMatrix](IMatrixWritableProxy.ChangeMatrix.htm)
 будет очищена, а исходная матрица будет восстановлена из матрицы [BaseMatrix](IMatrixWritableProxy.BaseMatrix.htm).


После вызова любого из методов ([ApplyChanges](IMatrixWritableProxy.ApplyChanges.htm)
 или [RevertChanges](IMatrixWritableProxy.RevertChanges.htm))
 матрица [ChangeMatrix](IMatrixWritableProxy.ChangeMatrix.htm)
 будет очищена. При этом, если был создан итератор для матрицы [ChangeMatrix](IMatrixWritableProxy.ChangeMatrix.htm),
 то он станет некорректным. Для дальнейшей работы потребуется пересоздание
 итератора.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [BaseMatrix](IMatrixWritableProxy.BaseMatrix.htm)
		 Свойство BaseMatrix
		 возвращает матрицу исходных данных объекта-посредника.


		 ![](../../Property_Image.gif)
		 [ChangeMatrix](IMatrixWritableProxy.ChangeMatrix.htm)
		 Свойство ChangeMatrix
		 возвращает матрицу измененных данных объекта-посредника.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ApplyChanges](IMatrixWritableProxy.ApplyChanges.htm)
		 Метод ApplyChanges
		 применяет все изменения к объекту-посреднику матрицы данных.


		 ![](../../Sub_Image.gif)
		 [RevertChanges](IMatrixWritableProxy.RevertChanges.htm)
		 Метод RevertChanges
		 отменяет все изменения объекта-посредника матрицы данных.


См. также:


[Интерфейсы
 сборки Matrix](../KeMatrix_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
