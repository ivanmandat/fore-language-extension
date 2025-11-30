# IStatistics.DispersionDcml

IStatistics.DispersionDcml
-


# IStatistics.DispersionDcml


## Синтаксис


DispersionDcml(Values: Array): Decimal;


## Параметры


Values. Массив десятичных чисел
 большой точности, соответствующих выборке из генеральной совокупности.


## Описание


Метод DispersionDcml оценивает
 дисперсию по выборке чисел типа Decimal.


## Комментарии


Для обозначения в массиве чисел типа [Decimal](Fore.chm::/03_dataTypes/Fore_DataTypes.htm#value_types)
 после значения каждого числа необходимо дописать символ «m». Например:
 0.001m.


Для получения стандартного отклонения по выборке чисел типа Decimal используйте метод [IStatistics.StDevDcml](IStatistics.StDevDcml.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    a: Array[3] Of Variant;

    s: Decimal;

Begin

    st := New Statistics.Create;

    a[0] := 0.858739815m;

    a[1] := 0.148393423m;

    a[2] := 0.537711777m;

    s:=st.DispersionDcml(a);

    Debug.WriteLine("Дисперсия: " + s.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведено значение дисперсии
 десятичных чисел большой точности.


См. также:


[IStatistics](IStatistics.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
