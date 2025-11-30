# IAccessElement.AccessToken

IAccessElement.AccessToken
-


# IAccessElement.AccessToken


## Синтаксис


AccessToken: [IAccessToken](../IAccessToken/IAccessToken.htm);


## Описание


Свойство AccessToken возвращает
 параметры мандатного контроля доступа для элемента.


## Комментарии


Для изменения параметров мандатного контроля доступа элемента используйте
 метод [IAccessElement.ApplyAccessToken](IAccessElement.ApplyAccessToken.htm).


## Пример


Для выполнения примера предполагается наличие в репозитория справочника
 НСИ с идентификатором RDS_DICT. Для пользователя, выполняющего пример,
 должна быть выдана привилегия «Изменение метки безопасности и списка контроля
 доступа любого объекта». В менеджере безопасности должна быть задана одна
 или более категорий секретности с несколькими уровнями безопасности.


Добавьте ссылки на системные сборки: Metabase, Rds.


			Sub MandatoryAccess;

Var

    MB: IMetabase;

    Object: IMetabaseObjectDescriptor;

    RdsDict: IRdsDictionary;

    AOS: IAccessObjectSecurity;

    Iterator: IAccessElementsIterator;

    Level: integer;

    Element: IAccessElement;

    Token: IAccessToken;

    SecCat: ISecurityCategory;

    SecLevel: ISecurityLevel;

Begin

    MB := MetabaseClass.Active;

    // Получаем справочник НСИ

    Object := MB.ItemById("RDS_DICT");

    RdsDict := Object.Bind As IRdsDictionary;

    // Проверяем, используется ли мандатный контроль доступа

    If RdsDict.HasMandatoryAccess Then

        // Выводим наименование атрибута, используемого для мандатного контроля доступа

        Debug.WriteLine(RdsDict.Attributes.MandatoryAccess.Id);

        // Изменяем права доступа для первого элемента справочника

        AOS := Object.GetSecurity;

        Iterator := AOS.GetElements;

        Level := Iterator.Next;

        Element := Iterator.Current;

        Element := Element.Edit;

        Token := Element.AccessToken;

        SecCat := MB.Security.Policy.MandatoryAccess.Category(0);

        SecLevel := SecCat.Level(0);

        Token.ClassificationLabel(SecCat) := SecLevel;

        Element.ApplyAccessToken(AccessElementApplyOptions.None);

    End If;

End Sub MandatoryAccess;


При выполнении примера, если для элементов справочника НСИ используется
 мандатный контроль доступа, то для первого элемента справочника будет
 установлен первый уровень безопасности в первой категории секретности.


См. также:


[IAccessElement](IAccessElement.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
