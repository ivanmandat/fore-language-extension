# IStatistics.Percentile

IStatistics.Percentile
-


# IStatistics.Percentile


## Синтаксис


Percentile(Data: Array; Percent: Double): Double;


## Параметры


Data. Массив данных, который
 определяет относительное положение;


Percent. Значение процентили.
 Допустимые значения берутся из диапазона [0, 1].


## Описание


Метод Percentile возвращает
 k-ую процентиль для значений из интервала.


## Комментарии


Эта функция используется для определения порога приемлемости.


Если k не кратно 1/(n - 1), то функция Percentile
 производит интерполяцию для определения значения k-ой процентили.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

    y: Array Of Double;

Begin

    y := New Double[7];

    y[00] := 6;

    y[01] := 7;

    y[02] := 9;

    y[03] := 15;

    y[04] := 21;

    y[05] := 24;

    y[06] := 25;

    st := New Statistics.Create;

    d0 := st.Percentile(y,0.3);

    Debug.WriteLine("Тридцатая процентиль: " + d0.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведена тридцатая процентиль
 для приведенного массива данных:


Выполнение модуля начато


Тридцатая процентиль: 8.6


Выполнение модуля завершено


См. также:


[IStatistics](IStatistics.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
