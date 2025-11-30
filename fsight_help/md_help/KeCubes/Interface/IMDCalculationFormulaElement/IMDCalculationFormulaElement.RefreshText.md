# IMDCalculationFormulaElement.RefreshText

IMDCalculationFormulaElement.RefreshText
-


# IMDCalculationFormulaElement.RefreshText


## Синтаксис


RefreshText(Calculation: [IMDCalculationInstance](../IMDCalculationInstance/IMDCalculationInstance.htm));


## Параметры


Calculation. Многомерный расчет,
 формулы которого необходимо обновить.


## Описание


Метод RefreshText осуществляет
 обновление текста операнда в соответствии с текстом элемента в источнике/приёмнике
 данных.


## Комментарии


Данный текст будет отображаться в выражении формулы.


## Пример


Для выполнения примера предполагается наличие в репозитории многомерного
 расчета на сервере БД с идентификатором MDCalc_1.


			Sub UserProc;

Var

    MB: IMetabase;

    MDInst: IMDCalculationInstance;

    Formulas: IMDCalculationFormulas;

    Formula: IMDCalculationFormula;

    FormulaExpression: IMDCalculationFormulaExpression;

    Source: IMDCalculationSourceInstance;

    Dest: IMDCalculationDestinationInstance;

    Slices: IMDCalculationSlicesInstance;

    Operand: IMDCalculationFormulaOperand;

    DestCoord, SourceCoord: IMatrixCoord;

    ElementKey, SourceElKey: IMDCalculationFormulaElementKey;

    CoordOperand: IMDCalculationFormulaElement;

    ConstOperand: IMDCalculationFormulaConstantValue;

    BinaryOperand: IMDCalculationFormulaBinaryOperation;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    MDInst := MB.ItemById("MDCalc_1").Open(Null) As IMDCalculationInstance;

    Formulas := MDInst.CreateFormulas;

    Formula := Formulas.Add;

    FormulaExpression := Formula.Expression;

    Source := MDInst.Sources.Item(0);

    Slices := Source.Slices;

    // Задать в качестве операнда - координату в источнике

    Operand := FormulaExpression.CreateItem(MDCalculationFormulaOperandKind.Element);

    SourceCoord := Source.NewCoord;

    For i := 0 To Slices.Count - 1 Do

        SourceCoord.Item(i) := 0;

    End For;

    SourceElKey := Source.CoordToKey(SourceCoord);

    SourceElKey.FactIndex := 0;

    CoordOperand := Operand As IMDCalculationFormulaElement;

    CoordOperand.Key := SourceElKey;

    CoordOperand.RefreshText(MDInst);

    FormulaExpression.InsertItem(Operand);

    // Задать в качестве операнда - знак "*"

    Operand := FormulaExpression.CreateItem(MDCalculationFormulaOperandKind.BinaryOperation);

    BinaryOperand := Operand As IMDCalculationFormulaBinaryOperation;

    BinaryOperand.BinaryOperation := MDCalculationFormulaBinaryOperation.Mul;

    FormulaExpression.InsertItem(Operand);

    // Задать в качестве операнда - константу "3.14"

    Operand := FormulaExpression.CreateItem(MDCalculationFormulaOperandKind.ConstantValue);

    ConstOperand := Operand As IMDCalculationFormulaConstantValue;

    ConstOperand.ConstantValue := 3.14;

    FormulaExpression.InsertItem(Operand);

    // Координата, по которой запишем формулы в приёмник

    Dest := MDInst.Destination;

    DestCoord := Dest.NewCoord;

    Slices := Dest.Slices;

    For i := 0 To Slices.Count - 1 Do

        DestCoord.Item(i) := 0;

    End For;

    ElementKey := Dest.CoordToKey(DestCoord);

    ElementKey.FactIndex := 0;

    MDInst.WriteFormulas(ElementKey, Formulas);

    For i := 0 To FormulaExpression.Count - 1 Do

        Debug.Write(FormulaExpression.Item(i).Text);

    End For;

End Sub UserProc;


После выполнения примера будет задана формула для элемента, соответствующего
 первым элементам cрезов приёмника данных. Значение по координате в приёмнике
 будет рассчитываться по формуле: Значение по координате в источнике умноженное
 на 3,14. Данные будут сохраняться по первому показателю приёмника. Полученное
 выражение будет выведено в консоль среды разработки.


См. также:


[IMDCalculationFormulaElement](IMDCalculationFormulaElement.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
