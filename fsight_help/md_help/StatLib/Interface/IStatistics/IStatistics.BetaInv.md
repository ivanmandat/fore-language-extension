# IStatistics.BetaInv

IStatistics.BetaInv
-


# IStatistics.BetaInv


## Синтаксис


BetaInv(Probability: Double; Alpha: Double; Beta:
 Double): Double;


## Параметры


Probability. Вероятность, связанная
 с бета-распределением. Область допустимых значений: (0, 1);


Alpha. Параметр распределения. Значение
 должно быть больше нуля;


Beta. Параметр распределения. Значение
 должно быть больше нуля.


## Описание


Метод BetaInv возвращает обратную
 функцию к интегральной функции плотности бета-вероятности.


## Комментарии


Если Probability = [BetaDist](IStatistics.BetaDist.htm)(x;
 …), то BetaInv(Probability ;
 …) = x.


## Пример


Добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

Begin

    st := New Statistics.Create;

    d0 := st.BetaInv(0.266, 14, 9);

    Debug.WriteLine("Обратная интегральная функция плотности бета-вероятности: " + d0.ToString);

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведена обратная
 интегральная функция плотности бета-вероятности.


См. также:


[IStatistics](IStatistics.htm) |
 [Обратная
 функция бета-распределения вероятности](Lib.chm::/05_Statistics/Distrib_func/Lib_BetaDist_1.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
