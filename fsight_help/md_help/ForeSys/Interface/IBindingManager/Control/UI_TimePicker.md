# TimePicker: Редактор значений

TimePicker: Редактор значений
-


# Редактор значения TimePicker


Для настройки редактора значений через строку связи доступны следующие
 параметры:


		 Наименование

параметра
		 Тип
		 Описание
		 Обязателен


		 SPIN
		 Логический
		 Стрелки для увеличения/уменьшения значений компонент времени.
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
		 Значение по умолчанию (NOW - текущее время).
		 Нет


Логические значения задаются в виде символьной строки вида «ON/OFF»,
 либо «True/False».


## Особенности применения


Нет


## Строка связи


UI="TimePicker" VALUE="NOW"
 SPIN="ON"


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

	    Begin

	        BM := New BindingManager.Create;

	        DatePickerBinding := BM.CreateByUi("TimePicker") As IBindingDateTimePicker;

	        DatePickerBinding.Spin := False;

	        DatePickerBinding.Value := DateTime.Now;

	        UiTabSheet1.TabSheet.Cell(0, 0).Style.Binding := DatePickerBinding.AsString;

	    End Sub Button1OnClick;


	End Class TestForm;


При нажатии на кнопку будет задан редактор значения для ячейки «А0»
 таблицы. При редактировании ячейки будет отображаться редактор времени,
 значение по умолчанию - текущее время.


[Назад](../IBindingManager.CreateByUi.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
