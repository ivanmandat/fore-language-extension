# ICultureInfo.IsDouble

ICultureInfo.IsDouble
-


# ICultureInfo.IsDouble


## Синтаксис


IsDouble(Value: String): Boolean;


## Параметры


Value. Значение, приводимое к вещественному типу.


## Описание


Метод IsDouble возвращает признак
 возможности преобразования к вещественному числу в соответствии с текущими
 настройками региональных параметров.


## Комментарии


Метод возвращает значение True,
 если преобразование возможно и False,
 если невозможно. Для преобразования может использоваться метод [ParseDouble](ICultureInfo.ParseDouble.htm) или [TryParseDouble](ICultureInfo.TryParseDouble.htm).


## Пример


	Sub UserProc;

	Var

	    CI: ICultureInfo;

	Begin

	    CI := CultureInfo.Invariant;

	    Debug.WriteLine(CI.IsDouble("123.123"));

	    Debug.WriteLine(CI.IsDouble("123,123"));

	    Debug.WriteLine(CI.IsDouble("123
	 123"));

	    CI := CultureInfo.CurrentUi;

	    Debug.WriteLine(CI.IsDouble("123.123"));

	    Debug.WriteLine(CI.IsDouble("123,123"));

	    Debug.WriteLine(CI.IsDouble("123
	 123"));

	End Sub UserProc;


При выполнении примера будет осуществлена проверка, можно ли преобразовать
 указанные строковые значения в вещественные числа. Проверка осуществляется
 в соответствии с региональными настройками инвариантной культуры и культуры
 визуального интерфейса текущего приложения. Результаты проверки будут
 выведены в консоль среды разработки.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
