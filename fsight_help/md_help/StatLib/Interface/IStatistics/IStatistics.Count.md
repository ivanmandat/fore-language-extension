# IStatistics.Count

IStatistics.Count
-


# IStatistics.Count


## Синтаксис


Count(Values: Array): Integer;


## Параметры


Values. Массив.


## Описание


Метод Count возвращает
 количество непустых элементов в массиве.


## Комментарии


Для получения количества пустых элементов в массиве используйте метод
 [IStatistics.CountBlank](IStatistics.CountBlank.htm).


## Пример


Для выполнения примера добавьте ссылку на системные сборки: MathFin,
 Stat.


			Sub UserProc;

Var

    mathF: Math;

    Ar: Array Of Double;

    count, i: Integer;

    value: Double;

    st: Statistics;

Begin

    // Создаем массив со случайным количеством элементов

    mathF := New Math.Create;

    count := mathF.RandBetweenI(1, 100);

    Ar := New Double[count];

    // Заполняем массив значениями, которые больше 0.5

    For i := 1 To count - 1 Do

        value := mathF.Rand;

        If value > 0.5 Then

            Ar[i] := value;

        Else

            Ar[i] := Double.Nan;

        End If;

    End For;

    // Выводим в окно консоли информацию о созданном массиве

    st := New Statistics.Create;

    Debug.WriteLine("Общее количество элементов в массиве: " + count.ToString);

    Debug.WriteLine("Количество непустых элементов в массиве: " + st.Count(Ar).ToString);

    Debug.WriteLine("Количество пустых элементов в массиве: " + st.CountBlank(Ar).ToString);

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведена информация
 о массиве: общее количество элементов, количество непустых элементов и
 количество пустых элементов.


См. также:


[IStatistics](IStatistics.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
