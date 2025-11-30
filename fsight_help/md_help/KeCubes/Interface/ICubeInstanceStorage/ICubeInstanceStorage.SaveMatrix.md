# ICubeInstanceStorage.SaveMatrix

ICubeInstanceStorage.SaveMatrix
-


# ICubeInstanceStorage.SaveMatrix


## Синтаксис


		SaveMatrix(Matrix: [IMatrix](kematrix.chm::/interface/imatrix/imatrix.htm);
		 ValueFlag: Integer);


## Параметры


Matrix. Матрица, содержащая
 значения, которые необходимо сохранить обратно в куб.


ValueFlag. Флаг элементов,
 содержащих изменённые данные. В куб будут сохраняться, только те элементы
 матрицы, [флаг](KeMatrix.chm::/Interface/IMatrixIterator/IMatrixIterator.ValueFlag.htm)
 которых соответствует данному значению.


## Описание


Метод SaveMatrix осуществляет
 сохранение матрицы с данными в куб.


## Пример


Пример использования приведён в описании [ICubeInstanceStorage.Callback](ICubeInstanceStorage.Callback.htm).


См. также:


[ICubeInstanceStorage](ICubeInstanceStorage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
