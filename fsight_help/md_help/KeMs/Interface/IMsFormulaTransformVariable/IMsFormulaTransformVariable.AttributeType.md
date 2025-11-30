# IMsFormulaTransformVariable.AttributeType

IMsFormulaTransformVariable.AttributeType
-


# IMsFormulaTransformVariable.AttributeType


## Синтаксис


AttributeType: [MsAttributeVariabeType](../../Enums/MsAttributeVariabeType.htm);


## Описание


Свойство AttributeType определяет тип атрибута для переменной.


## Комментарии


Используя данное свойство можно рассчитывать значения атрибутов наблюдений одного показателя в зависимости от значения атрибутов наблюдений других показателей, основываясь на условной логике.


Идентификатор атрибута определяет свойство [IMsFormulaTransformVariable.AttributeId](IMsFormulaTransformVariable.AttributeId.htm). Если AttributeType = MsAttributeVariabeType.Observation, то указывается идентификатор атрибута наблюдения; если AttributeType = MsAttributeVariabeType.Series (значение по умолчанию), то - идентификатор атрибута показателей.


Расчёт не может быть произведен, если атрибут скрытый или может иметь множественное значение.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных временных рядов с идентификатором «FC». База данных должна содержать целочисленный атрибут наблюдений с идентификатором «ATR_VAL». В контейнере моделирования данной базы должна присутствовать модель с идентификатором «MODEL_ATTR». Модель рассчитывается как детерминированное уравнение и должна иметь хотя бы один фактор.


Добавьте ссылки на системные сборки «Ms», «Cubes», «Metabase».


			Sub UserProc;

Var

    Mb: IMetabase;

    RubrDescr: IMetabaseObjectDescriptor;

    Rubr: IRubricator;

    MsDescr: IMetabaseObjectDescriptor;

    Model: IMsModel;

    Transform: IMsFormulaTransform;

    TransformVarables: IMsFormulaTransformVariables;

    TransVar: IMsFormulaTransformVariable;

    Determ: IMsDeterministicTransform;

    Expr: IExpression;

    FormulaTerm: IMsFormulaTerm;

Begin

    Mb := MetabaseClass.Active;

    RubrDescr := Mb.ItemById("FC");

    Rubr := RubrDescr.Bind As IRubricator;

    MsDescr := Rubr.ModelSpace;

    Model := Mb.ItemByIdNamespace("MODEL_ATTR", MsDescr.Key).Edit As IMsModel;

    Transform := Model.Transform;

    TransformVarables := Transform.Inputs;

    TransVar := TransformVarables.Item(0);

    TransVar.AttributeId := "ATR_VAL";

    TransVar.AttributeType := MsAttributeVariabeType.Observation;

    Determ := Transform.FormulaItem(0).Method As IMsDeterministicTransform;

    Expr := Determ.Expression;

    Expr.AsString := "";

    FormulaTerm := Determ.Operands.Item(0);

    Expr.AsString := FormulaTerm.TermToText + " *2";

    If Not (Expr.Valid)

        Then Debug.WriteLine(Expr.ErrorInfo.ErrorMessage);

        Else (Model As IMetabaseObject).Save;

    End If;

End Sub UserProc;


В результате выполнения примера будет изменена формула расчёта модели «MODEL_ATTR»: в результирующую переменную будет выгружаться значение атрибута наблюдений «ATR_VAL», увеличенное в два раза.


См. также:


[IMsFormulaTransformVariable](IMsFormulaTransformVariable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
