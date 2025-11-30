# IStatistics.Max

IStatistics.Max
-


# IStatistics.Max


## Синтаксис


Max(Values: Array): Double;


## Параметры


Values. Набор чисел, среди
 которых требуется найти наибольшее.


## Описание


Метод Max возвращает наибольшее
 значение из заданного набора значений.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

    y: Array Of Double;

Begin

    y := New Double[10];

    y[00] := 1.6;

    y[01] := 1.7;

    y[02] := 1.8;

    y[03] := 1.9;

    y[04] := 2;

    y[05] := 2.1;

    y[06] := 2.2;

    y[07] := 2.3;

    y[08] := 2.4;

    y[09] := 2.8;

    st := New Statistics.Create;

    d0 := st.Max(y);

    Debug.WriteLine("Наибольшее значение: " + d0.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведено наибольшее значение:


Выполнение модуля начато


Наибольшее значение: 2.8


Выполнение модуля завершено


См. также:


[IStatistics](IStatistics.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
