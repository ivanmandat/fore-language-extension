# IStatistics.NegBinomDist

IStatistics.NegBinomDist
-


# IStatistics.NegBinomDist


## Синтаксис


NegBinomDist(FailedTrials:
 Integer; SuccessfulTrials: Integer; Probability: Double): Double;


## Параметры


FailedTrials. Количество неудачных
 испытаний;


SuccessfulTrials. Пороговое
 значение числа успешных испытаний;


Probability. Вероятность успеха.


## Описание


Метод NegBinomDist возвращает
 отрицательное биномиальное распределение.


## Комментарии


Функция возвращает вероятность того, что случится FailedTrials
 неудачных испытаний, прежде чем будет достигнуто SuccessfulTrials
 успешных испытаний, при том условии, что вероятность успешного испытания
 постоянна и равна значению аргумента Probability.
 Эта функция подобна биномиальному распределению, за тем исключением, что
 количество успехов фиксированное, а количество испытаний - переменное.
 Как и в случае биномиального распределения, испытания считаются независимыми.


Количество неудачных испытаний FailedTrials
 и пороговое значение числа успешных SuccessfulTrials
 испытаний должны быть положительными. Также должно выполняться следующее
 условие: (FailedTrials + SuccessfulTrials - 1) > 0.


Область допустимых значений параметра Probability:
 [0, 1].


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

Begin

    st := New Statistics.Create;

    d0 := st.NegBinomDist(10, 5, 0.25);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("Отрицательное биномиальное: " + d0.ToString);

    End If;

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведено значение
 отрицательного биномиального распределения.


См. также:


[IStatistics](IStatistics.htm) |
 [Биномиальное
 распределение](Lib.chm::/05_Statistics/Distribution/Lib_BinomialDistribution.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
