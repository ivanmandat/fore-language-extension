# ICultureInfo.ParseCurrency

ICultureInfo.ParseCurrency
-


# ICultureInfo.ParseCurrency


## Синтаксис


ParseCurrency(Value: String): Currency;


## Описание


Метод ParseCurrency преобразует
 указанное значение к денежному типу в соответствии с настройками региональных
 стандартов.


## Комментарии


Если преобразование невозможно, то генерируется исключительная ситуация.


## Пример


	Sub UserProc;

	Var

	    CI: ICultureInfo;

	    Cur: Currency;

	Begin

	    CI := CultureInfo.Current;

	    Cur := CI.ParseCurrency("1234,56789");

	End Sub UserProc;


В результате выполнения примера в переменной «Cur» будет содержаться
 значение 1234,5679, полученное путём преобразования из указанного строкового
 значения.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
