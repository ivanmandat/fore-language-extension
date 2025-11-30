# IStatistics.MinDcml

IStatistics.MinDcml
-


# IStatistics.MinDcml


## Синтаксис


MinDcml(Values: Array): Decimal;


## Параметры


Values. Массив десятичных чисел
 большой точности, для которого требуется найти наименьшее значение.


## Описание


Метод MinDcml возвращает наименьшее
 значение из набора значений типа Decimal.


## Комментарии


Для обозначения в массиве числа типа [Decimal](Fore.chm::/03_dataTypes/Fore_DataTypes.htm#value_types)
 после значения каждого числа необходимо дописать символ «m». Например:
 0.001m.


Для получения наибольшего значения из массива десятичных чисел
 большой точности используйте метод [IStatistics.MaxDcml](IStatistics.MaxDcml.htm).


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

    s:=st.MinDcml(a);

    Debug.WriteLine("Наименьшее значение: " + s.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведено наименьшее значение
 из массива десятичных чисел большой точности.


См. также:


[IStatistics](IStatistics.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
