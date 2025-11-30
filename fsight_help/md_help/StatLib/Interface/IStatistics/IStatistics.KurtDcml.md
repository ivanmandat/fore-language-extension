# IStatistics.KurtDcml

IStatistics.KurtDcml
-


# IStatistics.KurtDcml


## Синтаксис


KurtDcml(Values: Array): Decimal;


## Параметры


Values. Массив десятичных чисел
 большой точности.


## Описание


Метод KurtDcml возвращает эксцесс
 множества данных типа Decimal.


## Комментарии


Эксцесс характеризует относительную
 остроконечность или сглаженность распределения по сравнению с нормальным
 распределением. Положительный эксцесс обозначает относительно остроконечное
 распределение. Отрицательный эксцесс обозначает относительно сглаженное
 распределение.


Для обозначения в массиве числа типа [Decimal](Fore.chm::/03_dataTypes/Fore_DataTypes.htm#value_types)
 после значения каждого числа необходимо дописать символ «m». Например:
 0.001m.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    a: Array[6] Of Variant;

    s: Decimal;

Begin

    st := New Statistics.Create;

    a[0] := 1.6m;

    a[1] := 1.7m;

    a[2] := 1.8m;

    a[3] := 1.9m;

    a[4] := 2.0m;

    a[5] := 2.1m;

    s:=st.KurtDcml(a);

    Debug.WriteLine("Эксцесс: " + s.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведено значение эксцесса
 массива десятичных чисел большой точности.


См. также:


[IStatistics](IStatistics.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
