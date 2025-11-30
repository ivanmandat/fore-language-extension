# IStatistics.BinomDist

IStatistics.BinomDist
-


# IStatistics.BinomDist


## Синтаксис


BinomDist(Successes: Integer; Trials: Integer; Probability: Double; Cumulative: Boolean): Double;


## Параметры


Successes. Количество успешных испытаний;


Trials. Число независимых испытаний;


Probability. Вероятность успеха каждого испытания. Значение должно удовлетворять ограничению: 0 <= Probability <= 1;


Cumulative. Логическое значение, определяющее форму функции. Если данный аргумент имеет значение True, то функция BinomDist возвращает интегральную функцию распределения, т.е. вероятность того, что число успешных испытаний не менее значения аргумента Successes; если этот аргумент имеет значение False, то возвращается функция распределения, т.е. вероятность того, что число успешных испытаний в точности равно значению аргумента Successes.


## Описание


Метод BinomDist возвращает отдельное значение биномиального распределения.


## Комментарии


Функция используется в задачах с фиксированным числом тестов или испытаний, когда результатом любого испытания может быть только успех или неудача, испытания независимы, и вероятность успеха постоянна на протяжении всего эксперимента.


## Пример


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

Begin

    st := New Statistics.Create;

    d0 := st.BinomDist(6, 10, 0.5, False);

    Debug.WriteLine("Биномиальное распределение: " + d0.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведено значение биномиального распределения:


Module execution started


Биномиальное распределение: 0.20507812499583292


Module execution finished


См. также:


[IStatistics](IStatistics.htm) | [Биномиальное распределение](Lib.chm::/05_Statistics/Distribution/Lib_BinomialDistribution.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
