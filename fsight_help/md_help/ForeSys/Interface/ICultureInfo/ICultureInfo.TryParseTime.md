# ICultureInfo.TryParseTime

ICultureInfo.TryParseTime
-


# ICultureInfo.TryParseTime


## Синтаксис


TryParseTime(Value: String; Var Result: DateTime):
 Boolean;


## Параметры


Value. Значение, приводимое
 к вещественному типу;


Result. Переменная, в которую
 будет помещен результат в случае удачной попытки преобразования.


## Описание


Метод TryParseTime осуществляет
 проверку на возможность преобразования указанного значения к формату времени
 в соответствии с настройками региональных стандартов.


## Комментарии


Если преобразование возможно, то в переменную Result
 будет помещен результат преобразования, и метод вернет значение True, иначе False.


## Пример


	Sub UserProc;

	Var

	    CI: ICultureInfo;

	    Dt: DateTime;

	    B: Boolean;

	Begin

	    CI := CultureInfo.Current;

	    B := CI.TryParseTime("25.07.2007 12:12:12", Dt);

	End Sub UserProc;


После выполнения примера в переменной «D» будет содержаться время «12:12:12»,
 а в переменной «B» будет содержаться признак удачного преобразования.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
