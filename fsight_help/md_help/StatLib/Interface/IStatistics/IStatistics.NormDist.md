# IStatistics.NormDist

IStatistics.NormDist
-


# IStatistics.NormDist


## Синтаксис


NormDist(Value: Double; Mean: Double; StandartDeviation: Double; Cumulative: Boolean): Double;


## Параметры


Value. Значение, для которого строится распределение;


Mean. Среднее арифметическое распределения;


StandartDeviation. Стандартное отклонение распределения. Значение должно удовлетворять ограничению: StandartDeviation > 0;


Cumulative. Логическое значение, определяющее форму функции:


-
при значении True функция NormDist возвращает интегральную функцию распределения;


-
при значении False возвращается функция плотности распределения.


## Описание


Метод NormDist возвращает нормальную функцию распределения для указанного среднего и стандартного отклонения.


## Комментарии


Функция имеет очень широкий круг приложений в статистике, включая проверку гипотез.


## Пример


			Sub UserProc;

Var

    st: Statistics;

    d0, d1: Double;

Begin

    st := New Statistics.Create;

    d0 := st.NormDist(12, 3, 2.5, True);

    d1 := st.NormDist(12, 3, 2.5, False);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("Функция интеграла распределения: " + d0.ToString);

        Debug.WriteLine("Функция плотности распределения: " + d1.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты расчетов.


Module execution started


Функция интеграла распределения: 0.99984089140984245


Функция плотности распределения: 0.00024476077204550875


Module execution finished


См. также:


[IStatistics](IStatistics.htm) | [Нормальное распределение](Lib.chm::/05_Statistics/Distribution/Lib_NormalDistribution.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
