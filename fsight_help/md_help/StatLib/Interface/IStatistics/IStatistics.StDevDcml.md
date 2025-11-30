# IStatistics.StDevDcml

IStatistics.StDevDcml
-


# IStatistics.StDevDcml


## Синтаксис


StDevDcml(Values: Array): Decimal;


## Параметры


Values. Массив десятичных чисел
 большой точности, соответствующих выборке из генеральной совокупности.


## Описание


Метод StDevDcml оценивает стандартное
 отклонение по выборке чисел типа Decimal.


## Комментарии


Стандартное отклонение - мера
 того, насколько широко разбросаны точки данных относительно их среднего.
 Стандартное отклонение вычисляется с использованием «несмещенного» или
 «n-1» метода.


Для обозначения в массиве чисел типа [Decimal](Fore.chm::/03_dataTypes/Fore_DataTypes.htm#value_types)
 после значения каждого числа необходимо дописать символ «m». Например:
 0.001m.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    a: Array[5] Of Variant;

    s: Decimal;

Begin

    st := New Statistics.Create;

    a[0] := 0.85m;

    a[1] := 0.14m;

    a[2] := 0.53m;

    a[3] := 0.28m;

    a[4] := 0.31m;

    s:=st.StDevDcml(a);

    Debug.WriteLine("Стандартное отклонение: " + s.ToString);

End Sub UserProc;


После выполнения примера в окно консоли выведено значение стандартного
 отклонения.


См. также:


[IStatistics](IStatistics.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
