# IStatistics.HypGeomDist

IStatistics.HypGeomDist
-


# IStatistics.HypGeomDist


## Синтаксис


HypGeomDist(SuccessfulTrials: Integer; Trials: Integer; SuccessfulInPopulation: Integer; PopulationSize: Integer): Double;


## Параметры


SuccessfulTrials. Количество успешных испытаний в выборке. Значение должно удовлетворять ограничениям:


-
SuccessfulTrials > = 0;


-
SuccessfulTrials < = min(Trials, SuccessfulInPopulation);


-
SuccessfulTrials > = max(0, Trials - PopulationSize + SuccessfulTrials);


Trials. Размер выборки. Область допустимых значений: [0, PopulationSize];


SuccessfulInPopulation. Количество успешных испытаний в генеральной совокупности. Область допустимых значений: [0, PopulationSize];


PopulationSize. Размер генеральной совокупности. Значение должно удовлетворять ограничению: PopulationSize >= 0.


## Описание


Метод HypGeomDist возвращает гипергеометрическое распределение.


## Комментарии


Метод возвращает вероятность заданного количества успехов в выборке, если заданы размер выборки, количество успехов в генеральной совокупности и размер генеральной совокупности. Функция используется для задач с конечной генеральной совокупностью, где каждое наблюдение - это успех или неудача, а каждое подмножество заданного размера выбирается с равной вероятностью. Метод используется для выборок без повторений из конечной генеральной совокупности.


## Пример


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

Begin

    st := New Statistics.Create;

    d0 := st.HypGeomDist(1, 4, 8, 20);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("Распределение: " + d0.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведено значение гипергеометрического распределения:


Module execution started


Распределение: 0.36326109345456303


Module execution finished


См. также:


[IStatistics](IStatistics.htm) | [Гипергеометрическое распределение](Lib.chm::/05_Statistics/Distribution/Lib_HyperGeometricDistribution.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
