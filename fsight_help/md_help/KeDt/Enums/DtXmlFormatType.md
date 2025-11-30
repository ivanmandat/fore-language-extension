# DtXmlFormatType

DtXmlFormatType
-


# DtXmlFormatType


## Описание


Перечисление DtXmlFormatType
 содержит форматы структуры файла, в соответствии с которым будет производиться
 импорт данных.


Используется следующими свойствами и методами:


	- [IDtXmlProvider.FormatType](../Interface/IDtXmlProvider/IDtXmlProvider.FormatType.htm)


	- [IDtXmlConsumer.FormatType](../Interface/IDtXmlConsumer/IDtXmlConsumer.FormatType.htm)


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 FieldsAsNodes - поля
		 располагаются в дочерних вершинах, относительно вершины указанной
		 в запросе. Имя поля = имя вершины, значение поля = значение вершины.


		 1
		 FieldsAsAttributes
		 - поля располагаются в атрибутах вершины. Имя поля = имя атрибута
		 вершины строки, значение поля = значение атрибута вершины строки.


См. также:


[Перечисления сборки Dt](KeDt_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
