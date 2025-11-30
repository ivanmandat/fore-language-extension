# IMsFormulaTermList.Add

IMsFormulaTermList.Add
-


# IMsFormulaTermList.Add


## Синтаксис


		Add(Slice: [IMsFormulaTransformSlice](../IMsFormulaTransformSlice/IMsFormulaTransformSlice.htm)):
		 [IMsFormulaTerm](../IMsFormulaTerm/IMsFormulaTerm.htm);


## Параметры


Slice. Срез данных в переменной,
 на который будет ссылаться терм.


## Описание


Метод Add осуществляет добавление
 нового терма в коллекцию.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования KONT_MODEL. В данном контейнере содержится задача моделирования
 с идентификатором NEW_NONLINREG, использующая для расчёта метод нелинейной
 регрессии.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    MB: IMetabase;

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

		    Varr: IMsVariable;

		    TransVar: IMsFormulaTransformVariable;

		    TermX1: IMsFormulaTerm;

		    s: String;

		Begin

		    MB := MetabaseClass.Active;

		    //создание модели

		    CrInf := Mb.CreateCreateInfo;

		    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

		    CrInf.Id := "New_NonLinReg";

		    CrInf.Name := "New_NonLinReg";

		    CrInf.Parent := Mb.ItemById("KONT_MODEL");

		    CrInf.Permanent := False;

		    MObj := Mb.CreateObject(CrInf).Edit;

		    Model := MObj As IMsModel;

		    Trans := Model.Transform;

		    //добавление моделируемой
		 переменной

		    Varr := MB.ItemByIdNamespace("Var_1",MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

		    Model.Output.Add(Varr);

		    VarTrans := Trans.Outputs.Item(0);

		    Tree := VarTrans.SlicesTree(VarTrans);

		    Slice := Tree.CreateSlice(1);

		    Selector := Model.Transform.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Model.Transform.Transform(Selector);

		    Formula.Kind := MsFormulaKind.NonLinearRegression;

		    NonLinear := Formula.Method As IMsNonLinearRegressionTransform;

		    //добавление фактора

		    Varr := MB.ItemByIdNamespace("Var_Factor",MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

		    Model.Input.Add(Varr);

		    TransVar := Model.Transform.Inputs.Item(0);

		    //сопоставление терма
		 срезу в переменной

		    TermX1 := NonLinear.Operands.Add(TransVar.SlicesTree(VarTrans).CreateSlice(1));

		    //изменение параметров
		 терма

		    TermX1.Inversion := MsInversion.DLog;

		    TermX1.InversionLag :=MsInversionLag.PrecidingYear;

		    TermX1.UpdateSlice(TermX1.Slice,"-1");

		    //создание уравнения

		    s := "A0+"+ Trans.SliceToTerm(TermX1.Slice, TermX1.Lag.AsString) + "/10 ";

		    NonLinear.Expression.AsString:= s;

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера в контейнере моделирования будет создана
 новая модель. В созданную модель добавляется моделируемая переменная и
 один фактор. Для составления уравнения создается терм, ссылающийся на
 срез первой входной переменной. Для терма будет изменен способ начального
 преобразования данных и лаг. Для расчёта модели будет использоваться метод
 нелинейной регрессии.


См. также:


[IMsFormulaTermList](IMsFormulaTermList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
