# IPivotDimensionFilterSettings.Condition

IPivotDimensionFilterSettings.Condition
-


# IPivotDimensionFilterSettings.Condition


## Синтаксис


Condition: [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство Condition возвращает
 выражение, по которому осуществляется фильтрация данных по измерению.


## Комментарии


Свойство актуально, если свойству [UseCondition](IPivotDimensionFilterSettings.UseCondition.htm)
 установлено значение True. Формируемое
 выражение должно возвращать логическое значение. Может содержать различные
 операторы, функции, атрибуты и параметры измерения. Если выражение задано,
 то из таблицы будут скрыты данные по тем элементам измерения, для которых
 выражение возвращает значение True.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_FILTER. Источником данных является куб. Первое
 измерение имеет атрибут с идентификатором ORDER.


Добавьте ссылки на системные сборки: Dal, Express, Metabase, Pivot.


			Sub UserProc;

Var

    MB: IMetabase;

    Express: IEaxAnalyzer;

    Pivot: IPivot;

    Dim: IPivotDimension;

    Filter: IPivotDimensionFilterSettings;

    Param: IMetabaseObjectParam;

Begin

    MB := MetabaseClass.Active;

    Express := MB.ItemById("EXPRESS_FILTER").Edit As IEaxAnalyzer;

    // Добавим параметр

    Param := (Express As IMetabaseObject).Params.Add;

    Param.DataType := DbDataType.Integer;

    Param.Name := "ParamExp";

    Param.Id := "ParamExp";

    Param.DefaultValue := 2;

    // Получим настройки отображения таблицы данных отчета

    Pivot := Express.Pivot;

    // Получим измерение

    Dim := Pivot.Dimensions.Item(0);

    // Получим настройки фильтрации для измерения

    Filter := Dim.Settings.Filter;

    // Зададим выражение, по которому будет осуществляться фильтрация

    Filter.UseCondition := True;

    Filter.Condition.AsString := "Order>:ParamExp";

    Filter.KeepParent := True;

    // Сохраним изменения

    (Express As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для отчёта будет создан новый параметр. Для
 первого измерения в таблице будет задано выражение для фильтрации данных
 с использованием данного параметра и атрибута Порядок.


См. также:


[IPivotDimensionFilterSettings](IPivotDimensionFilterSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
