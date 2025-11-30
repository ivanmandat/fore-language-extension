# CheckBox: Редактор значений

CheckBox: Редактор значений
-


# Редактор значения CheckBox


Для настройки редактора значений через строку связи доступны следующие
 параметры:


		 Наименование

параметра
		 Тип
		 Описание
		 Обязателен


		 ALIGN
		 Строка
		 Расположение флажка относительно текста.

Допустимые значения:


			- LEFT. Флажок слева от текста.

			- CENTER. Флажок по центру, текст не отображается.

			- RIGHT. Флажок справа от текста.


		 Нет


		 TEXT
		 Строка
		 Подпись флажка (переключателя).
		 Нет


		 VALUE
		 Логический
		 Значение по умолчанию.
		 Нет


Логические значения задаются в виде символьной строки вида «ON/OFF»,
 либо «True/False».


## Особенности применения


Нет


## Строка связи


UI="CheckBox" ALIGN="LEFT" TEXT="Вкл/выкл"
 VALUE="ON"


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

	        CheckBoxBinding: IBindingCheckBox;

	    Begin

	        BM := New BindingManager.Create;

	        CheckBoxBinding := BM.CreateByUi("CheckBox") As IBindingCheckBox;

	        CheckBoxBinding.Align := CheckAlignment.Right;

	        CheckBoxBinding.Caption := "Вкл/выкл";

	        CheckBoxBinding.Value := True;

	        UiTabSheet1.TabSheet.Cell(0, 0).Style.Binding := CheckBoxBinding.AsString;

	    End Sub Button1OnClick;

	End Class TestForm;


При нажатии на кнопку будет задан редактор значения для ячейки «А0»
 таблицы. При редактировании ячейки будет отображаться переключатель, подпись
 переключателя - «Вкл/выкл», значение по умолчанию - включен, флажок расположен
 справа относительно текста.


[Назад](../IBindingManager.CreateByUi.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
