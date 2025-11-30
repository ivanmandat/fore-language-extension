# IMetabaseObjectSecurity.GetAccessSecurity

IMetabaseObjectSecurity.GetAccessSecurity
-


# IMetabaseObjectSecurity.GetAccessSecurity


## Синтаксис


GetAccessSecurity(Options: Integer): [IAccessObjectSecurity](../IAccessObjectSecurity/IAccessObjectSecurity.htm);


## Параметры


Options. Параметр не используется,
 зарезервирован на будущее. Для работы метода задайте любое значение.


## Описание


Метод GetAccessSecurity получает
 политику доступа к объекту.


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 НСИ с идентификатором RDS_DICT. Пользователь, выполняющий пример, должен
 обладать [привилегией](Admin.chm::/04_SecurityPolicy/Admin_Priv.htm)
 «Изменение метки безопасности и списка
 контроля доступа любого объекта».


Добавьте ссылки на системные сборки: Metabase, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObjectDescriptor;

    Object: IMetabaseObject;

    MS: IMetabaseObjectSecurity;

    AOS: IAccessObjectSecurity;

    Iterator: IAccessElementsIterator;

    Level: Integer;

    Element: IAccessElement;

    AttributeValue: IAccessAttributeValue;

Begin

    // Получим текущий репозиторий

    MB := MetabaseClass.Active;

    // Получим справочник НСИ

    MObj := MB.ItemById("RDS_DICT");

    Object := MObj.Edit;

    MS := MObj As IMetabaseObjectSecurity;

    // Проверим использование дискреционного контроля доступа для элементов справочника НСИ

    If MS.AccessSecured Then

        // Изменим права доступа первого элемента справочника

        AOS := MS.GetAccessSecurity(1);

        Iterator := AOS.GetElements;

        Level := Iterator.Next;

        Element := Iterator.Current;

        Element := Element.Edit;

        Debug.WriteLine(Element.Name);

        AttributeValue := New AccessAttributeValue.Create(32,12);

        Element.AttributeAccess(AccessElementAttributes.Read) := AttributeValue;

        Element.Apply(AccessElementApplyOptions.ByHierarhy);

        // Сохраним изменения

        Object.Save;

    End If;

End Sub UserProc;


После выполнения примера будут изменены права доступа на чтение для
 первого элемента справочника НСИ и всех его дочерних элементов. Для первых
 двух субъектов безопасности доступ к данным элементам будет запрещен.


См. также:


[IMetabaseObjectSecurity](IMetabaseObjectSecurity.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
