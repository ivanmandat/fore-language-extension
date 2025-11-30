# BooleanCombo: Редактор значений

BooleanCombo: Редактор значений
-


# Редактор значения BooleanCombo


Для настройки редактора значений через строку связи доступны следующие
 параметры:


		 Наименование

параметра
		 Тип
		 Описание
		 Обязателен


		 VALUE
		 Логический
		 Значение по умолчанию. Допустимые значения:


			- Ложь;


			- Истина.


		 Нет


Логические значения задаются в виде символьной строки вида «ON/OFF»,
 либо «True/False».


## Особенности применения


Если параметр «Value» не задан, то будет использовано значение «Ложь».


## Строка связи


UI="BooleanCombo" VALUE="Истина"


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

	    Begin

	        UiTabSheet1.TabSheet.Cell(0, 0).Style.Binding := "UI=""BooleanCombo"" VALUE=""Истина""";

	    End Sub Button1OnClick;


	End Class TestForm;


При нажатии на кнопку для ячейки «А0» будет настроен редактор логических
 значений. По умолчанию будет использовано значение «Истина» (true).


[Назад](../IBindingManager.CreateByUi.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
