# IMath.MInverse

IMath.MInverse
-


# IMath.MInverse


## Синтаксис


MInverse(Data: Array): Array;


## Параметры


Data.
 Массив вещественных чисел.


## Описание


Метод MInverse возвращает обратную
 матрицу для заданного массива.


## Комментарии


Матрица должна быть квадратной.


Если входной массив содержит пропуски, функция вернет ошибку.


## Пример


Для выполнения примера добавьте ссылку на системную сборку MathFin.


			Sub UserProc;

Var

    MInv, matr: Array Of Double;

    i, j: Integer;

Begin

    matr := New Double[3, 3];

    matr[0, 0] := 1; matr[0, 1] := 9; matr[0, 2] := 9;

    matr[1, 0] := 2; matr[1, 1] := 15; matr[1, 2] := 0;

    matr[2, 0] := 8; matr[2, 1] := 1; matr[2, 2] := 13;

    MInv := Math.MInverse(matr);

    If math.Status = 0 Then

        For i := 0 To MInv.GetUpperBound(1) Do

            For j := 0 To MInv.GetUpperBound(2) Do

                Debug.Write(MInv[i, j].ToString + " ");

            End For;

            Debug.WriteLine("");

        End For;

        Else

        Debug.WriteLine("Ошибка " + Math.Status.ToString + ": " + Math.ErrorMsg);

    End If;

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведена обратная
 матрица.


См. также:


[IMath](IMath.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
