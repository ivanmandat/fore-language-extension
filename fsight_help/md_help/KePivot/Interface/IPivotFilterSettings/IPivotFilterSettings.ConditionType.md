# IPivotFilterSettings.ConditionType

IPivotFilterSettings.ConditionType
-


# IPivotFilterSettings.ConditionType


## Синтаксис


ConditionType: [PivotFilterType](../../Enums/PivotFilterType.htm);


## Описание


Свойство ConditionType определяет
 тип условия, по которому будут фильтроваться данные.


## Комментарии


Для использования свойства необходимо, чтобы:


	- Свойство [IPivotFilterSettings.Enabled](IPivotFilterSettings.Enabled.htm)
	 принимало значение True.


	- Свойство [IPivotFilterSettings.UseCondition](IPivotFilterSettings.UseCondition.htm)
	 принимало значение True.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
 с идентификатором «EXPRESS_FILTER».
 Отчет содержит таблицу.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot.


			Sub UserProc;

Var

    MB: IMetabase;

    Express: IEaxAnalyzer;

    Pivot: IPivot;

    Filter: IPivotFilter;

    FilterSet: IPivotFilterSettings;

Begin

    // Получим доступ к репозиторию

    MB := MetabaseClass.Active;

    // Получим доступ к экспресс-отчету

    Express := MB.ItemById("EXPRESS_FILTER").Edit As IEaxAnalyzer;

    Pivot := Express.Pivot;

    // Определим параметры фильтрации в таблице

    Filter := Pivot.Filter;

    FilterSet := Filter As IPivotFilterSettings;

    // Включим параметры фильтрации для таблицы

    FilterSet.Enabled := True;

    // Будем использовать условие для фильтрации

    FilterSet.UseCondition := True;

    // Установим тип фильтрации «между A и B включительно»

    FilterSet.ConditionType := PivotFilterType.NLAandNGB;

    //  Зададим значение «A»

    FilterSet.ConditionValueA := 100;

    // Зададим значение «B»

    FilterSet.ConditionValueB := 200;

    // Сохраним изменения

    (Express As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в таблице экспресс-отчета будет осуществлена
 фильтрация данных. Будут отфильтрованы данные в ячейках, значения которых
 находятся в интервале [100; 200].


См. также:


[IPivotFilterSettings](IPivotFilterSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
