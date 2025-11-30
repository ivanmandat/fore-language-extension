# ICultureInfo.FormatDate

ICultureInfo.FormatDate
-


# ICultureInfo.FormatDate


## Синтаксис


FormatDate(Value: DateTime): String;


## Параметры


Value. Значение, приводимое
 к строковому типу.


## Описание


Метод FormatDate преобразует
 указанное значение даты к строковому типу в соответствии с настройками
 региональных стандартов.


## Пример


	Function GetInvariantDate(Value: DateTime): String;

	Var

	    CI: ICultureInfo;

	Begin

	    CI := CultureInfo.Invariant;

	    Return CI.FormatDate(Value);

	End Function GetInvariantDate;


Указанная функция может использоваться для преобразования передаваемых
 дат к строковому типу в соответствии с настройками инвариантной культуры.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
