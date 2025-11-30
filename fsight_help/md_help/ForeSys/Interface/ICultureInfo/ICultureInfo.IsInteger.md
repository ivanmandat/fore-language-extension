# ICultureInfo.IsInteger

ICultureInfo.IsInteger
-


# ICultureInfo.IsInteger


## Синтаксис


IsInteger(Value: String): Boolean;


## Параметры


Value.
 Значение, приводимое к целому типу.


## Описание


Метод IsInteger возвращает признак
 возможности преобразования к целому числу в соответствии с текущими настройками
 региональных параметров.


## Комментарии


Метод возвращает значение True,
 если преобразование возможно и False,
 если невозможно. Для преобразования может использоваться метод [ParseInteger](ICultureInfo.ParseInteger.htm) или [TryParseInteger](ICultureInfo.TryParseInteger.htm).


## Пример


			Sub UserProc;

Var

    CI: ICultureInfo;

Begin

    CI := CultureInfo.Invariant;

    Debug.WriteLine(CI.IsInteger("123"));

    Debug.WriteLine(CI.IsInteger("123,123"));

    Debug.WriteLine(CI.IsInteger("123 123"));

    CI := CultureInfo.CurrentUi;

    Debug.WriteLine(CI.IsInteger("123"));

    Debug.WriteLine(CI.IsInteger("123,123"));

    Debug.WriteLine(CI.IsInteger("123 123"));

End Sub UserProc;


При выполнении примера будет осуществлена проверка, можно ли преобразовать
 указанные строковые значения в целые числа. Проверка осуществляется в
 соответствии с региональными настройками инвариантной культуры и культуры
 визуального интерфейса текущего приложения. Результаты проверки будут
 выведены в консоль среды разработки.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
