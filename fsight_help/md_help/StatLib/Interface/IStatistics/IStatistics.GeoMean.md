# IStatistics.GeoMean

IStatistics.GeoMean
-


# IStatistics.GeoMean


## Синтаксис


GeoMean(Values: Array): Double;


## Параметры


Values. Массив данных, для
 которых вычисляется среднее. Значения в массиве должны быть больше нуля.


## Описание


Метод GeoMean возвращает среднее
 геометрическое значений массива положительных чисел.


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

    d0 := st.GeoMean(y);

    Debug.WriteLine("Среднее геометрическое: " + d0.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведено значение среднего:


Module execution started


Среднее геометрическое: 2.0527516459856363


Module execution finished


См. также:


[IStatistics](IStatistics.htm)
 | [Среднее
 геометрическое](Lib.chm::/05_Statistics/UiModelling_Avg_geometr.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
