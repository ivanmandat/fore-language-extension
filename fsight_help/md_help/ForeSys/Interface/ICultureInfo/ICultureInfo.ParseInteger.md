# ICultureInfo.ParseInteger

ICultureInfo.ParseInteger
-


# ICultureInfo.ParseInteger


## Синтаксис


ParseInteger(Value: String): Integer;


## Параметры


Value.
 Значение, приводимое к целому типу.


## Описание


Метод ParseInteger преобразует
 указанное значение к целому типу в соответствии с настройками региональных
 стандартов.


## Комментарии


Если преобразование невозможно, то генерируется исключительная ситуация.


## Пример


	Sub UserProc;

	Var

	    CI: ICultureInfo;

	    I: Integer;

	Begin

	    CI := CultureInfo.Current;

	    I := CI.ParseInteger("456");

	End Sub UserProc;


После выполнения примера в переменной «I» будет содержаться целочисленное
 значение, полученное путём преобразования из строки.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
