# IDataGridColumn.EditorBinding

IDataGridColumn.EditorBinding
-


# IDataGridColumn.EditorBinding


## Синтаксис


EditorBinding: String;


## Описание


Свойство EditorBinding определяет
 синтаксис редактора значений для ячеек текущего столбца.


## Комментарии


В качестве значения свойства необходимо указать строку связи, определяющую
 параметры редактора. Для получения строки связи используйте свойство [IBindingValue.AsString](ForeSys.chm::/Interface/IBindingValue/IBindingValue.AsString.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки «Button1» и компонента DataGrid с наименованием «DataGrid1».
 В таблице имеется хотя бы одна колонка.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    BM: IBindingManager;

	    ComboBoxBinding: IBindingComboBox;

	Begin

	    BM := New BindingManager.Create;

	    ComboBoxBinding := BM.CreateByUi("ComboBox") As IBindingComboBox;

	    // Элементы

	    ComboBoxBinding.Items := "1;2;3;4;5";

	    // Возможность редактирования

	    ComboBoxBinding.ListMode := False;

	    // Разделитель для элементов

	    ComboBoxBinding.Separators := ";";

	    // Значение по умолчанию

	    ComboBoxBinding.Value := "3";

	    // Установка редактора

	    DataGrid1.Columns.Item(0).EditorBinding := ComboBoxBinding.AsString;

	End Sub Button1OnClick;


При нажатии на кнопку для первой колонки таблицы будет определен редактор,
 который будет использоваться для задания значений ячеек. В качестве редактора
 будет использоваться комбинированный список с возможностью выбора значений
 от 1 до 5.


См. также:


[IDataGridColumn](IDataGridColumn.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
