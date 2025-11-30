# ISourceDataImportContext

ISourceDataImportContext
-


# ISourceDataImportContext


Сборка: BISearch;


## Описание


Интерфейс ISourceDataImportContext
 содержит свойства и методы для настройки контекста индексации структуры
 источников данных.


## Иерархия наследования


           ISearchEngineImportContext


           ISourceDataImportContext


## Комментарии


Для создания контекста используйте метод [ISearchExecutor.CreateContext](../ISearchExecutor/ISearchExecutor.CreateContext.htm)
 и приведите результат его выполнения к интерфейсу ISourceDataImportContext.
 Настроенный контекст в дальнейшем используется методом [ISearchExecutor.Search](../ISearchExecutor/ISearchExecutor.Search.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [SourceInfos](ISourceDataImportContext.SourceInfos.htm)
		 Свойство SourceInfos
		 возвращает настройки индексации источников данных.


См. также:


[Интерфейсы
 сборки BISearch](../KeBISearch_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
