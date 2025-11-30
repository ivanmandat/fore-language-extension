# ICultureInfo.DayName

ICultureInfo.DayName
-


# ICultureInfo.DayName


## Синтаксис


DayName(DayIndex: Integer): String;


## Параметры


DayIndex. Индекс дня недели, у которого необходимо
 узнать наименование, в соответствии с выбранной культурой.


## Описание


Свойство DayName возвращает
 наименование дня недели.


## Комментарии


Возможны следующие значения параметра DayIndex:


1
 - Понедельник;


2
 - Вторник;


3
 - Среда;


4
 - Четверг;


5
 - Пятница;


6
 - Суббота;


0,
 7 - Воскресенье.


## Пример


	Sub UserProc;

	Var

	    CI: ICultureInfo;

	Begin

	    CI := CultureInfo.UserDefault;

	    Debug.WriteLine(CI.DayName(1));

	    Debug.WriteLine(CI.AbbreviatedDayName(1));

	End Sub UserProc;


При выполнении примера будет получена текущая культура, заданная в операционной
 системе. На языке культуры в консоль среды разработки будут выведены наименование
 и аббревиатура первого дня недели - понедельника.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
