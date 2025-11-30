# ICultureInfo.FormatCurrency

ICultureInfo.FormatCurrency
-


# ICultureInfo.FormatCurrency


## Синтаксис


FormatCurrency(Value: Currency): String;


## Параметры


Value. Значение, приводимое
 к строковому типу.


## Описание


Метод FormatCurrency преобразует
 указанное значение денежного типа к строковому типу в соответствии с настройками
 региональных стандартов.


## Пример


	Function GetInvariantCurrency(Value: Currency): String;

	Var

	    CI: ICultureInfo;

	Begin

	    CI := CultureInfo.Invariant;

	    Return CI.FormatCurrency(Value);

	End Function GetInvariantCurrency;


Указанная функция может использоваться для преобразования передаваемых
 значений денежного типа к строковому типу в соответствии с настройками
 инвариантной культуры.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
