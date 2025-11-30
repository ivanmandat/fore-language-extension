# ISearchMbObjectResult.HighlightedContent

ISearchMbObjectResult.HighlightedContent
-


# ISearchMbObjectResult.HighlightedContent


## Синтаксис


HighlightedContent: String;


## Описание


Свойство HighlightedContent
 возвращает содержимое объекта «Документ» с подсвеченным искомым текстом.


## Комментарии


Свойство будет доступно, если при поиске свойству [ISolrMbObjectsSearchContext.NeedDocumentContent](../ISolrMbObjectsSearchContext/ISolrMbObjectsSearchContext.NeedDocumentContent.htm)
 было установлено значение True,
 текущий найденный объект является объектом «[Документ](UiNavObj.chm::/UiNavObj_document.htm)»
 и искомое значение было найдено в его содержимом.


Искомое значение будет обрамлено тегом <hlt>...</hlt>.


## Пример


Пример использования приведён в описании свойства [ISolrMbObjectsSearchContext.NeedDocumentContent](../ISolrMbObjectsSearchContext/ISolrMbObjectsSearchContext.NeedDocumentContent.htm).


См. также:


[ISearchMbObjectResult](ISearchMbObjectResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
