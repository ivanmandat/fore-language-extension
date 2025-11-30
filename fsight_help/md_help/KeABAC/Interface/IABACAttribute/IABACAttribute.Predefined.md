# IABACAttribute.Predefined

IABACAttribute.Predefined
-


# IABACAttribute.Predefined


## Синтаксис


Predefined: Boolean;


## Описание


Свойство Predefined возвращает
 значение True, если атрибут является
 [системным](Admin.chm::/04_SecurityPolicy/Creating_conditions.htm#available_attributes).


## Комментарии


Атрибуты делятся на [системные](admin.chm::/04_SecurityPolicy/Creating_conditions.htm#available_attributes)
 и [пользовательские](admin.chm::/04_SecurityPolicy/Creating_attributes.htm),
 используются при формировании [цели](../../../admin/04_SecurityPolicy/Target.htm)
 и [дополнительных
 условий](../../../admin/04_SecurityPolicy/Creating_conditions.htm) проверки доступа.


Примечание.
 Изменение свойств системных атрибутов недоступно.


## Пример


Для выполнения примера убедитесь, что для пользователей содержится пользовательский
 атрибут.


Добавьте ссылки на системные сборки: ABAC, Metabase.


Sub UserProc;

Var

    ABACAttribute: IABACAttribute;

    ABACAttributes: IABACAttributes;

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Str: String;

Begin

    MB := MetabaseClass.Active;

    MS := MB.Security;

    // Проверим атрибуты пользователей

    ABACAttributes := MS.Users.Attributes;

    ABACAttribute := ABACAttributes.Item(6);

    If ABACAttribute.Predefined = True Then

        Str:= "системный";

        Else Str:= "пользовательский";

    End If;

    Debug.WriteLine("Атрибут " + "«" + ABACAttribute.Name(MB.CurrentLocale) + "»" + " - " + Str);

    ABACAttribute := ABACAttributes.Item(7);

    If ABACAttribute.Predefined = True Then

        Str:= "системный";

        Else Str:= "пользовательский";

    End If;

    Debug.WriteLine("Атрибут " + "«" + ABACAttribute.Name(MB.CurrentLocale) + "»" + " - " + Str);

End Sub UserProc;


В результате выполнения примера в консоль будет выведено:


Атрибут «Администратор» - системный


Атрибут «ATTR16» - пользовательский


См. также:


[IABACAttribute](IABACAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
