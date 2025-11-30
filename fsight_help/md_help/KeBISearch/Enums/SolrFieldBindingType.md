# SolrFieldBindingType

SolrFieldBindingType
-


# SolrFieldBindingType


## Описание


Перечисление SolrFieldBindingType содержит
 типы привязок для автоматического заполнения пользовательских полей при
 индексации.


Используется следующими свойствами и методами:


	- [ISolrImportFieldBindings.AddBinding](../Interface/ISolrImportFieldBindings/ISolrImportFieldBindings.AddBinding.htm);


	- [ISolrImportFieldBinding.Type](../Interface/ISolrImportFieldBinding/ISolrImportFieldBinding.Type.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 ByAttribute. Привязка
		 пользовательского поля к какому-либо атрибуту измерения.


		 1
		 ByField. Привязка пользовательского
		 поля к другому полю (Поля данных могут привязываться только к
		 полям метаданных и наоборот).


		 2
		 ByDocumentExtension.
		 Привязка к внешнему источнику данных. В качестве значения пользовательского
		 поля будут подставляться значения по выбранному элементу внешнего
		 источника данных.


См. также:


[Перечисления
 сборки BISearch](KeBISearch_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
