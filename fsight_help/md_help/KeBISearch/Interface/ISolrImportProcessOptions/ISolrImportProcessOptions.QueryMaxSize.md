# ISolrImportProcessOptions.QueryMaxSize

ISolrImportProcessOptions.QueryMaxSize
-


# ISolrImportProcessOptions.QueryMaxSize


## Синтаксис


QueryMaxSize: Integer;


## Описание


Свойство QueryMaxSize определяет
 максимальный размер формируемого XML-документа с данными, который будет
 передаваться для индексации на сервер Apache Solr.


## Комментарии


Размер XML-документа указывается в байтах, по умолчанию установлено
 значение - 3145728 байт. При превышении размера сформированный документ
 будет разбиваться на несколько и передаваться несколькими запросами.


## Пример


Пример использования приведён в описании свойства [ISolrSearchEngineSchema.ImportProcessOptions](../ISolrSearchEngineSchema/ISolrSearchEngineSchema.ImportProcessOptions.htm).


См. также:


[ISolrImportProcessOptions](ISolrImportProcessOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
