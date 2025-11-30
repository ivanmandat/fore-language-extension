# ISolrSearchOptions.RelevanceImpactFormula

ISolrSearchOptions.RelevanceImpactFormula
-


# ISolrSearchOptions.RelevanceImpactFormula


## Синтаксис


RelevanceImpactFormula: String;


## Описание


Свойство RelevanceImpactFormula
 определяет формулу влияния на релевантность поиска.


## Комментарии


Формула релевантности - это формула, на основании которой будет определяться
 значимость значений индексированных полей. В формуле могут использоваться
 созданные поля и различные функции. Список доступных функций представлен
 в справочной системе по Apache Solr по адресу [https://wiki.apache.org/solr/FunctionQuery](https://wiki.apache.org/solr/FunctionQuery).
 Результатом вычисления формулы должно быть целочисленное значение, которое,
 для определения значимости, будет умножено на значение релевантности найденного
 документа. Значение релевантности найденного документа рассчитывается
 Apache Solr.


## Пример


Пример использования приведён в описании свойства [ISolrSearchEngineSchema.SearchOptions](../ISolrSearchEngineSchema/ISolrSearchEngineSchema.SearchOptions.htm).


См. также:


[ISolrSearchOptions](ISolrSearchOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
