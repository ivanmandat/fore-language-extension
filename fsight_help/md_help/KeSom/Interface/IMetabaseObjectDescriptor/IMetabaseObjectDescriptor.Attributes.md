# IMetabaseObjectDescriptor.Attributes

IMetabaseObjectDescriptor.Attributes
-


# IMetabaseObjectDescriptor.Attributes


## Синтаксис


		Attributes:
		 [IABACAttributeInstances](KeABAC.chm::/Interface/IABACAttributeInstances/IABACAttributeInstances.htm);


## Описание


Свойство Attributes возвращает
 [системные](admin.chm::/04_SecurityPolicy/Creating_conditions.htm#object)
 и [пользовательские](admin.chm::/04_SecurityPolicy/Creating_attributes.htm#object_classes)
 атрибуты объекта репозитория.


## Комментарии


Свойство доступно только для чтения.


## Пример


Для выполнения примера необходимо наличие объекта репозитория с идентификатором
 «OBJ_ATTR».


Добавьте ссылки на системные сборки: ABAC, Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MDesc: IMetabaseObjectDescriptor;

		    Attr: IABACAttributeInstances;

		    MDescr: IMetabaseObjectDescriptors;

		    i, Count: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    MDesc := Mb.ItemById("OBJ_ATTR");

		    Attr := MDesc.Attributes;

		    Count := Attr.Count;

		    For i := 0 To Count-1 Do

		        Debug.WriteLine(Attr.Item(i).Name(MB.CurrentLocale));

		    End For;

		End Sub UserProc;


В результате выполнения примера в консоль будут выведены наименования
 [системных](admin.chm::/04_SecurityPolicy/Creating_conditions.htm#object)
 и [пользовательских](admin.chm::/04_SecurityPolicy/Creating_attributes.htm#object_classes)
 атрибутов заданного объекта репозитория.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
