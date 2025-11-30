# TreeCombo: Редактор значений

TreeCombo: Редактор значений
-


# Редактор значения TreeCombo


Для настройки редактора значений через строку связи доступны следующие
 параметры:


		 Наименование

параметра
		 Тип
		 Описание
		 Обязателен


		 NODES
		 Строка
		 Наименования вершин дерева, разделенные с помощью символа-разделителя
		 (символ-разделитель задается в параметре SEPARATORS). В фигурных
		 скобках указываются подэлементы вершины, между собой подэлементы
		 также разделяются с помощью символа-разделителя.
		 Нет


		 SEPARATORS
		 Строка
		 Символы-разделители строк в NODES (по умолчанию «|»).
		 Нет


		 VALUE
		 Строка
		 Значение по умолчанию.
		 Нет


## Особенности применения


Во встраиваемом через язык Fore компоненте имеется возможность устанавливать
 кавычки в тексте элементов. Для этого используется сочетание символов
 «&quot;»:


NODES="&quot;Вершина&quot;".


## Строка связи


UI="TreeCombo" NODES="Элемент 1,{Элемент
 1_1,{Элемент 1_1_1},Элемент 1_2},Элемент 2,{Элемент 2_1}" SEPARATORS
 = "," VALUE="Элемент 1"


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

	        TreeComboBinding: IBindingTreeCombo;

	    Begin

	        BM := New BindingManager.Create;

	        TreeComboBinding := BM.CreateByUi("TreeCombo") As IBindingTreeCombo;

	        //Вершины

	        TreeComboBinding.Nodes := "Элемент 1,{Элемент 1_1,{Элемент 1_1_1},Элемент 1_2},Элемент 2,{Элемент 2_1}";

	        //Разделитель вершин

	        TreeComboBinding.Separators := ",";

	        //Вершина по умолчанию

	        TreeComboBinding.Value := "Элемент 1";

	        UiTabSheet1.TabSheet.Cell(0, 0).Style.Binding := TreeComboBinding.AsString;

	    End Sub Button1OnClick;


	End Class TestForm;


При нажатии на кнопку будет задан редактор значения для ячейки «А0»
 таблицы. При редактировании ячейки будет отображаться трехуровневое комбинированное
 дерево, по умолчанию будет выделен элемент с наименованием "Элемент
 1".


[Назад](../IBindingManager.CreateByUi.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
