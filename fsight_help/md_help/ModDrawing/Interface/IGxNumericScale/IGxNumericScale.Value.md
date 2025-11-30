# IGxNumericScale.Value

IGxNumericScale.Value
-


# IGxNumericScale.Value


## Синтаксис


Value(Index: Integer): Double;


## Параметры


Index. Индекс интервала цифровой
 шкалы.


## Описание


Свойство Value определяет значение
 числовой шкалы по индексу интервала.


## Комментарии


Данное свойство вызывается столько раз, сколько интервалов задано в
 свойстве IGxNumericScale.IntervalsCount.


Для использования данного свойства необходимо, чтобы свойство IGxNumericScale.UseAutoValues принимало
 значение False.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором «EXPRESS_SCALE». Отчет содержит таблицу, построенную
 на основе куба. Куб содержит нескрытое фиксированное измерение, у которого
 настроено [отображение
 метрик](UiAnalyticalArea.chm::/Work_with_dimensions/Table_metrics.htm).


Добавьте ссылки на системные сборки: Dimensions, Drawing, Express, Metabase.


			Sub UserProc;

Var

    MB: IMetaBase;

    Express: IEaxAnalyzer;

    Style: IEaxTableStyle;

    DimSel: IDimSelection;

    NumScale: IGxNumericScale;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим регламентный отчет

    Express := MB.ItemById("EXPRESS_SCALE").Edit As IEaxAnalyzer;

    // Получим параметры оформления таблицы

    Style := Express.Grid.Style;

    // Получим отметку у фиксированного измерения

    DimSel := Express.Grid.IndicatorSelection(EaxGridIndicatorType.FontSize);

    // Выберем первый элемент

    DimSel.SelectElement(1, False);

    // Установим шкалу для размеров шрифта

    NumScale := Style.IndicatorScale(EaxGridIndicatorType.FontSize) As IGxNumericScale;

    // Автоматические значения использовать не будем

    NumScale.UseAutoValues := False;

    // Зададим количество интервалов

    NumScale.IntervalsCount := 4;

    // Зададим размер шрифта для каждого интервала

    NumScale.Value(0) := 5;

    NumScale.Value(1) := 14;

    NumScale.Value(2) := 26;

    NumScale.Value(3) := 3;

    // Получим отметку и сменим элемент, чтобы обновить таблицу

    DimSel := Express.Grid.IndicatorSelection(EaxGridIndicatorType.FontSize);

    Dimsel.SelectElement(0, False);

    // Сохраним изменения

    (Express As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера изменится размер шрифта области значений в
 соответствии с заданными параметрами. Шрифт увеличится от левого верхнего
 угла до правого нижнего угла области значений.


См. также:


[IGxNumericScale](IGxNumericScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
