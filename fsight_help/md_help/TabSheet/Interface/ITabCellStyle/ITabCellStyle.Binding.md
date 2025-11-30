# ITabCellStyle.Binding

ITabCellStyle.Binding
-


# ITabCellStyle.Binding


## Синтаксис


Binding: String;


## Описание


Свойство Binding определяет
 параметры редактора, который будет использоваться для редактирования значений
 ячейки.


## Комментарии


Параметры редактора устанавливаются с помощью строки связи. Для получения
 строки связи используйте свойство [IBindingValue.AsString](ForeSys.chm::/Interface/IBindingValue/ibindingvalue.asstring.htm).


Примечание.
 Изменение параметров редактора значений ячейки не влияет на значение свойства
 [ITabRange.Value](../ITabRange/ITabRange.Value.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox
 с наименованием «TabSheetBox1» и какого-либо источника данных для «TabSheetBox1».


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


При нажатии на кнопку будет задан редактор значения для ячейки «А0»
 таблицы. При редактировании ячейки будет отображаться комбинированный
 список содержащий пять значений, по умолчанию выбран элемент - «3».


См. также:


[ITabCellStyle](ITabCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
