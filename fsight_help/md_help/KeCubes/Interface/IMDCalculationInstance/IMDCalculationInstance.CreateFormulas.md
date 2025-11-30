# IMDCalculationInstance.CreateFormulas

IMDCalculationInstance.CreateFormulas
-


# IMDCalculationInstance.CreateFormulas


## Синтаксис


CreateFormulas: [IMDCalculationFormulas](../IMDCalculationFormulas/IMDCalculationFormulas.htm);


## Описание


Метод CreateFormulas осуществляет
 создание новой коллекции формул, действующих в различные периоды времени.


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

    FuncCallOperand: IMDCalculationFormulaFunctionCall;

    DelimiterOperand: IMDCalculationFormulaDelimiter;

    DatePeriodOperand: IMDCalculationFormulaDatePeriod;

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

    // Координата, по которой запишем формулу в приёмник

    Dest := MDInst.Destination;

    DestCoord := Dest.NewCoord;

    Slices := Dest.Slices;

    For i := 0 To Slices.Count - 1 Do

        DestCoord.Item(i) := 0;

    End For;

    ElementKey := Dest.CoordToKey(DestCoord);

    ElementKey.FactIndex := 0;

    // Записываем формулу по первой координате

    MDInst.WriteFormulas(ElementKey, Formulas);

    // Далее идет добавление в формулу функции Shift и запись по второй координате

    Operand := FormulaExpression.CreateItem(MDCalculationFormulaOperandKind.FunctionCall);

    FuncCallOperand := Operand As IMDCalculationFormulaFunctionCall;

    FuncCallOperand.FunctionCall := MDCalculationFormulaFunctionCall.Shift;

    // Вставляем в первую позицию функцию Shift

    FormulaExpression.InsertItem(Operand, 0);

    // Задать в качестве операнда - разделитель ","

    Operand := FormulaExpression.CreateItem(MDCalculationFormulaOperandKind.Delimiter);

    DelimiterOperand := Operand As IMDCalculationFormulaDelimiter;

    DelimiterOperand.Delimiter := MDCalculationFormulaDelimiter.Comma;

    // Вставляем в третью позицию ","

    FormulaExpression.InsertItem(Operand, 2);

    // Вставляем "Day"

    Operand := FormulaExpression.CreateItem(MDCalculationFormulaOperandKind.DatePeriod);

    DatePeriodOperand := Operand As IMDCalculationFormulaDatePeriod;

    DatePeriodOperand.DatePeriod := MDCalculationFormulaDatePeriod.Day;

    FormulaExpression.InsertItem(Operand, 3);

    // Вставляем ","

    Operand := FormulaExpression.CreateItem(MDCalculationFormulaOperandKind.Delimiter);

    DelimiterOperand := Operand As IMDCalculationFormulaDelimiter;

    DelimiterOperand.Delimiter := MDCalculationFormulaDelimiter.Comma;

    FormulaExpression.InsertItem(Operand, 4);

    // Вставляем в последнюю позицию "1"

    Operand := FormulaExpression.CreateItem(MDCalculationFormulaOperandKind.ConstantValue);

    ConstOperand := Operand As IMDCalculationFormulaConstantValue;

    ConstOperand.ConstantValue := 1;

    FormulaExpression.InsertItem(Operand, 5);

    // Вставляем в последнюю позицию ")"

    Operand := FormulaExpression.CreateItem(MDCalculationFormulaOperandKind.Delimiter);

    DelimiterOperand := Operand As IMDCalculationFormulaDelimiter;

    DelimiterOperand.Delimiter := MDCalculationFormulaDelimiter.RightPar;

    FormulaExpression.InsertItem(Operand, 6);

    Dest := MDInst.Destination;

    DestCoord := Dest.NewCoord;

    Slices := Dest.Slices;

    For i := 0 To Slices.Count - 1 Do

        DestCoord.Item(i) := 1;

    End For;

    ElementKey := Dest.CoordToKey(DestCoord);

    ElementKey.FactIndex := 0;

    // Записываем формулу по второй координате

    MDInst.WriteFormulas(ElementKey, Formulas);

End Sub UserProc;


После выполнения примера будет задана формула для указанного элемента
 в приёмнике данных. Значение по координате в приёмнике будет рассчитываться
 по формуле: Значение по координате в источнике умноженное на 3,14. Значение
 по второй координате в приёмнике будет рассчитываться по такой же формуле,
 но значение координаты в источнике будет браться со смещением на один
 день по календарному измерению.


См. также:


[IMDCalculationInstance](IMDCalculationInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
