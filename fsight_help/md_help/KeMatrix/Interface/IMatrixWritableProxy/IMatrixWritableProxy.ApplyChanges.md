# IMatrixWritableProxy.ApplyChanges

IMatrixWritableProxy.ApplyChanges
-


# IMatrixWritableProxy.ApplyChanges


## Синтаксис


ApplyChanges;


## Описание


Метод ApplyChanges применяет
 все изменения к объекту-посреднику матрицы данных.


## Комментарии


При вызове метода изменённые данные из матрицы [ChangeMatrix](IMatrixWritableProxy.ChangeMatrix.htm)
 будут скопированы в матрицу [BaseMatrix](IMatrixWritableProxy.BaseMatrix.htm).
 Матрица [ChangeMatrix](IMatrixWritableProxy.ChangeMatrix.htm)
 при этом будет очищена.


## Пример


Использование метода приведено в примере для [IMatrixEx.CreateWritableProxyO](../IMatrixEx/IMatrixEx.CreateWritableProxyO.htm).


См. также:


[IMatrixWritableProxy](IMatrixWritableProxy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
