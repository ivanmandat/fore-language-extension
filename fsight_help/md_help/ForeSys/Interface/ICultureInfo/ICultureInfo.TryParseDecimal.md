# ICultureInfo.TryParseDecimal

ICultureInfo.TryParseDecimal
-


# ICultureInfo.TryParseDecimal


## Синтаксис


TryParseDecimal(Value: String; Var Result: Decimal):
 Boolean;


## Параметры


Value. Значение, приводимое
 к десятичному типу;


Result. Переменная, в которую
 будет помещен результат в случае удачной попытки преобразования.


## Описание


Метод TryParseDecimal осуществляет
 проверку на возможность преобразования указанного значения к десятичному
 типу в соответствии с настройками региональных стандартов.


## Комментарии


Если преобразование возможно, то в переменную Result
 будет помещен результат преобразования, и метод вернет значение True, иначе False.


## Пример


	Sub UserProc;

	Var

	    CI: ICultureInfo;

	    B: Boolean;

	    D: Decimal;

	Begin

	    CI := CultureInfo.Current;

	    B := CI.TryParseDecimal("1234,56789", D);

	End Sub UserProc;


После выполнения примера в переменной «D» будет содержаться значение
 1234,5679, а в переменной «B» будет содержаться признак удачного преобразования.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
