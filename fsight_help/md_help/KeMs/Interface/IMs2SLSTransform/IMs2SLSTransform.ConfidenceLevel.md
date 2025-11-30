# IMs2SLSTransform.ConfidenceLevel

IMs2SLSTransform.ConfidenceLevel
-


# IMs2SLSTransform.ConfidenceLevel


## Синтаксис


		ConfidenceLevel: Double;


## Описание


Свойство ConfidenceLevel определяет
 значимость доверительных границ.


## Комментарий


По умолчанию свойству установлено значение 0,95.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MODEL_SPACE. В контейнере имеется переменная
 VAR_1, которая в дальнейшем будет использоваться как моделируемая, а также
 переменные INS_VAR и VAR_FACTOR, которые будут использоваться как инструментальная
 переменная и фактор соответственно.


Добавьте ссылки на системные сборки: Dimension, Cubes, Metabase, Ms,
 Stat.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    KM: IMetabaseObjectDescriptor;

		    CrInf: IMetabaseObjectCreateInfo;

		    MObj: IMetabaseObject;

		    Model: IMsModel;

		    Trans: IMsFormulaTransform;

		    VarTrans: IMsFormulaTransformVariable;

		    Tree: IMsFormulaTransformSlicesTree;

		    Slice: IMsFormulaTransformSlice;

		    Selector: IMsFormulaTransformSelector;

		    Formula: IMsFormula;

		    SLS2: IMs2SLSTransform;

		    Varr: IVariableStub;

		    TransVar: IMsFormulaTransformVariable;

		    TermInfo: IMsFormulaTermInfo;

		Begin

		    MB := MetabaseClass.Active;

		    KM := Mb.ItemById("MODEL_SPACE");

		        CrInf := Mb.CreateCreateInfo;

		        CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

		        CrInf.Id := "New_2SLS";

		        CrInf.Name := "New_2SLS";

		        CrInf.Parent := KM;

		    MObj := Mb.CreateObject(CrInf).Edit;

		    Model := MObj As IMsModel;

		    Trans := Model.Transform;

		    Varr := MB.ItemByIdNamespace("Var_1", KM.Key).Bind As IVariableStub;

		    VarTrans := Trans.Outputs.Add(Varr);

		    Tree := VarTrans.SlicesTree(VarTrans);

		    Slice := Tree.CreateSlice(1);

		    Selector := Model.Transform.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Model.Transform.Transform(Selector);

		    Formula.Kind := MsFormulaKind.SLS2;

		    Formula.Level := DimCalendarLevel.Year;

		    SLS2 := Formula.Method As IMs2SLSTransform;

		    SLS2.ConstantMode := InterceptMode.AutoEstimate;

		    //Инструментальная переменная

		    Varr := MB.ItemByIdNamespace("Ins_Var", KM.Key).Bind As IVariableStub;

		    TransVar := Trans.Inputs.Add(Varr);

		    TermInfo := Trans.CreateTermInfo;

		    TermInfo.Slice := TransVar.SlicesTree(VarTrans).CreateSlice(1);

		    SLS2.Instrumental.Add.Expression.AsString := TermInfo.TermInnerText;

		    //Фактор

		    Varr := MB.ItemByIdNamespace("Var_Factor", KM.Key).Bind As IVariableStub;

		    TransVar := Trans.Inputs.Add(Varr);

		    TermInfo := Trans.CreateTermInfo;

		    TermInfo.Slice := TransVar.SlicesTree(VarTrans).CreateSlice(1);

		    SLS2.Explanatories.Add.Expression.AsString := TermInfo.TermInnerText;

		    SLS2.ConfidenceLevel := 0.99;

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера в контейнере моделирования будет создана
 модель. Для расчёта модели будет использоваться метод линейной регрессии
 (оценка методом инструментальных переменных). Для модели будет установлена
 моделируемая переменная, а так же один фактор и инструментальная переменная.
 В уравнении модели будет присутствовать константа. Для уровня значимости
 доверительных границ будет установлено значение 0,99.


См. также:


[IMs2SLSTransform](IMs2SLSTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
