# IMsFormula.Method

IMsFormula.Method
-


# IMsFormula.Method


## Синтаксис


		Method: [IMsMethod](../IMsMethod/IMsMethod.htm);


## Описание


Свойство Method возвращает параметры
 метода, используемого для расчёта модели.


## Комментарии


Для определения параметров выбранного метода, данное свойство должно
 быть приведено к интерфейсу, описывающему метод расчёта.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL. В контейнере созданы переменные
 с идентификаторами VAR_1 и VAR_FACTOR, в дальнейшем используемые как моделируемая
 переменная и фактор соответственно.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


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

		    Linear: IMsLinearRegressionTransform;

		    Varr: IMsVariable;

		    TransVar: IMsFormulaTransformVariable;

		Begin

		    // Получим текущий репозиторий

		    MB := MetabaseClass.Active;

		    CrInf := Mb.CreateCreateInfo;

		    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

		    CrInf.Id := "New_LinReg";

		    CrInf.Name := "New_LinReg";

		    CrInf.Parent := Mb.ItemById("CONT_MODEL");

		    CrInf.Permanent := False;

		    MObj := Mb.CreateObject(CrInf).Edit;

		    Model := MObj As IMsModel;

		    Trans := Model.Transform;

		    //Добавим моделируемую переменную

		    Varr := MB.ItemByIdNamespace("Var_1", MB.ItemById("CONT_MODEL").Key).Bind As IMsVariable;

		    Model.Output.Add(Varr);

		    VarTrans := Trans.Outputs.Item(0);

		    Tree := VarTrans.SlicesTree(VarTrans);

		    Slice := Tree.CreateSlice(1);

		    Selector := Model.Transform.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Model.Transform.Transform(Selector);

		    Formula.Kind := MsFormulaKind.LinearRegression;

		    Formula.Level := DimCalendarLevel.Year;

		    //Настроим параметры линейной регрессии

		    Linear := Formula.Method As IMsLinearRegressionTransform;

		    Varr := MB.ItemByIdNamespace("Var_Factor", MB.ItemById("CONT_MODEL").Key).Bind As IMsVariable;

		    //Добавим фактор

		    Model.Input.Add(Varr);

		    TransVar := Model.Transform.Inputs.Item(0);

		    Linear.Explanatories.Add.Expression.AsString := Model.Transform.SliceToTerm(TransVar.SlicesTree(VarTrans).CreateSlice(1),"");

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера в контейнере моделирования будет создана
 новая модель. Для расчёта модели используется метод линейной регрессии.
 Для модели будет задана моделируемая переменная и один фактор.


См. также:


[IMsFormula](IMsFormula.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
