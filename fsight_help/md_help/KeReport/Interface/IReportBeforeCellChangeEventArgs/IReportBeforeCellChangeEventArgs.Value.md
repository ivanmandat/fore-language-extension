# IReportBeforeCellChangeEventArgs.Value

IReportBeforeCellChangeEventArgs.Value
-


# IReportBeforeCellChangeEventArgs.Value


## Синтаксис


Value: Variant;


## Описание


Свойство Value определяет измененное
 значение, которое будет содержаться в ячейке после отработки события.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта.


Разместите на форме компоненты UiReport,
 ReportBox, два компонента Label с наименованиями «UiReport1»,
 «ReportBox1», «Label1» и «Label2» соответственно.


Для компонента UiReport:


	- выберите регламентный отчёт в свойстве Object;


	- установите значение True
	 в свойстве Active;


	- установите значение «Edit» свойству OperationMode.


Для компонента ReportBox выберите
 компонент «UiReport1» в свойстве Report.


Добавьте ссылки на системные сборки: Forms, Report, Tab.


Пример является обработчиком события «OnBeforeCellChange» для компонента
 ReportBox.


			Sub ReportBox1OnBeforeCellChange(Sender: Object; Args: IReportBeforeCellChangeEventArgs);

Var

    Old_val, New_val: Variant;

    Sheet: IPrxSheet;

    SheetTab: IPrxTable;

    Table: ITabSheet;

Begin

    Sheet := Args.Sheet;

    SheetTab := Sheet As IPrxTable;

    Table := SheetTab.TabSheet;

    Old_val := Table.CellValue(Args.Row, Args.Column);

    New_val := Args.Value;

    Label1.Text := New_val;

    Label2.Text := Old_val;

End Sub ReportBox1OnBeforeCellChange;


После изменения значения ячейки А0 в компоненте «Label1» будет содержаться
 старое значение ячейки, а в компоненте «Label2» - новое значение ячейки.


См. также:


[IReportBeforeCellChangeEventArgs](IReportBeforeCellChangeEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
