# IMath.MMult

IMath.MMult
-


# IMath.MMult


## Синтаксис


MMult(A1: Array; A2: Array): Array;


## Параметры


A1. Массив вещественных чисел;


A2. Массив вещественных чисел.


## Описание


Метод MMult возвращает произведение
 заданных матриц.


## Комментарии


Результирующий массив будет с таким же числом строк, как A1
 и с таким же числом столбцов, как A2.


Количество столбцов аргумента A1
 должно быть таким же, как количество строк аргумента A2.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    MM, matr1, matr2: Array Of Double;

    i, j: Integer;

Begin

    matr1 := New Double[3, 3];

    matr1[0, 0] := 1; matr1[0, 1] := 9; matr1[0, 2] := 9;

    matr1[1, 0] := 2; matr1[1, 1] := 15; matr1[1, 2] := 4;

    matr1[2, 0] := 8; matr1[2, 1] := 1; matr1[2, 2] := 13;

    matr2 := New Double[3, 2];

    matr2[0, 0] := 10; matr2[0, 1] := 3;

    matr2[1, 0] := 20; matr2[1, 1] := 16;

    matr2[2, 0] := 18; matr2[2, 1] := 17;

    MM := Math.MMult(matr1,matr2);

    If math.Status = 0 Then

        For i := 0 To MM.GetUpperBound(1) Do

            For j := 0 To MM.GetUpperBound(2) Do

                Debug.Write(MM[i, j].ToString + " ");

            End For;

            Debug.WriteLine("");

        End For;

        Else

        Debug.WriteLine("Ошибка " + Math.Status.ToString + ": " + Math.ErrorMsg);

    End If;

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведена матрица,
 равная произведению заданных матриц.


См. также:


[IMath](IMath.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
