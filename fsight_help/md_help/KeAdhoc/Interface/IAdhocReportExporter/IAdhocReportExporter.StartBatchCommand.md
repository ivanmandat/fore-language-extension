# IAdhocReportExporter.StartBatchCommand

IAdhocReportExporter.StartBatchCommand
-


# IAdhocReportExporter.StartBatchCommand


## Синтаксис


StartBatchCommand(FileName: String; FormatTag: String);


## Параметры


FileName. Наименование файла,
 в который будет выполнен экспорт;.


FormatTag. Формат файла, в
 который будет выполнен экспорт.


[![](../../Opened.gif)![](../../Closed.gif)Допустимые форматы
 экспорта](javascript:TextPopup(this))


		- XLSX. Книга Excel.


		- XLS. книга Excel 90-2003.


		- PDF. Документ PDF.


		- RTF. Документ в формате RTF.


		- HTML. Веб-страница.


		- MHT. Веб-страница, архив в одном файле.


		- EMF. Файл в формате EMF.


		- PPTX. Презентация PowerPoint.


## Описание


Метод StartBatchCommand
 начитает пакетный экспорт аналитических панелей в файл указанного формата.


## Комментарии


Пакетный экспорт позволяет экспортировать в один файл несколько аналитических
 панелей.


Для выполнения пакетного экспорта:


	- Вызовите метод StartBatchCommand.


	- Задайте экспортируемую панель в свойстве [IAdhocReportExporter.AdhocReport](IAdhocReportExporter.AdhocReport.htm).


	- Вызовите метод IAdhocReportExporter.ExportToFile,
	 унаследованный от [IExporter.ExportToFile](ModDrawing.chm::/Interface/IExporter/iexporter.exporttofile.htm).


	- Повторяйте шаги 2 и 3 до тех пор, пока не будут экспортированы
	 все требуемые аналитические панели.


	- Вызовите метод [IAdhocReportExporter.FinishBatchCommand](IAdhocReportExporter.FinishBatchCommand.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 MetabaseOpenDialog с идентификатором
 «MetabaseOpenDialog1».


Добавьте ссылку на системную сборку Adhoc.


			Sub UserProc;

Var

    Filter: IMetabaseDialogClassFilter;

    Objects: IMetabaseObjectDescriptorList;

    Exp: AdhocReportExporter;

    i, Count: integer;

    id: String;

Begin

    MetabaseOpenDialog1.MultiSelect := True;

    // Создаем фильтр для открытия только аналитических панелей

    Filter := New MetabaseDialogClassFilter.Create;

    Filter.Description := "Аналитические панели";

    Filter.ObjectClass := MetabaseObjectClass.KE_ADHOC_REPORT;

    MetabaseOpenDialog1.Filters.AddFilter(Filter);

    // Вызываем диалог открытия аналитических панелей

    If MetabaseOpenDialog1.Execute(Self) Then

        Objects := MetabaseOpenDialog1.Objects;

        Count := Objects.Count;

        // Начало пакетного экспорта выбранных аналитических панелей в формат PDF

        Exp := New AdhocReportExporter.Create;

        Exp.StartBatchCommand("C:\Аналитические панели.pdf", "PDF");

        For i := 0 To Count - 1 Do

            id := Objects.Item(i).Id;

            Exp.AdhocReport := MetabaseClass.Active.ItemById(id).Bind As IAdhocReport;

            Exp.ExportToFile("", "PDF");

            Debug.WriteLine("Отчет '" + Objects.Item(i).Name + "' экспортирован");

        End For;

        // Окончание пакетного экспорта аналитических панелей

        Exp.FinishBatchCommand;

    End If;

End Sub UserProc;


В результате выполнения примера будет открыт диалог для выбора аналитических
 панелей. Выбранные панели будут экспортированы в файл «C:\Аналитические панели.pdf»,
 сообщения о ходе экспорта будут выведены в окно консоли.


См. также:


[IAdhocReportExporter](IAdhocReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
