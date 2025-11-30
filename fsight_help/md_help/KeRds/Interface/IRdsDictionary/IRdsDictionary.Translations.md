# IRdsDictionary.Translations

IRdsDictionary.Translations
-


# IRdsDictionary.Translations


## Синтаксис


Translations: [IRdsDictionaryTranslations](../IRdsDictionaryTranslations/IRdsDictionaryTranslations.htm);


## Описание


Свойство Translations возвращает
 коллекцию настроек, содержащих параметры перевода справочники НСИ на различные
 языки.


## Комментарии


Изначально в коллекции содержится настройка для языка, установленного
 по умолчанию для репозитория пользователя. Чтобы настройки из коллекции
 применялись к справочнику НСИ для него должен быть разрешен перевод на
 другие языки, т.е. свойство [IRdsDictionaryTranslations.IsOn](../IRdsDictionaryTranslations/IRdsDictionaryTranslations.IsOn.htm)
 установлено в True.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ, содержащего
 справочник НСИ. Идентификатор репозитория - «RDS_REPO», справочника -
 «RDS_DICT». Для [репозитория
 пользователя](KeSom.chm::/Interface/IMetabase/IMetabase.DefaultLocale.htm) русский язык установлен по умолчанию.
 Также необходимо добавить ссылки на системные сборки «Metabase» и «Rds».


			Sub UserSub;

Var

    Mb: IMetabase;

    RdsRepoDescr: IMetabaseObjectDescriptor;

    RdsDict: IRdsDictionary;

    DictTransl: IRdsDictionaryTranslations;

    AttrTransl: IRdsAttributeTranslations;

    Attr: IRdsAttribute;

Begin

    Mb := MetabaseClass.Active;

    RdsRepoDescr := Mb.ItemById("RDS_REPO");

    RdsDict := Mb.ItemByIdNamespace("RDS_DICT", RdsRepoDescr.Key).Edit As IRdsDictionary;

   DictTransl := RdsDict.Translations;

    // Указываем, что справочник будет переводиться на различные языки

    DictTransl.IsOn := True;

    // Проверяем, существует ли настройка с параметрами перевода справочника на английский язык

    If DictTransl.FindByLocale(LocaleCodeID.English_UnitedStates) = Null Then

    // Настройка отсутствует,
 добавляем ее

        DictTransl.Add(LocaleCodeID.English_UnitedStates);

    End If;

    // Задаем наименование справочника для русского и английского языков

    DictTransl.Name(LocaleCodeID.Russian) := "Справочник государств";

    DictTransl.Name(LocaleCodeID.English_UnitedStates) := "States dictionary";

    //  Получаем параметры атрибута "NAME"

    Attr := RdsDict.Attributes.FindById("NAME");

    AttrTransl := Attr.Translations;

    // Указываем, что атрибут будет переводиться на различные языки

   AttrTransl.IsOn := True;

    // Задаем наименование атрибута "NAME" для русского и английского языков

    AttrTransl.Name(LocaleCodeID.Russian) := "Наименование государства";

    AttrTransl.Name(LocaleCodeID.English_UnitedStates) := "State name";

    // Сохраняем изменения

    (RdsDict As IMetabaseObject).Save;

End Sub UserSub;


После выполнения примера справочник НСИ будет настроен для работы с
 русским и английским языками. Будут заданы наименования справочника и
 наименования атрибута «NAME» для отображения на данных языках.


См. также:


[IRdsDictionary](IRdsDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
