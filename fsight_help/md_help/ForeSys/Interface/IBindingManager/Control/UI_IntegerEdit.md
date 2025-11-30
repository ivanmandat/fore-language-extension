# IntegerEdit: Редактор значений

IntegerEdit: Редактор значений
-


# Редактор значения IntegerEdit


Для настройки редактора значений через строку связи доступны следующие
 параметры:


		 Наименование

параметра
		 Тип
		 Описание
		 Обязателен


		 MINVAL
		 Целый
		 Минимальное возможное значение.
		 Нет


		 MAXVAL
		 Целый
		 Максимальное возможное значение.
		 Нет


		 VALUE
		 Целый
		 Значение по умолчанию.
		 Нет


		 ALLOWEMPTY
		 Логический
		 Значение может быть пустым.
		 Нет


		 CORRECTONEXIT
		 Логический
		 Признак автоматической коррекции значения при потере редактором
		 фокуса.
		 Нет


Логические значения задаются в виде символьной строки вида «ON/OFF»,
 либо «True/False».


## Особенности применения


Нет


## Строка связи


UI="IntegerEdit" VALUE="500"
 MINVAL="0" MAXVAL="1000"


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

	        IntegerEditBinding: IBindingIntegerEdit;

	    Begin

	        BM := New BindingManager.Create;

	        IntegerEditBinding := BM.CreateByUi("IntegerEdit") As IBindingIntegerEdit;

	        IntegerEditBinding.CorrectOnExit := True;

	        IntegerEditBinding.MinValue := -100;

	        IntegerEditBinding.MaxValue := 100;

	        IntegerEditBinding.Value := 0;

	        UiTabSheet1.TabSheet.Cell(0, 0).Style.Binding := IntegerEditBinding.AsString;

	    End Sub Button1OnClick;


	End Class TestForm;


При нажатии на кнопку будет задан редактор значения для ячейки «А0»
 таблицы. При редактировании ячейки будет отображаться поле ввода целочисленных
 значений, минимальное значение «-100», максимальное «100», значение по
 умолчанию - 0.


[Назад](../IBindingManager.CreateByUi.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
