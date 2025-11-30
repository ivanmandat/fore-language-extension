# IMath.CholeskyDecomposition

IMath.CholeskyDecomposition
-


# IMath.CholeskyDecomposition


## Синтаксис


CholeskyDecomposition(Data: Array): Array;


## Параметры


Data.
 Числовой двумерный массив с равным количеством строк и столбцов.


## Описание


Метод CholeskyDecomposition
 возвращает результат разложения Холецкого.


## Комментарии


Разложение осуществляется только для симметричных положительно-определенных
 матриц.


## Пример


Для выполнения примера добавьте ссылку на системную сборку MathFin.


			Sub UserProc;

Var

    ChD, matr: Array Of Double;

    i, j: Integer;

Begin

    matr := New Double[3, 3];

    matr[0, 0] := 1; matr[0, 1] := 0; matr[0, 2] := 0;

    matr[1, 0] := 0; matr[1, 1] := 15; matr[1, 2] := 0;

    matr[2, 0] := 0; matr[2, 1] := 0; matr[2, 2] := 150;

    ChD := Math.CholeskyDecomposition(matr);

    If Math.Status = 0 Then

        For i := 0 To ChD.GetUpperBound(1) Do

            For j := 0 To ChD.GetUpperBound(2) Do

                Debug.Write(ChD[i, j].ToString + " ");

            End For;

            Debug.WriteLine("");

        End For;

        Else

        Debug.WriteLine("Ошибка " + Math.Status.ToString
 + ": " +
 Math.ErrorMsg);

    End If;

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен результат
 разложения Холецкого.


См. также:


[IMath](IMath.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
