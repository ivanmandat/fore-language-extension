# IExAnalyzerExporter.StartBatchCommand

IExAnalyzerExporter.StartBatchCommand
-


# IExAnalyzerExporter.StartBatchCommand


## Синтаксис


StartBatchCommand(FileName: String; FormatTag: String);


## Параметры


FileName. Наименование файла,
 в который будет произведен экспорт;


FormatTag. Формат файла, в
 который будет произведен экспорт. Возможен экспорт в следующие форматы:
 mht, html, pdf, xls, rtf, emf.


## Описание


Метод StartBatchCommand запускает
 пакетный экспорт данных в файл указанного формата.


## Комментарии


После вызова данного метода, при каждом вызове метода [IExporter.ExportToFile](ModDrawing.chm::/Interface/IExporter/IExporter.ExportToFile.htm)
 будет происходить экспорт отчета, определенного в свойстве [IExAnalyzerExporter.ExAnalyzer](IExAnalyzerExporter.ExAnalyzer.htm).
 Экспорт будет производиться в файл с параметрами, указанными в методе
 StartBatchCommand. Для завершения
 пакетного экспорта данных необходимо вызвать метод [IExAnalyzerExporter.FinishBatchCommand](IExAnalyzerExporter.FinishBatchCommand.htm).
 Таким образом, в один файл может быть экспортировано несколько отчетов.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента MetabaseOpenDialog с
 наименованием «MetabaseOpenDialog1» и компонента Memo с наименованием
 «Memo1».


Пример будет выполняться при нажатии кнопки «Button1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Filter: IMetabaseDialogClassFilter;

	    Objects: IMetabaseObjectDescriptorList;

	    List: IStringList;

	    Exp: ExAnalyzerExporter;

	    i: integer;

	    id: String;

	    Count: Integer;

	Begin

	    MetabaseOpenDialog1.MultiSelect := True;

	    // Создание фильтра для диалога открытия объекта репозитория

	    Filter := New MetabaseDialogClassFilter.Create;

	    Filter.Description := "Экспресс-отчеты";

	    // Определение типа объектов, которые будут отображаться в диалоге

	    // при использовании данного фильтра: экспресс - отчет

	    Filter.ObjectClass := MetabaseObjectClass.KE_CLASS_EXPRESSREPORT;

	    MetabaseOpenDialog1.Filters.AddFilter(Filter);

	    If MetabaseOpenDialog1.Execute(Self) Then

	        // Данные операции выполняются, если пользователь выбрал один или более экспресс-отчет

	        Objects := MetabaseOpenDialog1.Objects;

	        Count := Objects.Count;

	        List := Memo1.Lines;

	        List.Add("Количество отчетов выбранных для экспорта:" + Count.ToString);

	        // Начало пакетного экспорта выбранных отчетов

	        Exp := New ExAnalyzerExporter.Create;

	        Exp.StartBatchCommand("C:\BatchFileExp.xls", "XLS");

	        For i := 0 To Count - 1 Do

	            id := Objects.Item(i).Id;

	            Exp.ExAnalyzer := MetabaseClass.Active.ItemById(id).Bind As IEaxAnalyzer;

	            Exp.ExportToFile("", "XLS");

	            List.Add("Отчет '" + Objects.Item(i).Name + "' экспортирован");

	        End For;

	        // Окончание пакетного экспорта выбранных отчетов

	        Exp.FinishBatchCommand;

	        List.Add("Экспорт отчетов завершен");

	    End If;

	End Sub Button1OnClick;


При выполнении примера будет вызван диалог открытия объекта репозитория.
 В нем необходимо выбрать экспресс-отчеты, которые необходимо экспортировать.
 После выбора объектов будет произведен их экспорт в файл C:\BatchFileExp.xls
 формата XLS. Сообщения о ходе экспорта будут выведены в компонент «Memo1».


См. также:


[IExAnalyzerExporter](IExAnalyzerExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
