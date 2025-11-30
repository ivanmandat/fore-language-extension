# IPrxControl.SetValueC

IPrxControl.SetValueC
-


# IPrxControl.SetValueC


## Синтаксис


SetValueC(Value: Variant; [Context: [IPrxReportRecalcContext](../IPrxReportRecalcContext/IPrxReportRecalcContext.htm)
 = Null]): [IPrxReportRecalcContext](../IPrxReportRecalcContext/IPrxReportRecalcContext.htm);


## Параметры


Value.
 Значение элемента управления.


Context. Параметры вычисления
 отчета. Если данный параметр не указан, то будут созданы новые параметры
 вычисления отчета.


## Описание


Метод SetValueC осуществляет
 установку значения элемента управления и перевычисление отчета.


## Комментарии


Значение, которые указывается в параметре Value, зависит от типа используемого элемента
 управления. Описание допустимых значений представлено в комментариях к
 свойству [IPrxControl.Value](IPrxControl.Value.htm).


## Пример


Для выполнения примера понадобится форма с подключенным регламентным
 отчётом.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Rep: IPrxReport;

    Ctrl: IPrxControl;

     Cont: IPrxReportRecalcContext;

    Context: IPrxReportRecalcContext;

     Sheet: IPrxSheet;

     Tab: IPrxTable;

Begin

    Rep := UiReport1.Instance As IPrxReport;

     Ctrl := Rep.Controls.FindById("Item");

     Context := Rep.CreateRecalcContext;

     Sheet := Rep.Sheets.Item(0);

    Context.RecalcSheet(Sheet) := TriState.OnOption;

     Tab := Rep.ActiveSheet As IPrxTable;

     Cont := Ctrl.SetValueC(Tab.TabSheet.ParseRange("A0").Value, Context);

End Sub Button1OnClick;


После выполнения примера будет изменено значение элемента управления
 с идентификатором «Item». Новое значение берется из ячейки «A0» активного
 листа регламентного отчета. После установки нового значения отчет будет
 перевычислен.


См. также:


[IPrxControl](IPrxControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
