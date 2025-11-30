# DateTime.Difference

DateTime.Difference
-


# DateTime.Difference


## Синтаксис


Difference(StartDate: DateTime; EndDate: DateTime):
 [TimeSpan](../TimeSpan/TimeSpan.htm);


## Параметры


StartDate. Начальная дата;


EndDate. Конечная дата.


## Описание


Метод Difference вычисляет разницу
 между начальной датой и конечной датой.


## Пример


			Sub Userproc;

Var

    d, d1: DateTime;

    t: TimeSpan;

Begin

    // Указываем начальную дату

    d := DateTime.Parse("01.01.2022 14:20:15");

    // Указываем конечную дату

    d1 := DateTime.Parse("01.01.2023 15:25:20");

    // Определяем разницу

    t := DateTime.Difference(d, d1);

    // Выводим результат

    Debug.WriteLine(t.ToString);

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведена разница
 между указанными датами: 365 дней, 1 час 5 минут и 5 секунд.


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
