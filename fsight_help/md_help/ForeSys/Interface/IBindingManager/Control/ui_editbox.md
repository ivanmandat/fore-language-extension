# EditBox: Редактор значений

EditBox: Редактор значений
-


# Редактор значения EditBox


Для настройки редактора значений через строку связи доступны следующие
 параметры:


		 Наименование

параметра
		 Тип
		 Описание
		 Обязателен


		 MAXLENGTH
		 Целый
		 Максимальная длина вводимой строки.
		 Нет


		 VALUE
		 Строка
		 Значение по умолчанию.
		 Нет


		 READONLY
		 Логический
		 Запрет редактирования значений.
		 Нет


		 MULTILINE
		 Логический
		 Признак расположения текста в несколько строк.
		 Нет


Логические значения задаются в виде символьной строки вида «ON/OFF»,
 либо «True/False».


## Особенности применения


Нет


## Строка связи


UI="EditBox" VALUE="Default value"
 MAXLENGTH="15"


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

	        EditBoxBinding: IBindingEditBox;

	    Begin

	        BM := New BindingManager.Create;

	        EditBoxBinding := BM.CreateByUi("EditBox") As IBindingEditBox;

	        EditBoxBinding.MaxLength := 30;

	        EditBoxBinding.MultiLine := True;

	        EditBoxBinding.ReadOnly := False;

	        EditBoxBinding.Value := "Текст...";

	        UiTabSheet1.TabSheet.Cell(0, 0).Style.Binding := EditBoxBinding.AsString;

	    End Sub Button1OnClick;


	End Class TestForm;


При нажатии на кнопку будет задан редактор значения для ячейки «А0»
 таблицы. При редактировании ячейки будет отображаться поле ввода строковых
 значений, ограничение по длине значения - 30 символов, значение может
 располагаться в несколько строк, значение по умолчанию - "Текст...".


[Назад](../IBindingManager.CreateByUi.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
