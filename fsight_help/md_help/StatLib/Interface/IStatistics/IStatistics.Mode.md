# IStatistics.Mode

IStatistics.Mode
-


# IStatistics.Mode


## Синтаксис


Mode(Sample: Array): Double;


## Параметры


Sample. Массив данных.


## Описание


Метод Mode возвращает моду -
 наиболее часто встречающееся значение в массиве данных.


## Комментарии


Функция Mode является мерой
 взаимного расположения значений. Если в исходном массиве данных все значения
 уникальные (встречаются один раз), то Mode
 возвращает NODATA (равное 1#.QNAN).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

    y: Array Of Double;

Begin

    y := New Double[10];

    y[00] := 14;

    y[01] := 17;

    y[02] := 9;

    y[03] := 15;

    y[04] := 21;

    y[05] := 15;

    y[06] := 20;

    y[07] := 9;

    y[08] := 14;

    y[09] := 9;

    st := New Statistics.Create;

    d0 := st.Mode(y);

    Debug.WriteLine("Мода: " + d0.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведена мода:


Выполнение модуля начато


Мода: 9


Выполнение модуля завершено


См. также:


[IStatistics](IStatistics.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
