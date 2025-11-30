# IStatistics.GammaInv

IStatistics.GammaInv
-


# IStatistics.GammaInv


## Синтаксис


GammaInv(Probability: Double; Alpha: Double; Beta:
 Double): Double;


## Параметры


Probability. Значение вероятности,
 для которого вычисляется обратная функция. Область допустимых значений:
 [0, 1];


Alpha. Параметр распределения.
 Значение должно быть больше нуля;


Beta. Параметр распределения.
 Если Beta = 1, то функция GammaInv возвращает стандартное
 гамма-распределение. Значение должно быть больше нуля.


## Описание


Метод GammaInv возвращает обратное
 гамма-распределение.


## Комментарии


Эта функция используется для изучения переменных, которые, возможно,
 имеют асимметричное распределение.


Если Probability = [GammaDist](IStatistics.GammaDist.htm)(x; …),
 то GammaInv(Probability ; …)
 = x.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    st: Statistics;

	    d0: Double;

	Begin

	    st := New Statistics.Create;

	    d0 := st.GammaInv(0.2714, 7, 2);

	    If st.Status <> 0 Then

	        Debug.WriteLine(st.Errors);

	    Else

	        Debug.WriteLine("Обратное гамма-распределение: " + d0.ToString);

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведено значение обратного
 гамма-распределения:


Module execution started


Обратное гамма-распределение: 10.449988524551967


Module execution finished


См. также:


[IStatistics](IStatistics.htm)
 | [Обратная
 функция гамма-распределения вероятности](Lib.chm::/05_Statistics/Distrib_func/Lib_GammaDist.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
