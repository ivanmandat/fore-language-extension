# ICubeCallbackSaveArgument.ValueMatrix

ICubeCallbackSaveArgument.ValueMatrix
-


# ICubeCallbackSaveArgument.ValueMatrix


## Синтаксис


		ValueMatrix: [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm);


## Описание


Свойство ValueMatrix возвращает
 матрицу с данными, которая была передана при сохранении данных в куб.


## Комментарии


Свойство возвращает ту матрицу, которая была доступна в событии [OnBeforeSave](../ICubeSaveMatrixCallback/ICubeSaveMatrixCallback.OnBeforeSave.htm) и могла быть модифицирована.
 В ней содержатся как исходные, так и изменённые данные. Изменённые данные
 будут иметь флаг [ValueFlag](ICubeCallbackSaveArgument.ValueFlag.htm)
 или один из флагов [ValueFlags](ICubeCallbackSaveArgument.ValueFlags.htm). Для
 получения только изменённых данных используйте свойство [FilteredMatrix](ICubeCallbackSaveArgument.FilteredMatrix.htm).


## Пример


Пример использования приведён в описании [ICubeInstanceStorage.SaveMatrixCallback](../ICubeInstanceStorage/ICubeInstanceStorage.SaveMatrixCallback.htm).


См. также:


[ICubeCallbackSaveArgument](ICubeCallbackSaveArgument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
