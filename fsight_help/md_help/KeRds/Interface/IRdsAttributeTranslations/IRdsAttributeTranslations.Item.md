# IRdsAttributeTranslations.Item

IRdsAttributeTranslations.Item
-


# IRdsAttributeTranslations.Item


## Синтаксис


Item(Locale: [LocaleCodeID](ForeSys.chm::/Enums/LocaleCodeID.htm)):
 [IRdsAttributeTranslation](../IRdsAttributeTranslation/IRdsAttributeTranslation.htm);


## Параметры


Locale. Уникальный числовой
 идентификатор языка.


## Описание


Свойство Item возвращает
 настройку перевода атрибута для указанного языка.


## Комментарии


В качестве параметра Locale
 нельзя указывать значение LocaleCodeID.None.


Если существует настройка перевода для языка, указанного в параметре
 Locale, то метод возвращает данную
 настройку. Если настройки для указанного языка в параметре Locale не существует, то метод
 возвращает значение Null.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ, содержащего
 справочник НСИ. Идентификатор репозитория - «RDS_REPO», справочника -
 «RDS_DICT». Для [репозитория
 пользователя](KeSom.chm::/Interface/IMetabase/IMetabase.DefaultLocale.htm) русский язык установлен по умолчанию.
 Также необходимо добавить ссылки на системные сборки «Metabase» и «Rds».


			    Sub UserProc;

    Var

        Mb: IMetabase;

        RdsRepoDescr: IMetabaseObjectDescriptor;

        RdsDict: IRdsDictionary;

        DictTransl: IRdsDictionaryTranslations;

        AttrTransl: IRdsAttributeTranslations;

        Attr: IRdsAttribute;

        Transl: IRdsAttributeTranslation;

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

    // Указываем, что атрибут будет переводится на различные языки

        AttrTransl.IsOn := True;

    // Задаем наименование атрибута "NAME" для русского и английского языков

        Transl := AttrTransl.Item(LocaleCodeID.Russian);

        Transl.Name := "Наименование государства";

        Transl := AttrTransl.Item(LocaleCodeID.English_UnitedStates);

        Transl.Name := "State name";

        Debug.WriteLine(Transl.Attribute.Name);

        Debug.WriteLine(Transl.Locale);

    // Сохраняем изменения

        (RdsDict As IMetabaseObject).Save;

    End Sub UserProc;


После выполнения примера справочник НСИ будет настроен для работы
 с русским и английским языками. Будут заданы наименования справочника
 и наименования атрибута «NAME» для отображения на данных языках. Идентификатор
 дополнительного атрибута для перевода значений атрибута «NAME» на английский
 язык (США) и уникальный идентификатор данного языка будут выведены в окно
 консоли.


См. также:


[IRdsAttributeTranslations](IRdsAttributeTranslations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
