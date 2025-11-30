# IRdsAttribute.DefaultExpression

IRdsAttribute.DefaultExpression
-


# IRdsAttribute.DefaultExpression


## Синтаксис


DefaultExpression: [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство DefaultExpression определяет
 выражение, по которому будет определяться значение атрибута по умолчанию.


## Комментарии


Для выражения, в виде символьной строки, используйте свойство [IExpression.AsString](ForeSys.chm::/Interface/IExpression/IExpression.AsString.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие табличного
 справочника НСИ с идентификатором ATTRIBUTED.


Добавьте ссылки на системные сборки: Dal, Metabase, Rds.


			Sub UserProc;

Var

    mb: IMetabase;

    Dict: IRdsDictionary;

    Attributes: IRdsAttributes;

    Attribute: IRdsAttribute;

    Exp: IExpression;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем справочник НСИ

    Dict := mb.ItemById("ATTRIBUTED").Edit As IRdsDictionary;

    // Получаем атрибуты справочника

    Attributes := Dict.Attributes;

    // Добавляем новый атрибут

    Attribute := Attributes.Add;

    // Задаём наименование и тип данных атрибута

    Attribute.Name := "Новый атрибут";

    Attribute.DataType := DbDataType.String;

    // Задаём возможность редактировать значение атрибута

    Attribute.VisibleForEdit := TriState.OnOption;

    // Задаём значение по умолчанию

    Exp := Attribute.DefaultExpression;

    Exp.AsString := "NAME";

    // Задаём вычисление значения по умолчанию каждый раз при изменении элемента

    Attribute.DefaultExpressionKind := RdsAttributeDefaultExpressionKind.EvaluateOnEdit;

    // Сохраняем изменения в справочнике НСИ

    (Dict As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в справочнике будет добавлен атрибут
 и задано выражение, для вычисления его значения по умолчанию. Значение
 будет вычисляться каждый раз при изменении элемента.


См. также:


[IRdsAttribute](IRdsAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
