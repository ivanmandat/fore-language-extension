# DateTime.TimeZoneBias

DateTime.TimeZoneBias
-


# DateTime.TimeZoneBias


## Синтаксис


TimeZoneBias: Integer;


## Описание


Свойство TimeZoneBias возвращает
 смещение текущего времени от всемирного координированного времени (UTC).


## Комментарии


Значение возвращается в минутах. Временные зоны, которые опережают UTC,
 имеют отрицательное смещение; временные зоны, которые отстают от UTC,
 имеют положительное смещение. Для получения значения времени по UTC [прибавьте](DateTime.AddMinutes.htm) к текущему времени полученное
 значение TimeZoneBias.


## Пример


			Sub UserProc;

Var

    d, utc: DateTime;

    Culture: ICultureInfo;

Begin

    d := DateTime.Now;

    Culture := CultureInfo.Current;

    //Информация о временной зоне

    Debug.WriteLine("Текущая временная зона: " + DateTime.TimeZoneName);

    Debug.WriteLine("Смещение от UTC: " + d.TimeZoneBias.ToString + " мин.");

    //Текущее время и время UTC

    Debug.WriteLine("Текущее время: " + Culture.FormatTime(d));

    utc := DateTime.AddMinutes(d, d.TimeZoneBias);

    Debug.WriteLine("Время UTC: " + Culture.FormatTime(utc));

End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведена информация
 о текущей временной зоне (наименование временной зоны и смещение от времени
 UTC), а также текущее время и время по UTC.


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
