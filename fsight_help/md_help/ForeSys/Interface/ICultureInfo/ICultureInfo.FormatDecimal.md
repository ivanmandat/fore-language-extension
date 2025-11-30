# ICultureInfo.FormatDecimal

ICultureInfo.FormatDecimal
-


# ICultureInfo.FormatDecimal


## Синтаксис


FormatDecimal(Value: Decimal): String;


## Параметры


Value. Значение, приводимое
 к строковому типу.


## Описание


Метод FormatDecimal преобразует
 десятичное значение к строковому типу в соответствии с настройками региональных
 стандартов.


## Пример


	Function GetInvariantDecimal(Value: Decimal): String;

	Var

	    CI: ICultureInfo;

	Begin

	    CI := CultureInfo.Invariant;

	    Return CI.FormatDecimal(Value);

	End Function GetInvariantDecimal;


Указанная функция может использоваться для преобразования десятичных
 значений к строковому типу в соответствии с настройками инвариантной культуры.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
