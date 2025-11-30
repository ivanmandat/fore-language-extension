# IMsFormulaTransformVariables.AddAttributeVariable

IMsFormulaTransformVariables.AddAttributeVariable
-


# IMsFormulaTransformVariables.AddAttributeVariable


## Синтаксис


AddAttributeVariable(Value: [IVariableStub](KeCubes.chm::/Interface/IVariableStub/IVariableStub.htm);
 AttributeId: String): [IMsFormulaTransformVariable](../IMsFormulaTransformVariable/IMsFormulaTransformVariable.htm);


## Параметры


Value. Источник данных переменной;


AttributeId. Идентификатор
 атрибута, на котором основана переменная.


## Описание


Метод AddAttributeVariable добавляет
 в коллекцию переменную, которая основана на атрибуте.


## Комментарии


Переменные, основанные на атрибуте, предназначены для использования
 в выражениях. Для определения способа задания значения атрибута используйте
 [IMsMetaAttributeValue.Kind](../IMsMetaAttributeValue/IMsMetaAttributeValue.Kind.htm).


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

    Stub: IVariableStub;

    TransVar: IMsFormulaTransformVariable;

    Slice: IMsFormulaTransformSlice;

    AttrValList: IMsMetaAttributeValueList;

    AttrVal: IMsMetaAttributeValue;

Begin

    Mb := MetabaseClass.Active;

    RubrDescr := Mb.ItemById("FC");

    Rubr := RubrDescr.Bind As IRubricator;

    MsDescr := Rubr.ModelSpace;

    Model := Mb.ItemByIdNamespace("MODEL_ATTR", MsDescr.Key).Edit As IMsModel;

    Transform := Model.Transform;

    TransformVarables := Transform.Outputs;

    Stub := RubrDescr.Bind As IVariableStub;

    TransVar := TransformVarables.AddAttributeVariable(Stub, "UNIT");

    Slice := TransformVarables.Item(0).Slices.Item(0);

    AttrValList := Slice.MetaAttributeValueList;

    AttrVal := AttrValList.FindById("UNIT");

    AttrVal.Kind := MsMetaAttributeValueType.Unspecified;

    (Model As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для модели будет добавлена входная переменная,
 основанная на атрибуте показателей UNIT (единицы измерения). Значение
 атрибута - неспецифицированное. Таким образом, во время расчета модели
 будет проверено значение данного атрибута для входных переменных, если
 значение совпадает, то оно будет записано в атрибут выходной переменной,
 если нет - то значение атрибута изменено не будет.


См. также:


[IMsFormulaTransformVariables](IMsFormulaTransformVariables.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
