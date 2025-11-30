# ICultureInfo.FormatVariant

ICultureInfo.FormatVariant
-


# ICultureInfo.FormatVariant


## Синтаксис


FormatVariant(Value: Variant): String;


## Параметры


Value. Значение, приводимое
 к строковому типу.


## Описание


Метод FormatVariant преобразует
 указанное значение к строковому типу в соответствии с настройками региональных
 стандартов.


## Комментарии


В зависимости от типа передаваемого значения, работа метода будет совпадать
 с работой одного из методов Format*, которые имеются в [ICultureInfo](ICultureInfo.htm).
 При указании в параметре Value
 значения даты (с компонентой времени или без неё) результат работы будет
 совпадать с результатом работы метода [FormatDateTime](ICultureInfo.FormatDateTime.htm).


## Пример


	Function GetInvariantVariant(Value: Variant): String;

	Var

	    CI: ICultureInfo;

	Begin

	    CI := CultureInfo.Invariant;

	    Return CI.FormatVariant(Value);

	End Function GetInvariantVariant;


Указанная функция может использоваться для преобразования любых передаваемых
 значений к строковому типу в соответствии с настройками инвариантной культуры.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
