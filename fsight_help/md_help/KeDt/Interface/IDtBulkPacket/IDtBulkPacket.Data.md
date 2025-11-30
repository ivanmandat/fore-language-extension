# IDtBulkPacket.Data

IDtBulkPacket.Data
-


# IDtBulkPacket.Data


## Синтаксис


Data: Array;


## Описание


Свойство Data определяет двумерный
 массив данных, которые необходимо экспортировать в рамках одной транзакции.


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 С файла Data.xls.


Для выполнения примера добавьте ссылки на системные сборки Dt, Dal,
 Db.


	Sub Main;

	Var

	    ExcelConsumer: IDtExcelConsumer;

	    Fields: IDtFieldDefinitions;

	    Field: IDtFieldDefinition;

	    v, v1: Array;

	    Pack: IDtBulkPacket;

	    i: integer;

	Begin

	    //Массив, передаваемый в первом пакете

	    v := New Variant[3, 4];

	    v[0, 0] := "Греча"; v[1, 0] := 10; v[2, 0] := 313.12;

	    v[0, 1] := "Молоко"; v[1, 1] := 20; v[2, 1] := 301.53;

	    v[0, 2] := "Сахар"; v[1, 2] := 30; v[2, 2] := 254.13;

	    v[0, 3] := "Хлеб"; v[1, 3] := 40; v[2, 3] := 404.11;

	    //Массив, передаваемый во втором пакете

	    v1 := New Variant[3, 4];

	    v1[0, 0] := "Кефир"; v1[1, 0] := 10; v1[2, 0] := 113.12;

	    v1[0, 1] := "Сок"; v1[1, 1] := 20; v1[2, 1] := 101.53;

	    v1[0, 2] := "Чай"; v1[1, 2] := 30.45; v1[2, 2] := 154.13;

	    v1[0, 3] := "Кофе"; v1[1, 3] := 40; v1[2, 3] := "A";

	    ExcelConsumer := New DtExcelConsumer.Create;

	    ExcelConsumer.File := "d:\Data.xls";

	    ExcelConsumer.HasHeader := True;

	    ExcelConsumer.DriverVersion := "Excel 8.0";

	    ExcelConsumer.Table := "Лист1";

	    Fields := ExcelConsumer.Fields;

	    Field := Fields.Add;

	    Field.DataType := DbDataType.String;

	    Field.Name := "Наименование";

	    Field := Fields.Add;

	    Field.DataType := DbDataType.Integer;

	    Field.Name := "Идентификатор";

	    Field := Fields.Add;

	    Field.DataType := DbDataType.Float;

	    Field.Name := "Значение";

	    ExcelConsumer.Open;

	    Pack := New DtBulkPacket.Create;

	    Pack.FailPolicy := DatasetFailPolicy.Rollback;

	    //Первый пакет

	    Pack.Data := v;

	    Pack.StopLimit := 8;

	    ExcelConsumer.PutBulk(Pack);

	    If Not Pack.Successful Then

	        Debug.WriteLine("Ошибка при экспорте пакета");

	        Debug.WriteLine("Не экспортировано записей: " + Pack.FailedRows.ToString);

	        For i := v.GetLowerBound(1) To v.GetUpperBound(1) Do

	        If Pack.Failed(i) Then

	            Debug.WriteLine(Pack.ErrorMessage(i));

	        End If;

	        End For;

	    Else

	        Debug.WriteLine("Экспорт пакета завершен удачно");

	    End If;

	    //Второй пакет

	    Pack.Data := v1;

	    Pack.StopLimit := 8;

	    ExcelConsumer.PutBulk(Pack);

	    If Not Pack.Successful Then

	        Debug.WriteLine("Ошибка при экспорте пакета");

	        Debug.WriteLine("Не экспортировано записей: " + Pack.FailedRows.ToString);

	        For i := v1.GetLowerBound(1) To v1.GetUpperBound(1) Do

	        If Pack.Failed(i) Then

	            Debug.WriteLine(Pack.ErrorMessage(i));

	        End If;

	        End For;

	    Else

	        Debug.WriteLine("Экспорт пакета завершен удачно");

	    End If;

	    ExcelConsumer.Close;

	End Sub Main;


После выполнения примера будет создан новый приёмник данных, осуществляющий
 экспорт данных в файл Excel. В файл поочередно будут записаны значения
 двух массивов. Информация о результатах экспорта будет выведена в консоль
 среды разработки. Для не экспортированных по какой либо причине записей
 в консоль будет выведена информация об ошибке.


См. также:


[IDtBulkPacket](IDtBulkPacket.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
