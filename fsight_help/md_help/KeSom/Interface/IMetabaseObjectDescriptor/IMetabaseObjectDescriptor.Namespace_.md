# IMetabaseObjectDescriptor.Namespace_

IMetabaseObjectDescriptor.Namespace_
-


# IMetabaseObjectDescriptor.Namespace_


## Синтаксис


Namespace_: [IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


## Описание


Свойство Namespace_ возвращает
 описание объекта-контейнера, в котором хранится текущий объект.


## Комментарии


Свойство Namespace_ будет доступно
 только для тех объектов, которые хранятся в объектах-контейнерах. Для
 всех остальных объектов свойство вернет значение Null.


## Пример


В примере описана функция «GetNamespace».


Добавьте ссылку на системную сборку Metabase.


					Function GetNamespace(Descriptor: IMetabaseObjectDescriptor): IMetabaseObjectDescriptor;

		Var

		    Space: IMetabaseObjectDescriptor;

		Begin

		    Space := Descriptor.Namespace_;

		    If Space = Null Then

		        Space := Descriptor.Metabase.Root;

		    End If;

		    Return Space;

		End Function GetNamespace;


Указанная функция может использоваться для получения описания объекта,
 который является контейнером для объекта, передаваемого в качестве параметра.
 Если передаваемый объект не хранится в объекте-контенере, то функция вернёт
 описание корневой папки репозитория.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
