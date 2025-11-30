# ISolrSourceDataImportDestinationInfo

ISolrSourceDataImportDestinationInfo
-


# ISolrSourceDataImportDestinationInfo


Сборка: BISearch;


## Описание


Интерфейс ISolrSourceDataImportDestinationInfo
 содержит свойства для настройки параметров индексации варианта отображения,
 используемые при работе с Apache Solr.


## Иерархия наследования


           [ISourceDataImportDestinationInfo](../ISourceDataImportDestinationInfo/ISourceDataImportDestinationInfo.htm)


           ISolrSourceDataImportDestinationInfo


## Комментарии


Для задания настроек приведите результат свойства [ISourceDataImportDestinationInfos.Item](../ISourceDataImportDestinationInfos/ISourceDataImportDestinationInfos.Item.htm)
 или методов ISourceDataImportDestinationInfos.Add
 и [ISourceDataImportDestinationInfos.FindByKey](../ISourceDataImportDestinationInfos/ISourceDataImportDestinationInfos.FindByKey.htm)
 к интерфейсу ISolrSourceDataImportDestinationInfo.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DocumentExtensionInfo](ISolrSourceDataImportDestinationInfo.DocumentExtensionInfo.htm)
		 Свойство DocumentExtensionInfo
		 возвращает настройки, необходимые для заполнения пользовательских
		 полей из внешнего источника данных.


		 ![](../../Property_Image.gif)
		 [FieldBindings](ISolrSourceDataImportDestinationInfo.FieldBindings.htm)
		 Свойство FieldBindings
		 возвращает параметры заполнения пользовательских полей.


## Свойства, унаследованные от [ISourceDataImportDestinationInfo](../ISourceDataImportDestinationInfo/ISourceDataImportDestinationInfo.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Destination](../ISourceDataImportDestinationInfo/ISourceDataImportDestinationInfo.Destination.htm)
		 Свойство Destination
		 возвращает вариант отображения, для которого задаются настройки
		 индексации.


		 ![](../../Property_Image.gif)
		 [FreeDimensions](../ISourceDataImportDestinationInfo/ISourceDataImportDestinationInfo.FreeDimensions.htm)
		 Свойство FreeDimensions
		 возвращает список свободных измерений.


		 ![](../../Property_Image.gif)
		 [GroupByDl](../ISourceDataImportDestinationInfo/ISourceDataImportDestinationInfo.GroupByDl.htm)
		 Свойство GroupByDl
		 определяет признак группировки элементов календарного измерения
		 по уровням.


		 ![](../../Property_Image.gif)
		 [ImportMode](../ISourceDataImportDestinationInfo/ISourceDataImportDestinationInfo.ImportMode.htm)
		 Свойство ImportMode
		 определяет режим индексации варианта отображения источника данных.


		 ![](../../Property_Image.gif)
		 [KeyWordsDimensions](../ISourceDataImportDestinationInfo/ISourceDataImportDestinationInfo.KeyWordsDimensions.htm)
		 Свойство KeyWordsDimensions
		 возвращает список измерений, для которых будут генерироваться
		 ключевые слова.


		 ![](../../Property_Image.gif)
		 [SelectionSet](../ISourceDataImportDestinationInfo/ISourceDataImportDestinationInfo.SelectionSet.htm)
		 Свойство SelectionSet
		 определяет отметку измерений, в соответствии с которой необходимо
		 произвести индексацию.


См. также:


[Интерфейсы
 сборки BISearch](../KeBISearch_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
