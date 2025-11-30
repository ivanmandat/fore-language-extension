# ICultureInfo.ParseDecimal

ICultureInfo.ParseDecimal
-


# ICultureInfo.ParseDecimal


## Синтаксис


ParseDecimal(Value: String): Decimal;


## Параметры


Value. Значение,
 приводимое к десятичному типу.


## Описание


Метод ParseDecimal преобразует
 указанное значение к десятичному типу в соответствии с настройками региональных
 стандартов.


## Комментарии


Если преобразование невозможно, то генерируется исключительная ситуация.


## Пример


	Sub UserProc;

	Var

	    CI: ICultureInfo;

	    D: Decimal;

	Begin

	    CI := CultureInfo.Current;

	    D := CI.ParseDecimal("1234,56789");

	End Sub UserProc;


После выполнения примера в переменной «D» будет содержаться значение
 1234,5679, полученное путём преобразования из указанного строкового значения.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
