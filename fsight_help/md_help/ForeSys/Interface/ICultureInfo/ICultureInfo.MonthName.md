# ICultureInfo.MonthName

ICultureInfo.MonthName
-


# ICultureInfo.MonthName


## Синтаксис


MonthName(MonthIndex: Integer): String;


## Параметры


MonthIndex. Индекс месяца,
 у которого необходимо узнать наименование.


## Описание


Свойство MonthName возвращает
 наименование месяца.


## Комментарии


Возможны следующие значения параметра MonthIndex:


1
 - Январь;


2
 - Февраль;


3
 - Март;


4
 - Апрель;


5
 - Май;


6
 - Июнь;


7
 - Июль;


8
 - Август;


9
 - Сентябрь;


10
 - Октябрь;


11
 - Ноябрь;


12
 - Декабрь.


## Пример


	Sub UserProc;

	Var

	    CI: ICultureInfo;

	Begin

	    CI := CultureInfo.UserDefault;

	    Debug.WriteLine(CI.MonthName(1));

	    Debug.WriteLine(CI.AbbreviatedMonthName(1));

	End Sub UserProc;


При выполнении примера будет получена текущая культура, заданная в операционной
 системе. На языке культуры в консоль среды разработки будут выведены наименование
 и аббревиатура первого месяца года - января.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
