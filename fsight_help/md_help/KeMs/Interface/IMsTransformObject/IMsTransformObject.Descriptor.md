# IMsTransformObject.Descriptor

IMsTransformObject.Descriptor
-
-


# IMsTransformObject.Descriptor


## Синтаксис


Descriptor: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство Descriptor определяет описание объекта репозитория, соответствующего данному объекту.


## Комментарии


По умолчанию значение свойства Descriptor совпадает со значением параметра, с которым был вызван метод [IMsTransformObjectList.Add](../IMsTransformObjectList/IMsTransformObjectList.Add.htm) (добавление объекта). Если данный метод был вызван с параметром Null, то корректное использование объекта невозможно без предварительной установки значения свойства Descriptor.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных временных рядов с идентификатором «FC». В контейнере моделирования данной базы данных временных рядов должна присутствовать модель с идентификатором «MODEL_ATTR». Модель рассчитывается как детерминированное уравнение. Также перед выполнением процедуры необходимо добавить ссылки на системные сборки «Ms», «Cubes», «Rds», «Metabase».


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

    ObjList.Clear;

    ObjList.Add(DictDescr);

    TransfObj := ObjList.Item(0);

    TermTrue := "@__" + TransfObj.Key.ToString + ":3433"; //3433 - Billions of National Currency
    TermFalse := "@__" + TransfObj.Key.ToString + ":3549"; //3549 - National Currency
    Determ := Transform.FormulaItem(0).Method As IMsDeterministicTransform;

    Expr := Determ.Expression;

    Expr.AsString := "";

    FormulaTerm := Determ.Operands.Item(0);

    Expr.AsString := "iif(" + FormulaTerm.TermToText + "=3433," + TermTrue + "," + TermFalse + ")";

    If Not (Expr.Valid)

        Then Debug.WriteLine(Expr.ErrorInfo.ErrorMessage);

        Else (Model As IMetabaseObject).Save;

    End If;

End Sub UserProc;


После выполнения примера будет изменен первый объект в коллекции объектов метода расчета модели. Выходная переменная модели будет предназначена для выгрузки в нее значения атрибута «UNIT» (единицы измерения). Формула расчета детерминированного уравнения будет измерена на следующую: если единицы измерения первой входной переменной «Billions of National Currency», то единицы измерения выходной переменной будут изменены на «Billions of National Currency»; если единицы измерения первой входной переменной не «Billions of National Currency», то единицы измерения выходной переменной будут изменены на «National Currency».


См. также:


[IMsTransformObject](IMsTransformObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
