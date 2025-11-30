# ICubeMetaUpdateAdditionalObject.TargetParent

ICubeMetaUpdateAdditionalObject.TargetParent
-


# ICubeMetaUpdateAdditionalObject.TargetParent


## Синтаксис


TargetParent: [IMetabaseObjectDescriptor](kesom.chm::/interface/imetabaseobjectdescriptor/imetabaseobjectdescriptor.htm);


## Описание


Свойство TargetParent определяет
 родительский объект для объекта-копии.


## Комментарии


Значение свойства игнорируется, если указан объект-приёмник, который
 будет заменён объектом-источником: [ICubeMetaUpdateAdditionalObject.Target](ICubeMetaUpdateAdditionalObject.Target.htm).


При сохранении объекта копирования, настроенного на копирование базы
 данных временных рядов между разными репозиториями, значение данного свойства
 не сохраняется. Данное свойство должно быть установлено после загрузки
 объекта копирования из файла.


Примечание.
 Недопустима установка свойству [DescriptorOnly](ICubeMetaUpdateAdditionalObject.DescriptorOnly.htm)
 значения True, если для объекта
 указано свойство TargetParent.


## Пример


Пример использования свойства приведено в описании свойства [ICubeMetaUpdateEx.AdditionalObjects](../ICubeMetaUpdateEx/ICubeMetaUpdateEx.AdditionalObjects.htm).


См. также:


[ICubeMetaUpdateAdditionalObject](ICubeMetaUpdateAdditionalObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
