# ICultureInfo.FormatDateTime

ICultureInfo.FormatDateTime
-


# ICultureInfo.FormatDateTime


## Синтаксис


FormatDateTime(Value: DateTime): String;


## Параметры


Value.
 Значение, приводимое к строковому типу.


## Описание


Метод FormatDateTime преобразует
 указанное значение даты и времени к строковому типу в соответствии с настройками
 региональных стандартов.


## Пример


	Function GetInvariantDateTime(Value: DateTime): String;

	Var

	    CI: ICultureInfo;

	Begin

	    CI := CultureInfo.Invariant;

	    Return CI.FormatDateTime(Value);

	End Function GetInvariantDateTime;


Указанная функция может использоваться для преобразования передаваемых
 дат с временем к строковому типу в соответствии с настройками инвариантной
 культуры.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
