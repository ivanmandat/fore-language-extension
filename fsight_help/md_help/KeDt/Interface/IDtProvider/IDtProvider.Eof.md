# IDtProvider.Eof

IDtProvider.Eof
-


# IDtProvider.Eof


## Синтаксис


Eof: Boolean;


## Описание


Свойство Eof возвращает признак
 расположения курсора в источнике данных на последней записи.


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 С файла Data.xls.


			Sub UserProc;

Var

    ExcelProvider: IDtExcelProvider;

    v: Array;

    i: Integer;

Begin

    ExcelProvider := New DtExcelProvider.Create;

    ExcelProvider.File := "c:\Data.xls";

    ExcelProvider.DriverVersion := "Excel 8.0";

    ExcelProvider.Query := "Select * From [Лист1$]";

    ExcelProvider.HasHeader := False;

    ExcelProvider.Open;

    While Not ExcelProvider.Eof Do

        ExcelProvider.Fetch(v);

        For i := 0 To v.Length - 1 Do

            Debug.Write(v[i] + " ");

        End For;

        Debug.WriteLine("");

    End While;

    ExcelProvider.Close;

End Sub UserProc;


После выполнения примера будет создан новый источник данных, осуществляющий
 импорт данных из файла Excel. Из файла будут считаны значения всех записей,
 первая строка не будет рассматриваться как строка с именами полей. Полученные
 значения будут выведены в консоль среды разработки.


См. также:


[IDtProvider](IDtProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
