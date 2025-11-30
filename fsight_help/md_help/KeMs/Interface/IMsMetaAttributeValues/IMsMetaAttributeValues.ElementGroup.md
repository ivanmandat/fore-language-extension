# IMsMetaAttributeValues.ElementGroup

IMsMetaAttributeValues.ElementGroup
-


# IMsMetaAttributeValues.ElementGroup


## Синтаксис


ElementGroup: [IDimElementGroup](KeDims.chm::/interface/IDimElementGroup/IDimElementGroup.htm);


## Описание


Свойство ElementGroup определяет
 группу отметки элементов.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором OBJ_RUBRICATOR. COUNTRY - пользовательский атрибут
 показателей базы, ссылающийся на справочник. D_COUNTRY - группа элементов
 данного справочника. В контейнере моделирования данной базы должна присутствовать
 модель с идентификатором MODEL_ATTR.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Rds.


			Sub UserProc;

Var

    ActiveMetabase: IMetabase;

    Ruby: IRubricator;

    MsDescr: IMetabaseObjectDescriptor;

    Model: IMsModel;

    Transform: IMsFormulaTransform;

    TransformVar: IMsFormulaTransformVariable;

    Coord: IMsFormulaTransformCoord;

    Slice: IMsFormulaTransformSlice;

    Selector: IMsFormulaTransformSelector;

    Formula: IMsFormula;

    Det: IMsDeterministicTransform;

    Term: IMsFormulaTerm;

    TermInfo: IMsFormulaTermInfo;

    MetaAttr: IMetaAttribute;

    MetaVals: IMsMetaAttributeValues;

    DimKey: Integer;

    Group: IDimElementGroup;

Begin

    ActiveMetabase := MetabaseClass.Active;

    Ruby := ActiveMetabase.ItemById("OBJ_RUBRICATOR").Bind As IRubricator;

    MsDescr := Ruby.ModelSpace;

    Model := ActiveMetabase.ItemByIdNamespace("MODEL_ATTR", MsDescr.Key).Edit As IMsModel;

    Transform := Model.Transform;

    TransformVar := Transform.Outputs.Add(Null);

    Coord := Transform.CreateCoord(TransformVar);

    Slice := TransformVar.Slices.Add(Null);

    Selector := Transform.CreateSelector;

    Selector.Slice := Slice;

    Formula := Transform.Transform(Selector);

    Formula.Kind := MsFormulaKind.Deterministic;

    Det := Formula.Method As IMsDeterministicTransform;

    MetaAttr := Ruby.Facts.Attributes.FindById("COUNTRY");

    MetaVals := Transform.MetaAttributeFilter.Add(MetaAttr);

    DimKey := MetaAttr.ValuesObject.Key;

    Group := ActiveMetabase.ItemByIdNamespace("D_COUNTRY", DimKey).Edit As IDimElementGroup;

    MetaVals.ElementGroup := Group;

    TransformVar := Transform.Inputs.Add(Null);

    Slice := TransformVar.Slices.Add(Null);

    Term := Det.Operands.Add(Slice);

    TermInfo := Term.TermInfo;

    TermInfo.Lag := "-1";

    Term.TermInfo := TermInfo;

    Det.Expression.AsString := Term.TermToInnerText;

End Sub UserProc;


После выполнения примера, будет создан объект, содержащий параметры
 расчета для рядов базы данных временных рядов.


См. также:


[IMsMetaAttributeValues](IMsMetaAttributeValues.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
