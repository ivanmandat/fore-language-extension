# ICultureInfo.FormatLongDate

ICultureInfo.FormatLongDate
-


# ICultureInfo.FormatLongDate


## Синтаксис


FormatLongDate(Value: DateTime): String;


## Параметры


Value. Значение, приводимое
 к строковому типу.


## Описание


Метод FormatLongDate преобразует
 указанное значение даты к строковому типу в полном формате и в соответствии
 с настройками региональных стандартов.


## Комментарии


Полный формат, заданный для дат, можно получить в свойстве [LongDateFormat](ICultureInfo.LongDateFormat.htm).


## Пример


			Function GetInvariantLongDate(Value: DateTime): String;

Var

    CI: ICultureInfo;

Begin

    CI := CultureInfo.Invariant;

    Return CI.FormatLongDate(Value);

End Function GetInvariantLongDate;


Указанная функция может использоваться для преобразования передаваемых
 дат к строковому типу в полном формате и в соответствии с настройками
 инвариантной культуры.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
