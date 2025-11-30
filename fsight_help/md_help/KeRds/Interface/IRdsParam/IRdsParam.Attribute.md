# IRdsParam.Attribute

IRdsParam.Attribute
-


# IRdsParam.Attribute


## Синтаксис


Attribute: [IRdsAttribute](../IRdsAttribute/IRdsAttribute.htm);


## Описание


Свойство Attribute определяет атрибут справочника, значениями которого управляет данный параметр.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1", содержащего справочник НСИ с идентификатором "Dict_1".


Sub Main;


Var


MB: IMetabase;


MObj: IMetabaseObject;


Dict: IRdsDictionary;


Attrs: IRdsAttributes;


Attr: IRdsAttribute;


Params: IRdsParams;


Param: IRdsParam;


Begin


MB := MetabaseClass.Active;


MObj := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Edit;


Dict := MObj As IRdsDictionary;


Attrs := Dict.Attributes;


Attr := Attrs.Add;


Attr.DataType := DbDataType.Integer;


Attr.Id := "ParamAttr";


Attr.Name := "Параметрический атрибут";


Params := Dict.Params;


Param := Params.Add;


Param.Attribute := Attr;


Param.Id := "Param1";


Param.Name := "Значение";


MObj.Save;


End Sub Main;


После выполнения примера в справочнике НСИ будет создан дополнительный атрибут. Для управления значениями в справочнике будет создан параметр, управляющий данным атрибутом.


См. также:


[IRdsParam](IRdsParam.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
