# IPivotHeader.Settings

IPivotHeader.Settings
-


# IPivotHeader.Settings


## Синтаксис


Settings: [IPivotHeaderSettings](../IPivotHeaderSettings/IPivotHeaderSettings.htm);


## Описание


Свойство Settings возвращает
 настройки заголовка таблицы.


## Комментарии


В настройках заголовка таблицы хранятся:


	- настройки фильтрации данных измерения;


	- настройки для работы с листьевыми элементами.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором «EXPRESS». Отчет содержит таблицу.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot.


			Sub UserProc;

Var

    MB: IMetabase;

    Express: IEaxAnalyzer;

    Pivot: IPivot;

    LeftHeader: IPivotHeader;

    TableHeader: IPivotTableHeader;

    PivSettings: IPivotHeaderSettings;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчет

    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

    // Получим настройки отображения таблицы данных отчета

    Pivot := Express.Pivot;

    // Получим коллекцию измерений, расположенных по строкам

    LeftHeader := Pivot.LeftHeader;

    // Получим настройки измерений, расположенных по строкам

    PivSettings := LeftHeader.Settings;

    // Включим отображение только листьевых элементов

    If Not PivSettings.IsLeafElementsOnly Then

        PivSettings.LeafElementsOnly := TriState.OnOption;

    End If;

    // Сохраним изменения

    (Express As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в боковике таблицы будут отображены только
 те элементы, которые не имеют отмеченных дочерних элементов.


См. также:


[IPivotHeader](IPivotHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
