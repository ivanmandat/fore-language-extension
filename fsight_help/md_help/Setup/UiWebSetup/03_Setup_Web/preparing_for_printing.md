# Подготовка к печати: Linux

Подготовка к печати: Linux
-


# Подготовка к печати


Для печати различных файлов в ОС Linux используется общая система печати
 UNIX (Common UNIX Printing System - CUPS). CUPS позволяет настраивать
 доступ к принтерам, управляет самой печатью. Для установки CUPS, а также
 всех необходимых зависимостей используйте команду:


sudo apt-get install cups


Далее для добавления принтера выполните следующие шаги:


	- В браузере откройте веб-интерфейс CUPS по адресу http://localhost:631/.


	- Щелкните «Добавление принтеров
	 и групп», далее «Добавить
	 принтер».


	- Выберите «Хост или принтер
	 LPD/LPR» и нажмите кнопку «Продолжить».


	- Укажите путь до принтера в следующем формате: lpd://<server>/<printer>,
	 где <server> - адрес и порт сервера печати; <printer>
	 - наименование добавляемого принтера. Нажмите кнопку «Продолжить».


	- Заполните поле «Название»
	 латинскими буквами, например «MyPrinter». Нажмите кнопку «Продолжить».


	- В списке «Создать» выберите
	 необходимый тип принтера. Нажмите кнопку «Продолжить»,
	 далее «Добавить принтер».


После этого принтер будет добавлен в систему и готов к использованию.


## Печать из прикладного кода


С помощью кода на Fore можно организовать печать объектов репозитория
 на принтере. Объекты, которые поддерживают печать, могут быть приведены
 к интерфейсу [IGxDocument](ModDrawing.chm::/Interface/IGxDocument/IGxDocument.htm).
 С помощью свойств и методов этого интерфейса осуществляется подготовка
 и печать объектов.


Для выполнения примера в модуле должны быть подключены сборки Drawing
 и Metabase. В репозитории создан регламентный отчёт с идентификатором
 «Report».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    GxDoc: IGxDocument;

	    Printer: IGxDocumentPrinter;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("Report").Edit;

	    // Принтер, на котором осуществляется печать

	    Printer := GxPrinters.DefaultPrinter As IGxDocumentPrinter;

	    // Печать отчёта

	    GxDoc := MObj As IGxDocument;

	    GxDoc.Print(Printer, -1, -1, "");

	End Sub UserProc;


Используя графический контекст принтера, который можно получить в свойстве
 [Graphics](ModDrawing.chm::/Interface/IGxDocumentPrinter/IGxDocumentPrinter.Graphics.htm)
 интерфейса [IGxDocumentPrinter](ModDrawing.chm::/Interface/IGxDocumentPrinter/IGxDocumentPrinter.htm),
 можно организовать печать различных графических изображений. Изображения
 могут быть получены из файла, документа репозитория или нарисованы непосредственно
 с помощью программного кода.


	Sub UserProc1;

	Var

	    Image: IGxImage;

	    Printer: IGxDocumentPrinter;

	Begin

	    // Принтер, на котором осуществляется печать

	    Printer := GxPrinters.DefaultPrinter As IGxDocumentPrinter;

	    // Получение изображения из файла, который необходимо напечатать

	    Image := GxBitmap.FromFile("D:\Work\Image.jpg");

	    // Заполнение графического контекста и печать

	    Printer.StartDocument("Image");

	    Printer.NewPage;

	    Printer.Graphics.DrawImageTransparent(Image, Null, Null, Null);

	    Printer.EndDocument;

	End Sub UserProc1;


Для печати изображения, которое сохранено в документе репозитория, также
 необходимо подключить сборки Fore и IO.


	Sub UserProc2;

	Var

	    MB: IMetabase;

	    Doc: IDocument;

	    MemStream: IMemoryStream;

	    Image: IGxImage;

	    Printer: IGxDocumentPrinter;

	Begin

	    MB := MetabaseClass.Active;

	    Doc := MB.ItemById("IMG_REPORT").Bind As IDocument;

	    // Принтер, на котором осуществляется печать

	    Printer := GxPrinters.DefaultPrinter As IGxDocumentPrinter;

	    // Получение изображения

	    MemStream := New MemoryStream.Create;

	    Doc.SaveToStream(MemStream);

	    Image := New GxImage.CreateFromStream(MemStream);

	    // Заполнение графического контекста и печать

	    Printer.StartDocument("Image");

	    Printer.NewPage;

	    Printer.Graphics.DrawImageTransparent(Image, Null, Null, Null);

	    Printer.EndDocument;

	End Sub UserProc2;


См. также:


[Дополнительные
 настройки](General_for_linux/Additional_settings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
