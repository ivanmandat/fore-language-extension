# ICubeMetaUpdateAdditionalObjects.Add

ICubeMetaUpdateAdditionalObjects.Add
-


# ICubeMetaUpdateAdditionalObjects.Add


## Синтаксис


Add(SourceObject: [IMetabaseObjectDescriptor](kesom.chm::/interface/imetabaseobjectdescriptor/imetabaseobjectdescriptor.htm)): [ICubeMetaUpdateAdditionalObject](../ICubeMetaUpdateAdditionalObject/ICubeMetaUpdateAdditionalObject.htm);


## Параметры


SourceObject. Объект репозитория, который должен быть добавлен в коллекцию.


## Описание


Метод Add добавляет указанный объект в коллекцию.


## Комментарии


После выполнения будет возвращен элемент коллекции, соответствующий указанному объекту репозитория. Элемент добавляется в конец коллекции, при этом значение свойства [ICubeMetaUpdateAdditionalObjects.Count](ICubeMetaUpdateAdditionalObjects.Count.htm) увеличивается на единицу.


Параметр SourceObject не может принимать значение Null.


## Пример


Использование свойства приведено в примере для [ICubeMetaUpdateEx.AdditionalObjects](../ICubeMetaUpdateEx/ICubeMetaUpdateEx.AdditionalObjects.htm).


См. также:


[ICubeMetaUpdateAdditionalObjects](ICubeMetaUpdateAdditionalObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
