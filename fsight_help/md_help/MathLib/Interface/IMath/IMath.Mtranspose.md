# IMath.Mtranspose

IMath.Mtranspose
-


# IMath.Mtranspose


## Синтаксис


Mtranspose(Data: Array): Array;


## Параметры


Data. Одномерный или двумерный
 числовой массив.


## Описание


Метод Mtranspose возвращает
 транспонированный массив.


## Комментарии


Транспонирование - преобразование массива, в результате которого столбцы
 становятся строками, а строки - столбцами.


## Пример


Добавьте ссылку на системную сборку MathFin.


			Sub UserProc;

Var

    Matr, MInv: Array Of Double;

    i, j: integer;

Begin

    // Создаем двумерный
 массив

    Matr := New Double[3, 3];

    Matr[0, 0] := 1; Matr[0, 1] := 9; Matr[0, 2] := 9;

    Matr[1, 0] := 2; Matr[1, 1] := 15; Matr[1, 2] := 0;

    Matr[2, 0] := 8; Matr[2, 1] := 2; Matr[2, 2] := 13;

    Debug.WriteLine("Массив");

    // Выводим созданный
 массив в консоль

    For i := 0 To Matr.GetUpperBound(1) Do

        For j := 0 To Matr.GetUpperBound(2) Do

            Debug.Write(Matr[i, j].ToString + "  ");

        End For;

        Debug.WriteLine("");

    End For;

    // Транспонируем массив

    MInv := Math.Mtranspose(Matr);

    Debug.WriteLine("Транспонированный массив");

    // Выводим транспонированный
 массив в консоль

    For i := 0 To MInv.GetUpperBound(1) Do

        For j := 0 To MInv.GetUpperBound(2) Do

            Debug.Write(MInv[i, j].ToString + "  ");

        End For;

        Debug.WriteLine("");

    End For;

End Sub UserProc;


В результате выполнения примера переменная MInv будет содержать транспонированный
 массив Matr, и оба массива будут выведены в окно консоли.


См. также:


[IMath](IMath.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
