# IMetabaseUpdateObjectApplyState.CreatedObject

IMetabaseUpdateObjectApplyState.CreatedObject
-


# IMetabaseUpdateObjectApplyState.CreatedObject


## Синтаксис


CreatedObject : [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство CreatedObject возвращает описание объекта, созданного при обновлении. Если объект не был создан, данное свойство возвращает Null.


## Комментарии


Если происходит обновление без создания нового объекта, то CreatedObject будет пуст, а [UpdateObject](IMetabaseUpdateObjectApplyState.UpdateObject.htm) будет содержать ссылку на дескриптор обновленного объекта.


Если при обновлении создается новый объект, причем успешно, то и CreatedObject, и [UpdateObject](IMetabaseUpdateObjectApplyState.UpdateObject.htm) будут содержать ссылку на дескриптор созданного объекта.


Если в процессе обновления объекта из-за какой-либо ошибки был создан дескриптор объекта, но не обновились его метаданные, то CreatedObject будет содержать ссылку на этот дескриптор, а [UpdateObject](IMetabaseUpdateObjectApplyState.UpdateObject.htm) будет пуст.


См. также:


[IMetabaseUpdateObjectApplyState](IMetabaseUpdateObjectApplyState.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
