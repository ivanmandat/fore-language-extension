# IDatasetDataProvider.FieldDefs

IDatasetDataProvider.FieldDefs
-


# IDatasetDataProvider.FieldDefs


## Синтаксис


FieldDefs: [IDatasetModelFields](../IDatasetModelFields/IDatasetModelFields.htm);


## Описание


Свойство FieldDefs возвращает структуру полей источника данных.


## Пример


Для выполнения примера в корневом каталоге диска «С» предполагается наличие файла Microsoft Excel «Data.xls».


			Sub UserProc;

Var

    ExcelProvider: IDtExcelProvider;

    Provider: IDatasetDataProvider;

    FieldDefs: IDatasetModelFields;

    FieldDef: IDatasetModelField;

    i: Integer;

Begin

    ExcelProvider := New DtExcelProvider.Create;

    ExcelProvider.DriverVersion := "Excel 8.0";

    ExcelProvider.File := "c:\Data.xls";

    ExcelProvider.HasHeader := True;

    ExcelProvider.ImexMode := DtExcelImexMode.Import;

    ExcelProvider.Query := "Select * From [Лист1$]";

    Provider := ExcelProvider As IDatasetDataProvider;

    FieldDefs := Provider.FieldDefs;

    For i := 0 To FieldDefs.Count - 1 Do

        FieldDef := FieldDefs.Item(i);

        Debug.WriteLine(FieldDef.Id + " " + FieldDef.DataType.ToString);

    End For;

End Sub UserProc;


При выполнения примера будет создан новый объект, осуществляющий импорт из файлов Microsoft Excel. Данный объект будет представлен как источник данных, из которого могут быть загружены показатели в базу данных временных рядов. Информация о полях источника данных будет выведена в консоль среды разработки.


См. также:


[IDatasetDataProvider](IDatasetDataProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
