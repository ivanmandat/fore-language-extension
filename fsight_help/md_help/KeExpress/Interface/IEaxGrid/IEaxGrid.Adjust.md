# IEaxGrid.Adjust

IEaxGrid.Adjust
-


# IEaxGrid.Adjust


## Синтаксис


Adjust;


## Описание


Метод Adjust осуществляет автоматический
 подбор размера ячеек.


## Комментарии


Метод выполняет подбор размера ячеек в соответствии с параметрами, заданными
 в [AdjustSettings](IEaxGrid.AdjustSettings.htm).
 Значение свойства [IEaxGridAdjustSettings.AllowAdjust](../IEaxGridAdjustSettings/IEaxGridAdjustSettings.AllowAdjust.htm)
 игнорируется.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента UiReport с наименованием «UiReport1», компонента ReportBox,
 для которого «UiReport1» указан в качестве источника данных, и кнопки
 с наименованием «Button1». В регламентном отчёте, который подключен к
 «UiReport1», добавлен источник данных и на базе него создана аналитическая
 область данных.


Добавьте ссылки на системные сборки: Express, Report.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Report: IPrxReport;

	    Grid: IEaxGrid;

	    AdjustSettings: IEaxGridAdjustSettings;

	Begin

	    Report := UiReport1.Report;

	    Grid := Report.DataArea.Views.Item(0) As IEaxGrid;

	    AdjustSettings := Grid.AdjustSettings;

	    //Отключение автоподгонки размера ячеек

	    AdjustSettings.AllowAdjust := False;

	    //...

	    //Какие-либо действия с Grid

	    //...

	    //Обновление таблицы

	    Grid.Refresh;

	    //...

	    AdjustSettings.Mode := EaxAdjustMode.Columns;

	    //Автоподгон размера столбцов

	    Grid.Adjust;

	End Sub Button1OnClick;


При нажатии на кнопку будет получена таблица аналитической области данных.
 В настройках таблицы будет отключена автоподгонка размера ячеек, после
 чего могут быть произведены какие-либо другие настройки таблицы. При обновлении
 таблицы автоподгонка ячеек выполнена не будет, она будет выполнена позже,
 при вызове метода Adjust.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
