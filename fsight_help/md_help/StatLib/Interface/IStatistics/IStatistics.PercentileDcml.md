# IStatistics.PercentileDcml

IStatistics.PercentileDcml
-


# IStatistics.PercentileDcml


## Синтаксис


PercentileDcml(Data: Array; Percent: Double): Decimal;


## Параметры


Data. Массив десятичных чисел
 большой точности, который определяет относительное положение;


Percent. Значение процентили.
 Допустимые значения берутся из диапазона [0, 1].


## Описание


Метод PercentileDcml возвращает
 k-ую процентиль для значений типа Decimal
 из заданного интервала.


## Комментарии


Процентиль используется для
 определения порога приемлемости. Если k не кратно 1/(n - 1), то функция
 Percentile производит интерполяцию
 для определения значения k-ой процентили.


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

    s:=st.PercentileDcml(a, 0.3);

    Debug.WriteLine("Тридцатая процентиль: " + s.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведена тридцатая процентиль
 для приведенного массива данных.


См. также:


[IStatistics](IStatistics.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
