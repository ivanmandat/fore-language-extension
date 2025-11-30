# ICultureInfo.FormatInteger

ICultureInfo.FormatInteger
-


# ICultureInfo.FormatInteger


## Синтаксис


FormatInteger(Value: Integer): String;


## Параметры


Value. Значение, приводимое
 к строковому типу.


## Описание


Метод FormatInteger преобразует
 целочисленное значение к строковому типу в соответствии с настройками
 региональных стандартов.


## Пример


	Function GetInvariantInteger(Value: Integer): String;

	Var

	    CI: ICultureInfo;

	Begin

	    CI := CultureInfo.Invariant;

	    Return CI.FormatInteger(Value);

	End Function GetInvariantInteger;


Указанная функция может использоваться для преобразования целочисленных
 значений к строковому типу в соответствии с настройками инвариантной культуры.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
