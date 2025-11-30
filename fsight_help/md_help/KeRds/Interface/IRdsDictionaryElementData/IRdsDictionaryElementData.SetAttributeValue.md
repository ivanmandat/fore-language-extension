# IRdsDictionaryElementData.SetAttributeValue

IRdsDictionaryElementData.SetAttributeValue
-


# IRdsDictionaryElementData.SetAttributeValue


## Синтаксис


SetAttributeValue(Attribute: Integer; Value: Variant;
 [Options: [RdsDictionaryElementDataOptions](../../Enums/RdsDictionaryElementDataOptions.htm)
 = 0]);


## Параметры


Attribute. Индекс атрибута,
 значение которого необходимо изменить.


Value. Новое значение атрибута.


Options. Параметры изменения
 значения атрибута.


## Описание


Метод SetAttributeValue позволяет
 изменить значение указанного атрибута элемента.


## Комментарии


Указываемое в параметре Value
 значение должно иметь тот же тип, который имеет атрибут с индексом Attribute. Если атрибут принимает
 множественные значения, то в качестве значения в параметр Value
 передаётся массив типа Variant. В отдельном элементе массива задаётся
 одно из значение, формирующее множественное значение. Если в параметр
 Value передаётся массив, состоящий
 из одного элемента, то значение элемента массива будет использоваться
 как отдельное значение без учёта того, что передаётся массив.


Для изменения значения параметрического атрибута параметр Options
 должен быть равен [RdsDictionaryElementDataOptions.AllowChangeParamAttribute](../../Enums/RdsDictionaryElementDataOptions.htm).


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 RDS_REPO, содержащим параметрический справочник с идентификатором DICT.
 Данный справочник содержит атрибут с идентификатором PARAM, связанный
 с целочисленным параметром.


Добавьте ссылки на системные сборки Metabase, Rds.


			Sub UserProc;

Var

    Mb: IMetabase;

    RdsKey: Integer;

    Dict: IRdsDictionary;

    Attrs: IRdsAttributes;

    AttrKey, AttrInd: Integer;

    ParamsVal: IRdsParamValues;

    DictInst: IRdsDictionaryInstance;

    Elements: IRdsDictionaryElements;

    Element: IRdsDictionaryElement;

    Data: IRdsDictionaryElementData;

Begin

    Mb := MetabaseClass.Active;

    RdsKey := Mb.ItemById("RDS_REPO").Key;

    Dict := Mb.ItemByIdNamespace("DICT", RdsKey).Edit As IRdsDictionary;

    Attrs := Dict.Attributes;

    AttrKey := Attrs.FindById("PARAM").Key;

    ParamsVal := Dict.Params.CreateValues;

    ParamsVal.FindById("PARAM").Value := 0;

    DictInst := Dict.Open(ParamsVal);

    Elements := DictInst.Elements;

    Element := Elements.Item(1);

    Data := Element.Data;

    AttrInd := Data.AttributeIndex(AttrKey);

    Data.SetAttributeValue(AttrInd, 2, RdsDictionaryElementDataOptions.AllowChangeParamAttribute);

    DictInst.Update(Element.Key, Data);

End Sub UserProc;


После выполнения примера справочник будет открыт с заданным значением
 параметра. Затем будет изменено значение параметра для первого элемента.


См. также:


[IRdsDictionaryElementData](IRdsDictionaryElementData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
