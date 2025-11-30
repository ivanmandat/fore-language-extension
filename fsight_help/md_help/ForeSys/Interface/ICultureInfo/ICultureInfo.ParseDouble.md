# ICultureInfo.ParseDouble

ICultureInfo.ParseDouble
-


# ICultureInfo.ParseDouble


## Синтаксис


ParseDouble(Value: String): Double;


## Параметры


Value. Значение, приводимое к вещественному типу.


## Описание


Метод ParseDouble преобразует
 указанное значение к вещественному типу в соответствии с настройками региональных
 стандартов.


## Комментарии


Если преобразование невозможно, то генерируется исключительная ситуация.


## Пример


			Sub UserProc;

Var

    CI: ICultureInfo;

    D: Double;

Begin

    CI := CultureInfo.Current;

    D := CI.ParseDouble("456,78");

End Sub UserProc;


После выполнения примера в переменной «D» будет содержаться вещественное
 значение, полученное путём преобразования из строки.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
