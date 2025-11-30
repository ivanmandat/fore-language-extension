# IMetabaseObjectDescriptor.FetchDependencies

IMetabaseObjectDescriptor.FetchDependencies
-


# IMetabaseObjectDescriptor.FetchDependencies


## Синтаксис


		FetchDependencies(FromSource: Boolean):
		 [IMetabaseObjectDescriptors](../IMetabaseObjectDescriptors/IMetabaseObjectDescriptors.htm);


## Параметры


FromSource.
 Параметр, определяющий для какого объекта будет вычисляться свойство.
 Данный параметр актуален для ярлыков. Если в качестве значения передавать
 True, то свойство вернет описания объектов,
 от которых зависит объект, на который ссылается ярлык. Если в качестве
 значения передавать False, то свойство вернет описание объекта,
 от которых зависит сам ярлык.


## Описание


Метод FetchDependencies возвращает
 коллекцию описаний объектов, от которых зависит данный объект.


## Комментарии


В отличие от свойства [IMetabaseObjectDescriptor.Dependencies](IMetabaseObjectDescriptor.Dependencies.htm)
 данный метод возвращает список описаний объектов с учетом объектов, для
 которых установлен признак [отложенной
 загрузки описания](IMetabaseObjectDescriptor.IsDeferred.htm).


Метод возвращает пустую коллекцию, если объект не зависит ни от одного
 объекта репозитория.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
