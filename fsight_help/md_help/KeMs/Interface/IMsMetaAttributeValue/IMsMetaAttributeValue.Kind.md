# IMsMetaAttributeValue.Kind

IMsMetaAttributeValue.Kind
-


# IMsMetaAttributeValue.Kind


## Синтаксис


Kind: [MsMetaAttributeValueType](../../Enums/MsMetaAttributeValueType.htm);


## Описание


Свойство Kind
 определяет способ задания значения атрибута, на котором основана переменная.


## Комментарии


Для указания значения атрибута используйте свойство [IMsMetaAttributeValue.Value](IMsMetaAttributeValue.Value.htm).
 В нем указывается непосредственно само значение атрибута (свойство [IMsMetaAttributeValue.IsParameter](IMsMetaAttributeValue.IsParameter.htm)
 должно быть установлено в False)
 или идентификатор параметра, передающего значение (свойство [IMsMetaAttributeValue.IsParameter](IMsMetaAttributeValue.IsParameter.htm)
 должно быть установлено в True).


Если значение атрибута является неспецифицированным, то оно берется
 из входных рядов модели, рассчитывающей переменную. Значение свойств [IMsMetaAttributeValue.Value](IMsMetaAttributeValue.Value.htm)
 и [IMsMetaAttributeValue.IsParameter](IMsMetaAttributeValue.IsParameter.htm)
 игнорируется.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC. В контейнере моделирования данной
 базы должна присутствовать модель с идентификатором MODEL_ATTR.


Добавьте ссылки на системные сборки: Cubes, Metabase, Ms, Rds.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubrDescr: IMetabaseObjectDescriptor;

    Rubr: IRubricator;

    MsDescr: IMetabaseObjectDescriptor;

    Model: IMsModel;

    Transform: IMsFormulaTransform;

    TransformVarables: IMsFormulaTransformVariables;

    TransVar: IMsFormulaTransformVariable;

    Slice: IMsFormulaTransformSlice;

    AttrValList: IMsMetaAttributeValueList;

    AttrVal: IMsMetaAttributeValue;

    FactsAttrs: IMetaAttributes;

    Attr: IMetaAttribute;

Begin

    Mb := MetabaseClass.Active;

    RubrDescr := Mb.ItemById("FC");

    Rubr := RubrDescr.Bind As IRubricator;

    MsDescr := Rubr.ModelSpace;

    Model := Mb.ItemByIdNamespace("MODEL_ATTR", MsDescr.Key).Edit As IMsModel;

    Transform := Model.Transform;

    TransformVarables := Transform.Outputs;

    TransVar := TransformVarables.Item(0);

    Slice := TransVar.Slices.Item(0);

    AttrValList := Slice.MetaAttributeValueList;

    AttrValList.Clear;

    FactsAttrs := Rubr.Facts.Attributes;

    Attr := FactsAttrs.FindById("UNIT");

    AttrVal := AttrValList.Add(Attr);

    AttrVal.Kind := MsMetaAttributeValueType.Unspecified;

    (Model As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для среза выходной переменной модели будет
 добавлен атрибут показателей UNIT. Его значение неспецифицированное. Таким
 образом, во время расчета модели будут проверены значения данного атрибута
 для входных переменных, если значения совпадают, то оно будет записано
 в атрибут выходной переменной, если нет - то значение атрибута изменено
 не будет.


См. также:


[IMsMetaAttributeValue](IMsMetaAttributeValue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
