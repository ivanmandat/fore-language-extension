# DocumentPrinter: Класс

DocumentPrinter: Класс
-


# DocumentPrinter


## Описание


Класс DocumentPrinter реализует
 компонент среды разработки [DocumentPrinter](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/DocumentPrinter.htm),
 предназначенный для печати документов.


## Свойства, унаследованные от [IDocumentPrinter](../../Interface/IDocumentPrinter/IDocumentPrinter.htm)


		  Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Document](../../Interface/IDocumentPrinter/IDocumentPrinter.Document.htm)


		 Свойство Document возвращает
		 графический контекст документа, являющегося источником данных
		 для компонента.


		 ![](../../Property_Image.gif)
		 [Source](../../Interface/IDocumentPrinter/IDocumentPrinter.Source.htm)


		 Свойство Source определяет
		 источник, в котором находится документ для печати.


		 ![](../../Property_Image.gif)
		 [Tag](../../Interface/IComponent/IComponent.Tag.htm)


		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение свойства Tag
		 и использовать его по своему усмотрению. Свойство унаследовано
		 от [IComponent](../../Interface/IComponent/IComponent.htm).


## Свойства, унаследованные от [IComponent](../../Interface/IComponent/IComponent.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ComponentCount](../../Interface/IComponent/IComponent.ComponentCount.htm)
		 Свойство ComponentCount
		 возвращает количество дочерних компонентов, расположенных на родительском
		 компоненте.


		 ![](../../Property_Image.gif)
		 [Components](../../Interface/IComponent/IComponent.Components.htm)
		 Свойство Components
		 возвращает дочерний компонент, индекс которого передается посредством
		 входного параметра.


		 ![](../../Property_Image.gif)
		 [Data](../../Interface/IComponent/IComponent.Data.htm)
		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [Name](../../Interface/IComponent/IComponent.Name.htm)
		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [Tag](../../Interface/IComponent/IComponent.Tag.htm)
		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение данного свойства
		 и использовать его по своему усмотрению.


## Методы, унаследованные от [IDocumentPrinter](../../Interface/IDocumentPrinter/IDocumentPrinter.htm)


		  Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [PageSetup](../../Interface/IDocumentPrinter/IDocumentPrinter.PageSetup.htm)


		 Метод PageSetup осуществляет
		 вызов окна "Параметры страницы" для установленного
		 документа.


		 ![](../../Sub_Image.gif)
		 [Print](../../Interface/IDocumentPrinter/IDocumentPrinter.Print.htm)


		 Метод Print осуществляет
		 печать документа.


		 ![](../../Sub_Image.gif)
		 [PrintPreview](../../Interface/IDocumentPrinter/IDocumentPrinter.PrintPreview.htm)


		 Метод PrintPreview
		 осуществляет предварительный просмотр документа перед печатью.


См. также:


[Классы сборки Forms](../ModForms_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
