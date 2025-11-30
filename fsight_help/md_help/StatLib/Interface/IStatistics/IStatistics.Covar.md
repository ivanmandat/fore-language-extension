# IStatistics.Covar

IStatistics.Covar
-


# IStatistics.Covar


## Синтаксис


Covar(A1: Array; A2: Array): Double;


## Параметры


A1. Первый массив значений;


A2. Второй массив значений.


## Описание


Метод Covar возвращает ковариацию,
 то есть среднее произведений отклонений для каждой пары точек данных.


## Комментарии


Ковариация используется для определения связи между двумя множествами
 данных.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

    y, x: Array Of Double;

Begin

    y := New Double[10];

    x := New Double[10];

    y[00] := 1.6; x[00] := 2;

    y[01] := 1.7; x[01] := 4;

    y[02] := 1.8; x[02] := 2;

    y[03] := 1.9; x[03] := 5;

    y[04] := 2; x[04] := 12;

    y[05] := 2.1; x[05] := 6;

    y[06] := 2.2; x[06] := 15;

    y[07] := 2.3; x[07] := 17;

    y[08] := 2.4; x[08] := 14;

    y[09] := 2.8; x[09] := 3;

    st := New Statistics.Create;

    d0 := st.Covar(y,x);

    Debug.WriteLine("Ковариация: " + d0.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведено значение ковариации:


Выполнение модуля начато


Ковариация: 0.74


Выполнение модуля завершено


См. также:


[IStatistics](IStatistics.htm) |
 [Коэффициент
 корреляции](Lib.chm::/05_Statistics/UiModelling_CoeffCorr.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
