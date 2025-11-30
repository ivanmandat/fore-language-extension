# ICultureInfo.FormatShortDate

ICultureInfo.FormatShortDate
-


# ICultureInfo.FormatShortDate


## Синтаксис


FormatShortDate(Value: DateTime): String;


## Параметры


Value. Значение, приводимое
 к строковому типу.


## Описание


Метод FormatShortDate преобразует
 указанное значение даты к строковому типу в кратком формате и в соответствии
 с настройками региональных стандартов.


## Комментарии


Краткий формат, заданный для дат, можно получить в свойстве [ICultureInfo.ShortDateFormat](ICultureInfo.ShortDateFormat.htm).


## Пример


	Function GetInvariantShortDate(Value: DateTime): String;

	Var

	    CI: ICultureInfo;

	Begin

	    CI := CultureInfo.Invariant;

	    Return CI.FormatShortDate(Value);

	End Function GetInvariantShortDate;


Указанная функция может использоваться для преобразования передаваемых
 дат к строковому типу в кратком формате и в соответствии с настройками
 инвариантной культуры.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
