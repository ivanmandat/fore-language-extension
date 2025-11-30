# Управление правами доступа к атрибутам

Управление правами доступа к атрибутам
-


# Управление правами доступа к атрибутам


Для выполнения примера предполагается наличие справочника НСИ с идентификатором
 RDS_DICT. Справочник должен содержать пользовательский атрибут с идентификатором
 «USERATTRIBUT».


В списке [субъектов
 доступа](Admin.chm::/03_Admin/Users/Admin_Users.htm)
 платформы должны быть включены два дополнительные пользователя (помимо
 базового пользователя ADMIN и группы АДМИНИСТРАТОРЫ). В справочнике для
 дополнительных пользователей должны быть созданы [метки безопасности](Admin.chm::/03_Admin/Admin_AdminObjects_Marks.htm).


## Пример


Добавьте ссылки на системные сборки: Metabase, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Dict: IRdsDictionary;

    Attrs: IRdsAttributes;

    Attr: IRdsAttribute;

    SecLab: ISecurityLabels;

    Admin, User1, User2: ISecuritySubject;

Begin

    MB := MetabaseClass.Active;

    // Получаем справочник НСИ

    MObj := MB.ItemById("RDS_DICT").Edit;

    Dict := MObj As IRdsDictionary;

    SecLab := MObj.SecurityDescriptor.LabelSecurity;

    // Пользователи

    Admin := SecLab.Mapping(0); //Пользователь Admin

    User1 := SecLab.Mapping(2); //Первый дополнительный пользователь

    User2 := SecLab.Mapping(3); //Второй дополнительный пользователь

    // Права на атрибут «Наименование»

    Attrs := Dict.Attributes;

    Attr := Attrs.Name;

    Attr.ReadAccess := SecLab.Value(Admin) + SecLab.Value(User1);

    Attr.WriteAccess := SecLab.Value(User1) + SecLab.Value(User2);

    // Права на пользовательский атрибут «USERATTRIBUT»

    Attr := Attrs.FindById("USERATTRIBUT");

    Attr.ReadAccess := SecLab.Value(Admin) + SecLab.Value(User2);

    Attr.WriteAccess := SecLab.Value(User2);

    // Сохраняем изменения

    MObj.Save;

End Sub UserProc;


После выполнения примера в справочнике будут изменены права доступа
 к атрибутам «Наименование» и «USERATTRIBUT». Права для атрибута «Наименование»:
 чтение - пользователь ADMIN и первый дополнительный пользователь; запись
 - первый и второй дополнительные пользователи. Права для атрибута «USERATTRIBUT:
 чтение - пользователь ADMIN и второй дополнительный пользователь; запись
 - второй дополнительный пользователь.


См. также:


[Примеры](KeRds_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
