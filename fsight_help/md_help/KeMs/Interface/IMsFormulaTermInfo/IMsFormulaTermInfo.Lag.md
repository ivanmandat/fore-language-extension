# IMsFormulaTermInfo.Lag

IMsFormulaTermInfo.Lag
-


# IMsFormulaTermInfo.Lag


## Синтаксис


		Lag: String;


## Описание


Свойство Lag определяет значение
 лага для терма.


## Комментарии


Лаг указывает смещение индекса элемента, значение которого будет использоваться
 при расчёте в данной точке. По умолчанию свойству установлено значение
 «0», при этом используется значение текущего элемента.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором KONT_MODEL. В контейнере имеется переменная
 VAR_1, которая в дальнейшем будет использоваться как моделируемая, а также
 переменная VAR_FACTOR, используемая как фактор.


Добавьте ссылки на системные сборки: Metabase, Ms.


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

		    TermX1: IMsFormulaTerm;

		    TermX1Info: IMsFormulaTermInfo;

		Begin

		    MB := MetabaseClass.Active;

		    Kont := Mb.ItemById("KONT_MODEL");

		    //создание модели

		    CrInf := Mb.CreateCreateInfo;

		    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

		    CrInf.Id := "New_NonLinReg";

		    CrInf.Name := "New_NonLinReg";

		    CrInf.Parent := Kont;

		    MObj := Mb.CreateObject(CrInf).Edit;

		    Model := MObj As IMsModel;

		    Trans := Model.Transform;

		    //добавление моделируемой
		 переменной

		    Varr := MB.ItemByIdNamespace("Var_1",Kont.Key).Bind As IVariableStub;

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

		    Varr := MB.ItemByIdNamespace("Var_Factor",Kont.Key).Bind As IVariableStub;

		    Trans.Inputs.Add(Varr);

		    TransVar := Trans.Inputs.Item(0);

		    Slice := TransVar.SlicesTree(VarTrans).CreateSlice(1);

		    //сопоставление терма
		 срезу в переменной

		    TermX1 := NonLinear.Operands.Add(Slice);

		    TermX1Info := TermX1.TermInfo;

		    //изменение параметров
		 первого терма

		    TermX1Info.Inversion:= MsInversion.DLog;

		    TermX1Info.InversionLag:= MsInversionLag.PrecidingYear;

		    TermX1Info.Lag := "-1";

		    TermX1.TermInfo := TermX1Info;

		    //создание уравнения

		    NonLinear.Expression.AsString:= "A0+" + TermX1Info.TermInnerText + "/10";

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера в контейнере моделирования будет создана
 новая модель. В модель будет добавлена моделируемая переменная и одна
 входная переменная. Для составления уравнения будет создан терм, ссылающийся
 на срез входной переменной. Для терма будет изменен способ начального
 преобразования данных и лаг. Для расчёта модели будет использоваться метод
 нелинейной регрессии.


См. также:


[IMsFormulaTermInfo](IMsFormulaTermInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
