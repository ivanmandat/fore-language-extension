# IRdsLink.ParamsControl

IRdsLink.ParamsControl
-


# IRdsLink.ParamsControl


## Синтаксис


ParamsControl: [IRdsParamsControl](../IRdsParamsControl/IRdsParamsControl.htm);


## Описание


Свойство ParamsControl возвращает
 настройки привязки параметров. Данное свойство актуально, если осуществляется
 связь с параметрическим справочником.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочники НСИ с идентификаторами "Dict_1" и "Dict_2".
 У второго справочника имеется один параметр.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dict, Dict2: IRdsDictionary;

	    Attrs: IRdsAttributes;

	    LinkAttr, ParamAttr: IRdsAttribute;

	    Link: IRdsLink;

	    Param: IRdsParam;

	    ParamsControl: IRdsParamsControl;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Edit;

	    Dict := MObj As IRdsDictionary;

	    Dict2 := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    //Атрибуты первого справочника

	    Attrs := Dict.Attributes;

	    //Атрибут для связи со справочником

	    LinkAttr := Attrs.Add;

	    LinkAttr.DataType := DbDataType.Integer;

	    LinkAttr.Id := "LinkAttr";

	    LinkAttr.Name := "Атрибут для связи";

	    //Связь с параметрическим справочником

	    Link := Dict.Links.Add;

	    Link.Attribute := LinkAttr;

	    Link.Reference := Dict2.Attributes.Key;

	    Link.Id := "Link";

	    Link.Name := "Связь со справочником Dict_2";

	    //Параметр, которым необходимо управлять

	    ParamsControl := Link.ParamsControl;

	    Param := ParamsControl.ReferenceDictionary.Params.Item(0);

	    //Атрибут для связи со справочником

	    ParamAttr := Attrs.Add;

	    ParamAttr.DataType := Param.Attribute.DataType;

	    ParamAttr.Id := "ParamAttr";

	    ParamAttr.Name := "Управление параметром";

	    //Привязка атрибута к параметру второго справочника

	    ParamsControl.ParamAttribute(Param) := ParamAttr;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в первом справочнике будут созданы два атрибута:
 первый - используется для связи со справочником "Dict_2"; второй
 - для управления значениями параметра справочника "Dict_2".
 Между справочниками "Dict_1" и "Dict_2" будет настроена
 связь по атрибуту "Key", для управления значениями параметра
 связываемого справочника "Dict_2" будет использоваться атрибут
 "ParamAttr".


См. также:


[IRdsLink](IRdsLink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
