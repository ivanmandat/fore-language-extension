# ICubeMetaExporterFilter.AttributeKey

ICubeMetaExporterFilter.AttributeKey
-


# ICubeMetaExporterFilter.AttributeKey


## Синтаксис


AttributeKey: Integer;


## Описание


Свойство AttributeKey определяет
 ключ атрибута временных рядов, по которому будет производиться фильтрация.


## Комментарии


Задание атрибутов базы данных временных рядов для фильтрации экспортируемых
 временных рядов осуществляется несколькими способами:


	- используя идентификаторы атрибутов: свойство [ICubeMetaExporterFilter](ICubeMetaExporterFilter.htm);


	- используя ключи атрибутов: свойство AttributeKey;


	- используя ключи и идентификаторы атрибутов одновременно.


Если для фильтрации используются лишь идентификаторы атрибутов, то в
 процессе экспорта могут возникнуть ошибки, если идентификатор атрибута
 в базе данных временных рядов был изменен. Более надежной является привязка
 с использованием ключей атрибутов.


## Пример


Использование свойства приведено в примере для [ICubeMetaExporterBinding.AttributeKey](../ICubeMetaExporterBinding/ICubeMetaExporterBinding.AttributeKey.htm).


См. также:


[ICubeMetaExporterFilter](ICubeMetaExporterFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
