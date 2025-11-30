# IMsFormulaTransformVariable.AttributeId

IMsFormulaTransformVariable.AttributeId
-


# IMsFormulaTransformVariable.AttributeId


## Синтаксис


AttributeId: String;


## Описание


Свойство AttributeId
 определяет идентификатор атрибута для переменной.


## Комментарии


Данное свойство актуально, если свойство [IMsFormulaTransformVariable.Kind](IMsFormulaTransformVariable.Kind.htm)
 имеет значение MsFormulaTransformVariableKind.Attribute, т.е. переменная
 построена на источнике данных и атрибуте. Подобные переменные предназначены
 для использования в выражениях. Если атрибут не задан, то переменная рассматривается
 как набор значений, если атрибут задан - то как значение атрибута. В AttributeId
 можно указывать идентификатор атрибута показателей или идентификатор атрибута
 наблюдений.


Если атрибут определен, то в выражении возможно указать константное
 значение справочника, на который ссылается данный атрибут. Для этого необходимо
 добавить справочник в коллекцию объектов у параметров модели (используйте
 метод [IFormulaTransform.ObjectList.Add()](../IMsTransformObjectList/IMsTransformObjectList.Add.htm)).
 Затем получить ключ добавленного объекта, на его основе сформировать внутреннее
 представление терма для справочника и передать его в выражение. Терм должен
 иметь следующий формат: «@__<ключ_объекта>».


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC. В контейнере моделирования данной
 базы должна присутствовать модель с идентификатором MODEL_ATTR. Модель
 рассчитывается как детерминированное уравнение.


Добавьте ссылки на системные сборки: Cubes, Metabase, Ms, Rds.


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

    FactsAttrs: IMetaAttributes;

    Attr: IMetaAttribute;

    DictDescr: IMetabaseObjectDescriptor;

    ObjList: IMsTransformObjectList;

    TransfObj: IMsTransformObject;

    TermTrue, TermFalse: String;

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

    TransformVarables := Transform.Outputs;

    TransVar := TransformVarables.Item(0);

    TransVar.AttributeId := "UNIT";

    FactsAttrs := Rubr.Facts.Attributes;

    Attr := FactsAttrs.FindById("UNIT");

    DictDescr := Attr.ValuesObject;

    ObjList := Transform.ObjectList;

    If ObjList.Count > 0

        Then ObjList.Clear;

    End If;

    TransfObj := ObjList.Add(DictDescr);

    TermTrue := "@__" + TransfObj.Key.ToString + ":3433"; //3433 - Billions of NationalCurrency

    TermFalse := "@__" + TransfObj.Key.ToString + ":3549"; //3549 - National Currency

    Determ := Transform.FormulaItem(0).Method As IMsDeterministicTransform;

    Expr := Determ.Expression;

    Expr.AsString := "";

    FormulaTerm := Determ.Operands.Item(0);

    Expr.AsString := "iif(" + FormulaTerm.TermToText + "=3433," + TermTrue + "," + TermFalse + ")";

    If Not (Expr.Valid) Then Debug.WriteLine(Expr.ErrorInfo.ErrorMessage);

        Else (Model As IMetabaseObject).Save;

    End If;

End Sub UserProc;


После выполнения примера выходная переменная модели будет предназначена
 для выгрузки в нее значения атрибута UNIT (единицы измерения). Формула
 расчета детерминированного уравнения будет изменена на следующую: если
 единицы измерения первой входной переменной «Billions of National Currency»,
 то единицы измерения выходной переменной будут изменены на «Billions of
 National Currency»; если единицы измерения первой входной переменной не
 «Billions of National Currency», то единицы измерения выходной переменной
 будут изменены на «National Currency».


См. также:


[IMsFormulaTransformVariable](IMsFormulaTransformVariable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
