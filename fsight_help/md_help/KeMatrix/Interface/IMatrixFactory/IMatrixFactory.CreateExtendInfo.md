# IMatrixFactory.CreateExtendInfo

IMatrixFactory.CreateExtendInfo
-


# IMatrixFactory.CreateExtendInfo


## Синтаксис


CreateExtendInfo: [IMatrixExtendInfo](../IMatrixExtendInfo/IMatrixExtendInfo.htm);


## Описание


Метод CreateExtendInfo создает
 расширенные параметры матрицы данных.


## Пример


Для выполнения примера добавьте ссылки на сборки «Matrix», «Dimensions».


			Function UserProc(SelSet: IDimSelectionSet): IMatrixExtendInfo;

Var

    result: IMatrixExtendInfo;

    MatrixFact: IMatrixFactory;

    i: Integer;

    j: IDimSelection;

Begin

    MatrixFact := New (MatrixFactory.Create) As IMatrixFactory;

    result := MatrixFact.CreateExtendInfo;

    If SelSet.Count > 0 Then

        For i := 0 To SelSet.Count - 1 Do

            result.Add(SelSet.Item(i));

        End For;

    End If;

    Return result;

End Function UserProc;


Результат выполнения функции: создание расширенных параметров матрицы
 по набору отметок, заданных параметром SelSet.


См. также:


[IMatrixFactory](IMatrixFactory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
