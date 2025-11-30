# SourceImportMode

SourceImportMode
-


# SourceImportMode


## Описание


Перечисление SourceImportMode определяет
 режим индексации варианта отображения источника данных.


Используется следующими свойствами и методами:


	- [ISourceDataImportDestinationInfo.ImportMode](../Interface/ISourceDataImportDestinationInfo/ISourceDataImportDestinationInfo.ImportMode.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Full. Полная индексация:


			- Отстраивается матрица с данными, для формирования наборов
			 элементов измерений, по которым имеются данные. Эти элементы
			 будут проиндексированы;

			- Индексируются описание и наименование источника данных;

			- Индексируются значения пользовательских полей. Значения
			 задаются через макрос, указанный в [ISolrImportCustomBinding.ClassName](../Interface/ISolrImportCustomBinding/ISolrImportCustomBinding.ClassName.htm).


		 1
		 SystemUpdate. Индексируются
		 описание и наименование источника данных.


		 2
		 CustomUpdate. Индексируются
		 значения пользовательских полей (Значения задаются через макрос,
		 указанный в [ISolrImportCustomBinding.ClassName](../Interface/ISolrImportCustomBinding/ISolrImportCustomBinding.ClassName.htm)),
		 а также настройки, указанные в [ISolrSourceDataImportDestinationInfo.DocumentExtensionInfo](../Interface/ISolrSourceDataImportDestinationInfo/ISolrSourceDataImportDestinationInfo.DocumentExtensionInfo.htm).


		 3
		 Update. Индексируются
		 значения, соответствующие SystemUpdate
		 и CustomUpdate.


Примечание.
 Если осуществляется не полная индексация (выбран вариант SystemUpdate, CustomUpdate или
 Update), то необходимо учитывать значение свойства [ISolrImportContext.CleanType](../Interface/ISolrImportContext/ISolrImportContext.CleanType.htm). Если
 свойству задано значение [SolrImportCleanType.Specified](SolrImportCleanType.htm)
 или [SolrImportCleanType.All](SolrImportCleanType.htm),
 то имеющиеся индексированные данные будут удалены. При этом новые данные
 индексированы не будут.


См. также:


[Перечисления
 сборки BISearch](KeBISearch_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
