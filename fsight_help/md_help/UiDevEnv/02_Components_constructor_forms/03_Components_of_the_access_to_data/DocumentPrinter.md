# DocumentPrinter: Компонент

DocumentPrinter: Компонент
-


# DocumentPrinter


## Иерархия наследования


           [IComponent](modforms.chm::/Interface/IComponent/IComponent.htm)


           [IDocumentPrinter](ModForms.chm::/Interface/IDocumentPrinter/IDocumentPrinter.htm)


           [DocumentPrinter](ModForms.chm::/Class/DocumentPrinter/DocumentPrinter.htm)


## Описание


Компонент DocumentPrinter предназначен для печати документов.


## Работа с компонентом


После размещения компонента на форме необходимо в свойстве [Source](ModForms.chm::/Interface/IDocumentPrinter/IDocumentPrinter.Source.htm)
 указать компонент, связанный с тем документом, который необходимо напечатать.
 В качестве значения свойства могут быть указаны следующие компоненты:
 [UiErAnalyzer](UiErAnalyzer.htm), [UiReport](UiReport.htm)
 и [UiTabSheet](UiTabSheet.htm). После этого в прикладном коде,
 используя методы [Print](ModForms.chm::/Interface/IDocumentPrinter/IDocumentPrinter.Print.htm)
 и [PrintPreview](ModForms.chm::/Interface/IDocumentPrinter/IDocumentPrinter.PrintPreview.htm),
 можно напечатать документ либо осуществить его предварительный просмотр.


## Свойства компонента DocumentPrinter


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ComponentCount](ModForms.chm::/Interface/IComponent/IComponent.ComponentCount.htm)
		 Свойство ComponentCount
		 возвращает количество дочерних компонентов.


		 ![](../../Property_Image.gif)
		 [Components](ModForms.chm::/Interface/IComponent/IComponent.Components.htm)
		 Свойство Components
		 возвращает дочерний компонент.


		 ![](../../Property_Image.gif)
		 [Data](ModForms.chm::/Interface/IComponent/IComponent.Data.htm)
		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [Document](ModForms.chm::/Interface/IDocumentPrinter/IDocumentPrinter.Document.htm)
		 Свойство Document возвращает
		 графический контекст документа, являющегося источником данных
		 для компонента.


		 ![](../../Property_Image.gif)
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)
		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [Source](TabSheet.chm::/Interface/ITabFootnotesBox/ITabFootnotesBox.Source.htm)
		 Свойство Source определяет
		 источник, в котором находится документ для печати.


		 ![](../../Property_Image.gif)
		 [Tag](ModForms.chm::/Interface/IComponent/IComponent.Tag.htm)
		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение свойства Tag и использовать его по своему
		 усмотрению.


## Методы компонента DocumentPrinter


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [PageSetup](ModForms.chm::/Interface/IDocumentPrinter/IDocumentPrinter.PageSetup.htm)
		 Метод PageSetup осуществляет
		 вызов окна «Параметры страницы» для установленного документа.


		 ![](../../Sub_Image.gif)
		 [Print](ModForms.chm::/Interface/IDocumentPrinter/IDocumentPrinter.Print.htm)
		 Метод Print осуществляет
		 печать документа.


		 ![](../../Sub_Image.gif)
		 [PrintPreview](ModForms.chm::/Interface/IDocumentPrinter/IDocumentPrinter.PrintPreview.htm)
		 Метод PrintPreview
		 осуществляет предварительный просмотр документа перед печатью.


См. также:


[Компоненты доступа
 к данным](03_components_of_the_access_to_data.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
