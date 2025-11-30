# IGxScale.IntervalsCount

IGxScale.IntervalsCount
-


# IGxScale.IntervalsCount


## Синтаксис


IntervalsCount: Integer;


## Описание


Свойство IntervalsCount определяет
 количество интервалов.


## Комментарии


По умолчанию свойство принимает значение 5.


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

    Scale: IGxScale;

    Grid: IEaxGrid;

    Background: EaxGridIndicatorType;

    IntervalsCount: Integer;

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

    Scale := Style.IndicatorScale(Background) As IGxScale;

    // Отключим автоматический расчёт значений интервалов

    Scale.AutoCalculable := False;

    // Установим количество интервалов

    Scale.IntervalsCount := 4;

    // Установим границы интервалов

    Scale.Item(0) := 3.0;

    Scale.Item(1) := 8.0;

    Scale.Item(2) := 13.0;

    Scale.Item(3) := 16.0;

    // Сохраним изменения

    (Express As IMetabaseObject).Save;

    // Выведем в консоль информацию о типе шкалы

    Debug.Write("Тип шкалы - ");

    Debug.WriteLine(Scale.Type > 0 ? "Шкала с заданным количеством интервалов" : "Линейная шкала");

    // Выведем в консоль информацию о количестве интервалов шкалы

    IntervalsCount := Scale.IntervalsCount;

    Debug.WriteLine("Количество интервалов - " + IntervalsCount.ToString);

End Sub UserProc;


После выполнения примера в таблице экспресс-отчёта будет задана метрика
 - цвет фона ячеек. На основе указанных интервалов фон ячеек таблицы будет
 разбит по цветам в соответствии с диапазонами значений ячеек. В консоль
 будет выведена информация о типе используемой цветовой шкалы и количестве
 её интервалов.


См. также:


[IGxScale](IGxScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
