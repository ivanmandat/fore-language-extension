# IMetabaseUser.Attributes

IMetabaseUser.Attributes
-


# IMetabaseUser.Attributes


## Синтаксис


		Attributes:
		 [IABACAttributeInstances](KeABAC.chm::/Interface/IABACAttributeInstances/IABACAttributeInstances.htm);


## Описание


Свойство Attributes возвращает
 [системные](admin.chm::/04_SecurityPolicy/Creating_conditions.htm#subject)
 и [пользовательские](admin.chm::/04_SecurityPolicy/Creating_attributes.htm#subject)
 атрибуты пользователей.


## Комментарии


Свойство доступно только для чтения.


Для работы с коллекцией атрибутов пользователей используйте свойство
 [IMetabaseUsers.Attributes](../IMetabaseUsers/IMetabaseUsers.Attributes.htm).


## Пример


Для выполнения примера добавьте ссылки на системные сборки: ABAC, Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    User: IMetabaseUser;

		    Users: IMetabaseUsers;

		    Attr: IABACAttributeInstance;

		    i, Count: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    Users := MB.Security.Users;

		    User := Users.Item(0);

		    Count := User.Attributes.Count;

		    For i := 0 To Count-1 Do

		        Attr := User.Attributes.Item(i);

		        Debug.WriteLine(Attr.Name(MB.CurrentLocale));

		    End For;

		End Sub UserProc;


В результате выполнения примера в консоль будут выведены наименования
 всех [системных](admin.chm::/04_SecurityPolicy/Creating_conditions.htm#object)
 и [пользовательских](admin.chm::/04_SecurityPolicy/Creating_attributes.htm)
 атрибутов пользователей.


См. также:


[IMetabaseUser](IMetabaseUser.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
