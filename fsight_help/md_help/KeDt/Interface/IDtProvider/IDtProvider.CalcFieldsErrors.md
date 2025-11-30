# IDtProvider.CalcFieldsErrors

IDtProvider.CalcFieldsErrors
-


# IDtProvider.CalcFieldsErrors


## Синтаксис


CalcFieldsErrors: [IDtCalcFieldErrors](../IDtCalcFieldErrors/IDtCalcFieldErrors.htm);


## Описание


Свойство CalcFieldsErrors
 возвращает коллекцию ошибок, возникших при расчете вычисляемых полей.


## Комментарии


Ошибки могут было получены только после вызова одного из следующих методов:
 [IDtProvider.Fetch](IDtProvider.Fetch.htm),
 [IDtProvider.FetchRows](IDtProvider.FetchRows.htm).


## Пример


Для выполнения примера в файловой системе предполагается наличие файла
 «c:\Import Text.txt» с данными.


Добавьте ссылки на системные сборки: Dal, Dt, Metabase.


[![](../../opened.gif)![](../../closed.gif)Содержимое файла
 «c:\Import Text.txt»](javascript:TextPopup(this))


	"ID";"MY_VALUE"


	1;12


	2;22


	3;32.4


	4;42


	5;7


	6;9


	7;12


	8;17


	8;Five


	Sub UserProc;

	Var

	    DTProvider: IDtTextProvider;

	    Errors: IDtCalcFieldErrors;

	    Error: IDtCalcFieldError;

	    fields: IdtFieldDefinitions;

	    field: IdtFieldDefinition;

	    i: Integer;

	    v: Array;

	    data: Variant;

	    Text: String;

	Begin

	    // Создаем источник данных

	    DTProvider := New DtTextProvider.Create;

	    // Задаем базовые параметры источника

	    DTProvider.FormatType := DtTextFormatType.Delimited;

	    DTProvider.RangeHasHeader := True;

	    DTProvider.AutoFillFieldsMode := DtAutoFillFieldsMode.DataRow;

	    DTProvider.TypeGuessRows := 10;

	    DTProvider.Metabase := MetabaseClass.Active;

	    DTProvider.DelimitedColumnDelimiter := ";";

	    DTProvider.Encoding := "WIN";

	    DTProvider.DelimitedTextQualifier := """";


	    // Указываем файл, из которого будут браться данные

	    DtProvider.File := "c:\Import Text.txt";

	    // Получаем поля источника из файла

	    DTProvider.FieldsFromFile;

	    fields := DTProvider.Fields;

	    // Указываем тип данных для поля с индексом 1 из источника данных

	    fields.Item(1).DataType := DbDataType.Integer;

	    // Добавляем новое вычисляемое поле в источник данных

	    field := fields.Add;

	    field.Name := "CalcField";

	    field.DataType := DbDataType.Integer;

	    // Задаем выражение для расчета значения поля

	    field.Expression.AsString := fields.Item(1).Name + "+6";

	    // Задаём параметры обработки ошибок, возникших при расчете вычисляемых полей

	    Errors := DtProvider.CalcFieldsErrors;

	    Errors.MaxErrors := -1;

	    Errors.MaxItems := -1;

	    // Открываем источник данных

	    DTProvider.Open;


	    // Выводим названия полей в окно консоли

	    Text := "";

	    For i := 0 To fields.Count - 1 Do

	        field := fields.Item(i);

	        Text := Text + (field.Name + "; ");

	    End For;

	    Debug.WriteLine(Text);

	    // Выводим значения полей в окно консоли

	    While Not DTProvider.Eof Do

	        DTProvider.Fetch(v);

	        Text := "";

	        For i := 0 To v.Length - 1 Do

	            data := v[i];

	            Text := Text + (data + " ");

	        End For;

	        Debug.WriteLine(Text);

	    End While;

	    // Закрываем источник данных

	    DTProvider.Close;

	    // Выводим ошибки в окно консоли

	    For Each Error In Errors Do

	        Debug.WriteLine("В строке №" + Error.Row.ToString + " в поле " + Error.Field + " произошла ошибка");

	        Debug.WriteLine("Текст ошибки: " + Error.Message);

	    End For;

	End Sub UserProc;


В результате выполнения примера будут загружены данные из файла «c:\Import
 Textt.txt». Будет создано вычисляемое поле со следующим выражением: значение
 поля с индексом «1» из источника данных будет увеличено на шесть. Результаты
 будут выгружены в окно консоли. Если в процессе вычисления формулы возникнут
 ошибки, то они будут выведены в окно консоли.


См. также:


[IDtProvider](IDtProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
