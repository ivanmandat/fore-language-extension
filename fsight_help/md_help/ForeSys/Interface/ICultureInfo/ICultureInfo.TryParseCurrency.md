# ICultureInfo.TryParseCurrency

ICultureInfo.TryParseCurrency
-


# ICultureInfo.TryParseCurrency


## Синтаксис


TryParseCurrency(Value: String; Var Result: Currency):
 Boolean;


## Описание


Метод TryParseCurrency осуществляет
 проверку на возможность преобразования указанного значения к денежному
 типу в соответствии с настройками региональных стандартов.


## Комментарии


Если преобразование возможно, то в переменную Result
 будет помещен результат преобразования, и метод вернет значение True, иначе False.


## Пример


	Sub UserProc;

	Var

	    CI: ICultureInfo;

	    B: Boolean;

	    Cur: Currency;

	Begin

	    CI := CultureInfo.Current;

	    B := CI.TryParseCurrency("1234,56789", Cur);

	End Sub UserProc;


После выполнения примера в переменной «Cur» будет содержаться значение
 1234,5679, а в переменной «B» будет содержаться признак удачного преобразования.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
