# IStatistics.Frequency

IStatistics.Frequency
-


# IStatistics.Frequency


## Синтаксис


Frequency(DataArray: Array; BinsArray: Array): Array;


## Параметры


DataArray. Массив данных, для которых вычисляются частоты. Если DataArray не содержит значений, то функция Frequency возвращает массив нулей;


BinsArray. Массив интервалов, в которые группируются значения аргумента DataArray. Если BinsArray не содержит значений, то функция Frequency возвращает количество элементов в аргументе DataArray.


## Описание


Метод Frequency вычисляет частоту появления значений в интервале значений и возвращает массив цифр.


## Комментарии


Количество элементов в возвращаемом массиве на единицу больше числа элементов в массиве BinsArray. Дополнительный элемент в возвращаемом массиве содержит количество значений, больших чем максимальное значение в интервалах.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

    y, x: Array Of Double;

    i: Integer;

    res: Array Of Integer;

Begin

    y := New Double[9];

    x := New Double[3];

    y[00] := 79; x[00] := 70;

    y[01] := 85; x[01] := 79;

    y[02] := 78; x[02] := 89;

    y[03] := 85;

    y[04] := 50;

    y[05] := 81;

    y[06] := 95;

    y[07] := 88;

    y[08] := 97;

    st := New Statistics.Create;

    res := st.Frequency(y, x);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        For i := 0 To res.Length - 1 Do

            d0 := res[i];

            Debug.WriteLine(d0.ToString);

        End For;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведен результирующий массив:


Module execution started


1


1


5


2


Module execution finished


Где:


1 - Количество значений массива y, попадающих в первый интервал [70 и меньше);


1 - Количество значений массива y, попадающих в второй интервал [71-79);


5 - Количество значений массива y, попадающих в третий интервал [79-89);


2 - Количество значений массива y, превышающих значение границы третьего интервала [89 и больше).


См. также:


[IStatistics](IStatistics.htm) | [Частота](Lib.chm::/05_Statistics/Distrib_func/Lib_Frequency.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
