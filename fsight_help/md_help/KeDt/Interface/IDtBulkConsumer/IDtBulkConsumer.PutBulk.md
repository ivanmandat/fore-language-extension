# IDtBulkConsumer.PutBulk

IDtBulkConsumer.PutBulk
-


# IDtBulkConsumer.PutBulk


## Синтаксис


PutBulk(Packet: [IDtBulkPacket](../IDtBulkPacket/IDtBulkPacket.htm)):
 Boolean;


## Параметры


Packet. Пакет с данными для
 экспорта.


## Описание


Метод PutBulk осуществляет экспорт
 указанного пакета данных в приёмник данных.


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 D файла Data.xls.


	Sub Main;

	Var

	    ExcelConsumer: IDtExcelConsumer;

	    Fields: IDtFieldDefinitions;

	    Field: IDtFieldDefinition;

	    Pack: IDtBulkPacket;

	    v: Array[3, 4] =

	        [["Греча", "Молоко", "Сахар", "Хлеб"],

	        [10, 20, 30, 40],

	        [313.12, 301.53, 254.13, 404.11]];

	    v1: Array[4, 3] =

	        [["Кефир", "Сок", "Чай", "Кофе" 10, ],

	        [10, 20, 30.45, 40],

	        [113.12, 101.53, 154.13, "A"]];

	Begin

	    // Создание приёмника

	    ExcelConsumer := New DtExcelConsumer.Create;

	    ExcelConsumer.File := "D:\Data.xls";

	    ExcelConsumer.HasHeader := True;

	    ExcelConsumer.DriverVersion := "Excel 8.0";

	    ExcelConsumer.Table := "Лист1";

	    // Создание полей

	    Fields := ExcelConsumer.Fields;

	    Field := Fields.Add;

	    Field.DataType := DbDataType.String;

	    Field.Name := "Name";

	    Field := Fields.Add;

	    Field.DataType := DbDataType.Integer;

	    Field.Name := "ID";

	    Field := Fields.Add;

	    Field.DataType := DbDataType.Float;

	    Field.Name := "Value";

	    ExcelConsumer.Open;

	    // Загрузка пакетов данных в приёмник

	    Pack := New DtBulkPacket.Create;

	    Pack.FailPolicy := DatasetFailPolicy.Rollback;

	    // Первый пакет

	    Pack.Data := v;

	    ExcelConsumer.PutBulk(Pack);

	    If Not Pack.Successful Then

	        Debug.WriteLine("Ошибка при экспорте пакета");

	        Debug.WriteLine("Не экспортировано записей: " + Pack.FailedRows.ToString);

	    Else

	        Debug.WriteLine("Экспорт пакета завершен удачно");

	    End If;

	    // Второй пакет

	    Pack.Data := v1;

	    ExcelConsumer.PutBulk(Pack);

	    If Not Pack.Successful Then

	        Debug.WriteLine("Ошибка при экспорте пакета");

	        Debug.WriteLine("Не экспортировано записей: " + Pack.FailedRows.ToString);

	    Else

	        Debug.WriteLine("Экспорт пакета завершен удачно");

	    End If;

	    ExcelConsumer.Close;

	End Sub Main;


После выполнения примера будет создан новый приёмник данных, осуществляющий
 экспорт данных в файл Microsoft Excel. В файл поочередно будут записаны
 значения двух массивов. При возникновении ошибок при экспорте строк будет
 производиться откат изменений. Информация о результатах экспорта будет
 выведена в консоль среды разработки.


См. также:


[IDtBulkConsumer](IDtBulkConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
