# IDtConsumer.CalcFieldsErrors

IDtConsumer.CalcFieldsErrors
-


# IDtConsumer.CalcFieldsErrors


## Синтаксис


CalcFieldsErrors: [IDtCalcFieldErrors](../IDtCalcFieldErrors/IDtCalcFieldErrors.htm);


## Описание


Свойство CalcFieldsErrors
 возвращает коллекцию ошибок, возникших при расчете вычисляемых полей.


## Комментарии


Ошибки могут было получены только после вызова одного из следующих методов:
 [IDtConsumer.Put](IDtConsumer.Put.htm),
 [IDtConsumer.PutProvider](IDtConsumer.PutProvider.htm),
 [IDtConsumer.PutRow](IDtConsumer.PutRow.htm).


## Пример


Для выполнения примера в файловой системе предполагается наличие файла
 «c:\Import Text.txt» с данными.


Добавьте ссылки на системные сборки: Dal, Dt, Metabase.


[![](../../opened.gif)![](../../closed.gif)Содержимое файла
 «c:\Import Text.txt»](javascript:TextPopup(this))


	"ID";"MY_VALUE"


	1;12


	2;22


	3;32


	4;42


	5;7


	6;9


	7;12


	8;17


	Sub UserProc;

	Var

	    Mb: Imetabase;

	    DTConsumer: IDtTextConsumer;

	    DTProviderWithData: IDtTextProvider;

	    Errors: IDtCalcFieldErrors;

	    Error: IDtCalcFieldError;

	    FieldsIn, FieldsOut: IDtFieldDefinitions;

	    FieldIn, FieldOut: IDtFieldDefinition;

	    i: Integer;

	Begin

	    // Получаем текущий репозиторий

	    Mb := MetabaseClass.Active;

	    // Создаем текстовый приёмник данных

	    DTConsumer := New DtTextConsumer.Create;

	    // Задаем базовые параметры приёмника

	    DTConsumer.FormatType := DtTextFormatType.Delimited;

	    DTConsumer.RowDelimiter := #13 + #10;

	    DTConsumer.DelimitedColumnDelimiter := ";";

	    DTConsumer.Encoding := "WIN";

	    DTConsumer.DelimitedTextQualifier := """";

	    DTConsumer.WriteHeader := True;

	    DTConsumer.Metabase := mb;


	    // Указываем файл, в который будут выгружены данные

	    DTConsumer.File := "c:\Export Text.txt";

	    // Создаем текстовый источник данных

	    DTProviderWithData := New DtTextProvider.Create;

	    // Задаем базовые параметры источника

	    DTProviderWithData.FormatType := DtTextFormatType.Delimited;

	    DTProviderWithData.RowDelimiter := #13 + #10;

	    DTProviderWithData.DelimitedColumnDelimiter := ";";

	    DTProviderWithData.Encoding := "WIN";

	    DTProviderWithData.DelimitedTextQualifier := """";

	    DTProviderWithData.RangeHasHeader := True;

	    DTProviderWithData.Metabase := mb;

	    // Указываем файл, из которого будут загружены данные

	    DTProviderWithData.File := "c:\Import Text.txt";

	    // Загружаем поля источника из файла

	    DTProviderWithData.FieldsFromFile;

	    // Получаем поля источника и приёмника

	    FieldsIn := DTConsumer.Fields;

	    FieldsOut := DTProviderWithData.Fields;


	    // Обрабатываем каждое из полученных полей

	    For Each FieldOut In FieldsOut Do

	        // Указываем тип поля источника

	        FieldOut.DataType := DbDataType.Integer;

	        // Добавляем поле в приёмник данных

	        FieldIn := FieldsIn.Add;

	        // Указываем, что базовые параметры добавленного поля в приёмнике

	        // будут совпадать с соответствующим полем из источника

	        FieldIn.DataDomain := FieldOut.DataDomain;

	        FieldIn.DataType := FieldOut.DataType;

	        FieldIn.Name := FieldOut.Name;

	        FieldIn.Precision := FieldOut.Precision;

	        FieldIn.Size := FieldOut.Size;

	        // Если поле в источнике вычисляемое, то и в приёмнике

	        // будет использоваться аналогичное выражение

	        If FieldOut.IsCalculated Then

	            FieldIn.Expression.AsString := FieldOut.Expression.AsString;

	        End If;

	    End For;

	    // Укажем выражение для расчета поля с индексом 1 в приёмнике данных

	    FieldIn := FieldsIn.Item(1);


	    // Выражение будет основано на значении поля с индексом 1 из источника данных

	    FieldOut := FieldsOut.Item(1);

	    FieldIn.Expression.AsString := FieldOut.Name + " + 2";

	    // Открываем и очищаем приёмник данных

	    DTConsumer.Open;

	    DTConsumer.Clear;

	    // Экспортируем значения из источника в приёмник

	    DTConsumer.PutProvider(DTProviderWithData);

	    // Получаем ошибки, возникшие при расчете вычисляемых полей

	    Errors := DTConsumer.CalcFieldsErrors;

	    // Выводим ошибки в окно консоли

	    If Errors.Count > 0 Then

	        For i := 0 To Errors.Count Do

	            Error := Errors.Item(i);

	            Debug.WriteLine("В строке №" + Error.Row.ToString + " в поле " + Error.Field + " произошла ошибка");


	            Debug.WriteLine("Текст ошибки: " + Error.Message);

	        End For;

	    End If;

	    // Закрываем приёмник данных

	    DTConsumer.Close;

	End Sub UserProc;


В результате выполнения примера данные из файла
 «c:\Import Text.txt» будут выгружены в файл «Export Text». Для исходных
 данных будет применена формула: значение поля с индексом «1» из источника
 данных будет увеличено на два. Если в процессе вычисления формулы возникнут
 ошибки, то они будут выведены в окно консоли.


См. также:


[IDtConsumer](IDtConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
