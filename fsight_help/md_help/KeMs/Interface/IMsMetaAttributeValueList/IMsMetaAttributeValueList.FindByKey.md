# IMsMetaAttributeValueList.FindByKey

IMsMetaAttributeValueList.FindByKey
-


# IMsMetaAttributeValueList.FindByKey


## Синтаксис


FindByKey(AttributeKey: String): [IMsMetaAttributeValue](../IMsMetaAttributeValue/IMsMetaAttributeValue.Value.htm);


## Параметры


AttributeKey. Ключ атрибута, по которому осуществляется поиск.


## Описание


Метод FindByKey осуществляет поиск атрибута в коллекции по заданному ключу. Ключ, по которому осуществляется поиск, передается посредством параметра AttributeKey.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных временных рядов «OBJ_FC». В данной базе должен присутствовать фильтр валидации с идентификатором «OBJ_VALID_FILTER». «COUNTRY» - пользовательский атрибут базы данных временных рядов, ссылающийся на справочник.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubrKey: Integer;

    ValidObj: IMetabaseObject;

    ValidFilter: IValidationFilter;

    Trend: IValidationTrend;

    ValidExecSett: IValidationExecuteSettings;

    ValidExecRun: IValidationExecRun;

    MetaAttrValList: IMsMetaAttributeValueList;

    MetaAttrFilter: IMsMetaAttributeFilter;

    Rub: IRubricator;

    MetaAttr: IMetaAttribute;

    MetaAttrVal: IMsMetaAttributeValue;

Begin

    Mb := MetabaseClass.Active;

    RubrKey := Mb.GetObjectKeyById("OBJ_FC");

    ValidObj := Mb.ItemByIdNamespace("OBJ_VALID_FILTER", RubrKey).Edit;

    ValidFilter := ValidObj As IValidationFilter;

    ValidFilter.Level := DimCalendarLevel.None;

    ValidFilter.Kind := ValidationDetailsKind.Trend;

    Trend := ValidFilter.Details As IValidationTrend;

    Rub := Mb.ItemById("OBJ_FC").Bind As IRubricator;

    MetaAttr := Rub.Facts.Attributes.FindById("COUNTRY");

    MetaAttrValList := Trend.TargetData;

        MetaAttrVal := MetaAttrValList.FindByKey(MetaAttr.Key);

        If MetaAttrVal <> Null Then

            MetaAttrVal.Value := 512;

        Else

            MetaAttrVal := MetaAttrValList.Add(MetaAttr);

        End If;

    MetaAttrValList := Trend.ComparatorData;

        If MetaAttrValList.Item > 0 Then

            MetaAttrValList.Clear;

        End If;

        MetaAttrVal := MetaAttrValList.Add(MetaAttr);

        MetaAttrVal.Value := 419;

    MetaAttrFilter := Trend.Filter;

    MetaAttrFilter.Clear;

    ValidObj.Save;

    ValidExecSett := New ValidationExecuteSettings.Create;

    ValidExecRun := ValidFilter.Execute(ValidExecSett);

End Sub UserProc;


После выполнения примера будет настроен фильтр валидации «Тренд»: тренд ряда, атрибут «COUNTRY» у которого равен «512», будет сравниваться с трендом ряда, атрибут «COUNTRY» у которого равен «419». Данный фильтр будет выполнен, результаты выполнения сохранены в БД.


См. также:


[IMsMetaAttributeValueList](IMsMetaAttributeValueList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
