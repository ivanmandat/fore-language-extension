# IGxNumericScale.StartValue

IGxNumericScale.StartValue
-


# IGxNumericScale.StartValue


## Синтаксис


StartValue: Double;


## Описание


Свойство StartValue определяет
 начальное значение числовой шкалы.


## Комментарии


Для использования данного свойства необходимо, чтобы свойство IGxNumericScale.UseAutoValues принимало
 значение True.


Для задания конечного значения числовой шкалы, используйте свойство
 [IGxNumericScale.EndValue](IGxNumericScale.EndValue.htm).


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

    // Выберем второй элемент

    DimSel.SelectElement(1, False);

    // Установим шкалу для размеров шрифта

    NumScale := Style.IndicatorScale(EaxGridIndicatorType.FontSize) As IGxNumericScale;

    // Будем использовать автоматические значения

    NumScale.UseAutoValues := True;

    // Зададим начальный размер шрифта

    NumScale.StartValue := 8;

    // Зададим конечный размер шрифта

    NumScale.EndValue := 20;

    // Получим отметку и сменим элемент, чтобы обновить таблицу

    DimSel := Express.Grid.IndicatorSelection(EaxGridIndicatorType.FontSize);

    Dimsel.SelectElement(0, False);

    // Сохраним изменения

    (Express As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера изменится размер шрифта области значений. Шрифт
 увеличится от левого верхнего угла до правого нижнего угла области значений.


См. также:


[IGxNumericScale](IGxNumericScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
