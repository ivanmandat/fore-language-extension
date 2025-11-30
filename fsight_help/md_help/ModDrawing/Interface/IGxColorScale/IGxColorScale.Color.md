# IGxColorScale.Color

IGxColorScale.Color
-


# IGxColorScale.Color


## Синтаксис


EndColor(Index: Integer): [IGxColor](../IGxColor/IGxColor.htm);


## Параметры


Index. Индекс интервала цветовой
 шкалы.


## Описание


Свойство Color определяет цвет
 цветовой шкалы по индексу интервала.


## Комментарии


Данное свойство вызывается столько раз, сколько интервалов задано в
 свойстве [IGxColorScale.IntervalsCount](../IGxScale/IGxScale.IntervalsCount.htm).


Для использования данного свойства необходимо, чтобы свойство [IGxColorScale.UseAutoValues](../IGxScale/IGxScale.UseAutoValues.htm) принимало
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

    ColorScale: IGxColorScale;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим регламентный отчет

    Express := MB.ItemById("EXPRESS_SCALE").Edit As IEaxAnalyzer;

    // Получим параметры оформления таблицы

    Style := Express.Grid.Style;

    // Получим отметку у фиксированного измерения

    DimSel := Express.Grid.IndicatorSelection(EaxGridIndicatorType.BackgroundColor);

    // Выберем второй элемент

    DimSel.SelectElement(1, False);

    // Установим шкалу для заливки ячеек

    ColorScale := Style.IndicatorScale(EaxGridIndicatorType.BackgroundColor) As IGxColorScale;

     // Отключим автоматические значения

    ColorScale.UseAutoValues := False;

    // Установим количество интервалов

    ColorScale.IntervalsCount := 6;

    // Зададим цвет для каждого интервала

    ColorScale.Color(0) := GxColor.FromName("Green");

    ColorScale.Color(1) := GxColor.FromName("Red");

    ColorScale.Color(2) := GxColor.FromName("Blue");

    ColorScale.Color(3) := GxColor.FromName("White");

    ColorScale.Color(4) := GxColor.FromName("Orange");

    ColorScale.Color(5) := GxColor.FromName("Yellow");

    // Получим отметку и сменим элемент, чтобы обновить таблицу

    DimSel := Express.Grid.IndicatorSelection(EaxGridIndicatorType.BackgroundColor);

    Dimsel.SelectElement(0, False);

    // Сохраним изменения

    (Express As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера
 изменится цвет заливки ячеек от левого верхнего угла до правого нижнего
 угла области значений.


См. также:


[IGxColorScale](IGxColorScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
