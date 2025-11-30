# IStatistics.DispersionP

IStatistics.DispersionP
-


# IStatistics.DispersionP


## Синтаксис


DispersionP(Values: Array): Double;


## Параметры


Values. Массив числовых аргументов,
 соответствующих генеральной совокупности.


## Описание


Метод DispersionP вычисляет
 дисперсию для генеральной совокупности.


## Комментарии


При вычислении предполагается, что аргументы представляют всю генеральную
 совокупность.


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

    d0 := st.DispersionP(y);

    Debug.WriteLine("Дисперсия: " + d0.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведена дисперсия:


Выполнение модуля начато


Дисперсия: 0.117599999999999


Выполнение модуля завершено


См. также:


[IStatistics](IStatistics.htm) |
 [Дисперсия](Lib.chm::/05_Statistics/UiModelling_dispers.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
