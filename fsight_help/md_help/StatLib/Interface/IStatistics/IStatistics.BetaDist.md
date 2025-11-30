# IStatistics.BetaDist

IStatistics.BetaDist
-


# IStatistics.BetaDist


## Синтаксис


BetaDist(X: Double; Alpha: Double; Beta: Double): Double;


## Параметры


X. Значение, для которого вычисляется функция. Область допустимых значений: (0, 1);


Alpha. Параметр распределения. Значение должно быть больше нуля;


Beta. Параметр распределения. Значение должно быть больше нуля.


## Описание


Метод BetaDist возвращает интегральную функцию плотности бета-вероятности.


## Комментарии


Функция обычно используется для изучения вариации в процентах какой-либо величины.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

Begin

    st := New Statistics.Create;

    d0 := st.BetaDist(0.5, 14, 9);

    Debug.WriteLine("Интегральная функция плотности бета-вероятности: " + d0.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведена интегральная функция плотности бета-вероятности:


Module execution started


Интегральная функция плотности бета-вероятности: 0.14313936233520572


Module execution finished


См. также:


[IStatistics](IStatistics.htm) | [Функция бета-распределения вероятности](Lib.chm::/05_Statistics/Distrib_func/Lib_BetaDist_1.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
