# IRibbonDateTimePicker.Alignment

IRibbonDateTimePicker.Alignment
-


# IRibbonDateTimePicker.Alignment


## Синтаксис


Alignment: [CalendarAlignment](../../Enums/CalendarAlignment.htm);


## Описание


Свойство Alignment определяет
 способ выравнивания раскрывающегося календаря относительно границ компонента.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента Ribbon с наименованием
 «Ribbon1». В ленте компонента «Ribbon1» создана вкладка и панель.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    DTPicker: IRibbonDateTimePicker;

Begin

    Self.BeginUpdate;

    //Создание элемента управления

    DTPicker := New RibbonDateTimePicker.Create;

    Ribbon1.ActiveCategory.Panels.Item(0).Elements.Add(DTPicker);

    //Настройка параметров

    DTPicker.Alignment := CalendarAlignment.Right;

    DTPicker.Checked := True;

    DTPicker.InnerWidth := 175;

    DTPicker.CurrentDate := DateTime.Today;

    DTPicker.MinDate := DateTime.ComposeDay(1950, 1, 1);

    DTPicker.MaxDate := DateTime.ComposeDay(2050, 1, 1);

    DTPicker.Mode := DateTimePickerExMode.Months;

    DTPicker.MonthFormat := MonthStyle.Long;

    Self.EndUpdate;

End Sub Button1OnClick;


При нажатии на кнопку на панели активной вкладки будет создан редактор
 даты и времени. Для редактора будут настроены различные параметры его
 работы.


См. также:


[IRibbonDateTimePicker](IRibbonDateTimePicker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
