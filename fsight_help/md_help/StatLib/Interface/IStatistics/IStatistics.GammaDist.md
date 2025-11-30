# IStatistics.GammaDist

IStatistics.GammaDist
-


# IStatistics.GammaDist


## Синтаксис


GammaDist(Value: Double; Alpha: Double; Beta: Double; Cumulative: Boolean): Double;


## Параметры


Value. Значение, для которого требуется вычислить распределение. Значение должно удовлетворять ограничению: Value >=0;


Alpha. Параметр распределения. Значение должно удовлетворять ограничению: Alpha >0. Если Alpha = 1, то функция GammaDist возвращает экспоненциальное распределение;


Beta. Параметр распределения. Значение должно удовлетворять ограничению: Beta >0. Если Beta = 1, то функция GammaDist возвращает стандартное гамма распределение;


Cumulative. Логическое значение, определяющее форму функции:


-
True. Функция GammaDist возвращает интегральную функцию распределения;


-
False. Функция GammaDist возвращает функцию плотности распределения.


## Описание


Метод GammaDist возвращает гамма-распределение.


## Комментарии


Эту функцию можно использовать для изучения переменных, которые имеют асимметричное распределение. Гамма-распределение обычно используется в теории очередей.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

Begin

    st := New Statistics.Create;

    d0 := st.GammaDist(10.45, 7, 2, True);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("Гамма-распределение: " + d0.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведено значение гамма-распределения:


Module execution started


Гамма-распределение: 0.27140087244101541


Module execution finished


См. также:


[IStatistics](IStatistics.htm) | [Функция гамма-распределения вероятности](Lib.chm::/05_Statistics/Distrib_func/Lib_GammaDist.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
