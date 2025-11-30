# IPivot.FilterHeader

IPivot.FilterHeader
-


# IPivot.FilterHeader


## Синтаксис


FilterHeader: [IPivotHeader](../IPivotHeader/IPivotHeader.htm);


## Описание


Свойство FilterHeader возвращает
 коллекцию измерений, которые используются как фильтр в кубе.


## Комментарии


Свойство актуально, если в основе таблицы лежит стандартный куб, в котором
 настроена [агрегация
 фактов](UiNavObj.chm::/Cube/CreateCube/Master_Standart/UiMd_Cube_CreateCube_Master_Standart_2.htm#agregation). Измерения, которые включены в коллекцию FilterHeader, будут исключаться
 из запроса к данным куба. Вне зависимости от установленной в них отметки,
 отметка по таким измерениям будет рассматриваться как полная.


Примечание.
 Работа с фильтрующими измерениями доступна только в веб-приложении.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS_REPORT. В основе отчёта лежит стандартный куб,
 в котором настроена агрегация для фактов и в структуре имеется измерение
 на базе справочника с идентификатором D_COMPANY. Выполните указанный пример
 в веб-приложении.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot.


			Sub UserProc;

Var

    MB: IMetabase;

    Express: IEaxAnalyzer;

    Pivot: IPivot;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчёт

    Express := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

    // Получим настройки отображения таблицы данных отчета

    Pivot := Express.Pivot;

    // Включение измерения в фильтр

    Pivot.FilterHeader.AddDim(Pivot.Dimensions.FindByKey(Mb.GetObjectKeyById("D_COMPANY")).DimInstance);

    // Сохраним изменения

    (Express As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера указанное измерение будет включено в список фильтрующих,
 оно не будет использоваться при извлечении данных.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
