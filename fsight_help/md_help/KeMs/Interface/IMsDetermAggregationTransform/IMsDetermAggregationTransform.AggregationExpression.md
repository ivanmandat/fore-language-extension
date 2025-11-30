# IMsDetermAggregationTransform.AggregationExpression

IMsDetermAggregationTransform.AggregationExpression
-


# IMsDetermAggregationTransform.AggregationExpression


## Синтаксис


		AggregationExpression: String;


## Описание


Свойство AggregationExpression
 определяет выражение для задания агрегации.


## Комментарии


Данное свойство используется только для моделей, основанных на атрибутах.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR. COUNTRY и INDICATOR
 - пользовательские атрибуты показателей базы, ссылающиеся на справочники.
 NATIONAL_ACCOUNTS - группа элементов справочника, на который ссылается
 атрибут INDICATOR.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    CrInf: IMetabaseObjectCreateInfo;

		    ModelCont: IMetabaseObjectDescriptor;

		    obj: IMetabaseObject;

		    Ruby: IRubricator;

		    Transform: IMsFormulaTransform;

		    Model: IMsModel;

		    TransformVar: IMsFormulaTransformVariable;

		    Coord: IMsFormulaTransformCoord;

		    DetermAggregation: IMsDetermAggregationTransform;

		    Slice: IMsFormulaTransformSlice;

		    Selector: IMsFormulaTransformSelector;

		    MetaAttrValList: IMsMetaAttributeValueList;

		    MetaAttr: IMetaAttribute;

		    MsMetaAttributeValue:IMsMetaAttributeValue;

		    Formula: IMsFormula;

		    DimKey: Integer;

		    Group: IDimElementGroup;

		Begin

		    mb := MetabaseClass.Active;

		    CrInf := Mb.CreateCreateInfo;

		    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

		    CrInf.Name := "New_aggregation";

		    Ruby := mb.ItemById("OBJ_RUBRICATOR").Bind As IRubricator;

		    ModelCont := Ruby.ModelSpace;

		    CrInf.Parent := ModelCont;

		    CrInf.Permanent := True;

		    Obj := Mb.CreateObject(CrInf).Edit;

		    Model := Obj As IMsModel;

		    Transform := Model.Transform;

		    Transform.Rubricator:= Ruby;

		    TransformVar := Transform.Outputs.Add(Null);

		    Coord := Transform.CreateCoord(TransformVar);

		    Slice := TransformVar.Slices.Add(Null);

		    Slice.MetaAttributeValueList.Clear;

		    MetaAttrValList := Slice.MetaAttributeValueList;

		    MetaAttr := Ruby.Facts.Attributes.FindById("COUNTRY");

		    MsMetaAttributeValue:= MetaAttrValList.Add(MetaAttr);

		    MsMetaAttributeValue.Value:= 215;

		    Selector := Transform.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Transform.Transform(Selector);

		    Formula.Kind := MsFormulaKind.DetermAggregation;

		    DetermAggregation :=Formula.Method As IMsDetermAggregationTransform;

		    Formula.Level := DimCalendarLevel.Year;

		    DetermAggregation.AggregationExpression:= "Panama";

		    DetermAggregation.WeightsExpression:= "Albania";

		    DetermAggregation.CompositionRelevanceExpression:= "Belize";

		    DetermAggregation.Threshold:= 56 / 100;

		    DetermAggregation.Level:= True;

		    DetermAggregation.Rebase:= True;

		    DetermAggregation.LevelRebaseDate:= DateTime.ComposeDay(1998, 1, 1);

		    DetermAggregation.AgregationMethod:= MsAgregationMethodType.Sum;

		    DetermAggregation.MissingData.Method:= MissingDataMethod.SpecifiedValue;

		    DetermAggregation.MissingData.SpecifiedValue:= 1;

		    MetaAttr := Ruby.Facts.Attributes.FindById("INDICATOR");

		    DimKey := MetaAttr.ValuesObject.Key;

		    Group := Mb.ItemByIdNamespace("NATIONAL_ACCOUNTS",DimKey).Edit As IDimElementGroup;

		    DetermAggregation.AggregationGroup:= Group;

		    obj.Save;

		End Sub UserProc;


В результате выполнения примера в контейнере моделирования базы данных
 временных рядов будет создана модель, основанная на атрибутах базы, рассчитывающая
 агрегацию по следующему выражению: «= Rebase(Level(Сумма((Panama) * (Albania))
 / Сумма(Albania)), 01.01.1998) where Indicators in National Accounts».


См. также:


[IMsDetermAggregationTransform](IMsDetermAggregationTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
