# IMsFormulaTransformVariables.Add

IMsFormulaTransformVariables.Add
-


# IMsFormulaTransformVariables.Add


## Синтаксис


Add(Value: [IVariableStub](KeCubes.chm::/Interface/IVariableStub/IVariableStub.htm)): [IMsFormulaTransformVariable](../IMsFormulaTransformVariable/IMsFormulaTransformVariable.htm);


## Параметры


Value. Переменная контейнера моделирования, которую необходимо добавить в модель.


## Описание


Метод Add осуществляет добавление переменной в коллекцию.


## Пример


Для выполнения примера предполагается наличие контейнера моделирования с идентификатором «MS_COMM», содержащим модель детерминированного уравнения с идентификатором «OBJ_MODEL» и переменную с идентификатором «OBJ_VAR». Добавьте ссылки на системные сборки «Metabase», «Ms», «Cubes».


			Sub UserProc;

Var

    mb: IMetabase;

    MsDescr: IMetabaseObjectDescriptor;

    Model: IMsModel;

    Transform: IMsFormulaTransform;

    InputVars: IMsFormulaTransformVariables;

    Varable: IVariableStub;

    TransformVar: IMsFormulaTransformVariable;

    Slice: IMsFormulaTransformSlice;

    Term: IMsFormulaTerm;

    Formula: IMsFormula;

    DetermTrans: IMsDeterministicTransform;

    Expr: IExpression;

Begin

    mb := MetabaseClass.Active;

    MsDescr := mb.ItemById("MS_COMM");

    Model := mb.ItemByIdNamespace("OBJ_MODEL", MsDescr.Key).Edit As IMsModel;

    Transform := Model.Transform;

// Получаем коллекцию входных переменных
    InputVars := Transform.Inputs;

// Очищаем коллекцию выгружаемых переменных, если в ней есть элементы
    If  Transform.Series.Count > 0 Then

        InputVars.Clear;

    End If;

// Получаем параметры метода расчета
    Formula := Transform.FormulaItem(0);

    DetermTrans := Formula.Method As IMsDeterministicTransform;

// Добавляем одну переменную в модель
    Varable := mb.ItemByIdNamespace("OBJ_VAR", MsDescr.Key).Bind As IVariableStub;

    TransformVar := InputVars.Add(Varable);

    Slice := TransformVar.Slices.Add(Null);

    Term := DetermTrans.Operands.Add(Slice);

// Задаем выражение с участием добавленной переменной
    Expr := DetermTrans.Expression;

    Expr.AsString := Term.TermToInnerText + " + 9";

// Сохраняем модель
    (Model As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в модель «OBJ_MODEL будет добавлена переменная «OBJ_VAR». Данная переменная будет участвовать в выражении, используемом для расчета модели.


См. также:


[IMsFormulaTransformVariables](IMsFormulaTransformVariables.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
