# IRubricator.RevisionsOnQuery

IRubricator.RevisionsOnQuery
-


# IRubricator.RevisionsOnQuery


## Синтаксис


RevisionsOnQuery: Boolean;


## Описание


Свойство RevisionsOnQuery определяет, будет ли справочник ревизий основан на запросе.


## Комментарии


Допустимые значения:


-
True. Справочник ревизий основан на запросе. Текст запроса определяет свойство [IMetaAttributes.SelectQueryText](KeRds.chm::/Interface/IMetaAttributes/IMetaAttributes.SelectQueryText.htm), возвращаемое свойством [IRubricator.Revisions](IRubricator.Revisions.htm).[Attributes](KeRds.chm::/Interface/IMetaDictionary/IMetaDictionary.Attributes.htm);


-
False. Справочник ревизий не основан на запросе.


## Пример


Использование свойства приведено в примере для [IRubricator.FactsOnQuery](IRubricator.FactsOnQuery.htm).


См. также:


[IRubricator](IRubricator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
