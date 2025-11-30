# IMetabaseSecurity.EnvironmentAttributes

IMetabaseSecurity.EnvironmentAttributes
-


# IMetabaseSecurity.EnvironmentAttributes


## Синтаксис


		EnvironmentAttributes:
		 [IABACAttributeInstances](KeABAC.chm::/Interface/IABACAttributeInstances/IABACAttributeInstances.htm);


## Описание


Свойство EnvironmentAttributes
 возвращает [системные](admin.chm::/04_SecurityPolicy/Creating_conditions.htm#environment)
 атрибуты окружения.


## Комментарии


Свойство доступно только для чтения.


## Пример


Для выполнения примера добавьте ссылки на системные сборки: ABAC, Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Env: IABACAttributeInstances;

		    Attr: IABACAttributeInstance;

		    i, Count: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    Env := MB.Security.EnvironmentAttributes;

		    Count := Env.Count;

		    For i := 0 To Count-1 Do

		        Attr := Env.Item(i);

		        Debug.WriteLine(Attr.Attribute.Name(MB.CurrentLocale));

		    End For;

		End Sub UserProc;


В результате выполнения примера в консоль будут выведены наименования
 [системных](admin.chm::/04_SecurityPolicy/Creating_conditions.htm#environment)
 атрибутов среды окружения.


См. также:


[IMetabaseSecurity](IMetabaseSecurity.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
