# IVariableStubExecuteResult.Matrix

IVariableStubExecuteResult.Matrix
-


# IVariableStubExecuteResult.Matrix


## Синтаксис


Matrix: [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm);


## Описание


Свойство Matrix возвращает матрицу
 с загруженными данными источника.


## Комментарии


Если в методе [IVariableStub.Execute](../IVariableStub/IVariableStub.Execute.htm)
 в качестве значения параметра EmptyMatrix
 передавалось значение False, то
 свойство Matrix вернет матрицу
 с загруженными данными. Если параметр EmptyMatrix
 имел значение True, то в свойстве
 Matrix будет доступна пустая матрица,
 структура которой соответствует структуре источника данных.


## Пример


Пример использования приведён в описании методов [IVariableStub.Execute](../IVariableStub/IVariableStub.Execute.htm),
 [IVariableStubExecuteResult.Save](IVariableStubExecuteResult.Save.htm).


См. также:


[IVariableStubExecuteResult](IVariableStubExecuteResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
