# IWxViewExporter.ExportToFile

IWxViewExporter.ExportToFile
-


# IWxViewExporter.ExportToFile


## Синтаксис


ExportToFile(FileName: String; FormatTag: String);


## Параметры


FileName. Наименование файла,
 в который будет произведен экспорт;


FormatTag. Формат файла, в
 который будет произведен экспорт. Возможен экспорт в следующие форматы:


	- bmp;


	- png;


	- jpg;


	- gif;


	- tiff.


## Описание


Метод ExportToFile осуществляет
 экспорт рабочего пространства в файл, указанного формата.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента WorkspaceBox
 с наименованием «WorkspaceBox1» и какого-либо источника данных для «WorkspaceBox1».


Добавьте ссылки на системные сборки: Andy, Workspace.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ws: IWxWorkspace;

	    view: IWxView;

	    Exp: IWxViewExporter;

	Begin

	    ws := UiWorkspace1.WxWorkspace;

	    view := ws.CreateView;

	    view := ws.Views.Item(0);

	    Exp := New WxViewExporter.Create;

	    Exp.WxView := view;

	    Exp.PixelHeight := 500;

	    Exp.PixelHeight := 300;

	    Exp.FullLengthTitle := True;

	    Exp.ExportToFile("C:\РП.gif", "gif");

	End Sub Button1OnClick;


После выполнения примера рабочее пространство будет экспортировано в
 файл «РП.gif».


См. также:


[IWxViewExporter](IWxViewExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
