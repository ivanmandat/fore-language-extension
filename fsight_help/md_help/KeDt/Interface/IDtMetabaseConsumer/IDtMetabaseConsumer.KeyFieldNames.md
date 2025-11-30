# IDtMetabaseConsumer.KeyFieldNames

IDtMetabaseConsumer.KeyFieldNames
-


# IDtMetabaseConsumer.KeyFieldNames


## Синтаксис


KeyFieldNames: String;


## Описание


Свойство KeyFieldNames определяет
 список ключевых полей, по значениям которых будет осуществляться поиск
 обновляемых записей.


## Комментарии


Поля в списке разделяются символом «;».


## Пример


Для выполнения примера предполагается наличие в репозитории таблицы
 с идентификатором TABLE_1 и в корневом каталоге диска С файла Excel с
 наименованием Data.xls. Тип данных и количество столбцов с данными в файле
 Excel соответствует списку полей таблицы.


			Sub UserProc;

Var

    MB: IMetabase;

    ExcelProvider: IDtExcelProvider;

    MBConsumer: IDtMetabaseConsumer;

    Table: IDatasetModel;

    Fields: IDatasetModelFields;

Begin

    MB := MetabaseClass.Active;

    // Новый источник

    ExcelProvider := New DtExcelProvider.Create;

    ExcelProvider.DriverVersion := "Excel 8.0";

    ExcelProvider.File := "c:\Data.xls";

    ExcelProvider.HasHeader := True;

    ExcelProvider.Query := "Select * from [Лист1$]";

    // Новый приёмник

    Table := MB.ItemById("Table_1").Bind As IDatasetModel;

    MBConsumer := New DtMetabaseConsumer.Create;

    MBConsumer.Dataset := Table;

    Fields := Table.Fields;

    MBConsumer.Open;

    MBConsumer.KeyFieldNames := Fields.Item(0).Id;

    MBConsumer.PutProvider(ExcelProvider);

    MBConsumer.Close

End Sub UserProc;


После выполнения примера будет создан новый источник и приёмник данных.
 Источник будет настроен на импорт из файла Microsoft Excel, приёмник -
 на экспорт данных в таблицу репозитория. При экспорте данных будет производиться
 обновление записей по содержимому первого поля таблицы.


См. также:


[IDtMetabaseConsumer](IDtMetabaseConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
