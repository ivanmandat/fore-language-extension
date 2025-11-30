# DateTimePicker: Редактор значений

DateTimePicker: Редактор значений
-


# Редактор значения DateTimePicker


Для настройки редактора значений через строку связи доступны следующие
 параметры:


		 Наименование

параметра
		 Тип
		 Описание
		 Обязателен


		 CHECKBOX
		 Логический
		 Доступность редактора для редактирования.
		 Нет


		 SPIN
		 Логический
		 Наличие стрелок для увеличения/уменьшения значений компонент
		 даты.
		 Нет


		 DROPCALENDAR
		 Логический
		 Выбор даты из раскрывающегося календаря.
		 Нет


		 MINVAL
		 Дата
		 Минимальное возможное значение.
		 Нет


		 MAXVAL
		 Дата
		 Максимальное возможное значение.
		 Нет


		 VALUE
		 Дата
		 Значение по умолчанию (NOW - текущее время, TODAY - текущий
		 день).
		 Нет


		 SET_FOCUS_ON_CHECK_BOX
		 Логический
		 Признак расположение фокуса на флаге при входе в редактор.
		 Нет


		 SHOWTIME
		 Логический
		 Признак отображения компонент времени.
		 Нет


Логические значения задаются в виде символьной строки вида «ON/OFF»,
 либо «True/False».


## Особенности применения


Нет


## Строка связи


UI="DateTimePicker" VALUE="NOW"
 MINVAL="01/01/1900 00:00:00" MAXVAL="01/01/2999 23:59:00"
 DROPCALENDAR="ON" SPIN="OFF"


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox и компонента
 UiTabSheet с наименованием «UiTabSheet1», являющегося источником данных
 для TabSheetBox.


	Class TestForm: Form

	    Button1: Button;

	    UiTabSheet1: UiTabSheet;

	    TabSheetBox1: TabSheetBox;


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        BM: IBindingManager;

	        DateTimePickerBinding: IBindingDateTimePicker;

	        DTValue: DateTime;

	    Begin

	        BM := New BindingManager.Create;

	        DateTimePickerBinding := BM.CreateByUi("DateTimePicker") As IBindingDateTimePicker;

	        DateTimePickerBinding.CheckBox := True;

	        DateTimePickerBinding.CheckBoxFocus := True;

	        DateTimePickerBinding.DropCalendar := True;

	        DateTimePickerBinding.Spin := True;

	        DateTimePickerBinding.Time := True;

	        DTValue := DateTime.Now;

	        DateTimePickerBinding.MinValue := DateTime.AddYears(DTValue, -5);

	        DateTimePickerBinding.MaxValue := DateTime.AddYears(DTValue, 5);

	        DateTimePickerBinding.Value := DTValue;

	        UiTabSheet1.TabSheet.Cell(0, 0).Style.Binding := DateTimePickerBinding.AsString;

	    End Sub Button1OnClick;


	End Class TestForm;


При нажатии на кнопку будет задан редактор значения для ячейки «А0»
 таблицы. При редактировании ячейки будет отображаться редактор даты и
 времени со стрелками для увеличения/уменьшения значений компонент и кнопка
 для вызова раскрывающегося календаря, значение по умолчанию - текущая
 дата и время. Предел допустимых значений - пять лет от текущей даты.


[Назад](../IBindingManager.CreateByUi.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
