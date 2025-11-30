# ICubeMetaCopierBinding.SourceAttributeKey

ICubeMetaCopierBinding.SourceAttributeKey
-


# ICubeMetaCopierBinding.SourceAttributeKey


## Синтаксис


SourceAttributeKey: Integer;


## Описание


Свойство SourceAttributeKey определяет ключ атрибута базы-источника.


## Комментарии


Привязка атрибута базы-приёмника с атрибутами базы-источника данных может осуществляться несколькими способами:


-
используя идентификаторы атрибутов: свойства [ICubeMetaCopierBinding.DestinationAttribute](ICubeMetaCopierBinding.DestinationAttribute.htm) и [ICubeMetaCopierBinding.SourceAttribute](ICubeMetaCopierBinding.SourceAttribute.htm);


-
используя ключи атрибутов: свойства SourceAttributeKey и [ICubeMetaCopierBinding.DestinationAttributeKey](ICubeMetaCopierBinding.DestinationAttributeKey.htm);


-
используя ключи и идентификаторы атрибутов одновременно.


Если для привязки используются лишь идентификаторы атрибутов, то в процессе экспорта/импорта данных могут возникнуть ошибки, если идентификатор атрибута в какой-либо из баз был изменен. Более надежной является привязка с использованием ключей атрибутов.


## Пример


Использование свойства приведено в примере для [ICubeMetaCopierBinding.DestinationAttributeKey](ICubeMetaCopierBinding.DestinationAttributeKey.htm).


См. также:


[ICubeMetaCopierBinding](ICubeMetaCopierBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
