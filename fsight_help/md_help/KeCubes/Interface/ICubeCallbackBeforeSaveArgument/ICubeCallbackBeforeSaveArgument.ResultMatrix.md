# ICubeCallbackBeforeSaveArgument.ResultMatrix

ICubeCallbackBeforeSaveArgument.ResultMatrix
-


# ICubeCallbackBeforeSaveArgument.ResultMatrix


## Синтаксис


		ResultMatrix: [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm);


## Описание


Свойство ResultMatrix используется
 для переопределения сохраняемой матрицы.


## Комментарии


По умолчанию свойство возвращает Null,
 при этом в куб сохраняются значения из матрицы [OriginalMatrix](ICubeCallbackBeforeSaveArgument.OriginalMatrix.htm).
 Если необходимо произвести какие-либо изменения, то получите матрицу [OriginalMatrix](ICubeCallbackBeforeSaveArgument.OriginalMatrix.htm)
 в отдельную переменную, измените в ней значения и укажите полученную переменную
 в качестве значения свойства ResultMatrix.


## Пример


Пример использования приведён в описании [ICubeInstanceStorage.SaveMatrixCallback](../ICubeInstanceStorage/ICubeInstanceStorage.SaveMatrixCallback.htm).


См. также:


[ICubeCallbackBeforeSaveArgument](ICubeCallbackBeforeSaveArgument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
