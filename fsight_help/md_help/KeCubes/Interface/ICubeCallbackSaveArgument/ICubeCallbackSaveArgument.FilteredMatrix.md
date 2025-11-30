# ICubeCallbackSaveArgument.FilteredMatrix

ICubeCallbackSaveArgument.FilteredMatrix
-


# ICubeCallbackSaveArgument.FilteredMatrix


## Синтаксис


		FilteredMatrix: [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm);


## Описание


Свойство FilteredMatrix возвращает
 матрицу, содержащую только изменённые данные.


## Комментарии


При сохранении в метод SaveMatrix*
 интерфейса [ICubeInstanceStorage](../ICubeInstanceStorage/ICubeInstanceStorage.htm) передаётся
 матрица, которая получена при построении куба. Эта матрица может содержать
 как исходные, так и изменённые данные. Изменённые данные будут иметь флаг
 [ValueFlag](ICubeCallbackSaveArgument.ValueFlag.htm)
 или один из флагов [ValueFlags](ICubeCallbackSaveArgument.ValueFlags.htm). Свойство
 FilteredMatrix позволяет получить
 только изменённые данные. Работа с матрицей изменённых данных доступна
 только через [итератор](KeMatrix.chm::/Interface/IMatrixIterator/IMatrixIterator.htm).
 Для создания итератора используйте метод [IMatrix.CreateIterator](KeMatrix.chm::/Interface/IMatrix/IMatrix.CreateIterator.htm).


## Пример


Пример использования приведён в описании [ICubeInstanceStorage.SaveMatrixCallback](../ICubeInstanceStorage/ICubeInstanceStorage.SaveMatrixCallback.htm).


См. также:


[ICubeCallbackSaveArgument](ICubeCallbackSaveArgument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
