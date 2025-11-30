# IMetabaseObjectDescriptor.FetchChildren

IMetabaseObjectDescriptor.FetchChildren
-


# IMetabaseObjectDescriptor.FetchChildren


## Синтаксис


		FetchChildren: [IMetabaseObjectDescriptors](../IMetabaseObjectDescriptors/IMetabaseObjectDescriptors.htm);


## Описание


Метод FetchChildren возвращает
 коллекцию описаний дочерних объектов.


## Комментарии


В отличие от свойства [IMetabaseObjectDescriptor.Children](IMetabaseObjectDescriptor.Children.htm)
 данный метод, кроме описаний непосредственных дочерних объектов, возвращает
 описания объектов, для которых установлен признак [отложенной
 загрузки описания](IMetabaseObjectDescriptor.IsDeferred.htm). Для ярлыка возвращается коллекция описаний исходного
 объекта.


Метод возвращает пустую коллекцию, если объект не имеет дочерних объектов.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
