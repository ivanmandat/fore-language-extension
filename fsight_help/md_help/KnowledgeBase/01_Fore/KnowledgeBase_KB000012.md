# Особенности преобразования вещественных чисел и дат в строку и обратно

Особенности преобразования вещественных чисел и дат в строку и обратно
-


# Особенности преобразования вещественных чисел и дат в строку и
	 обратно


	Номер статьи: KB000012


## Общие сведения


	Связанные блоки:


		- [Fore](Fore.chm::/Fore_Title.htm)


## Описание


	Существует два способа преобразования вещественных чисел/дат в строку
	 и обратно: с помощью методов ToString/Parse и методов статичного класса
	 CultureInfo.


	Методы ToString/Parse
	 предназначены для преобразования чисел/дат без учета региональных
	 настроек и операционной системы. ТoString
	 после выполнения возвращает строку, которая может быть сохранена в
	 БД. На другом компьютере (с другой версией операционной системы или
	 другими региональными настройками) данная строка из БД может быть
	 преобразована в исходное число путем вызова метода Parse.
	 При этом, данные будут корректными.


	Методы статического класса CultureInfo
	 предназначены для преобразования чисел/ дат с учетом региональных
	 настроек и операционной системы пользователя, т.е. для корректного
	 отображения данных.


## Методы ToString/Parse


	Все преобразования производятся без учета региональных настроек
	 и операционной системы.


			 Метод
			 Синтаксис
			 Описание


			 ToString
			 ToString;
			 Преобразовывает значение в строку.


			 Parse
			 Parse(Value: String);
			 Возвращает значение, преобразованное из строки в системный
			 тип.


	См. также:


	[Double.ToString](foresys.chm::/class/double/double.tostring.htm)
	 | [Double.Parse](foresys.chm::/class/double/double.parse.htm)
	 | [DateTime.ToString](foresys.chm::/class/datetime/datetime.tostring.htm)
	 | [DateTime.Parse](foresys.chm::/class/datetime/datetime.parse.htm)


## Методы класса CultureInfo для преобразования вещественных чисел/дат


	Все преобразования производятся с учетом региональных настроек и
	 операционной системы.


			 Метод
			 Синтаксис
			 Описание


			 [FormatDouble](foresys.chm::/interface/icultureinfo/icultureinfo.formatdouble.htm)


			 FormatDouble(Value: Double): String;
			 Преобразовывает вещественное число в строку.


			 [FormatDoublePrec](foresys.chm::/interface/icultureinfo/icultureinfo.formatdoubleprec.htm)


			 FormatDoublePrec

			(Value:Double; Precision: Integer): String;
			 Преобразовывает вещественное число в строку с выбранной
			 точностью.


			 [ParseDouble](foresys.chm::/interface/icultureinfo/icultureinfo.parsedouble.htm)


			 ParseDouble(Value: String): Double;
			 Возвращает вещественное число, преобразованное из строки.


			 [TryParseDouble](foresys.chm::/interface/icultureinfo/icultureinfo.tryparsedouble.htm)


			 TryParseDouble

			(Value: String; Result: Double): Boolean;
			 Возвращает True,
			 если удалось преобразовать вещественное число из строки.


			 [FormatDateTime](foresys.chm::/interface/icultureinfo/icultureinfo.formatdatetime.htm)


			 FormatDateTime(Value: DateTime): String;
			 Преобразовывает дату (с временем) в строку.


			 [FormatDate](foresys.chm::/interface/icultureinfo/icultureinfo.formatdate.htm)


			 FormatDate(Value: DateTime): String;
			 Преобразовывает дату (без времени) в строку.


			 [FormatDateEx](foresys.chm::/interface/icultureinfo/icultureinfo.formatdateex.htm)


			 FormatDateEx

			(Value: DateTime; Format: String): String;
			 Преобразовывает дату в строку с учетом указанного формата.


			 [FormatShortDate](foresys.chm::/interface/icultureinfo/icultureinfo.formatshortdate.htm)


			 FormatShortDate(Value: DateTime): String;
			 Преобразовывает дату в строку (в кратком формате, например,
			 «06.06.2006»).


			 [FormatLongDate](foresys.chm::/interface/icultureinfo/icultureinfo.formatlongdate.htm)


			 FormatLongDate(Value: DateTime): String;
			 Преобразовывает дату в строку (в полном формате, например,
			 «6 июня 2006 г.»).


			 [ParseDateTime](foresys.chm::/interface/icultureinfo/icultureinfo.parsedatetime.htm)


			 ParseDateTime(Value: String): DateTime;
			 Возвращает дату (с временем), преобразованное из строки.


			 [ParseDate](foresys.chm::/interface/icultureinfo/icultureinfo.parsedate.htm)


			 ParseDate(Value: String): DateTime;
			 Возвращает дату (без времени), преобразованную из строки.


## Пример


	Sub UserProc;

	Var

	    CF: ICultureInfo;

	    s: String;

	Begin

	    CF := CultureInfo.Current;

	    s := CF.FormatDouble(3.14);

	    Debug.WriteLine("FormatDouble: " + s);

	    s := (3.14).ToString;

	    Debug.WriteLine("ToString: " + s);

	    s := CF.FormatDateEx(DateTime.Now, "dddd, MM/yyyy");

	    Debug.WriteLine("FormatDateEx: " + s);

	    s := (DateTime.Now).ToString;

	    Debug.WriteLine("ToString: " + s);

	End Sub UserProc;


	После выполнения примера в окно консоли будет выведены результаты
	 преобразования вещественного числа и даты, как с учетом, так и без
	 учета региональных параметров и операционной системы.


	Результаты выполнения примера на русскоязычной ОС Windows:


	Module execution started

	FormatDouble: 3,14

	ToString: 3.1400000000000001

	FormatDateEx: четверг, 06/2010

	ToString: 10.06.2010 16:10:50

	Module execution finished


	Результаты выполнения примера на англоязычной ОС Windows:


	Module execution started

	FormatDouble: 3.14

	ToString: 3.1400000000000001

	FormatDateEx: Thursday, 06/2010

	ToString: 10.06.2010 16:10:58

	Module execution finished


См. также:


[База
 знаний разработчиков](../KnowledgeBase_Intro.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
