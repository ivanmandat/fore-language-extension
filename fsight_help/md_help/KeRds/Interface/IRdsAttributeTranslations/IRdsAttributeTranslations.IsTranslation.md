# IRdsAttributeTranslations.IsTranslation

IRdsAttributeTranslations.IsTranslation
-


# IRdsAttributeTranslations.IsTranslation


## Синтаксис


IsTranslation: Boolean;


## Описание


Свойство доступно только для чтения.


Свойство IsTranslation возвращает
 признак того, является ли данный атрибут дополнительным атрибутом, предназначенным
 для перевода.


## Комментарии


При добавлении языковой настройки (метод [IRdsDictionaryTranslations.Add](../IRdsDictionaryTranslations/IRdsDictionaryTranslations.Add.htm))
 создаются дополнительные атрибуты справочника. Они создаются для всех
 строковых атрибутов, значения которых должны переводиться (свойство [IRdsAttributeTranslations.IsOn](IRdsAttributeTranslations.IsOn.htm)),
 и являются копиями данных атрибутов. Идентификатор дополнительных атрибутов
 будет состоять из идентификатора основного атрибута с добавлением суффикса
 - международной аббревиатуры языка. Например, при добавлении настройки
 перевода на английский язык (США) для атрибута «NAME» будет создан дополнительный
 атрибут «NAME_EN». Для всех дополнительных атрибутов перевода значение
 свойства IsTranslation - True.


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

        DictAttrs: IRdsAttributes;

        i: Integer;

        Attr: IRdsAttribute;

        TranslAttr: IRdsAttribute;

    Begin

        Mb := MetabaseClass.Active;

        RdsRepoDescr := Mb.ItemById("RDS_REPO");

        RdsDict := Mb.ItemByIdNamespace("RDS_DICT", RdsRepoDescr.Key).Edit As IRdsDictionary;

        DictTransl := RdsDict.Translations;

    // Указываем, что справочник будет переводится на различные языки

        DictTransl.IsOn := True;

    // Проверяем, существует ли настройка с параметрами перевода справочника на английский язык

        If DictTransl.FindByLocale(LocaleCodeID.English_UnitedStates) = Null Then

        // Настройка отсутствует. Добавляем ее

            DictTransl.Add(LocaleCodeID.English_UnitedStates);

        End If;

        DictAttrs := RdsDict.Attributes;

    // Выводим наименования основные и дополнительных атрибутов перевода

        For i := 0 To DictAttrs.Count - 1 Do

            Attr := DictAttrs.Item(i);

            AttrTransl := Attr.Translations;

            If (AttrTransl.IsOn) And Not (AttrTransl.IsTranslation) Then

                Debug.WriteLine("Основной атрибут: " + Attr.Name);

                TranslAttr := AttrTransl.Attribute(LocaleCodeID.English_UnitedStates);

                Debug.WriteLine("Дополнительный атрибут перевода: " + TranslAttr.Name);

                Debug.WriteLine("Уникальный идентификатор основного
 языка: " + AttrTransl.TranslationLocale.ToString);

            End If;

        End For;

        (RdsDict As IMetabaseObject).Save;

    End Sub UserProc;


После выполнения примера справочник НСИ будет настроен для работы с
 русским и английским языками. В окно консоли будут выведены наименования
 основных, дополнительных атрибутов перевода и уникальный идентификатор
 основного языка.


См. также:


[IRdsAttributeTranslations](IRdsAttributeTranslations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
