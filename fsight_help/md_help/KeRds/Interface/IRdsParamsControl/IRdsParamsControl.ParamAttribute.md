# IRdsParamsControl.ParamAttribute

IRdsParamsControl.ParamAttribute
-


# IRdsParamsControl.ParamAttribute


## Синтаксис


ParamAttribute(Param:
 [IRdsParam](../IRdsParam/IRdsParam.htm)): [IRdsAttribute](../IRdsAttribute/IRdsAttribute.htm);


## Параметры


Param. Параметр связанного
 справочника, для которого необходимо определить привязку.


## Описание


Свойство ParamAttribute определяет
 привязку параметра связываемого справочника с атрибутом текущего справочника,
 через значения которого будет осуществляться управление.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 NSI, содержащего табличные справочники НСИ с идентификаторами DICT_1 и
 DICT_2. Во втором справочнике добавьте [атрибут](UiNavObj.chm::/reference_book/Master_RDS_reference_book/Attributes.htm)
 и [параметр](UiNavObj.chm::/reference_book/Master_RDS_reference_book/Parameters.htm)
 справочника, по которому будет создана привязка.


Добавьте ссылки на системные сборки: Metabase, Dal и Rds.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dict1, Dict2: IRdsDictionary;

	    Attrs: IRdsAttributes;

	    LinkAttr, ParamAttr: IRdsAttribute;

	    Link: IRdsLink;

	    Param: IRdsParam;

	    ParamsControl: IRdsParamsControl;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemByIdNamespace("DICT_1", MB.ItemById("NSI").Key).Edit;

	    Dict1 := MObj As IRdsDictionary;

	    Dict2 := MB.ItemByIdNamespace("DICT_2", MB.ItemById("NSI").Key).Bind As IRdsDictionary;

	    // Получим атрибуты первого справочника

	    Attrs := Dict1.Attributes;

	    // Добавим атрибут для связи со вторым справочником

	    LinkAttr := Attrs.Add;

	    LinkAttr.DataType := DbDataType.Integer;

	    LinkAttr.Id := "LINKATTR";

	    LinkAttr.Name := "Атрибут для связи";

	    LinkAttr.HasMultipleValues := True;

	    // Добавим связь между справочниками

	    Link := Dict1.Links.Add;

	    Link.Attribute := LinkAttr;

	    Link.Reference := Dict2.Attributes.Key;

	    Link.Id := "LINK";

	    Link.Name := "Связь со справочником DICT_2";

	    Param := Link.Reference.Dictionary.Params.Item(0);

	    // Добавим атрибут для управления значениями параметра второго справочника

	    ParamAttr := Attrs.Add;

	    ParamAttr.DataType := Param.Attribute.DataType;

	    ParamAttr.Id := "PARAMATTR";

	    ParamAttr.Name := "Управление параметром";

	    ParamAttr.HasMultipleValues := True;

	    // Привяжем атрибут к значениям параметра второго справочника

	    ParamsControl := Link.ParamsControl;

	    ParamsControl.ParamAttribute(Dict2.Params.Item(0)) := ParamAttr;

	    ParamsControl.ValueSelect(Param) := RdsParamsControlValueSelect.Default_;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в первом справочнике будут добавлены два атрибута:
 первый для связи со справочником DICT_2, второй для управления значениями
 параметра справочника DICT_2. Оба атрибута могут содержать множественную
 отметку значений. В первом справочнике настроена связь со вторым справочником
 по атрибуту для связи LINKATTR. Для параметра второго справочника создана
 привязка атрибута PARAMATTR, по которому будет передаваться массив всех
 значений атрибута.


При создании элемента в первом справочнике будут отображаться поля для
 задания значений атрибутов. Список значений атрибута LINKATTR зависит
 от значения атрибута PARAMATTR, который связан с параметром второго справочника.


См. также:


[IRdsParamsControl](IRdsParamsControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
