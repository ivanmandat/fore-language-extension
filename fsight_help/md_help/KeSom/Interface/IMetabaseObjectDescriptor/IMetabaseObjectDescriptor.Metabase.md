# IMetabaseObjectDescriptor.Metabase

IMetabaseObjectDescriptor.Metabase
-


# IMetabaseObjectDescriptor.Metabase


## Синтаксис


Metabase: [IMetabase](../IMetabase/IMetabase.htm);


## Описание


Свойство Metabase возвращает
 репозиторий, в котором создан текущий объект.


## Пример


В примере описана функция «GetMetabase».


Подключите системную сборку Metabase.


					Function GetMetabase(Descriptor: IMetabaseObjectDescriptor): IMetabase;

		Begin

		    If Descriptor.IsLink Then

		        Return (Descriptor.Link.Open(Null) As IMetabaseLinkInstance).Metabase;

		    Else

		        Return Descriptor.Metabase;

		    End If;

		End Function GetMetabase;


Указанная функция может использоваться для получения репозитория по
 описанию объекта. Если описание соответствует ярлыку на объект из другого
 репозитория, то осуществляется открытие связи с репозиторием и получение
 контекста репозитория.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
