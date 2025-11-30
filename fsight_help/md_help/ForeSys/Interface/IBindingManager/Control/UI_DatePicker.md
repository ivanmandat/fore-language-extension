# DatePicker: Редактор значений

DatePicker: Редактор значений
-


# Редактор значения DatePicker


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
		 Наличие стрелок для увеличения/уменьшения значений отдельных
		 компонент даты.
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
		 Значение по умолчанию (TODAY - текущий день).
		 Нет


		 SET_FOCUS_ON_CHECK_BOX
		 Логический
		 Признак расположение фокуса на флаге при входе в редактор.
		 Нет


Логические значения задаются в виде символьной строки вида «ON/OFF»,
 либо «True/False».


## Особенности применения


Если параметр «CHECKBOX» не
 задан, то в области редактора флаг для изменения доступности будет отсутствовать.


## Строка связи


UI="DatePicker" VALUE="TODAY"
 MINVAL="01/01/1900" MAXVAL="01/01/2999" DROPCALENDAR="ON"
 SPIN="OFF"


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

	        DatePickerBinding: IBindingDateTimePicker;

	        DTValue: DateTime;

	    Begin

	        BM := New BindingManager.Create;

	        DatePickerBinding := BM.CreateByUi("DatePicker") As IBindingDateTimePicker;

	        DatePickerBinding.CheckBox := True;

	        DatePickerBinding.CheckBoxFocus := True;

	        DatePickerBinding.DropCalendar := True;

	        DatePickerBinding.Spin := False;

	        DTValue := DateTime.Now;

	        DatePickerBinding.MinValue := DateTime.AddYears(DTValue, -5);

	        DatePickerBinding.MaxValue := DateTime.AddYears(DTValue, 5);

	        DatePickerBinding.Value := DTValue;

	        UiTabSheet1.TabSheet.Cell(0, 0).Style.Binding := DatePickerBinding.AsString;

	    End Sub Button1OnClick;


	End Class TestForm;


При нажатии на кнопку будет задан редактор значения для ячейки «А0»
 таблицы. При редактировании ячейки будет отображаться редактор даты. Дату
 можно будет задать путем изменения значений отдельных компонент времени
 или в раскрывающемся календаре. Значение по умолчанию - текущая дата.
 Предел допустимых значений - пять лет от текущей даты.


[Назад](../IBindingManager.CreateByUi.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
