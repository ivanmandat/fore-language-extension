# IMath.RndPermutation

IMath.RndPermutation
-


# IMath.RndPermutation


## Синтаксис


RndPermutation(Value: Integer): Array;


## Параметры


Value. Длина массива чисел.


## Описание


Метод RndPermutation осуществляет
 псевдослучайную перестановку массива чисел.


## Комментарии


Значение параметра Value должно
 быть больше «0».


## Пример


Для выполнения примера добавьте ссылку на системную сборку «MathFin».


			Sub UserProc;

Var

    i, n, m: integer;

    mathrnd, mathrnd1: array Of integer;

Begin

    n := 8;

    m := 3;

    mathrnd := math.RndSample(n, m);

    mathrnd1 := math.RndPermutation(n);

    If mathrnd <> Null Then

        Debug.WriteLine("Выборка из массива");

        For i := 0 To math.RndSample(n, m).Length - 1 Do

            Debug.WriteLine(mathrnd[i]);

        End For;

        Else Debug.WriteLine(math.ErrorMsg);

    End If;

    Debug.WriteLine("Перестановка чисел в массиве");

    If mathrnd1 <> Null Then

        For i := 0 To math.RndPermutation(n).Length - 1 Do

            Debug.WriteLine(mathrnd1[i]);

        End For;

        Else Debug.WriteLine(math.ErrorMsg);

    End If;

End Sub UserProc;


В результате выполнения примера будет построен массив длиной N
 чисел. Из полученного массива в произвольном порядке будут выбраны M чисел. В исходном массиве в произвольном
 порядке будет произведена перестановка чисел. Полученные массивы будут
 выведены в окно консоли.


См. также:


[IMath](IMath.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
