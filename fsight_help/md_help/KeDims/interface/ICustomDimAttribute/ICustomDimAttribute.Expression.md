# ICustomDimAttribute.Expression

ICustomDimAttribute.Expression
-


# ICustomDimAttribute.Expression


## Синтаксис


Expression: [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство Expression возвращает
 выражение, в соответствии с которым будут формироваться значения атрибута.


## Комментарии


В выражении могут использоваться параметры конструируемого справочника,
 другие атрибуты, различные математические операции и функции.


## Пример


Для выполнения примера в репозитории предполагается наличие вычисляемого
 куба с идентификатором CALC_CUBE.


Добавьте ссылки на системные сборки: Cubes, Dal, Dimensions, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Cube: ICalculatedCube;

    CustDim: ICustomDimension;

    CustAttrs: ICustomDimAttributes;

    Attr: ICustomDimAttribute;

    CustDimParam: IMetabaseObjectParam;

Begin

    // Получаем куб

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("CALC_CUBE").Edit;

    Cube := MObj As ICalculatedCube;

    // Получаем измерение фактов куба

    CustDim := Cube.InternalFactDimension;

    //Создание параметра у кастомного справочника

    MObj := CustDim As IMetabaseObject;

    CustDimParam := MObj.Params.Add;

    CustDimParam.Id := "PARAM1";

    CustDimParam.Name := "PARAM1";

    CustDimParam.DataType := DbDataType.Integer;

    CustDimParam.DefaultValue := 100;

    // Получаем коллекцию атрибутов измерения фактов

    CustAttrs := CustDim.Attributes;

    // Создаем новый атрибут с параметром в выражении

    Attr := CustAttrs.Add;

    Attr.Id := "EXPR1";

    Attr.Name := "Выражение1";

    Attr.DataType := DbDataType.Integer;

    Attr.Visible := True;

    Attr.Expression.AsString := "PARAM1 + Round(RandBetween(0,100))";

    //Сохраняем

    (CustDim As IMetabaseObject).Save;

End Sub UserProc;


При выполнение примера будет осуществлено редактирование структуры конструируемого
 справочника, который лежит в основе измерения фактов вычисляемого куба.
 В структуру справочника будет добавлен параметр, в коллекцию атрибутов
 справочника будет добавлен атрибут, значения которого будут рассчитываться
 по выражению, использующему созданный параметр.


См. также:


[ICustomDimAttribute](ICustomDimAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
