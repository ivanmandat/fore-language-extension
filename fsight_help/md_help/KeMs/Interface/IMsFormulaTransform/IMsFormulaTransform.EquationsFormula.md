# IMsFormulaTransform.EquationsFormula

IMsFormulaTransform.EquationsFormula
-


# IMsFormulaTransform.EquationsFormula


## Синтаксис


		EquationsFormula: [IMsFormula](../IMsFormula/IMsFormula.htm);


## Описание


Свойство EquationsFormula возвращает
 формулу уравнений.


## Комментарии


Используется для работы с моделью коррекции ошибок и системой нелинейных
 уравнений.


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

		    ECM: IMsErrorCorrectionModelTransform;

		    Endo1, Endo2, Endo3,Ekzo1: IMsVariable;

		    TransVar: IMsFormulaTransformVariable;

		    Tree: IMsFormulaTransformSlicesTree;

		    Slice: IMsFormulaTransformSlice;

		    Selector: IMsFormulaTransformSelector;

		    Formula: IMsFormula;

		    Eqution: IMsECMEquation;

		    ComposTerm: IMsCompositeFormulaTerm;

		Begin

		    MB := MetabaseClass.Active;

		    //создание модели

		    CrInf := Mb.CreateCreateInfo;

		    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

		    CrInf.Id := "New_ECM";

		    CrInf.Name := "New_ECM";

		    CrInf.Parent := Mb.ItemById("KONT_MODEL");

		    CrInf.Permanent := False;

		    MObj := Mb.CreateObject(CrInf).Edit;

		    Model := MObj As IMsModel;

		    Model.Kind := MsModelKind.ErrorCorrectionModel;

		    //определение параметров
		 модели

		    ECM := Model.Transform.EquationsFormula.Method As IMsErrorCorrectionModelTransform;

		    ECM.ModelType := ECMType.NoTrendIntercept;

		    ECM.CointegralCount :=2;

		    // добавление эндогенных
		 переменных в список выходных

		    Endo1 := MB.ItemByIdNamespace("Var_1",MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

		    Model.Output.Add(Endo1);

		    Endo2 := MB.ItemByIdNamespace("Var_2",MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

		    Model.Output.Add(Endo2);

		    Endo3 := MB.ItemByIdNamespace("Var_3",MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

		    Model.Output.Add(Endo3);

		    // добавление экзогенной
		 переменной в список входных

		    Ekzo1 := MB.ItemByIdNamespace("Var_11",MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

		    Model.Input.Add(Ekzo1);

		    // настройка первой эндогенной
		 переменной

		    TransVar := Model.Transform.Outputs.Item(0);

		    Tree := TransVar.SlicesTree(Null);

		    Slice := Tree.CreateSlice(1);

		    Selector := Endo1.Transform.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Model.Transform.Transform(Selector);

		    Formula.Kind := MsFormulaKind.ECMEquation;

		    Formula.Level := DimCalendarLevel.Year;

		    Eqution := Formula.Method As IMsECMEquation;

		    Eqution.Inversion :=MsInversion.Normalization;

		    // настройка экзогенной
		 переменной для первого уравнения

		    TransVar := Model.Transform.Inputs.Item(0);

		    ComposTerm := Eqution.Operands.Add;

		    Slice := TransVar.Slices.Add(Null);

		    ComposTerm.Expression.AsString:= "10*" + Model.Transform.SliceToTerm(Slice, "") + "*3.14";

		    // настройка второй эндогенной
		 переменной

		    TransVar := Model.Transform.Outputs.Item(1);

		    Tree := TransVar.SlicesTree(Null);

		    Slice := Tree.CreateSlice(1);

		    Selector := Endo1.Transform.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Model.Transform.Transform(Selector);

		    Formula.Kind := MsFormulaKind.ECMEquation;

		    // настройка третьей
		 эндогенной переменной

		    TransVar := Model.Transform.Outputs.Item(2);

		    Tree := TransVar.SlicesTree(Null);

		    Slice := Tree.CreateSlice(1);

		    Selector := Endo1.Transform.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Model.Transform.Transform(Selector);

		    Formula.Kind := MsFormulaKind.ECMEquation;

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера в контейнере моделирования будет создана
 модель коррекции ошибок. Для модели будут определены основные параметры
 (тип модели и число коинтеграционных связей), в список эндогенных переменных
 будет добавлено 3 переменные. Для первого уравнения будет добавлена одна
 экзогенная переменная.


См. также:


[IMsFormulaTransform](IMsFormulaTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
