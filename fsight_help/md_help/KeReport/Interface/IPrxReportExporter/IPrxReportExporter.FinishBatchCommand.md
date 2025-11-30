# IPrxReportExporter.FinishBatchCommand

IPrxReportExporter.FinishBatchCommand
-


# IPrxReportExporter.FinishBatchCommand


## Синтаксис


FinishBatchCommand;


## Описание


Метод FinishBatchCommand завершает
 пакетный экспорт данных в файл. Данный метод используется совместно с
 методом [StartBatchCommand](IPrxReportExporter.StartBatchCommand.htm).


## Комментарии


Экспорт нескольких отчетов возможен лишь в том случае, если все листы
 имеют различные наименования.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1»,
 компонента MetabaseOpenDialog с наименованием «MetabaseOpenDialog1»
 и компонента Memo с наименованием «Memo1».
 Пример будет выполняться при нажатии кнопки «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Filter: IMetabaseDialogClassFilter;

    Objects: IMetabaseObjectDescriptorList;

    List: IStringList;

    Exp: PrxReportExporter;

    i, Count: integer;

    id: String;

Begin

    MetabaseOpenDialog1.MultiSelect := True;

    // Создание фильтра для диалога открытия объекта репозитория.

    Filter := New MetabaseDialogClassFilter.Create;

    Filter.Description := "Регламентные отчеты";

    // Определение типа объектов, которые будут отображаться в диалоге при использовании данного фильтра: регламентный отчет.

    Filter.ObjectClass := MetabaseObjectClass.KE_CLASS_PROCEDURALREPORT;

    MetabaseOpenDialog1.Filters.AddFilter(Filter);

    If MetabaseOpenDialog1.Execute(Self) Then

        // Данные операции выполняются, если пользователь выбрал один или более регламентный отчет.

        Objects := MetabaseOpenDialog1.Objects;

        Count := Objects.Count;

        List := Memo1.Lines;

        List.Add("Количество отчетов, выбранных для экспорта:" + Count.ToString);

        // Начало пакетного экспорта выбранных отчетов.

        Exp := New PrxReportExporter.Create;

        Exp.StartBatchCommand("C:\BatchFilePrx.xls", "XLS");

        For i := 0 To Count - 1 Do

            id := Objects.Item(i).Id;

            Exp.Report := MetabaseClass.Active.ItemById(id).Bind As IPrxReport;

            Exp.ExportToFile("", "XLS");

            List.Add("Отчет '" + Objects.Item(i).Name + "' экспортирован");

        End For;

        // Окончание пакетного экспорта выбранных отчетов.

        Exp.FinishBatchCommand;

        List.Add("Экспорт окончен");

    End If;

End Sub Button1OnClick;


При выполнении примера будет вызван диалог открытия объекта репозитория.
 В нем необходимо выбрать регламентные отчеты, которые необходимо экспортировать.
 После выбора объектов будет произведен их экспорт в файл «C:\BatchFilePrx.xls»
 формата «XLS». Сообщения о ходе
 экспорта будут выведены в компонент «Memo1».


См. также:


[IPrxReportExporter](IPrxReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
