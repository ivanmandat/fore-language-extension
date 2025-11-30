# ISearchEngineService

ISearchEngineService
-


# ISearchEngineService


Сборка: BISearch;


## Описание


Интерфейс ISearchEngineService
 содержит свойства и методы для получения доступа к основным функциям поискового
 сервиса.


## Иерархия наследования


           [ISearchEngineServiceBase](KeSom.chm::/Interface/ISearchEngineServiceBase/ISearchEngineServiceBase.htm)


           ISearchEngineService


## Комментарии


Данный интерфейс является базовым для интерфейса [ISolrSearchEngineService](../ISolrSearchEngineService/ISolrSearchEngineService.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [SearchEngineSchema](ISearchEngineService.SearchEngineSchema.htm)
		 Свойство SearchEngineSchema
		 возвращает объект, предоставляющий доступ к основной функциональности
		 поискового сервиса.


## Свойства, унаследованные от [ISearchEngineServiceBase](KeSom.chm::/Interface/ISearchEngineServiceBase/ISearchEngineServiceBase.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Metabase](KeSom.chm::/Interface/ISearchEngineServiceBase/ISearchEngineServiceBase.Metabase.htm)


		 Свойство Metabase возвращает
		 репозиторий, для работы с которым предназначена поисковая платформа.


## Методы, унаследованные от [ISearchEngineServiceBase](KeSom.chm::/Interface/ISearchEngineServiceBase/ISearchEngineServiceBase.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [LoadFromXml](KeSom.chm::/Interface/ISearchEngineServiceBase/ISearchEngineServiceBase.LoadFromXml.htm)


		 Метод LoadFromXml загружает
		 параметры поисковой платформы из указанного XML-элемента.


		 ![](../../Sub_Image.gif)
		 [SaveToXml](KeSom.chm::/Interface/ISearchEngineServiceBase/ISearchEngineServiceBase.SaveToXml.htm)


		 Метод SaveToXml сохраняет
		 настройки поисковой платформы в указанный XML-элемент.


См. также:


[Интерфейсы
 сборки BISearch](../KeBISearch_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
