# ITabSheetExporter.ExportFootnotes

ITabSheetExporter.ExportFootnotes
-


# ITabSheetExporter.ExportFootnotes


## Синтаксис


ExportFootnotes: Boolean;


## Описание


Свойство ExportFootnotes определяет,
 будут ли экспортироваться сноски таблицы.


## Комментарии


Допустимые значения:


	- True. Экспортировать
	 сноски;


	- False. Не экспортировать
	 сноски.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiTabSheet с наименованием
 «UiTabSheet1» и каких-либо визуальных компонентов, для которых «UiTabSheet1»
 установлен в качестве источника данных. В таблице компонента созданы сноски.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Tabsheet: ITabSheet;

    Footnotes: ITabFootnotes;

    Exporter: ITabSheetExporter;

Begin

    Exporter := New TabSheetExporter.Create;

    TabSheet := UiTabSheet1.TabSheet;

    TabSheet.PageSettings := New TabPageSettings.Create;

    Footnotes := TabSheet.Footnotes;

    //Все сноски в
 конце полученного документа

    Footnotes.Location := TabFootnotesLocation.EndOfSheet;

    Exporter.TabSheet := TabSheet;

    Exporter.ExportFootnotes := True;

    Exporter.ExportToFile("C:\Tabsheet.pdf", "PDF");

End Sub Button1OnClick;


При нажатии на кнопку будет произведён экспорт таблицы в указанный файл.
 Текст всех сносок будет расположен на последней странице файла.


См. также:


[ITabSheetExporter](ITabSheetExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
