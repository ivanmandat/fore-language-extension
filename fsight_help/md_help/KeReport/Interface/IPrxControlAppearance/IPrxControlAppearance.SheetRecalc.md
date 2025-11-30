# IPrxControlAppearance.SheetRecalc

IPrxControlAppearance.SheetRecalc
-


# IPrxControlAppearance.SheetRecalc


## Синтаксис


SheetRecalc(Sheet: [IPrxSheet](../IPrxSheet/IPrxSheet.htm)):
 Boolean;


## Параметры


Sheet. Лист регламентного
 отчета.


## Описание


Свойство SheetRecalc определяет
 признак вычисления листа, указанного в качестве параметра, при изменении
 значения элемента управления.


## Комментарии


Укажите Null в качестве значения параметра Sheet
 для вычисления всех листов регламентного отчета.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором Rep1 и наличием хотя бы четырех листов. Добавьте в отчет
 куб в качестве источника, срез куба и измерение в качестве элемента управления
 в отчете. Создайте форму, добавьте на нее кнопку с идентификатором Button1,
 компонент ReportControlPanel с идентификатором ReportControlPanel1, компонент
 UiReport с идентификатором UiReport1, укажите последний в качестве объекта
 компонента ReportControlPanel.


Добавьте ссылку на системную сборку Metabase.


	Sub OBJ1FormOnShow(Sender: Object; Args: IEventArgs);

	Begin

	    Rep := MetabaseClass.Active.ItemById("Rep1").Edit As IPrxReport;

	    UiReport1.Instance := Rep;

	End Sub OBJ1FormOnShow;

	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ControlAppearance: IPrxControlAppearance;

	Begin

	    ControlAppearance:= Rep.Controls.Item(0).Appearance;

	    ControlAppearance.SpecificRecalc := True;

	    ControlAppearance.SheetRecalc(Null) := False;

	    ControlAppearance.SheetRecalc(Rep.Sheets.Item(0)) := True;

	    ControlAppearance.SheetRecalc(Rep.Sheets.Item(1)) := True;

	    ControlAppearance.SheetRecalc(Rep.Sheets.Item(2)) := True;

	    ControlAppearance.SheetRecalc(Rep.Sheets.Item(3)) := True;

	End Sub Button1OnClick;


После нажатия на кнопку при изменении значения элемента управления будут
 вычислены первые четыре листа регламентного отчета, весь отчет вычисляться
 не будет.


См. также:


[IPrxControlAppearance](IPrxControlAppearance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
