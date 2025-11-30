# IStatistics.MedianDcml

IStatistics.MedianDcml
-


# IStatistics.MedianDcml


## Синтаксис


MedianDcml(Values: Array): Decimal;


## Параметры


Values. Массив десятичных чисел
 большой точности, для которого требуется найти медиану.


## Описание


Метод MedianDcml возвращает
 медиану заданных чисел типа Decimal.


## Комментарии


Для обозначения в массиве числа типа [Decimal](Fore.chm::/03_dataTypes/Fore_DataTypes.htm#value_types)
 после значения каждого числа необходимо дописать символ «m». Например:
 0.001m.


Медиана - число, которое является
 серединой множества чисел, то есть половина чисел имеют значения большие,
 чем медиана, а половина чисел имеют значения меньшие, чем медиана.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    a: Array[4] Of Variant;

    s: Decimal;

Begin

    st := New Statistics.Create;

    a[0] := 0.858739815m;

    a[1] := 0.148393423m;

    a[2] := 0.537711777m;

    a[3] := 0.128572578m;

    s:=st.MedianDcml(a);

    Debug.WriteLine("Медиана: " + s.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведено значение вычисленной
 медианы.


См. также:


[IStatistics](IStatistics.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
