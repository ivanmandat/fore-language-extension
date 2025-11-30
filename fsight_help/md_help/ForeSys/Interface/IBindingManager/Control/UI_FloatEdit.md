# FloatEdit: Редактор значений

FloatEdit: Редактор значений
-


# Редактор значения FloatEdit


Для настройки редактора значений через строку связи доступны следующие
 параметры:


		 Наименование

параметра
		 Тип
		 Описание
		 Обязателен


		 VALUE
		 Вещественный
		 Значение по умолчанию.
		 Нет


		 MINVAL
		 Вещественный
		 Минимальное возможное значение.
		 Нет


		 MAXVAL
		 Вещественный
		 Максимальное возможное значение.
		 Нет


		 PRECISION
		 Целый
		 Точность отображаемого значения (количество знаков после запятой).
		 Нет


		 STEP
		 Вещественный
		 Шаг изменения.
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


UI="FloatEdit" VALUE="50" MINVAL="0"
 MAXVAL="100" PRECISION="2" STEP="0.05"


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

	        FloatEditBinding: IBindingFloatEdit;

	    Begin

	        BM := New BindingManager.Create;

	        FloatEditBinding := BM.CreateByUi("FloatEdit") As IBindingFloatEdit;

	        FloatEditBinding.MinValue := -100;

	        FloatEditBinding.MaxValue := 100;

	        FloatEditBinding.Precision := 3;

	        FloatEditBinding.Step_ := 0.005;

	        FloatEditBinding.Value := 0;

	        FloatEditBinding.CorrectOnExit := True;

	        UiTabSheet1.TabSheet.Cell(0, 0).Style.Binding := FloatEditBinding.AsString;

	    End Sub Button1OnClick;


	End Class TestForm;


При нажатии на кнопку будет задан редактор значения для ячейки «А0»
 таблицы. При редактировании ячейки будет отображаться поле ввода вещественных
 значений, минимальное значение «-100», максимальное «100», точность три
 знака после запятой, шаг «0.005», значение по умолчанию «0».


[Назад](../IBindingManager.CreateByUi.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
