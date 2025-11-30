# IStatistics.Weibull

IStatistics.Weibull
-


# IStatistics.Weibull


## Синтаксис


Weibull(Value: Double; Alpha: Double; Beta: Double;
 Cumulative: Boolean): Double;


## Параметры


Value. Значение, для которого
 требуется вычислить распределение. Значение должно удовлетворять ограничению:
 Value >= 0;


Alpha. Параметр формы распределения.
 Значение должно удовлетворять ограничению: Alpha > 0.
 Если Alpha = 1, то
 функция Weibull возвращает экспоненциальное
 распределение;


Beta. Параметр масштаба распределения.
 Значение должно удовлетворять ограничению: Beta > 0. Если Beta = 1,
 то функция Weibull возвращает
 стандартное распределение;


Cumulative. определяет форму
 функции:


	- True. Функция
	 Weibull возвращает интегральную
	 функцию распределения;


	- False. Функция
	 Weibull возвращает функцию
	 плотности распределения.


## Описание


Метод Weibull возвращает распределение
 Вейбулла.


## Комментарии


Это распределение используется при анализе надежности, например, для
 вычисления среднего времени наработки на отказ какого-либо устройства.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    st: Statistics;

	    d0: Double;

	Begin

	    st := New Statistics.Create;

	    d0 := st.Weibull(59,12,70,True);

	    If st.Status <> 0 Then

	        Debug.WriteLine(st.Errors);

	    Else

	        Debug.WriteLine("Распределение Вейбулла: " + d0.ToString);

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведена интегральная
 функция распределения Вейбулла:


Выполнение модуля начато


Распределение Вейбулла: 0.120624050633155


Выполнение модуля завершено


См. также:


[IStatistics](IStatistics.htm) |
 [Распределение
 Вейбулла](Lib.chm::/05_Statistics/Distribution/Lib_WeibullDistribution.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
