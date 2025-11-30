# IStatistics.DevSq

IStatistics.DevSq
-


# IStatistics.DevSq


## Синтаксис


DevSq(Values: Array): Double;


## Параметры


Values, Набор чисел, квадраты
 отклонений которых суммируются.


## Описание


Метод DevSq возвращает сумму
 квадратов отклонений точек данных от их среднего.


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

    d0 := st.DevSq(y);

    Debug.WriteLine("Сумма квадратов отклонений: " + d0.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведена сумма квадратов
 отклонений:


Выполнение модуля начато


Сумма квадратов отклонений: 1.176


Выполнение модуля завершено


См. также:


[IStatistics](IStatistics.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
