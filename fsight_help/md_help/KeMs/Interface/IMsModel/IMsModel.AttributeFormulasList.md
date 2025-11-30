# IMsModel.AttributeFormulasList

IMsModel.AttributeFormulasList
-


# IMsModel.AttributeFormulasList


## Синтаксис


AttributeFormulasList: [IMsAttributesFormulasList](../IMsAttributesFormulasList/IMsAttributesFormulasList.htm);


## Описание


Свойство AttributeFormulasList
 возвращает коллекцию методов расчета дополнительных атрибутов по формулам.


## Комментарии


Данное свойство используется, если модель
 содержится в контейнере моделирования базы данных временных рядов. Формулы
 в коллекции предназначены для расчета дополнительных атрибутов показателей.
 Каждый элемент коллекции реализован интерфейсом [IMsFormulaTransform](../IMsFormulaTransform/IMsFormulaTransform.htm)
 и позволяет настроить параметры расчета атрибута.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR. База содержит дополнительный
 строковый атрибут показателей с идентификатором COMM, предназначенный
 для хранения комментария к показателям. В контейнере моделирования базы
 данных временных рядов содержится модель с идентификатором MODEL.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Rds, System.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Rubr: IRubricator;

	    Model: IMsModel;

	    FormulasList: IMsAttributesFormulasList;

	    AttrTranfsorm: IMsFormulaTransform;

	    ModelTransform: IMsFormulaTransform;

	    ModelOutputs: IMsFormulaTransformVariables;

	    OutputVar: IMsFormulaTransformVariable;

	    AttrOutputs: IMsFormulaTransformVariables;

	    TransVar: IMsFormulaTransformVariable;

	    OutputSlices: IMsFormulaTransformSlices;

	    SelectionSet: IDimSelectionSet;

	    Slice: IMsFormulaTransformSlice;

	    AttrValueList: IMsMetaAttributeValueList;

	    RubrMetaAttrs: IMetaAttributes;

	    RubrAttr: IMetaAttribute;

	    AttrVal: IMsMetaAttributeValue;

	    Selector: IMsFormulaTransformSelector;

	    Formula: IMsFormula;

	    Determ: IMsDeterministicTransform;

	    Expr: IExpression;

	    DetermOperands: IMsFormulaTermList;

	    tInfo: IMsFormulaTermInfo;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubr := Mb.ItemById("OBJ_RUBRICATOR").Bind As IRubricator;

	    Model := Mb.ItemByIdNamespace("MODEL", Rubr.ModelSpace.Key).Edit As IMsModel;

	    ModelTransform := Model.Transform;

	    ModelOutputs := ModelTransform.Outputs;

	    OutputVar := ModelOutputs.Item(0);

	    // Получаем список методов, по которым будут рассчитываться дополнительные атрибуты

	    FormulasList := Model.AttributeFormulasList;

	    FormulasList.Clear;

	    // Добавляем новый метод расчета дополнительного атрибута и задаем его параметры

	    AttrTranfsorm := FormulasList.Add;

	    AttrOutputs := AttrTranfsorm.Outputs;

	    TransVar := AttrOutputs.Add(OutputVar.VariableStub);

	    TransVar.AttributeId := "COMM";

	    OutputSlices := OutputVar.Slices;

	    SelectionSet := OutputSlices.Item(0).Selection;

	    Slice := TransVar.Slices.Add(SelectionSet);

	    AttrValueList := Slice.MetaAttributeValueList;

	    AttrValueList.Clear;

	    RubrMetaAttrs := Rubr.Facts.Attributes;

	    RubrAttr := RubrMetaAttrs.FindById("COMM");

	    AttrVal := AttrValueList.Add(RubrAttr);

	    AttrVal.Kind := MsMetaAttributeValueType.Unspecified;

	    Selector := AttrTranfsorm.CreateSelector;

	    Selector.Slice := Slice;

	    Formula := AttrTranfsorm.Transform(Selector);

	    Formula.Kind := MsFormulaKind.Deterministic;

	    Determ := Formula.Method As IMsDeterministicTransform;

	    DetermOperands := Determ.Operands;

	    DetermOperands.Clear;

	    tInfo := DetermOperands.Add(Slice).TermInfo;

	    Expr := Determ.Expression;

	    Expr.AsString := "iif(" + tInfo.TermInnerText + "<>""""," + tInfo.TermInnerText + ",""Комментарий отсутствовал"")";

	    If Not (Expr.Valid)

	        Then Debug.WriteLine(expr.ErrorInfo.ErrorMessage);

	        Else (Model As IMetabaseObject).Save;

	    End If;

	End Sub UserProc;


После выполнения примера при расчете модели атрибут показателей COMM
 для выходной переменной будет рассчитываться следующим образом:


	- если атрибут COMM задан, то его значение не меняется;


	- если атрибут COMM не задан, то его значение будет изменено на
	 «Комментарий отсутствовал».


См. также:


[IMsModel](IMsModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
