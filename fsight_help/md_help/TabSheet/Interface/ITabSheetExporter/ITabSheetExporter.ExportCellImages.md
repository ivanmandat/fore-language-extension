# ITabSheetExporter.ExportCellImages

ITabSheetExporter.ExportCellImages
-


# ITabSheetExporter.ExportCellImages


## Синтаксис


ExportCellImages: Boolean;


## Описание


Свойство ExportCellImages определяет,
 будут ли экспортироваться изображения, содержащиеся в ячейках таблицы.


## Комментарии


По умолчанию свойству установлено значение True.


Если свойству установлено значение True,
 то при экспорте будут экспортироваться изображения, содержащиеся в ячейках
 таблицы (например изображения условного форматирования). Если установлено
 значение False, то изображения
 экспортироваться не будут.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiTabSheet
 с наименованием «UiTabSheet1» и компонента TabSheetBox,
 для которого «UiTabSheet1» является источником данных. В таблице компонента
 TabSheetBox введены какие-либо
 данные, в ячейках таблицы могут иметься изображения.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Tab: ITabSheet;

	    Exp: ITabSheetExporter;

	Begin

	    Tab := UiTabSheet1.TabSheet;

	    Tab.PageSettings := New TabPageSettings.Create;

	    Exp := New TabSheetExporter.Create;

	    Exp.TabSheet := Tab;

	    Exp.ExportCellImages := False;

	    Exp.ExportToFile("c:\Data.pdf", "PDF");

	End Sub Button1OnClick;


При нажатии на кнопку содержимое таблицы будет экспортировано в файл
 «C:\Data.pdf». Если в ячейках
 таблицы имеются какие-либо изображения, то они экспортированы не будут.


См. также:


[ITabSheetExporter](ITabSheetExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
