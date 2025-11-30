# IStatistics.Median

IStatistics.Median
-


# IStatistics.Median


## Синтаксис


Median(Values: Array): Double;


## Параметры


Values. Набор чисел, для которых
 требуется найти медиану.


## Описание


Метод Median возвращает медиану
 заданных чисел.


## Комментарии


Медиана - число, которое является
 серединой множества чисел, то есть половина чисел имеют значения большие,
 чем медиана, а половина чисел имеют значения меньшие, чем медиана.


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

    d0 := st.Median(y);

    Debug.WriteLine("Медиана: " + d0.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведена медиана:


Выполнение модуля начато


Медиана: 2.05


Выполнение модуля завершено


См. также:


[IStatistics](IStatistics.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
