# IDtFieldSplitter.Split

IDtFieldSplitter.Split
-


# IDtFieldSplitter.Split


## Синтаксис


		Split(FieldIndex: Integer; Delimiters: String;
		 [MaxFields: Integer = 10;] [MaxRows: Integer = 100]): Boolean;


## Параметры


FieldIndex. Индекс поля, которое
 необходимо разделить.


Delimiters. Разделитель.


MaxFields. Максимальное количество
 полей, которые могут получиться при разделении. Указываемое количество
 должно быть не меньше двух.


MaxRows. Максимальное количество
 строк, которые используются для анализа при разделении.


## Описание


Метод Split разбивает поле по
 его содержимому в соответствии с заданным разделителем.


## Комментарии


Возможность разделить поле на несколько доступна только для строковых
 полей. Для разделения осуществляется анализ значений в поле на наличие
 повторяющихся разделителей. Если в Delimiters
 передается ровно два символа, то они считаются парными разделителями:
 первый символ открывающий разделитель, второй - закрывающий. Парные разделители
 могут быть одинаковыми. Например, чтобы разделить поле содержащее данные:
 "«value» «1»", необходимо в Delimiters
 указать "«»". В результате будут созданы два поля со
 значениями, расположенными между кавычками "«»".


При разбиении поля осуществляется проход по записям источника, поэтому
 после выполнения метода курсор может оказаться на [последней
 записи](../IDtProvider/IDtProvider.Eof.htm).


После разбиения полученные поля будут доступны в коллекции [Fields](../IDtObject/IDtObject.Fields.htm). Наименования создаваемых полей
 формируются путём добавления к наименованию разделяемого поля номера созданного
 поля. Нумерация начинается с единицы.


## Пример


Для выполнения примера предполагается наличие файла Microsoft Excel
 «D:\Work\Data.xlsx». В первом столбце расположены какие-либо строковые
 данные.


Добавьте ссылки на системные сборки: Dt, Metabase.


					Sub UserProc;

		Var

		    ExcelProviderEx: IDtExcelProviderEx;

		    FieldSplitter: IDtFieldSplitter;

		    Fields: IDtFieldDefinitions;

		    Field: IDtFieldDefinition;

		    FieldsNames: String;

		Begin

		    // Открытие источника

		    ExcelProviderEx := New DtExcelProviderEx.Create;

		    ExcelProviderEx.File := "D:\Work\Data.xlsx";

		    ExcelProviderEx.Sheet := "Sheet1";

		    ExcelProviderEx.HasHeader := True;

		    ExcelProviderEx.HeaderRow := 0;

		    ExcelProviderEx.Format := "XLSX";

		    ExcelProviderEx.DataRow := 1;

		    ExcelProviderEx.Metabase := MetabaseClass.Active;

		    ExcelProviderEx.Open;

		    // Разделение поля

		    FieldSplitter := ExcelProviderEx As IDtFieldSplitter;

		    FieldSplitter.Split(0, ",");

		    // Полученная информация о полях

		    Fields := ExcelProviderEx.Fields;

		    Debug.WriteLine("Количество полей: " + Fields.Count.ToString);

		    FieldsNames := "Наименования полей: ";

		    // Формируем строку с наименованиями полей

		    For Each Field In Fields Do

		        FieldsNames := FieldsNames + Field.Name + "; "

		    End For;

		    Debug.WriteLine(FieldsNames);

		    ExcelProviderEx.Close;

		End Sub UserProc;


При выполнении примера будет открыт указанный файл. Будет осуществлена
 попытка разбить первое поле с использованием разделителя «,». Информация
 о полученных полях будет выведена в консоль среды разработки.


См. также:


[IDtFieldSplitter](IDtFieldSplitter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
