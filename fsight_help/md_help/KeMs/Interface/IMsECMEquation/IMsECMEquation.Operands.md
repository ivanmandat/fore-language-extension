# IMsECMEquation.Operands

IMsECMEquation.Operands
-


# IMsECMEquation.Operands


## Синтаксис


		Operands: [IMsCompositeFormulaTermList](../IMsCompositeFormulaTermList/IMsCompositeFormulaTermList.htm);


## Описание


Свойство Operands возвращает
 коллекцию термов, используемых для составления уравнения.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором KONT_MODEL.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    CrInf: IMetabaseObjectCreateInfo;

		    MObj: IMetabaseObject;

		    Model: IMsModel;

		    ModelTrans: IMsFormulaTransform;

		    ECM: IMsErrorCorrectionModelTransform;

		    MissData: IMissingData;

		    Endo1, Endo2, Endo3,Endo4, Ekzo1: IMsVariableStub;

		    TransVar: IMsFormulaTransformVariable;

		    Tree: IMsFormulaTransformSlicesTree;

		    Slice: IMsFormulaTransformSlice;

		    Selector: IMsFormulaTransformSelector;

		    Formula: IMsFormula;

		    Eqution: IMsECMEquation;

		    Ar: Array[0..2] Of Integer;

		    ComposTerm: IMsCompositeFormulaTerm;

		Begin

		    MB := MetabaseClass.Active;

		    //создание модели

		    CrInf := Mb.CreateCreateInfo;

		    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

		    CrInf.Id := "New_ECM";

		    CrInf.Name := "New_ECM";

		    CrInf.Parent := Mb.ItemById("KONT_MODEL");

		    MObj := Mb.CreateObject(CrInf).Edit;

		    Model := MObj As IMsModel;

		    ModelTrans := Model.Transform;

		    ModelTrans.Kind := MsModelKind.ErrorCorrectionModel;

		    //определение параметров
		 модели

		    ECM := Model.Transform.EquationsFormula.Method As IMsErrorCorrectionModelTransform;

		    ECM.ModelType := ECMType.NoTrendIntercept;

		    ECM.CointegralCount := 2;

		    MissData := ECM.MissingData;

		    MissData.Method := MissingDataMethod.NPointsAverage;

		    MissData.MethodParameter:= 10;

		    // добавление эндогенных
		 переменных в список выходных

		    Endo1 := MB.ItemByIdNamespace("Var_1",MB.ItemById("KONT_MODEL").Key).Bind As IMsVariableStub;

		    ModelTrans.Outputs.Add(Endo1);

		    Endo2 := MB.ItemByIdNamespace("Var_2",MB.ItemById("KONT_MODEL").Key).Bind As IMsVariableStub;

		    ModelTrans.Outputs.Add(Endo2);

		    Endo3 := MB.ItemByIdNamespace("Var_3",MB.ItemById("KONT_MODEL").Key).Bind As IMsVariableStub;

		    ModelTrans.Outputs.Add(Endo3);

		    Endo4 := MB.ItemByIdNamespace("Var_4",MB.ItemById("KONT_MODEL").Key).Bind As IMsVariableStub;

		    ModelTrans.Outputs.Add(Endo4);

		    // добавление экзогенной
		 переменной в список входных

		    Ekzo1 := MB.ItemByIdNamespace("Var_11",MB.ItemById("KONT_MODEL").Key).Bind As IMsVariableStub;

		    ModelTrans.Inputs.Add(Ekzo1);

		    // настройка первой эндогенной
		 переменной

		    TransVar := ModelTrans.Outputs.Item(0);

		    Tree := TransVar.SlicesTree(Null);

		    Slice := Tree.CreateSlice(1);

		    Selector := ModelTrans.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Model.Transform.Transform(Selector);

		    Formula.Kind := MsFormulaKind.ECMEquation;

		    Formula.Level := DimCalendarLevel.Year;

		    Eqution := Formula.Method As IMsECMEquation;

		    Eqution.Inversion :=MsInversion.Normalization;

		    Ar := New Integer[3];

		    Ar[0] := 1;

		    Ar[1] := 2;

		    Ar[2] := 3;

		    Eqution.AutoRegressionOrder:= Ar;

		    Eqution.HasConstant := True;

		    // настройка экзогенной
		 переменной для первого уравнения

		    TransVar := Model.Transform.Inputs.Item(0);

		    ComposTerm := Eqution.Operands.Add;

		    Slice := TransVar.Slices.Add(Null);

		    ComposTerm.Expression.AsString:= "10*" + ModelTrans.SliceToTerm(Slice, "") + "*3.14";

		    // настройка второй эндогенной
		 переменной

		    TransVar := Model.Transform.Outputs.Item(1);

		    Tree := TransVar.SlicesTree(Null);

		    Slice := Tree.CreateSlice(1);

		    Selector := ModelTrans.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Model.Transform.Transform(Selector);

		    Formula.Kind := MsFormulaKind.ECMEquation;

		    Eqution := Formula.Method As IMsECMEquation;

		    Eqution.Included := False;

		    // настройка третьей
		 эндогенной переменной

		    TransVar := Model.Transform.Outputs.Item(2);

		    Tree := TransVar.SlicesTree(Null);

		    Slice := Tree.CreateSlice(1);

		    Selector := ModelTrans.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Model.Transform.Transform(Selector);

		    Formula.Kind := MsFormulaKind.ECMEquation;

		    // настройка четвертой
		 эндогенной переменной

		    TransVar := Model.Transform.Outputs.Item(3);

		    Tree := TransVar.SlicesTree(Null);

		    Slice := Tree.CreateSlice(1);

		    Selector := ModelTrans.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Model.Transform.Transform(Selector);

		    Formula.Kind := MsFormulaKind.ECMEquation;

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера в контейнере моделирования будет создана
 модель коррекции ошибок. Для модели будут определены основные параметры
 (тип модели и число коинтеграционных связей), в список эндогенных переменных
 будет добавлено 4 переменные. Для первого уравнения будет добавлена одна
 экзогенная переменная и изменён порядок авторегрессии. Второе уравнение
 при расчёте учитываться не будет.


См. также:


[IMsECMEquation](IMsECMEquation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
