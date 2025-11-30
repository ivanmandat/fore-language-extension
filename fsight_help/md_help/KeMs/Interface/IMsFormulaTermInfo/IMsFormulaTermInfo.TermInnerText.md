# IMsFormulaTermInfo.TermInnerText

IMsFormulaTermInfo.TermInnerText
-


# IMsFormulaTermInfo.TermInnerText


## Синтаксис


		TermInnerText: String;


## Описание


Свойство TermInnerText возвращает
 внутреннее представление терма.


## Комментарии


Данное представление подставляется в уравнение модели.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MODEL_SPACE. В контейнере имеется переменная
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

		    VarTrans, VarTrans1: IMsFormulaTransformVariable;

		    Tree: IMsFormulaTransformSlicesTree;

		    Slice: IMsFormulaTransformSlice;

		    Selector: IMsFormulaTransformSelector;

		    Formula: IMsFormula;

		    NonLinear: IMsNonLinearRegressionTransform;

		    Varr: IVariableStub;

		    TermList: IMsFormulaTermList;

		    TermX1, TermX2, TermX3: IMsFormulaTerm;

		    TermX1Info, TermX2Info, TermX3Info: IMsFormulaTermInfo;

		Begin

		    MB := MetabaseClass.Active;

		    Kont := Mb.ItemById("MODEL_SPACE");

		    //Создание модели

		    CrInf := Mb.CreateCreateInfo;

		    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

		    CrInf.Id := "New_NonLinReg";

		    CrInf.Name := "New_NonLinReg";

		    CrInf.Parent := Kont;

		    MObj := Mb.CreateObject(CrInf).Edit;

		    Model := MObj As IMsModel;

		    Trans := Model.Transform;

		    //Добавление моделируемой переменной

		    Varr := MB.ItemByIdNamespace("Var_1", Kont.Key).Bind As IVariableStub;

		    VarTrans := Trans.Outputs.Add(Varr);

		    Tree := VarTrans.SlicesTree(VarTrans);

		    Slice := Tree.CreateSlice(1);

		    Selector := Trans.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Trans.Transform(Selector);

		    Formula.Kind := MsFormulaKind.NonLinearRegression;

		    Formula.Level := DimCalendarLevel.Year;

		    NonLinear := Formula.Method As IMsNonLinearRegressionTransform;

		    //Добавление фактора

		    Varr := MB.ItemByIdNamespace("Var_Factor", Kont.Key).Bind As IVariableStub;

		    VarTrans1 := Trans.Inputs.Add(Varr);

		    Slice := VarTrans1.SlicesTree(VarTrans).CreateSlice(1);

		    //Сопоставление терма срезу в переменной

		    TermList := NonLinear.Operands;

		    TermX1 := TermList.Add(Slice);

		    TermX2 := TermList.Add(Slice);

		    TermX3 := TermList.Add(Slice);

		    TermX1Info := TermX1.TermInfo;

		    TermX2Info := TermX2.TermInfo;

		    TermX3Info := TermX3.TermInfo;

		    //Параметры второго терма

		    TermX2Info.Type := MsFormulaTermType.Date;

		    TermX2Info.SetDate(DateTime.ComposeDay(2000, 1, 1), "YYYY");

		    //Установка параметров третьего терма, как и у второго

		    TermX3Info.ParseTerm(TermX2Info.TermInnerText);

		    //Изменение даты для третьего терма

		    TermX3Info.SetDate(DateTime.ComposeDay(2001, 1, 1), "YYYY");

		    //Создание уравнения

		    NonLinear.Expression.AsString :=

		        "A0+" + TermX1Info.TermInnerText + "/(" +

		        TermX2Info.TermInnerText + "+" + TermX3Info.TermInnerText + ")";

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера в контейнере моделирования будет создана
 новая модель. Для расчёта модели будет использоваться метод нелинейной
 регрессии. В модель будет добавлена моделируемая переменная и одна входная
 переменная. Для составления уравнения будут созданы термы, ссылающиеся
 на срез входной переменной. При вычислении модели в качестве значения
 второго и третьего терма будет подставляться значение координаты, соответствующей
 2000 и 2001 году соответственно.


См. также:


[IMsFormulaTermInfo](IMsFormulaTermInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
