# ITabSheetPrinter.PageSettings

ITabSheetPrinter.PageSettings
-


# ITabSheetPrinter.PageSettings


## Синтаксис


PageSettings: [ITabPageSettings](../ITabPageSettings/ITabPageSettings.htm);


## Описание


Свойство PageSettings возвращает
 параметры страницы таблицы.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с идентификатором «Button1», компонента TabSheetBox, компонентов
 UiTabSheet и ImageBox с идентификаторами «UiTabSheet1» и «ImageBox1» соответственно.
 UiTabSheet является источником данных для TabSheetBox. Также в файловой
 системе должен присутствовать файл «C:/map.bmp», содержащий изображение.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    tSheet: ITabSheet;

	    Printer: ITabSheetPrinter;

	    pCount: Integer;

	    Graphics: IGxGraphics;

	    m_Image: IGxImage;

	Begin

	    tSheet := UiTabSheet1.TabSheet;

	    Printer := tSheet.CreatePrinter;

	    Printer.FirstPageGap := 30;

	    Printer.HeaderGap := 15;

	    Printer.FooterGap := 30;

	    Printer.PageSettings.BlackAndWhite := True;

	    pCount := Printer.GetPageCount;

	    If pCount > 0 Then

	        m_Image := New GxImage.CreateFromFile("C:/map.bmp");

	        Graphics := GxGraphicsClass.FromImage(m_Image);

	        Printer.PrintPage(1, Graphics);

	        ImageBox1.Image := m_Image;

	    End If;

	End Sub Button1OnClick;


После выполнения примера содержимое компонента TabSheetBox в графическом
 виде будет выведено в компонент ImageBox1 с заданными параметрами.


См. также:


[ITabSheetPrinter](ITabSheetPrinter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
