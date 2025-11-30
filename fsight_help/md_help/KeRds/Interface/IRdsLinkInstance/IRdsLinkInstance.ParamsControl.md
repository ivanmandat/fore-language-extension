# IRdsLinkInstance.ParamsControl

IRdsLinkInstance.ParamsControl
-


# IRdsLinkInstance.ParamsControl


## Синтаксис


ParamsControl(Data: [IRdsDictionaryElementData](../IRdsDictionaryElementData/IRdsDictionaryElementData.htm)):
 [IRdsParamsControlInstance](../IRdsParamsControlInstance/IRdsParamsControlInstance.htm);


## Параметры


Data - значения атрибутов,
 используемые для управления параметрами связанного справочника.


## Описание


Свойство ParamsControl возвращает
 объект, осуществляющий управление значениями параметров связанного справочника
 путем изменения значений атрибутов текущего справочника.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификаторами "Dict_1". В справочнике
 имеется связь с каким-либо другим справочником НСИ. В качестве связываемого
 атрибута выступает атрибут с идентификатором "ATTRIBUTE". В
 связываемом справочнике имеется один параметр, для управления значениями
 которого, используется атрибут "FOR_PARAM" справочника "Dict_1".


Sub Main;


Var


MB: IMetabase;


MObj: IMetabaseObject;


Dict: IRdsDictionary;


Attr: IRdsAttributes;


Inst, Inst1: IRdsDictionaryInstance;


Data: IRdsDictionaryElementData;


ParamContrInst: IRdsParamsControlInstance;


Begin


MB := MetabaseClass.Active;


MObj := MB.ItemByIdNamespace("Dict_1",
 MB.ItemById("NSI_1").Key).Bind;


Dict := MObj As
 IRdsDictionary;


Inst := MObj.Open(Null) As
 IRdsDictionaryInstance;


Attr := Dict.Attributes;


Data := Inst.CreateElementData;


Data.Attribute(Attr.FindById("FOR_PARAM").Key)
 := 1;


ParamContrInst := Inst.Links.Item(0).ParamsControl(Data);


Inst1 := ParamContrInst.ReferenceDictionary;


Data.Attribute(Attr.FindById("ATTRIBUTE").Key)
 := Inst1.Elements.Item(1).Key;


Data.Attribute(Attr.Name.Key)
 := "New";


Inst.Insert(-2, Data);


End Sub
 Main;


После выполнения примера в справочнике "Dict_1" будет создан
 новый элемент. В качестве значения атрибута "ATTRIBUTE" будет
 выбран первый элемент из связанного справочника, открытого при значении
 параметра "1".


См. также:


[IRdsLinkInstance](IRdsLinkInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
