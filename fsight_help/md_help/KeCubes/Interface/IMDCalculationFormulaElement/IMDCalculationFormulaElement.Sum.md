# IMDCalculationFormulaElement.Sum

IMDCalculationFormulaElement.Sum
-


# IMDCalculationFormulaElement.Sum


## Синтаксис


Sum(Index: Integer): [MDCalculationFormulaElementSum](../../Enums/MDCalculationFormulaElementSum.htm);


## Параметры


Index.
 Индекс измерения, по которому осуществляется суммирование.


## Описание


Свойство Sum определяет способ
 суммирования.


## Комментарии


Для использования суммирования, необходимо чтобы по измерению были настроены
 [параметры
 суммирования](../IMDCalculationSliceFree/IMDCalculationSliceFree.Summ.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории многомерного
 расчёта на сервере БД с идентификатором MDCalc_1. В источнике и приёмнике
 имеется два измерения: 1) Календарное измерение - зафиксировано; 2) Измерение,
 основанное на табличном справочнике - для данного измерения настроены
 параметры суммирования.


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

Begin

    MB := MetabaseClass.Active;

    MDInst := MB.ItemById("MDCALC_1").Open(Null) As IMDCalculationInstance;

    Formulas := MDInst.CreateFormulas;

    Formula := Formulas.Add;

    FormulaExpression := Formula.Expression;

    Source := MDInst.Sources.Item(0);

    Slices := Source.Slices;

    // Задать в качестве операнда - координату в источнике

    Operand := FormulaExpression.CreateItem(MDCalculationFormulaOperandKind.Element);

    SourceCoord := Source.NewCoord;

    SourceCoord.Item(0) := 1;

    SourceElKey := Source.CoordToKey(SourceCoord);

    SourceElKey.FactIndex := 0;

    CoordOperand := Operand As IMDCalculationFormulaElement;

    CoordOperand.Key := SourceElKey;

    // Суммирование дочерних элементов

    CoordOperand.Sum(0) := MDCalculationFormulaElementSum.Sum;

    FormulaExpression.InsertItem(Operand);

    // Координата, по которой запишем формулы в приёмник

    Dest := MDInst.Destination;

    DestCoord := Dest.NewCoord;

    Slices := Dest.Slices;

    DestCoord.Item(0) := 0;

    ElementKey := Dest.CoordToKey(DestCoord);

    ElementKey.FactIndex := 0;

    MDInst.WriteFormulas(ElementKey, Formulas);

End Sub UserProc;


После выполнения примера будет задана формула для первого элемента приёмника
 данных. Значение по координате в приёмнике будет рассчитываться как сумма
 значений дочерних элементов первого элемента в источнике данных.


См. также:


[IMDCalculationFormulaElement](IMDCalculationFormulaElement.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
