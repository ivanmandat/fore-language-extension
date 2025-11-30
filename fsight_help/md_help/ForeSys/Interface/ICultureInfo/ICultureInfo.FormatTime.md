# ICultureInfo.FormatTime

ICultureInfo.FormatTime
-


# ICultureInfo.FormatTime


## Синтаксис


FormatTime(Value: DateTime): String;


## Параметры


Value. Значение, приводимое
 к строковому типу.


## Описание


Метод FormatTime преобразует
 указанное значение времени к строковому типу в соответствии с настройками
 региональных стандартов.


## Пример


	Function GetInvariantTime(Value: DateTime): String;

	Var

	    CI: ICultureInfo;

	Begin

	    CI := CultureInfo.Invariant;

	    Return CI.FormatTime(Value);

	End Function GetInvariantTime;


Указанная функция может использоваться для преобразования передаваемых
 значений времени к строковому типу в соответствии с настройками инвариантной
 культуры.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
