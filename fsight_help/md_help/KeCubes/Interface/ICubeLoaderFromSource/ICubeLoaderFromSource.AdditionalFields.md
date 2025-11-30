# ICubeLoaderFromSource.AdditionalFields

ICubeLoaderFromSource.AdditionalFields
-


# ICubeLoaderFromSource.AdditionalFields


## Синтаксис


AdditionalFields: [IStringList](ModCollections.chm::/Interface/IStringList/IStringList.htm);


## Описание


Свойство AdditionalFields возвращает
 коллекцию, в которую можно включить несопоставленные поля источника, данные
 которых необходимо загрузить в результирующую таблицу куба.


## Комментарии


Свойство актуально, если в источнике есть поля, которые не сопоставлены
 с [измерениями](ICubeLoaderFromSource.DimensionBindings.htm)/[фактами](ICubeLoaderFromSource.FactBindings.htm) куба. Если
 данные по таким полям могут понадобиться в будущем в репозитории и их
 необходимо загрузить сейчас, то включите эти поля в коллекцию AdditionalFields.
 При [загрузке](ICubeLoaderFromSource.Load.htm) данные по этим
 полям также будут загружены в результирующую таблицу куба.


См. также:


[ICubeLoaderFromSource](ICubeLoaderFromSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
