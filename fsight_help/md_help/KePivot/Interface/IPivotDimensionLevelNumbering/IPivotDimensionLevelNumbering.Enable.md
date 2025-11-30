# IPivotDimensionLevelNumbering.Enable

IPivotDimensionLevelNumbering.Enable
-


# IPivotDimensionLevelNumbering.Enable


## Синтаксис


Enable: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство Enable определяет,
 включена ли нумерация.


## Комментарии


Для получения признака использования нумерации используйте свойство
 [IPivotDimensionLevelNumbering.IsEnabled](IPivotDimensionLevelNumbering.IsEnabled.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS. Данный отчёт должен содержать таблицу, в шапке
 которой расположено измерение - справочник с ключом 12345.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot.


			Sub UserProc;

Var

    MB: IMetabase;

    Express: IEaxAnalyzer;

    Pivot: IPivot;

    Dim: IPivotDimension;

    LevelNumbering: IPivotDimensionLevelNumbering;

    TopHeader: IPivotHeader;

    Numbering: IPivotHeaderNumbering;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчёт

    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

    // Получим настройки отображения таблицы

    Pivot := Express.Pivot;

    // Получим измерение по ключу

    Dim := Pivot.Dimensions.FindByKey(12345);

    // Получим настройки нумерации

    LevelNumbering := Dim.Numbering;

    // Включим использование нумерации в отчёте

    If Not LevelNumbering.IsEnabled Then

        LevelNumbering.Enable := TriState.OnOption;

        TopHeader := Pivot.TopHeader;

        Numbering := TopHeader.Numbering;

        Numbering.IsOn := True;

    End If;

    // Зададим сквозную нумерацию

    LevelNumbering.Type := PivotDimensionLevelNumberingType.Through;

    // Зададим разделитель нумерации

    LevelNumbering.Separator := "/";

    // Зададим формат нумерации

    LevelNumbering.Format := PivotNumberingFormat.LowercaseLetter;

    // Сохраним изменения

    (Express As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера будет осуществлена нумерация измерения, расположенного
 в шапке таблицы, с заданными настройками.


См. также:


[IPivotDimensionLevelNumbering](IPivotDimensionLevelNumbering.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
