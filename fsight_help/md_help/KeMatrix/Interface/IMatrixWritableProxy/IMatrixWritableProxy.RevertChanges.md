# IMatrixWritableProxy.RevertChanges

IMatrixWritableProxy.RevertChanges
-


# IMatrixWritableProxy.RevertChanges


## Синтаксис


RevertChanges;


## Описание


Метод RevertChanges отменяет
 все изменения объекта-посредника матрицы данных.


## Комментарии


При вызове метода матрица [ChangeMatrix](IMatrixWritableProxy.ChangeMatrix.htm)
 будут очищена, а исходная матрица, на базе которой получен текущий объект-посредник,
 будет восстановлена из матрицы [BaseMatrix](IMatrixWritableProxy.BaseMatrix.htm).


## Пример


Использование метода приведено в примере для [IMatrixEx.CreateWritableProxyO](../IMatrixEx/IMatrixEx.CreateWritableProxyO.htm).


См. также:


[IMatrixWritableProxy](IMatrixWritableProxy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
