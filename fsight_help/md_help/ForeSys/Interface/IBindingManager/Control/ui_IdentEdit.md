# IdentEdit: Редактор значений

IdentEdit: Редактор значений
-


# Редактор значения IdentEdit


Для настройки редактора значений через строку связи доступны следующие
 параметры:


		 Наименование

параметра
		 Тип
		 Описание
		 Обязателен


		 VALUE
		 Строковый
		 Значение по умолчанию.
		 Нет


		 ALLOWDOT
		 Логический
		 Возможность включения символа «.» в значение редактора.
		 Нет


Логические значения задаются в виде символьной строки вида «ON/OFF»,
 либо «True/False».


## Особенности применения


Нет


## Строка связи


UI="IdentEdit" ALLOWDOT="true"
 VALUE="ID"


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

	        IdentEditBinding: IBindingIdentEdit;

	    Begin

	        BM := New BindingManager.Create;

	        IdentEditBinding := BM.CreateByUi("IdentEdit") As IBindingIdentEdit;

	        IdentEditBinding.AllowDot := True;

	        IdentEditBinding.Value := "ID";

	        UiTabSheet1.TabSheet.Cell(0, 0).Style.Binding := IdentEditBinding.AsString;

	    End Sub Button1OnClick;


	End Class TestForm;


При нажатии на кнопку будет задан редактор значения для ячейки «А0»
 таблицы. При редактировании ячейки будет отображаться поле редактирования
 идентификаторов. По умолчанию будет отображаться значение «ID», в идентификаторе
 можно будет использовать символ «.».


[Назад](../IBindingManager.CreateByUi.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
