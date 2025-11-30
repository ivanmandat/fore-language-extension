# IMsFormulaTransform.MetaAttributeFilter

IMsFormulaTransform.MetaAttributeFilter
-


# IMsFormulaTransform.MetaAttributeFilter


## Синтаксис


		MetaAttributeFilter: [IMsMetaAttributeFilter](../IMsMetaAttributeFilter/IMsMetaAttributeFilter.htm);


## Описание


Свойство MetaAttributeFilter
 возвращает объект, содержащий фильтр, применяемый к модели.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR. COUNTRY - пользовательский
 атрибут показателей базы данных временных рядов, ссылающийся на справочник.
 D_COUNTRY - группа элементов данного справочника.


Добавьте ссылки на системные сборки: Cubes, Dimensions. Metabase, Ms.


					Sub UserProc;

		Var

		    ActiveMetabase: IMetabase;

		    Ruby: IRubricator;

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

		    Transform := New MsFormulaTransform.Create(ActiveMetabase);

		    Transform.Rubricator:= Ruby;

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

		    Group := ActiveMetabase.ItemByIdNamespace("D_COUNTRY",DimKey).Edit As IDimElementGroup;

		    MetaVals.ElementGroup:= Group;

		    TransformVar := Transform.Inputs.Add(Null);

		    Slice := TransformVar.Slices.Add(Null);

		    Term := Det.Operands.Add(Slice);

		    TermInfo := Term.TermInfo;

		    TermInfo.Lag := "-1";

		    Term.TermInfo := TermInfo;

		    Det.Expression.AsString:= Term.TermToInnerText;

		End Sub UserProc;


В результате выполнения примера будет создан объект, содержащий параметры
 расчёта для рядов базы данных временных рядов.


См. также:


[IMsFormulaTransform](IMsFormulaTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
