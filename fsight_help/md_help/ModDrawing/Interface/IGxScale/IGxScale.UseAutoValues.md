# IGxScale.UseAutoValues

IGxScale.UseAutoValues
-


# IGxScale.UseAutoValues


## Синтаксис


UseAutoValues: Boolean;


## Описание


Свойство UseAutoValues определяет
 признак использования автоподбора промежуточных значений шкалы.


## Комментарии


Допустимые значения:


	- True. Промежуточные
	 значения шкалы рассчитываются автоматически;


	- False. По умолчанию.
	 Промежуточные значения шкалы задаются вручную.


Для использования свойства задайте начальное и конечное значения, по
 которым будут автоматически определяться промежуточные значения цветовой
 или числовой шкалы. При использовании цветовой шкалы задайте значения
 с помощью [IGxColorScale.StartColor](../IGxColorScale/IGxColorScale.StartColor.htm)
 и [IGxColorScale.EndColor](../IGxColorScale/IGxColorScale.EndColor.htm),
 при использовании числовой шкалы - [IGxNumericScale.StartValue](../IGxNumericScale/IGxNumericScale.StartValue.htm)
 и [IGxNumericScale.EndValue](../IGxNumericScale/IGxNumericScale.EndValue.htm).


Для определения промежуточных значений шкалы вручную используйте свойства
 [IGxColorScale.Color](../IGxColorScale/IGxColorScale.Color.htm)
 и [IGxNumericScale.Value](../IGxNumericScale/IGxNumericScale.Value.htm)
 для цветовой и числовой шкалы соответственно.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта
 c идентификатором EXPRESS. В экспресс-отчёте должна содержаться таблица,
 построенная на основе куба. Убедитесь, что в кубе содержится нескрытое
 фиксированное измерение.


Добавьте ссылки на системные сборки: Dimensions, Drawing, Express, Metabase.


			Sub UserProc;

Var

    MB: IMetaBase;

    Express: IEaxAnalyzer;

    Style: IEaxTableStyle;

    Scale: IGxColorScale;

    Grid: IEaxGrid;

    Background: EaxGridIndicatorType;

    DimSel: IDimSelection;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчёт

    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

    // Получим таблицу

    Grid := Express.Grid;

    // Зададим тип метрики таблицы - цвет фона ячеек

    Background := EaxGridIndicatorType.BackgroundColor;

    // Зададим отметку фиксированного измерения

    DimSel := Express.Grid.IndicatorSelection(Background);

    DimSel.SelectElement(0, False);

    // Получим параметры оформления таблицы

    Style := Grid.Style;

    // Установим шкалу для заливки ячеек

    Scale := Style.IndicatorScale(Background) As IGxColorScale;

    // Включим автоматический подбор промежуточных оттенков цветовой шкалы

    Scale.UseAutoValues := True;

    // Установим начальный цвет

    Scale.StartColor := GxColor.FromName("Yellow");

    // Установим конечный цвет

    Scale.EndColor := GxColor.FromName("Green");

    // Установим количество интервалов шкалы

    Scale.IntervalsCount := 7;

    // Сохраним изменения

    (Express As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в таблице экспресс-отчёта будет задана метрика
 - цвет фона ячеек. Фон ячеек таблицы будет разбит по промежуточным оттенкам
 от жёлтого до зелёного цвета в соответствии с диапазонами значений ячеек.


См. также:


[IGxScale](IGxScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
