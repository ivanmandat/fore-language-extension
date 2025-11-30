# IStatistics.Prob

IStatistics.Prob
-


# IStatistics.Prob


## Синтаксис


Prob(X: Array; Probabilities: Array; LowerLimit:
 Double; UpperLimit: Double): Double;


## Параметры


X. Интервал числовых значений,
 с которыми связаны вероятности. Значения в массиве данных должны быть
 больше нуля (0);


Probabilities. Множество вероятностей,
 соответствующих значениям в аргументе X. Допустимые значения для множества
 берутся из диапазона [0, 1];


LowerLimit. Нижняя граница
 значения, для которого вычисляется вероятность;


UpperLimit. Необязательная
 верхняя граница значения, для которого требуется вычислить вероятность.


## Описание


Метод Prob возвращает вероятность
 того, что значение из интервала находится внутри заданных пределов.


## Комментарии


Если UpperLimit не задан, то
 возвращается вероятность того, что значения в X
 равняются значению аргумента LowerLimit.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

    x, p: Array Of Double;

Begin

    p := New Double[4];

    x := New Double[4];

    x[00] := 1; p[00] := 0.2;

    x[01] := 9; p[01] := 0.3;

    x[02] := 5; p[02] := 0.1;

    x[03] := 7; p[03] := 0.4;

    st := New Statistics.Create;

    d0 := st.Prob(x,p,3,9);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("Вероятность: " + d0.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведено значение вероятности:


Выполнение модуля начато


Вероятность: 0.8


Выполнение модуля завершено


См. также:


[IStatistics](IStatistics.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
