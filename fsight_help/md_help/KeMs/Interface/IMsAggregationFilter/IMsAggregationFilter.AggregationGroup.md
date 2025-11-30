# IMsAggregationFilter.AggregationGroup

IMsAggregationFilter.AggregationGroup
-


# IMsAggregationFilter.AggregationGroup


## Синтаксис


AggregationGroup: [IDimElementGroup](KeDims.chm::/interface/IDimElementGroup/IDimElementGroup.htm);


## Описание


Свойство AggregationGroup
 определяет группу, по которой будет производиться агрегация.


## Комментарии


Если свойству задаётся значение, то значения
 свойств [IMsAggregationFilter.AggregationSelection](IMsAggregationFilter.AggregationSelection.htm)
 и [IMsAggregationFilter.AggregationParamID](IMsAggregationFilter.AggregationParamID.htm)
 сбрасываются.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором FC. В контейнере моделирования данной
 базы должна присутствовать модель с идентификатором MODEL_AGGR, рассчитываемая
 методом расширенной агрегации. COUNTRY (страна) - атрибут показателей
 базы, ссылающийся на справочник. SOUTH_AMERICA - группа элементов данного
 справочника.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Rds.


			Sub UserProc;

Var

    Group: IDimElementGroup;

    Mb: IMetabase;

    RubrDescr: IMetabaseObjectDescriptor;

    Rubr: IRubricator;

    msDescr: IMetabaseObjectDescriptor;

    Model: IMsModel;

    Transform: IMsFormulaTransform;

    Formula: IMsFormula;

    Aggr: IMsCrossDimensionAggregationTransform;

    FiltesList: IMsAggregationFilterList;

    Filter: IMsAggregationFilter;

    Attributes: IMetaAttributes;

    DictDescr: IMetabaseObjectDescriptor;

Begin

    // Получаем текущий репозиторий

    Mb := MetabaseClass.Active;

    // Получаем БДВР

    RubrDescr := Mb.ItemById("FC");

    Rubr := RubrDescr.Bind As IRubricator;

    msDescr := Rubr.ModelSpace;

    // Получаем модель

    Model := Mb.ItemByIdNamespace("MODEL_AGGR", msDescr.Key).Edit As IMsModel;

    // Получаем параметры расчета модели

    Transform := Model.Transform;

    // Получаем метод расчета модели

    Formula := Transform.FormulaItem(0);

    // Получаем параметры метода

    Aggr := Formula.Method As IMsCrossDimensionAggregationTransform;

    // Получаем фильтр агрегации

    FiltesList := Aggr.Filter;

    // Получаем атрибуты справочника

    Attributes := Rubr.Facts.Attributes;

    DictDescr := Attributes.FindById("COUNTRY").ValuesObject;

    // Добавляем фильтр

    Filter := FiltesList.Add(DictDescr.Bind As IDimensionModel);

    Group := Mb.ItemByIdNamespace("SOUTH_AMERICA", DictDescr.Key).Bind As IDimElementGroup;

    Filter.AggregationGroup := Group;

    // Выводим информацию о фильтре

    Debug.WriteLine("ФИЛЬТРАГРЕГАЦИИ");

    Debug.WriteLine(" Наименование фильтра: " + Filter.Name);

    Debug.WriteLine(" Отметка фильтра: " + Group.Selection.ToString);

    // Сохраняем изменения

    (Model As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в модель расширенной агрегации будет
 добавлен новый фильтр: рассчитывать агрегацию только для элементов группы
 SOUTH_AMERICA. Затем в окно консоли будет выведена информация о данном
 фильтре.


См. также:


[IMsAggregationFilter](IMsAggregationFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
