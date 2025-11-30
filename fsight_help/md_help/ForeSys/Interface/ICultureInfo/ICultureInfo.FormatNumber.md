# ICultureInfo.FormatNumber

ICultureInfo.FormatNumber
-


# ICultureInfo.FormatNumber


## Синтаксис


FormatNumber(Value: Variant; Format: String; Var
 Result: String): Boolean;


## Параметры


Value. Значение, которое необходимо
 представить в заданном формате;


Format. Формат, в соответствии
 с которым необходимо преобразовать значение Value.
 Формат данных формируется с использованием зарезервированных кодов форматов.
 Описание кодов представлено в разделе [Формат
 числа: Пользовательский](UiNav.chm::/GUI/Format/UiReport_Table_Attribute_Format.htm#user);


Result. Переменная, в которую
 будет помещено результирующее значение.


## Описание


Метод FormatNumber преобразует
 указанное числовое значение к строковому типу в соответствии с указанным
 форматом.


## Комментарии


В параметре Value можно передавать
 значения в следующих форматах:


	- Integer


	- Double


	- Decimal


	- DateTime


	- TimeSpan


	- Currency


Формат, устанавливаемый в параметре Format,
 не зависит от локализации операционной системы. При установке формата
 в качестве разделителей будут использоваться запятые и пробелы.


При преобразовании будут учитываться региональные настройки используемой
 культуры. Если преобразование прошло успешно, то результирующее значение
 будет помещено в переменную, указанную в параметре Result
 и метод вернет значение True.
 Если преобразование недопустимо, то метод вернет значение False.


## Пример


	Sub UserProc;

	Var

	    Culture: ICultureInfo;

	    i: Integer;

	    d: Double;

	    dc: Decimal;

	    dt: DateTime;

	    t: TimeSpan;

	    c: Currency;

	    s: String;

	Begin

	    i := 1000;

	    d := 1000.123;

	    dc := 1000.123;

	    dt := DateTime.ComposeDay(2010, 12, 13);

	    t := TimeSpan.Compose(23, 12, 5, 10, 0);

	    c := 123.23;

	    //Преобразуем

	    Culture := CultureInfo.Current;

	    Culture.FormatNumber(i, """Списать ""@"" штук""", s);

	    Debug.WriteLine(s);

	    Culture.FormatNumber(d, "# #,0", s);

	    Debug.WriteLine(s);

	    Culture.FormatNumber(dc, "# #,00", s);

	    Debug.WriteLine(s);

	    Culture.FormatNumber(dt, "Д ММММ ГГГГ ""г.""", s);

	    Debug.WriteLine(s);

	    Culture.FormatNumber(t, "ДД"" день(дней) ""ЧЧ"" час(ов) ""ММ"" минут(ы) ""СС ""секунд(ы)""", s);

	    Debug.WriteLine(s);

	    Culture.FormatNumber(c, "$ 0,00 ""приход""", s);

	    Debug.WriteLine(s);

	End Sub UserProc;


После выполнения примера в консоль среды разработки будут выведены различные
 значения, преобразованные в соответствии с указанными форматами.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
