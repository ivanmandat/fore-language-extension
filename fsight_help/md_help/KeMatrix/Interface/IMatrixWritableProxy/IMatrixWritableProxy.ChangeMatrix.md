# IMatrixWritableProxy.ChangeMatrix

IMatrixWritableProxy.ChangeMatrix
-


# IMatrixWritableProxy.ChangeMatrix


## Синтаксис


ChangeMatix: [IMatrix](../IMatrix/IMatrix.htm);


## Описание


Свойство ChangeMatrix возвращает
 матрицу измененных данных объекта-посредника.


## Комментарии


Матрица ChangeMatrix будет не
 пустой, если в исходной матрице, на базе которой получен объект-посредник,
 были изменены данные, но еще не был вызван метод [ApplyChanges](IMatrixWritableProxy.ApplyChanges.htm)
 или [RevertChanges](IMatrixWritableProxy.RevertChanges.htm).


Для получения матрицы исходных данных объекта-посредника используйте
 [IMatrixWritableProxy.BaseMatrix](IMatrixWritableProxy.BaseMatrix.htm).


## Пример


Использование метода приведено в примере для [IMatrixEx.CreateWritableProxyO](../IMatrixEx/IMatrixEx.CreateWritableProxyO.htm).


См. также:


[IMatrixWritableProxy](IMatrixWritableProxy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
