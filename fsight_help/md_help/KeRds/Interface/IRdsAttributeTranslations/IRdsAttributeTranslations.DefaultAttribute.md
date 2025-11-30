# IRdsAttributeTranslations.DefaultAttribute

IRdsAttributeTranslations.DefaultAttribute
-


# IRdsAttributeTranslations.DefaultAttribute


## Синтаксис


DefaultAttribute: [IRdsAttribute](../IRdsAttribute/IRdsAttribute.htm);


## Описание


Свойство доступно только для чтения.


Свойство DefaultAttribute возвращает
 основной атрибут, значения которого должны переводится на различные языки.


## Комментарии


При добавлении языковой настройки (метод [IRdsDictionaryTranslations.Add](../IRdsDictionaryTranslations/IRdsDictionaryTranslations.Add.htm))
 создаются дополнительные атрибуты справочника. Они создаются для всех
 строковых атрибутов, значения которых должны переводиться (свойство [IRdsAttributeTranslations.IsOn](IRdsAttributeTranslations.IsOn.htm)),
 и являются копиями данных атрибутов. Идентификатор дополнительных атрибутов
 будет состоять из идентификатора основного атрибута с добавлением суффикса
 - международной аббревиатуры языка. Например, при добавлении настройки
 перевода на английский язык (США) для атрибута «NAME» будет создан дополнительный
 атрибут «NAME_EN». Для всех дополнительных атрибутов перевода значение
 свойства [IRdsAttributeTranslations.IsTranslation](IRdsAttributeTranslations.IsTranslation.htm)
 - True.


Для настроек основного атрибута данное свойство вернет атрибут справочника
 НСИ, который соответствует основному атрибуту.


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

        MainAttr: IRdsAttribute;

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

    // Выводим наименования основных и дополнительных атрибутов перевода

        For i := 0 To DictAttrs.Count - 1 Do

            Attr := DictAttrs.Item(i);

            AttrTransl := Attr.Translations;

            If AttrTransl.IsTranslation Then

                MainAttr := AttrTransl.DefaultAttribute;

                Debug.WriteLine("Основной атрибут: " + MainAttr.Name);

                Debug.WriteLine("Дополнительный атрибут перевода: " + Attr.Name);

            End If;

        End For;

        (RdsDict As IMetabaseObject).Save;

    End Sub UserProc


После выполнения примера справочник НСИ будет настроен для работы
 с русским и английским языками. В окно консоли будут выведены наименования
 основных и дополнительных атрибутов перевода.


См. также:


[IRdsAttributeTranslations](IRdsAttributeTranslations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
