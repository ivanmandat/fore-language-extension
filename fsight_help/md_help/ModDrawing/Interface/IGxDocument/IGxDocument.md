# IGxDocument

IGxDocument
-


# IGxDocument


Сборка: Drawing;


## Описание


Интерфейс IGxDocument содержит
 свойства и методы объекта, поддерживающего печать на принтере и экспорт
 в различные форматы.


## Иерархия наследования


           IGxDocument


## Комментарии


Интерфейс IGxDocument можно применять к следующим объектам, поддерживающим
 печать и экспорт:


	- [регламентный
	 отчет](KeReport.chm::/Interface/IPrxReport/IPrxReport.htm);


	- [экспресс-отчет](KeExpress.chm::/Interface/IEaxAnalyzer/IEaxAnalyzer.htm);


	- [коллекция
	 листов экспресс-отчета](KeExpress.chm::/Interface/IEaxSheets/IEaxSheets.htm);


	- рабочая книга анализа временных листов (для этого рабочую книгу
	 следует привести к интерфейсу [IEaxAnalyzer](KeExpress.chm::/Interface/IEaxAnalyzer/IEaxAnalyzer.htm));


	- [рабочее
	 пространство](Andy.chm::/Interface/IWxWorkspace/IWxWorkspace.htm).


Условно структура объектов разделена на секции. В зависимости от объекта
 под секцией подразумеваются различные элементы:


	- для регламентного отчета
	 под секцией подразумевается отдельный лист;


	- для экспресс-отчета,
	 состоящего из одного листа,
	 под секцией понимается весь документ;


	- для экспресс-отчета,
	 состоящего из нескольких листов,
	 под секцией понимается отдельный лист;


	- для рабочей книги анализа
	 временных листов под секцией подразумевается отдельный лист;


	- для рабочего пространства
	 под секцией подразумевается весь документ.


Для каждой секции можно установить свои [параметры
 страниц](IGxDocument.PageSettings.htm). В соответствии с этими параметрами осуществляется разбивка
 секции на отдельные страницы при печати и экспорте.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [BulkSettings](IGxDocument.BulkSettings.htm)
		 Свойство BulkSettings
		 возвращает параметры пакетного выполнения операции.


		 ![](../../Property_Image.gif)
		 [Exporter](IGxDocument.Exporter.htm)
		 Свойство Exporter возвращает
		 объект, содержащий дополнительные настройки для экспорта определенного
		 вида объектов.


		 ![](../../Property_Image.gif)
		 [Label](IGxDocument.Label.htm)
		 Свойство Label возвращает
		 параметры штампа, которым маркируются документы при экспорте и
		 печати.


		 ![](../../Property_Image.gif)
		 [OwnMultiCopiesPrint](IGxDocument.OwnMultiCopiesPrint.htm)
		 Свойство OwnMultiCopiesPrint
		 определяет, будет ли автоматически указан номер экземпляра в тексте
		 штампа маркировки при печати и экспорте отчета.


		 ![](../../Property_Image.gif)
		 [PageCount](IGxDocument.PageCount.htm)
		 Свойство PageCount
		 возвращает количество страниц секции, которые могут быть напечатаны.


		 ![](../../Property_Image.gif)
		 [PageSettings](IGxDocument.PageSettings.htm)
		 Свойство PageSettings
		 возвращает настройки секции с указанным индексом.


		 ![](../../Property_Image.gif)
		 [Preview](IGxDocument.Preview.htm)
		 Свойство Preview возвращает
		 изображение, используемое для предварительного просмотра отчетов.


		 ![](../../Property_Image.gif)
		 [RangeCount](IGxDocument.RangeCount.htm)
		 Свойство RangeCount
		 возвращает количество диапазонов печати.


		 ![](../../Property_Image.gif)
		 [RangeName](IGxDocument.RangeName.htm)
		 Свойство RangeName
		 возвращает наименование диапазона печати.


		 ![](../../Property_Image.gif)
		 [SectionCount](IGxDocument.SectionCount.htm)
		 Свойство SectionCount
		 возвращает количество секций в документе.


		 ![](../../Property_Image.gif)
		 [SectionName](IGxDocument.SectionName.htm)
		 Свойство SectionName
		 возвращает наименование указанной секции.


		 ![](../../Property_Image.gif)
		 [Stamps](IGxDocument.Stamps.htm)
		 Свойство Stamps определяет
		 набор штампов маркировки документа.


		 ![](../../Property_Image.gif)
		 [Title](IGxDocument.Title.htm)
		 Свойство Title возвращает
		 наименование объекта.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [GetTagText](IGxDocument.GetTagText.htm)
		 Метод GetTagText преобразовывает
		 заданный тег в текст.


		 ![](../../Sub_Image.gif)
		 [Print](IGxDocument.Print.htm)
		 Метод Print осуществляет
		 печать документа.


См. также:


[Интерфейсы сборки Drawing](../ModDrawing_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
