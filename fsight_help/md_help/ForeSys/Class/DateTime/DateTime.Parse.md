# DateTime.Parse

DateTime.Parse
-


# DateTime.Parse


## Синтаксис


Parse(Value: String): DateTime;


## Параметры


Value.
 Строка, которую необходимо преобразовать к типу DateTime.


## Описание


Метод Parse преобразует символьную
 строку к типу DateTime, без проверки на корректность строки.


## Комментарии


Данный метод не учитывает установленные региональные параметры. Значение,
 передаваемое в параметре Value,
 должно быть указано в следующем формате:


	- «ДД.ММ.ГГГГ». Для преобразования
	 даты.


	- «ДД.ММ.ГГГГ ЧЧ:ММ:СС».
	 Для преобразования даты и времени.


	- «ДД.ММ.ГГГГ ЧЧ:ММ:СС.000».
	 Для преобразования даты и времени с миллисекундами.


Указываемое значение должно соответствовать допустимому диапазону, который
 установлен для типа данных [DateTime](Fore.chm::/03_dataTypes/Fore_DataTypes.htm).
 При указании даты меньше допустимой автоматически формируется дата, к
 которой добавлено текущее столетие. При указании даты больше допустимой
 или если преобразование не удалось, то генерируется исключительная ситуация.


Для преобразования даты и времени в соответствии с установленными региональными
 параметрами, используйте следующие методы:


	- [ICultureInfo.ParseDate](../../Interface/ICultureInfo/ICultureInfo.ParseDate.htm);


	- [ICultureInfo.ParseDateEx](../../Interface/ICultureInfo/ICultureInfo.ParseDateEx.htm);


	- [ICultureInfo.ParseDateTime](../../Interface/ICultureInfo/ICultureInfo.ParseDateTime.htm);


	- [ICultureInfo.ParseTime](../../Interface/ICultureInfo/ICultureInfo.ParseTime.htm);


	- [ICultureInfo.TryParseDate](../../Interface/ICultureInfo/ICultureInfo.TryParseDate.htm);


	- [ICultureInfo.TryParseDateTime](../../Interface/ICultureInfo/ICultureInfo.TryParseDateTime.htm);


	- [ICultureInfo.TryParseTime](../../Interface/ICultureInfo/ICultureInfo.TryParseTime.htm).


## Пример


	Sub UserProc;

	Var

	    d: DateTime;

	Begin

	    d := DateTime.Parse("01.01.2000 10:10:10");

	    Debug.WriteLine(d.ToString);

	End Sub UserProc;


После выполнения примера в переменной «d» будут содержаться дата и время,
 полученные путем преобразования из указанного строкового значения.


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
