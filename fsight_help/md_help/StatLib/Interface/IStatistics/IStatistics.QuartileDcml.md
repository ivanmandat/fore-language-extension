# IStatistics.QuartileDcml

IStatistics.QuartileDcml
-


# IStatistics.QuartileDcml


## Синтаксис


QuartileDcml(Data: Array; Quart: Integer): Decimal;


## Параметры


Data. Интервал числовых значений,
 с которыми связаны вероятности. Значения в массиве данных должны быть
 больше нуля;


Quart. Значение, которое нужно
 вернуть. Допустимые значения берутся из диапазона [0, 4].


## Описание


Метод QuartileDcml возвращает
 квартиль множества данных типа Decimal.


		 Значение Quart
		 Значение, возвращаемое QuartileDcml


		 0
		 Минимальное значение.


		 1
		 Первую квартиль (25-ую процентиль).


		 2
		 Значение медианы (50-ую процентиль).


		 3
		 Третью квартиль (75-ую процентиль).


		 4
		 Максимальное значение.


## Комментарии


Квартиль часто используются
 при анализе продаж, чтобы разбить генеральную совокупность на группы.


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

    s:=st.QuartileDcml(a, 1);

    Debug.WriteLine("Первая квартиль: " + s.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведена первая квартиль.


См. также:


[IStatistics](IStatistics.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
