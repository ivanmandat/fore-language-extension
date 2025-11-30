# ISolrSearchField

ISolrSearchField
-


# ISolrSearchField


Сборка: BISearch;


## Описание


Интерфейс ISolrSearchField содержит
 свойства для настройки параметров поля, по которому может осуществляться
 поиск.


## Иерархия наследования


           [ISolrField](../ISolrField/ISolrField.htm)


           ISolrSearchField


## Комментарии


Поиск может осуществляться по полям с [типом](../ISolrField/ISolrField.Type.htm)
 [SolrFieldType.Search](../../Enums/SolrFieldType.htm)
 или [SolrFieldType.SystemSearch](../../Enums/SolrFieldType.htm).
 Для задания параметров таких полей приведите их к интерфейсу ISolrSearchField.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [BoostFactor](ISolrSearchField.BoostFactor.htm)
		 Свойство BoostFactor
		 определяет коэффициент значимости поля.


## Свойства, унаследованные от [ISolrField](../ISolrField/ISolrField.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DataType](../ISolrField/ISolrField.DataType.htm)
		 Свойство DataType определяет
		 тип данных значений, которые могут храниться по этому полю.


		 ![](../../Property_Image.gif)
		 [Fields](../ISolrField/ISolrField.Fields.htm)
		 Свойство Fields возвращает
		 родительскую коллекцию, которой принадлежит поле.


		 ![](../../Property_Image.gif)
		 [Id](../ISolrField/ISolrField.Id.htm)
		 Свойство Id определяет
		 наименование поля.


		 ![](../../Property_Image.gif)
		 [IncludeInSearchResult](../ISolrField/ISolrField.IncludeInSearchResult.htm)
		 Свойство IncludeInSearchResult
		 определяет признак включения индексированных значений поля в результаты
		 поиска.


		 ![](../../Property_Image.gif)
		 [MultiValue](../ISolrField/ISolrField.MultiValue.htm)
		 Свойство MultiValue
		 определяет признак возможности хранения по полю множественных
		 значений.


		 ![](../../Property_Image.gif)
		 [Type](../ISolrField/ISolrField.Type.htm)
		 Свойство Type определяет
		 тип поля.


См. также:


[Интерфейсы
 сборки BISearch](../KeBISearch_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
