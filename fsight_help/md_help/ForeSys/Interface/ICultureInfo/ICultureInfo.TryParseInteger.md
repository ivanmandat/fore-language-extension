# ICultureInfo.TryParseInteger

ICultureInfo.TryParseInteger
-


# ICultureInfo.TryParseInteger


## Синтаксис


TryParseInteger(Value: String; Var Result: Integer):
 Boolean;


## Параметры


Value. Значение, приводимое
 к целому типу;


Result. Переменная, в которую
 будет помещен результат в случае удачной попытки преобразования.


## Описание


Метод TryParseInteger осуществляет
 проверку на возможность преобразования указанного значения к целому типу
 в соответствии с настройками региональных стандартов.


## Комментарии


Если преобразование возможно, то в переменную Result
 будет помещен результат преобразования, и метод вернет значение True, иначе False.


## Пример


	Sub UserProc;

	Var

	    CI: ICultureInfo;

	    I: Integer;

	    B: Boolean;

	Begin

	    CI := CultureInfo.Current;

	    B := CI.TryParseInteger("12345", I);

	End Sub UserProc;


После выполнения примера в переменной «I» будет содержаться значение
 «123456», преобразованное к целому типу, а в переменной «B» будет содержаться
 признак удачного преобразования.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
