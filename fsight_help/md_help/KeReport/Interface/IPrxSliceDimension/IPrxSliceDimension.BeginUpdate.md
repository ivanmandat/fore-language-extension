# IPrxSliceDimension.BeginUpdate

IPrxSliceDimension.BeginUpdate
-


# IPrxSliceDimension.BeginUpdate


## Синтаксис


BeginUpdate;


## Описание


Метод BeginUpdate инициализирует
 обновление измерения.


## Комментарии


Метод рекомендуется использовать при изменении отметки управляющего
 измерения для блокировки обновления зависимых измерений. После выставления
 отметки по управляющему измерению снимите блокировку обновления зависимых
 измерений.


Метод используется для регламентного отчёта, где источником данных является
 [куб](UiNavObj.chm::/Cube/UiMd_Cube_Type.htm)
 с [управляющими
 измерениями](UiNavObj.chm::/Cube/CreateCube/Master_Standart/UiMd_Cube_CreateCube_Master_Standart_managed_dim.htm).


Метод BeginUpdate применятся
 совместно с методом [EndUpdate](IPrxSliceDimension.EndUpdate.htm):


	- при вызове метода BeginUpdate
	 блокируется обновление зависимых измерений;


	- после вызова метода [EndUpdate](IPrxSliceDimension.EndUpdate.htm) обновляются зависимые измерения.


## Пример


Для выполнения примера:


	- Создайте регламентный отчёт.


	- Добавьте в качестве источника данных
	 [стандартный
	 куб](UiNavObj.chm::/Cube/CreateCube/Master_Standart/UiMd_Cube_CreateCube_Master_Standart.htm) с [управляющими
	 измерениями](UiNavObj.chm::/Cube/CreateCube/Master_Standart/UiMd_Cube_CreateCube_Master_Standart_managed_dim.htm). Одно из измерений с идентификатором
	 «Customers», от которого зависят другие измерения.


	- Добавьте в [область
	 данных](UiReport.chm::/desktop/AreaData/UiReport_AreaData.htm) срез.


	- Перенесите добавленный срез на
	 лист отчёта, используя механизм Drag&Drop.


	- Создайте [обработчик
	 событий](UiReport.chm::/desktop/Reports/Event/UiReport_Reports_Event.htm).


	- В модуле подключите системные сборки:
	 Report, Dimensions.


	- Задайте для события [OnBeforeExecuteReport](../../Class/UiReport/UiReport.OnBeforeExecuteReport.htm)
	 обновление измерений при изменении отметки:


			Public Sub OnBeforeExecuteReport(Report: IPrxReport; Var Cancel: Boolean);

Var

    DtSources: IPrxDataSources;

    Slices: IPrxSlices;

    SliceDim: IPrxSliceDimension;

Begin

    Report := PrxReport.ActiveReport;

    // Зададим источник данных отчета

    DtSources := Report.DataSources;

    // Зададим срез и измерение среза по идентификатору

    Slices := DtSources.Item(0).Slices;

    SliceDim := Slices.Item(0).LeftHeader.FindById("Customers");

    // Инициализируем обновление измерения по заданным отметкам

    SliceDim.BeginUpdate;

    SliceDim.Selection.DeselectAll;

    SliceDim.Selection.selectelement(1, True);

    SliceDim.Selection.selectelement(2, True);

    SliceDim.EndUpdate;

End Sub OnBeforeExecuteReport;


В регламентном отчёте после нажатия на кнопку «Обновить»
 на вкладке «Главная» ленты инструментов
 произойдет событие, при котором изменится отметка заданного измерения,
 а зависимые измерения перестроятся под данную отметку.


См. также:


[IPrxSliceDimension](IPrxSliceDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
