# IStatistics.GammaFunc

IStatistics.GammaFunc
-


# IStatistics.GammaFunc


## Синтаксис


GammaFunc(Value: Double): Double;


## Параметры


Value. Значение, для
 которого вычисляется Гамма-функция.


## Описание


Свойство GammaFunc возвращает
 значение Гамма-функции для указанного аргумента.


## Комментарии


Значение параметра Value должно
 быть больше нуля.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0, d: Double;

Begin

    st := New Statistics.Create;

    d := st.GammaFunc(4);

    d0 := st.GammaLn(4);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("Значение Гамма-функции: " + d.ToString);

        Debug.WriteLine("Натуральный логарифм Гамма-функции: " + d0.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены значения Гамма-функции
 и натурального логарифма Гамма-функции для указанного аргумента.


См. также:


[IStatistics](IStatistics.htm)
 | [Значение
 Гамма-функции](Lib.chm::/05_Statistics/Distrib_func/Lib_GammaFunc.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
