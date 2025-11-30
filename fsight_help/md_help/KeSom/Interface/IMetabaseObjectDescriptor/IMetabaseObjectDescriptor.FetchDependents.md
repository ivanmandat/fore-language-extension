# IMetabaseObjectDescriptor.FetchDependents

IMetabaseObjectDescriptor.FetchDependents
-


# IMetabaseObjectDescriptor.FetchDependents


## Синтаксис


		FetchDependents: [IMetabaseObjectDescriptors](../IMetabaseObjectDescriptors/IMetabaseObjectDescriptors.htm);


## Описание


Метод FetchDependents возвращает
 коллекцию описаний объектов, зависящих от данного объекта.


## Комментарии


В отличие от свойства [IMetabaseObjectDescriptor.Dependents](IMetabaseObjectDescriptor.Dependents.htm)
 данный метод возвращает список описаний объектов с учетом объектов, для
 которых установлен признак [отложенной
 загрузки описания](IMetabaseObjectDescriptor.IsDeferred.htm).


Свойство возвращает пустую коллекцию, если от данного объекта не зависит
 ни один объект репозитория.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
