# IMetabaseGroup.Attributes

IMetabaseGroup.Attributes
-


# IMetabaseGroup.Attributes


## Синтаксис


		Attributes:
		 [IABACAttributeInstances](KeABAC.chm::/Interface/IABACAttributeInstances/IABACAttributeInstances.htm);


## Описание


Свойство Attributes возвращает
 [системные](admin.chm::/04_SecurityPolicy/Creating_conditions.htm#subject)
 и [пользовательские](admin.chm::/04_SecurityPolicy/Creating_attributes.htm#group)
 атрибуты групп пользователей.


## Комментарии


Свойство доступно только для чтения.


Для работы с коллекцией атрибутов групп пользователей используйте свойство
 [IMetabaseGroups.Attributes](../IMetabaseGroups/IMetabaseGroups.Attributes.htm).


## Пример


Для выполнения примера добавьте ссылки на системные сборки: ABAC, Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Group: IMetabaseGroup;

		    Groups: IMetabaseGroups;

		    Attr: IABACAttributeInstance;

		    i, Count: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    Groups := MB.Security.Groups;

		    Group := Groups.Item(0);

		    Count := Group.Attributes.Count;

		    For i := 0 To Count-1 Do

		        Attr := Group.Attributes.Item(i);

		        Debug.WriteLine(Attr.Name(MB.CurrentLocale));

		    End For;

		End Sub UserProc;


В результате выполнения примера в консоль будут выведены наименования
 всех [системных](admin.chm::/04_SecurityPolicy/Creating_conditions.htm#object)
 и [пользовательских](admin.chm::/04_SecurityPolicy/Creating_attributes.htm)
 атрибутов групп пользователей.


См. также:


[IMetabaseGroup](IMetabaseGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
