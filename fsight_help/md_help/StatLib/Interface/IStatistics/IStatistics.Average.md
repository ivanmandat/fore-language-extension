# IStatistics.Average

IStatistics.Average
-


# IStatistics.Average


## Синтаксис


Average(Value: Array): Double;


## Параметры


Value. Набор чисел, для которых
 вычисляется среднее.


## Описание


Метод Average возвращает среднее
 арифметическое своих аргументов.


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

    d0 := st.Average(y);

    Debug.WriteLine("Среднее: " + d0.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведено среднее арифметическое
 для заданного набора чисел:


Выполнение модуля начато


Среднее: 2.08


Выполнение модуля завершено


См. также:


[IStatistics](IStatistics.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
