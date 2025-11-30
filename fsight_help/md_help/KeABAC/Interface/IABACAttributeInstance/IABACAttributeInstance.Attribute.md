# IABACAttributeInstance.Attribute

IABACAttributeInstance.Attribute
-


# IABACAttributeInstance.Attribute


## Синтаксис


Attribute: [IABACAttribute](../IABACAttribute/IABACAttribute.htm);


## Описание


Свойство Attribute возвращает
 свойства атрибута для редактирования.


## Комментарии


Данное свойство актуально при редактировании свойств существующего атрибута.


Для определения свойств атрибута используйте интерфейс [IABACAttribute](../IABACAttribute/IABACAttribute.htm).


## Пример


Для выполнения примера убедитесь, что для пользователей добавлен [пользовательский
 атрибут](Admin.chm::/04_SecurityPolicy/Creating_attributes.htm#subject).


Добавьте ссылки на системные сборки: ABAC, Metabase, Dal.


Sub UserProc;

Var

    Insts: IABACAttributeInstances;

    Attr: IABACAttribute;

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Lic: Object;

    i, Count: Integer;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Изменим идентификатор последнего атрибута пользователя

    Insts := MS.Users.Item(0).Attributes;

    Count := Insts.Count;

    Attr := Insts.Item(Count-1).Attribute;

    Attr.Id := "WORKDAYS";

    // Выведем в консоль свойства пользовательских атрибутов пользователя

    For i := 0 To Count-1 Do

        If Insts.Item(i).Attribute.Predefined = False Then

            Debug.WriteLine("Наименование: " + Insts.Item(i).Name(MB.CurrentLocale)); // наименование

            Debug.WriteLine("Идентификатор: " + Insts.Item(i).Id); // идентификатор

            Debug.WriteLine("Ключ: " + Insts.Item(i).Key.ToString); // ключ

            Debug.WriteLine("Тип данных: " + Insts.Item(i).DataType.ToString); // тип данных

            Debug.WriteLine("============================");

        End If;

    End For;

    // Сохраним изменения в менеджере безопасности

    MB.Security.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


В результате выполнения примера для пользователей будет изменен идентификатор
 последнего атрибута. В консоль будут выведены свойства [пользовательских
 атрибутов](Admin.chm::/04_SecurityPolicy/Creating_attributes.htm#subject) пользователей:


Наименование: Пользовательский атрибут


Идентификатор: CUSTOM_ATTR


Ключ: 15


Тип данных: 1


============================


Наименование: Количество трудодней


Идентификатор: WORKDAYS


Ключ: 16


Тип данных: 2


============================


См. также:


[IABACAttributeInstance](IABACAttributeInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
