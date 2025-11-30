# IMsFormulaTermInfo.SetDate

IMsFormulaTermInfo.SetDate
-


# IMsFormulaTermInfo.SetDate


## Синтаксис


		SetDate(Value: DateTime; DateFormat: String);


## Параметры


Value. Дата, которую необходимо
 зафиксировать для данного терма;


DateFormat. Формат даты, в
 соответствии с которым производится фиксация.


## Описание


Метод SetDate осуществляет фиксацию
 даты для терма.


## Комментарии


При вызове метода свойству [IMsFormulaTermInfo.Type](IMsFormulaTermInfo.Type.htm)
 автоматически будет установлено значение [MsFormulaTermType.Date](../../Enums/MsFormulaTermType.htm),
 и при вычислении модели в качестве значения терма будет подставляться
 значение точки, соответствующей указанной дате.


Примеры форматов, которые может принимать параметр DateFormat:


	- YYYY. Годовая динамика;


	- YYYY-Hh. Полугодовая
	 динамика;


	- YYYY-Qq. Квартальная
	 динамика;


	- YYYY-MM. Месячная динамика;


	- YYYY-Www. Недельная
	 динамика;


	- YYYY-DDD. Дневная динамика.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MODEL_SPACE. В контейнере имеется переменная
 VAR, которая в дальнейшем будет использоваться как моделируемая, а также
 переменная VAR_F, используемая как фактор.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Kont: IMetabaseObjectDescriptor;

		    CrInf: IMetabaseObjectCreateInfo;

		    MObj: IMetabaseObject;

		    Model: IMsModel;

		    Trans: IMsFormulaTransform;

		    VarTrans: IMsFormulaTransformVariable;

		    Tree: IMsFormulaTransformSlicesTree;

		    Slice: IMsFormulaTransformSlice;

		    Selector: IMsFormulaTransformSelector;

		    Formula: IMsFormula;

		    NonLinear: IMsNonLinearRegressionTransform;

		    Varr: IVariableStub;

		    TransVar: IMsFormulaTransformVariable;

		    TermX1, TermX2: IMsFormulaTerm;

		    TermX1Info, TermX2Info: IMsFormulaTermInfo;

		Begin

		    MB := MetabaseClass.Active;

		    Kont := Mb.ItemById("MODEL_SPACE");

		    //создание модели

		    CrInf := Mb.CreateCreateInfo;

		    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

		    CrInf.Id := MB.GenerateId("New_NonLinReg", Kont.Key);

		    CrInf.Name := "New_NonLinReg";

		    CrInf.Parent := Kont;

		    MObj := Mb.CreateObject(CrInf).Edit;

		    Model := MObj As IMsModel;

		    Trans := Model.Transform;

		    //добавление моделируемой переменной

		    Varr := MB.ItemByIdNamespace("VAR", Kont.Key).Bind As IVariableStub;

		    Trans.Outputs.Add(Varr);

		    VarTrans := Trans.Outputs.Item(0);

		    Tree := VarTrans.SlicesTree(VarTrans);

		    Slice := Tree.CreateSlice(1);

		    Selector := Trans.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Trans.Transform(Selector);

		    Formula.Kind := MsFormulaKind.NonLinearRegression;

		    Formula.Level := DimCalendarLevel.Year;

		    NonLinear := Formula.Method As IMsNonLinearRegressionTransform;

		    //добавление фактора

		    Varr := MB.ItemByIdNamespace("VAR_F", Kont.Key).Bind As IVariableStub;

		    Trans.Inputs.Add(Varr);

		    TransVar := Trans.Inputs.Item(0);

		    Slice := TransVar.SlicesTree(VarTrans).CreateSlice(1);

		    //сопоставление терма срезу в переменной

		    TermX1 := NonLinear.Operands.Add(Slice);

		    TermX2 := NonLinear.Operands.Add(Slice);

		    TermX1Info := TermX1.TermInfo;

		    TermX2Info := TermX2.TermInfo;

		    TermX2Info.Type := MsFormulaTermType.Date;

		    TermX2Info.SetDate(DateTime.ComposeDay(2000, 1, 1), "YYYY");

		    //создание уравнения

		    NonLinear.Expression.AsString := "A0+" + TermX1Info.TermInnerText + "/" + TermX2Info.TermInnerText;

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера в контейнере моделирования будет создана
 новая модель. Для расчёта модели будет использоваться метод нелинейной
 регрессии. В модель будет добавлена моделируемая переменная и одна входная
 переменная. Для составления уравнения будут созданы термы, ссылающиеся
 на срез входной переменной. При вычислении модели в качестве значения
 второго терма будет подставляться значение координаты, соответствующей
 2000 году.


См. также:


[IMsFormulaTermInfo](IMsFormulaTermInfo.htm)
 | [IMsFormulaTermInfo.Date](IMsFormulaTermInfo.Date.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
