# ComboBox: Редактор значений

ComboBox: Редактор значений
-


# Редактор значения ComboBox


Для настройки редактора значений через строку связи доступны следующие
 параметры:


		 Наименование

параметра
		 Тип
		 Описание
		 Обязателен


		 ITEMS
		 Строка
		 Допустимые значения, разделенные с помощью символа-разделителя
		 (Символ-разделитель задается в параметре SEPARATORS).
		 Нет


		 LISTMODE
		 Логический
		 Запрет на ввод строк в редакторе.
		 Нет


		 SEPARATORS
		 Строка
		 Символы-разделители строк в ITEMS (по умолчанию «|»).
		 Нет


		 VALUE
		 Строка
		 Значение по умолчанию.
		 Нет


Логические значения задаются в виде символьной строки вида «ON/OFF»,
 либо «True/False».


## Особенности применения


Нет


## Строка связи


UI="ComboBox" ITEMS="1,2,3,4,5"
 SEPARATORS="," VALUE="3"


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

	        ComboBoxBinding: IBindingComboBox;

	    Begin

	        BM := New BindingManager.Create;

	        ComboBoxBinding := BM.CreateByUi("ComboBox") As IBindingComboBox;

	        ComboBoxBinding.Items := "1;2;3;4;5";

	        ComboBoxBinding.ListMode := False;

	        ComboBoxBinding.Separators := ";";

	        ComboBoxBinding.Value := "3";

	        UiTabSheet1.TabSheet.Cell(0, 0).Style.Binding := ComboBoxBinding.AsString;

	    End Sub Button1OnClick;


	End Class TestForm;


При нажатии на кнопку будет задан редактор значения для ячейки «А0»
 таблицы. При редактировании ячейки будет отображаться комбинированный
 список содержащий пять значений, по умолчанию выбран элемент - «3».


[Назад](../IBindingManager.CreateByUi.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
