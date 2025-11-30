# ITabRegion.BorderStyle

ITabRegion.BorderStyle
-


# ITabRegion.BorderStyle


## Синтаксис


BorderStyle: [TabBorderStyle](../../Enums/TabBorderStyle.htm);


## Описание


Свойство BorderStyle определяет
 тип линии границы региона.


## Комментарии


Для определения цвета границы региона используйте свойство [ITabRegion.BorderColor](ITabRegion.BorderColor.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта [с
 подключенным модулем](UiReport.chm::/desktop/Reports/Event/UiReport_Reports_Event.htm#event). В качестве обработчика событий
 должен быть указан подключенный модуль и класс EventsClass.


Добавьте ссылки на системные сборки: Drawing, Report, Tab.


			Class EventsClass: ReportEvents

    Public Sub OnAfterRecalcSheet(Sheet: IPrxSheet);

    Var


        Tab: ITabSheet;

        Reg: ITabRegion;

    Begin

        // Получили таблицу листа отчёта

        Tab := Sheet.Table;

        // Добавили регион в коллекцию

        Reg := Tab.Regions.Add;

        // Определили диапазон таблицы, в котором располагается регион

        Reg.Range := Tab.Cells(1, 1, 3, 3);

        // Задали цвет фона региона таблицы

        Reg.BackgroundColor := New GxColor.CreateARGB(64, 255, 0, 0);

        // Задали цвет границы региона таблицы

        Reg.BorderColor := New GxColor.CreateRGB(255, 0, 0);

        // Задали тип линии границы региона таблицы

        Reg.BorderStyle := TabBorderStyle.Double;

        // Задали толщину линии границы региона таблицы

        Reg.BorderWeight := TabBorderWeight.Hairline;

        // Задали видимость региона таблицы

        Reg.Visible := True;

        // Добавили второй регион в коллекцию

        Reg := Tab.Regions.Add;

        // Определили второй диапазон таблицы, в котором располагается регион

        Reg.Range := Tab.Cells(2, 2, 4, 4);

        // Задали оформление второго региона таблицы

        Reg.BackgroundColor := New GxColor.CreateARGB(64, 0, 0, 255);

        Reg.BorderColor := New GxColor.CreateRGB(0, 0, 255);

        Reg.Visible := True;

    End Sub OnAfterRecalcSheet;

End Class EventsClass;


В результате выполнения примера при обновления отчёта будет выделено
 два региона, которые будут иметь различные цвета и различные границы.


См. также:


[ITabRegion](ITabRegion.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
