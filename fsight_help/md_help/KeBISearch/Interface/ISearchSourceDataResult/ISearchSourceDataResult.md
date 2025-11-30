# ISearchSourceDataResult

ISearchSourceDataResult
-


# ISearchSourceDataResult


Сборка: BISearch;


## Описание


Интерфейс ISearchSourceDataResult
 содержит свойства записи с результатами поиска информации об элементах
 измерений, которые формируют срезы данных.


## Иерархия наследования


           [ISearchResult](../ISearchResult/ISearchResult.htm)


           ISearchSourceDataResult


## Комментарии


При поиске по индексированным данным элементов измерений для получения
 результата поиска приведите элемент, описываемый интерфейсом [ISearchResult](../ISearchResult/ISearchResult.htm), к интерфейсу ISearchSourceDataResult.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DateLevels](ISearchSourceDataResult.DateLevels.htm)
		 Свойство DateLevels
		 возвращает список уровней календаря, по которым в источнике имеются
		 данные.


		 ![](../../Property_Image.gif)
		 [HighlightedFreeDimensions](ISearchSourceDataResult.HighlightedFreeDimensions.htm)
		 Свойство HighlightedFreeDimensions
		 возвращает список свободных измерений источника с учетом подсветки
		 в наименованиях искомого текста.


		 ![](../../Property_Image.gif)
		 [HighlightedTime](ISearchSourceDataResult.HighlightedTime.htm)
		 Свойство HighlightedTime
		 возвращает список годов, по которым имеются данные с подсвеченным
		 искомым текстом.


		 ![](../../Property_Image.gif)
		 [SourceMetadata](ISearchSourceDataResult.SourceMetadata.htm)
		 Свойство SourceMetadata
		 возвращает метаданные источника данных.


		 ![](../../Property_Image.gif)
		 [Time](ISearchSourceDataResult.Time.htm)
		 Свойство Time возвращает
		 список годов, по которым имеются данные.


## Свойства, унаследованные от [ISearchResult](../ISearchResult/ISearchResult.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Description](../ISearchResult/ISearchResult.Description.htm)
		 Свойство Description
		 возвращает описание источника данных.


		 ![](../../Property_Image.gif)
		 [HighlightedDescription](../ISearchResult/ISearchResult.HighlightedDescription.htm)
		 Свойство HighlightedDescription
		 возвращает описание источника данных с подсвеченным искомым текстом
		 в нем.


		 ![](../../Property_Image.gif)
		 [HighlightedName](../ISearchResult/ISearchResult.HighlightedName.htm)
		 Свойство HighlightedName
		 возвращает наименование элемента с результатами поиска и с подсвеченным
		 искомым текстом в нем.


		 ![](../../Property_Image.gif)
		 [Name](../ISearchResult/ISearchResult.Name.htm)
		 Свойство Name возвращает
		 наименование элемента с результатом поиска.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateDimSelectionSet](ISearchSourceDataResult.CreateDimSelectionSet.htm)
		 Метод CreateDimSelectionSet
		 создает по найденным элементам измерений отметку, которая формирует
		 срез данных.


См. также:


[Интерфейсы
 сборки BISearch](../KeBISearch_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
