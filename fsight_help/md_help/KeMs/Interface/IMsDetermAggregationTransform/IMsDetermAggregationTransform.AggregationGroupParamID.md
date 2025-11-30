# IMsDetermAggregationTransform.AggregationGroupParamID

IMsDetermAggregationTransform.AggregationGroupParamID
-


# IMsDetermAggregationTransform.AggregationGroupParamID


## Синтаксис


		AggregationGroupParamID: String;


## Описание


Свойство AggregationGroupParamID
 определяет идентификатор параметра, используемого для расчёта агрегации.


## Комментарии


Если свойству задано значение, то свойство
 [IMsDetermAggregationTransform.AggregationGroup](IMsDetermAggregationTransform.AggregationGroup.htm)
 игнорируется.


## Пример


В данном примере будет рассмотрено задание настроек агрегации: группа
 агрегации будет определяться через параметр метамодели, содержащей модель.


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором FC, в которой заданы группы агрегации.
 Данная база содержит уникальные атрибуты, ссылающиеся на справочники DICT_CTR
 и DICT_IND. Контейнер моделирования базы данных временных рядов должен
 содержать метамодель с идентификатором M_MODEL. Данная метамодель должна
 содержать параметр PARAM_GROUP, ссылающийся на справочник DICT_CTR. Цепочка
 расчёта метамодели должна содержать модель с идентификатором AGGR_MODEL.
 Метод расчёта модели - агрегация (базовая), рассчитываемая как детерминированное
 уравнение.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    Obj: IMetabaseObject;

		    Ruby: IRubricator;

		    cmKey: Integer;

		    rStub: IVariableStub;

		    RepoKey: Integer;

		    DictInst: IDimInstance;

		    ParamDim: IMsParametrizedDimension;

		    Transform: IMsFormulaTransform;

		    Model: IMsModel;

		    MetaModel: IMsMetaModel;

		    TransformVar: IMsFormulaTransformVariable;

		    Coord: IMsFormulaTransformCoord;

		    DetermAggregation: IMsDetermAggregationTransform;

		    Slice: IMsFormulaTransformSlice;

		    Selector: IMsFormulaTransformSelector;

		    Formula: IMsFormula;

		    Sel: IDimSelectionSet;

		    Factory: IDimSelectionSetFactory;

		Begin

		    mb := MetabaseClass.Active;

		    Ruby := mb.ItemById("FC").Bind As IRubricator;

		    cmKey := Ruby.ModelSpace.Key;

		    Obj := mb.ItemByIdNamespace("AGGR_MODEL", cmKey).Edit;

		    Model := Obj As IMsModel;

		    Transform := Model.Transform;

		    Transform.Rubricator := Null;

		    Transform.Outputs.Clear;

		    rStub := mb.ItemById("FC").Bind As IVariableStub;

		    TransformVar := Transform.Outputs.Add(rStub);

		    Coord := Transform.CreateCoord(TransformVar);

		    Factory := New DimSelectionSetFactory.Create As IDimSelectionSetFactory;

		    Sel := Factory.CreateDimSelectionSet;

		    RepoKey := (Ruby.Database As IMetabaseObject).Key;

		    DictInst := mb.ItemByIdNamespace("DICT_CTR", RepoKey).Open(Null) As IDimInstance;

		    Sel.Add(DictInst);

		    Sel.Item(0).DeselectAll;

		    DictInst := mb.ItemByIdNamespace("DICT_IND", RepoKey).Open(Null) As IDimInstance;

		    Sel.Add(DictInst);

		    Sel.Item(1).DeselectAll;

		    Sel.Item(1).SelectElement(0, False);

		    Slice := TransformVar.Slices.Add(Sel);

		    ParamDim := Slice.ParametrizedDimensions.Item(0);

		    MetaModel := mb.ItemByIdNamespace("M_MODEL", cmKey).Bind As IMsMetaModel;

		    ParamDim.Parameter := (MetaModel).Params.FindById("PARAM_GROUP");

		    Selector := Transform.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Transform.Transform(Selector);

		    Formula.Kind := MsFormulaKind.DetermAggregation;

		    DetermAggregation := Formula.Method As IMsDetermAggregationTransform;

		    Formula.Level := DimCalendarLevel.Year;

		    DetermAggregation.AggregationExpression := "{PARAM_GROUP}|BCA";

		    DetermAggregation.AgregationMethod := MsAgregationMethodType.Max;

		    DetermAggregation.AggregationGroupParamID := "PARAM_GROUP";

		    Obj.Save;

		End Sub UserProc;


В результате выполнения примера группа агрегации будет определяться
 через параметр PARAM_GROUP у метамодели, содержащей модель AGGR_MODEL.


См. также:


[IMsDetermAggregationTransform](IMsDetermAggregationTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
