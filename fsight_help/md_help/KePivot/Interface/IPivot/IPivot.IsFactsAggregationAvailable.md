# IPivot.IsFactsAggregationAvailable

IPivot.IsFactsAggregationAvailable
-


# IPivot.IsFactsAggregationAvailable


## Синтаксис


IsFactsAggregationAvailable: Boolean;


## Описание


Свойство IsFactsAggregationAvailable
 возвращает признак, доступна ли агрегация фактов из источника.


## Комментарии


Допустимые значения:


	- True. Доступна агрегация
	 фактов из источника данных;


	- False. Недоступна агрегация
	 фактов из источника данных.


Для получения признака расчёта агрегации данных таблицы используйте
 свойство [IPivot.IsAggregationCalced](IPivot.IsAggregationCalced.htm).


## Пример


Для выполнения примера разместите на форме компоненты Button, ReportBox,
 UiReport с наименованиями «Button1», «ReportBox1», «UiReport1» соответственно.
 Для «ReportBox1» укажите источник данных «UiReport1». Для «UiReport1»
 источником данных является регламентный отчёт, построенный на срезе стандартного
 куба, для которого может быть настроена [агрегация](UiNavObj.chm::/Cube/CreateCube/Master_Standart/UiMd_Cube_CreateCube_Master_Standart_7.htm).


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Pivot,
 Report, Tab, Ui.


Пример является обработчиком события OnClick для компонентов «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Pivot: IPivot;

    EaxDA: IEaxDataArea;

    EaxDASlice: IEaxDataAreaSlice;

Begin

    // Получим аналитическую область данных

    EaxDA := UiReport1.Report.DataArea;

    // Получим срез аналитической области данных

    EaxDASlice := EaxDA.Slices.Item(0);

    Pivot := (EaxDASlice As IEaxDataAreaPivotSlice).Pivot;

    // Проверим, доступна ли агрегация фактов из источника

    If Pivot.IsAggregationCalced = True Then

        WinApplication.InformationBox ("Доступна агрегация фактов из источника");

        Else

            WinApplication.InformationBox ("Недоступна агрегация фактов из источника");

    End If;

End Sub Button1OnClick;


При нажатии на кнопку будет выведено сообщение, доступна ли агрегация
 из фактов источника.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
