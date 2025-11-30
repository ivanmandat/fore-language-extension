# IStatistics.LogNormDist

IStatistics.LogNormDist
-


# IStatistics.LogNormDist


## Синтаксис


LogNormDist(Value: Double, Mean: Double; StandartDeviation: Double): Double;


## Параметры


Value. Значение, для которого вычисляется функция. Значение должно удовлетворять ограничению: Value > 0;


Mean. Среднее ln(Value );


StandartDeviation. Стандартное отклонение ln(Value). Значение должно удовлетворять ограничению: StandartDeviation > 0.


## Описание


Метод LogNormDist возвращает интегральное логарифмическое нормальное распределение.


## Комментарии


Функция используется для анализа данных, которые были логарифмически преобразованы.


## Пример


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

Begin

    st := New Statistics.Create;

    d0 := st.LogNormDist(4, 3.5, 1.2);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("Распределение: " + d0.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведено значение интегрального логарифмического нормального распределения:


Module execution started


Распределение: 0.039083555706800464


Module execution finished


См. также:


[IStatistics](IStatistics.htm) | [IStatistics.NormDist](IStatistics.NormDist.htm) | [Логнормальное распределение](Lib.chm::/05_Statistics/Distribution/Lib_LogNormalDistribution.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
