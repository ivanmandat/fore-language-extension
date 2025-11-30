# IGxStamp.Rtf

IGxStamp.Rtf
-


# IGxStamp.Rtf


## Синтаксис


Rtf: String;


## Описание


Свойство Rtf определяет текст
 штампа маркировки в формате rtf.


## Комментарии


Для конвертации текста штампа в формат rtf можно использовать метод
 [ITextConverter.Export](ForeSys.chm::/Interface/ITextConverter/ITextConverter.Export.htm).


В тексте штампа маркировки можно использовать подстановки:


	- &[COPYNUMBER]. Номер печатного экземпляра. Для работы подстановки
	 необходимо задать свойство [IGxDocument.OwnMultiCopiesPrint](../IGxDocument/IGxDocument.OwnMultiCopiesPrint.htm).
	 При экспорте значение подстановки будет равно единице.


	- &[PAGES]. Количество страниц во всем документе;


	- &[PAGE]. Номер страницы относительно общего числа страниц
	 в документе;


	- &[SHEET.PAGES]. Количество страниц на листе;


	- &[SHEET.PAGE]. Номер страницы листа относительно общего
	 числа страниц на листе.


## Пример


Пример использования приведен в свойстве [IGxDocument.Stamps](../IGxDocument/IGxDocument.Stamps.htm).


См. также:


[IGxStamp](IGxStamp.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
