# ITabSheetPrinter.FirstPageHeaderGap

ITabSheetPrinter.FirstPageHeaderGap
-


# ITabSheetPrinter.FirstPageHeaderGap


## Синтаксис


		FirstPageHeaderGap: Double;


## Описание


Свойство FirstPageHeaderGap
 определяет отступ для верхнего колонтитула на первой странице.


## Комментарии


Для определения отступа для нижнего колонтитула на первой странице используйте
 свойство [ITabSheetPrinter.FirstPageFooterGap](ITabSheetPrinter.FirstPageFooterGap.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты:


	- Button с идентификатором Button1;


	- TabSheetBox с идентификатором TabSheetBox1;


	- UiTabSheet с идентификатором UiTabSheet1;


	- ImageBox с идентификатором ImageBox1.


Укажите компонент UiTabSheet1 в качестве источника данных для компонента
 TabSheetBox1.


В файловой системе должен присутствовать файл «C:/map.bmp», содержащий
 изображение.


Добавьте ссылки на системные сборки: Drawing, Tab.


Пример является обработчиком события OnClick для компонента Button.


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

		    // Настроим отступы для первой страницы

		    Printer.FirstPageHeaderGap := 30;

		    Printer.FirstPageFooterGap := 30;

		    Printer.DifferentFirstPageGap := True;

		    // Настроим отступы для чётных страниц

		    Printer.EvenHeaderGap := 20;

		    Printer.EvenFooterGap := 20;

		    Printer.DifferentEvenPageGap := True;

		    pCount := Printer.GetPageCount;

		    If pCount > 0 Then

		        m_Image := New GxImage.CreateFromFile("C:/map.bmp");

		        Graphics := GxGraphicsClass.FromImage(m_Image);

		        Printer.PrintPage(1, Graphics);

		        m_Image.SaveToFile("C:/map1.bmp");

		        ImageBox1.Image := m_Image;

		    End If;

		End Sub Button1OnClick;


При нажатии на кнопку Button1 будут настроены отступы для первой страницы
 и для чётных страниц. Содержимое компонента TabSheetBox1 будет сохранено
 в файл «C:/map1.bmp» и выведено в компонент ImageBox1.


См. также:


[ITabSheetPrinter](ITabSheetPrinter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
