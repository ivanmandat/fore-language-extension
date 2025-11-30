# IMsInterindustryBalanceTransform.Argument

IMsInterindustryBalanceTransform.Argument
-


# IMsInterindustryBalanceTransform.Argument


## Синтаксис


Argument: [IMsFormulaTerm](../IMsFormulaTerm/IMsFormulaTerm.htm);


## Описание


Свойство Argument определяет
 терм, соответствующий переменной валового выпуска (конечного использования),
 в зависимости от решаемой задачи межотраслевого баланса.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    CrInf: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    Model: IMsModel;

    Trans: IMsFormulaTransform;

    EndVar, ValVar, AVar, XVar, TwoKvadrVar: IMsVariable;

    Dim, Dim1: IDimensionModel;

    TransVar: IMsFormulaTransformVariable;

    Tree: IMsFormulaTransformSlicesTree;

    Slice: IMsFormulaTransformSlice;

    Selector: IMsFormulaTransformSelector;

    Formula: IMsFormula;

    Industry: IMsInterindustryBalanceTransform;

    Term: IMsFormulaTerm;

Begin

    MB := MetabaseClass.Active;

    CrInf := Mb.CreateCreateInfo;

    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

    CrInf.Id := "New_MOB";

    CrInf.Name := "New_MOB";

    CrInf.Parent := Mb.ItemById("KONT_MODEL");

    CrInf.Permanent := False;

    MObj := Mb.CreateObject(CrInf).Edit;

    Model := MObj As IMsModel;

    Trans := Model.Transform;

    Trans.Kind := MsModelKind.InterindustryBalance;

    //Добавляем переменную конечного использования в Outputs модели, и валового выпуска, матрицу А и матрицу Х в Inputs

    EndVar := MB.ItemByIdNamespace("EndVar", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

    Trans.Outputs.Add(EndVar As IMsVariableStub);

    ValVar := MB.ItemByIdNamespace("Val_Prod", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

    Trans.Inputs.Add(ValVar As IMsVariableStub);

    AVar := MB.ItemByIdNamespace("MatrA", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

    Trans.Inputs.Add(AVar As IMsVariableStub);

    XVar := MB.ItemByIdNamespace("MatrX", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

    Trans.Inputs.Add(XVar As IMsVariableStub);

    //Для переменной конечного использования и валового выпуска устанавливаются сквозные измерения

    Dim := EndVar.Dimensions.Item(0).Model;

    Dim1 := ValVar.Dimensions.Item(0).Model;

    Trans.DimensionTransparent(Trans.Outputs.Item(0), Dim) := True;

    Trans.DimensionTransparent(Trans.Outputs.Item(0), Dim1) := True;

    //Заполняем параметры модели

    //Добавляем переменную конечного использования

    TransVar := Model.Transform.Outputs.FindById("EndVar");

    Tree := TransVar.SlicesTree(Null);

    Slice := Tree.CreateSlice(1);

    Selector := EndVar.Transform.CreateSelector;

    Selector.Slice := Slice;

    Formula := Model.Transform.Transform(Selector);

    Formula.Kind := MsFormulaKind.InterindustryBalance;

    Formula.Level := DimCalendarLevel.Year;

    Industry := Formula.Method As IMsInterindustryBalanceTransform;

    //Указываем измерение по строкам

    Industry.BranchRowDimension := Dim;

    //Задаем переменную валового выпуска

    TransVar := Model.Transform.Inputs.FindById("VAL_PROD");

    Tree := TransVar.SlicesTree(Null);

    Slice := Tree.CreateSlice(1);

    Term := Industry.Operands.Add(Slice);

    Industry.Argument := Term;

    //Указываем измерение по столбцам

    Industry.BranchColumnDimension := Dim1;

    //Задаем переменную матрицы A

    TransVar := Model.Transform.Inputs.FindById("MATRA");

    Tree := TransVar.SlicesTree(Null);

    Slice := Tree.CreateSlice(1);

    Term := Industry.Operands.Add(Slice);

    Industry.NewMatrixA := Term;

    //Задаем переменную матрицы X

    TransVar := Model.Transform.Inputs.FindById("MATRX");

    Tree := TransVar.SlicesTree(Null);

    Slice := Tree.CreateSlice(1);

    Term := Industry.Operands.Add(Slice);

    Industry.MatrixA := Term;

    //Второй квадрант

    TwoKvadrVar := MB.ItemByIdNamespace("TWOKVADR", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

    Trans.Inputs.Add(TwoKvadrVar As IMsVariableStub);

    TwoKvadrVar := MB.ItemByIdNamespace("VAR_11", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

    Trans.Inputs.Add(TwoKvadrVar As IMsVariableStub);

    TwoKvadrVar := MB.ItemByIdNamespace("VAR_22", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

    Trans.Inputs.Add(TwoKvadrVar As IMsVariableStub);

    //Задаем переменную для II квадранта

    TransVar := Model.Transform.Inputs.FindById("TWOKVADR");

    Tree := TransVar.SlicesTree(Null);

    Slice := Tree.CreateSlice(1);

    Term := Industry.Operands.Add(Slice);

    Industry.SecondQuadrant := Term;

    //Задаем переменную на основе которой производится расчет

    TransVar := Model.Transform.Inputs.FindById("VAR_11");

    Tree := TransVar.SlicesTree(Null);

    Slice := Tree.CreateSlice(1);

    Term := Industry.Operands.Add(Slice);

    Industry.FiniteUseMatrix := Term;

    //Задаем переменную в которую будет выгружаться матрица

    TransVar := Model.Transform.Inputs.FindById("VAR_22");

    Tree := TransVar.SlicesTree(Null);

    Slice := Tree.CreateSlice(1);

    Term := Industry.Operands.Add(Slice);

    Industry.NewFiniteUseMatrix := Term;

    Industry.GenerateFiniteUse := True;

    MObj.Save;

End Sub UserProc


После выполнения примера в контейнере моделирования будет создана новая
 модель межотраслевого баланса. Данная модель решает задачу нахождения
 конечного использования. В модель будут добавлены переменные конечного
 использования, валового выпуска, переменные для расчета и выгрузки матрицы
 А. Также будет настроен расчет второго квадранта. Структура конечного
 использования будет рассчитываться на основе переменной с идентификатором
 VAR_11.


См. также:


[IMsInterindustryBalanceTransform](IMsInterindustryBalanceTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
