# IStatistics.Poisson

IStatistics.Poisson
-


# IStatistics.Poisson


## Синтаксис


Poisson(EventCount: Integer; Mean: Double; Cumulative: Boolean): Double;


## Параметры


EventCount. Количество событий. Значение должно удовлетворять ограничению: EventCount > 0;


Mean. Ожидаемое численное значение;.


Cumulative. Логическое значение, определяющее форму возвращаемого распределения вероятностей:


-
True. Метод возвращает интегральное распределение Пуассона, то есть вероятность того, что число случайных событий будет от 0 до EventCount включительно;


-
False. Возвращается функция плотности распределения Пуассона, то есть вероятность того, что событий будет в точности EventCount.


## Описание


Метод Poisson возвращает распределение Пуассона.


## Комментарии


Распределение Пуассона используется для предсказания количества событий, происходящих за определенное время.


## Пример


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

Begin

    st := New Statistics.Create;

    d0 := st.Poisson(2, 5, False);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("Функция плотности распределения Пуассона: " + d0.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведено значение функции плотности распределения Пуассона.


Module execution started


Функция плотности распределения Пуассона: 0.084224337488568349


Module execution finished


См. также:


[IStatistics](IStatistics.htm) | [Распределение Пуассона](Lib.chm::/05_Statistics/Distribution/Lib_PoissonDistribution.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
