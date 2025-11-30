# IDtProvider.FilterIf

IDtProvider.FilterIf
-


# IDtProvider.FilterIf


## Синтаксис


FilterIf: [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство FilterIf возвращает
 условие загрузки записей из источника данных.


## Комментарии


Для корректной работы условия должно быть задано свойство [IDtObject.Metabase](../IDtObject/IDtObject.Metabase.htm).


## Пример


Для выполнения примера в файловой системе предполагается наличие файла
 D:\res_export.txt.


[![](../../opened.gif)![](../../closed.gif)Содержимое файла
 res_export.txt](javascript:TextPopup(this))


	"CITY_KEY";"INDICATOR_KEY";"Year";"Value"


	750;765;"1990";"2/789"


	750;765;"1991";2,896


	750;765;"1992";2,869


	750;765;"1993";2,83


	750;765;"1994";2,76


	750;765;"1995";2,8


	750;765;"1996";2,7867


	750;765;"1997";2,8


	750;765;"1998";2,8171


	750;765;"1999";2,8286


	750;765;"2000";2,896


	750;765;"2001";2,895


	750;765;"2002";2,866


	750;765;"2003";2,837


	750;765;"2004";2,849


	750;765;"2005";2,824


	750;765;"2006";2,799


	750;765;"2007";2,774


	750;765;"2008";2,749


	750;765;"2009";"2/889"


	750;765;"2010";2,695


	750;765;"2011";2,704


	750;765;"2012";2,713


	750;765;"2013";2,712


	750;765;"2014";2,711


	750;765;"2015";2,718


Добавьте ссылки на системные сборки: Dal, Dt, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    TextProvider: IDtTextProvider;

	    v: Array;

	    i: Integer;

	    Errors: IDtErrors;

	    Error: IDtError;

	Begin

	    Mb := MetabaseClass.Active;

	    // Создаем объект для импорта из тестового файла

	    TextProvider := New DtTextProvider.Create;

	    // Указываем импортируемый файл

	    TextProvider.File := "D:\res_export.txt";

	    // Задаем параметры импорта

	    TextProvider.FormatType := DtTextFormatType.Delimited;

	    TextProvider.DelimitedColumnDelimiter := ";";

	    TextProvider.DelimitedTextQualifier := """";

	    TextProvider.Encoding := "WIN";

	    // Указываем, что импортируемый файл содержит заголовки

	    TextProvider.RangeHasHeader := True;

	    // Выполняем чтение полей из импортируемого файла

	    TextProvider.FieldsFromFile;

	    // Находим поле «Value» и указываем, что оно вещественного типа

	    TextProvider.Fields.FindByName("Value").DataType := DbDataType.Float;


	    // Задаём репозиторий

	    TextProvider.Metabase := Mb;

	    // Задаем условие фильтрации

	    TextProvider.FilterIf.AsString := "{VALUE} > 2.8";

	    // Задаём параметры обработки ошибок

	    Errors := TextProvider.FetchErrors;

	    Errors.MaxErrors := -1;

	    Errors.MaxItems := -1;

	    // Открываем источник данных

	    TextProvider.Open;

	    // Загружаем записи и выводим их в окно консоли

	    While Not TextProvider.Eof Do

	        TextProvider.Fetch(v);

	        For i := 0 To v.Length - 1 Do

	            Debug.Write(v[i] + " ");

	        End For;

	        Debug.WriteLine("");

	    End While;

	    // Выводим информацию об импорте в окно консоли

	    Debug.WriteLine("Количество прочитанных строк (без учета фильтра): " + TextProvider.ReadingRowsTotalCount.ToString);

	    Debug.WriteLine("Количество прочитанных строк (с учетом фильтра): " + TextProvider.ReadingRowsCount.ToString);


	    // Выводим информацию об ошибках импорта

	    For i := 0 To Errors.Count - 1 Do

	        Error := Errors.Item(i);

	        Debug.WriteLine("Номер строки с ошибкой: " + Error.Row.ToString);

	        Debug.WriteLine("Ошибка: " + Error.Message)

	    End For;

	    // Закрываем источник данных

	    TextProvider.Close;

	End Sub UserProc;


В результате выполнения примера будет настроен импорт из файла D:\res_export.txt.
 Импортироваться будут только строки, в которых значение атрибута Value
 больше значения 2,8. Информация об импорте и ошибках импорта будет выведена
 в окно консоли.


См. также:


[IDtProvider](IDtProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
