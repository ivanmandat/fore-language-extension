# IDimSelectionSetFactory.CreateDimSelectionSet

IDimSelectionSetFactory.CreateDimSelectionSet
-


# IDimSelectionSetFactory.CreateDimSelectionSet


## Синтаксис


CreateDimSelectionSet: [IDimSelectionSet](../IDimSelectionSet/IDimSelectionSet.htm);


## Описание


Метод CreateDimSelectionSet
 создает комплексную отметку справочников.


## Комментарии


Комплексная отметка включает в себя отметки отдельных справочников,
 которые организуют измерения в многомерных источниках данных. Используется
 для указания координат, по которым будет производиться извлечение данных.


## Пример


Для выполнения примера предполагается наличие в контейнере моделирования
 двух переменных, содержащих дополнительные имерения.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInf: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    Model: IMsModel;

	    Trans: IMsFormulaTransform;

	    VarTrans: IMsFormulaTransformVariable;

	    Slice, Slice1: IMsFormulaTransformSlice;

	    Selector: IMsFormulaTransformSelector;

	    Formula: IMsFormula;

	    NonLinear: IMsNonLinearRegressionTransform;

	    Varr: IMsVariable;

	    TransVar: IMsFormulaTransformVariable;

	    TermX1, TermX2: IMsFormulaTerm;

	    SelectionFact: IDimSelectionSetFactory;

	    Selection: IDimSelectionSet;

	    s: String;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    //создание модели

	    CrInf := Mb.CreateCreateInfo;

	    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

	    CrInf.Id := "New_NonLinReg";

	    CrInf.Name := "New_NonLinReg";

	    CrInf.Parent := Mb.ItemById("KONT_MODEL");

	    MObj := Mb.CreateObject(CrInf).Edit;

	    Model := MObj As IMsModel;

	    Trans := Model.Transform;

	    // добавление моделируемой переменной

	    Varr := MB.ItemByIdNamespace("Var_1", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

	    Model.Output.Add(Varr);

	    //создаем пустую отметку

	    SelectionFact := New DimSelectionSetFactory.Create;

	    Selection := SelectionFact.CreateDimSelectionSet;

	    //если в выходной переменной есть дополнительные измерения, отмечаем в них элемент с индексом 3

	    For i := 0 To Varr.Dimensions.Count - 1 Do

	        Selection.Add((Varr.Dimensions.Item(i).Model As IMetabaseObject).Open(Null) As IDimInstance);

	        Selection.Item(i).SelectElement(3, False);

	    End For;

	    VarTrans := Trans.Outputs.Item(0);

	    //получаем срез в выходной переменной

	    Slice := VarTrans.Slices.Add(Selection);

	    Selector := Model.Transform.CreateSelector;

	    Selector.Slice := Slice;

	    Formula := Model.Transform.Transform(Selector);

	    Formula.Kind := MsFormulaKind.NonLinearRegression;

	    NonLinear := Formula.Method As IMsNonLinearRegressionTransform;

	    //добавление входную переменную

	    Varr := MB.ItemByIdNamespace("Var_Factor", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

	    Model.Input.Add(Varr);

	    TransVar := Model.Transform.Inputs.Item(0);

	    //фиксируем отметку по всем дополнительным измерениям

	    For i := 0 To Varr.Dimensions.Count - 1 Do

	        Selection.Add((Varr.Dimensions.Item(i).Model As IMetabaseObject).Open(Null) As IDimInstance);

	        Selection.Item(i).DeselectAll;

	        Selection.Item(i).SelectElement(1, False);

	    End For;

	    //добавляем срез в переменную

	    Slice := TransVar.Slices.Add(Selection);

	    //создаем отметку для второго среза

	    For i := 0 To Varr.Dimensions.Count - 1 Do

	        Selection.Item(i).DeselectAll;

	        Selection.Item(i).SelectElement(3, False);

	    End For;

	    //добавляем второй срез в переменную

	    Slice1 := TransVar.Slices.Add(Selection);

	    //создаем два терма, по разным срезам в переменной

	    TermX1 := NonLinear.Operands.Add(Slice);

	    TermX2 := NonLinear.Operands.Add(Slice1);

	    //создание уравнения

	    s := "A0+" + Trans.SliceToTerm(TermX1.Slice, TermX1.Lag.AsString) + "/10+ " + Trans.SliceToTerm(TermX2.Slice,

	         TermX2.Lag.AsString);

	    NonLinear.Expression.AsString := s;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в контейнере моделирования будет создана модель.
 В модель будет добавлена выходная переменная, во всех дополнительных срезах
 которой, будут выбраны элементы с индексом "3". Для полученного
 среза будет настроена спецификация расчета. Для расчета будет использоваться
 метод нелинейной регрессии. В список входных переменных будет добавлена
 одна переменная, с различной фиксацией по дополнительным измерениям. Далее
 будут получены термы и составлено уравнение.


См. также:


[IDimSelectionSetFactory](IDimSelectionSetFactory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
