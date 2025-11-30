# IPrxControl.Value

IPrxControl.Value
-


# IPrxControl.Value


## Синтаксис


Value: Variant;


## Описание


Свойство Value определяет значение,
 установленное в элементе управления.


## Комментарии


Значение, определяемое в свойстве Value,
 зависит от типа используемого элемента управления:


	- для элемента управления [BooleanCombo](ForeSys.chm::/Interface/IBindingManager/Control/UI_BooleanCombo.htm):
	 логическое значение True или
	 False;


	- для элемента управления [CheckBox](ForeSys.chm::/Interface/IBindingManager/Control/ui_checkbox.htm):
	 логическое значение True или
	 False;


	- для элемента управления [ComboBox](ForeSys.chm::/Interface/IBindingManager/Control/UI_ComboBox.htm):
	 наименование элемента, присутствующего в списке элемента управления;


	- для элемента управления [DatePicker](ForeSys.chm::/Interface/IBindingManager/Control/UI_DatePicker.htm):
	 значение типа [DateTime](Fore.chm::/03_dataTypes/Fore_DataTypes.htm),
	 содержащее требуемое значение компоненты даты;


	- для элемента управления [DateTimePicker](ForeSys.chm::/Interface/IBindingManager/Control/UI_DateTimePicker.htm):
	 значение типа [DateTime](Fore.chm::/03_dataTypes/Fore_DataTypes.htm),
	 содержащее требуемые значения компонент даты и времени;


	- для элемента управления [DecimalEdit](ForeSys.chm::/Interface/IBindingManager/Control/UI_DecimalEdit.htm):
	 значение типа [Decimal](Fore.chm::/03_dataTypes/Fore_DataTypes.htm);


	- для элемента управления [DimCombo](ForeSys.chm::/Interface/IBindingManager/Control/UI_DimCombo.htm):
	 допустимы различные значения, более подробно смотрите комментарии
	 ниже;


	- для элемента управления [EditBox](ForeSys.chm::/Interface/IBindingManager/Control/UI_EditBox.htm):
	 любое строковое значение;


	- для элемента управления [FloatEdit](ForeSys.chm::/Interface/IBindingManager/Control/UI_FloatEdit.htm):
	 любое вещественное значение;


	- для элемента управления [IdentEdit](ForeSys.chm::/Interface/IBindingManager/Control/ui_IdentEdit.htm):
	 любое строковое значение, удовлетворяющее требованиям к идентификаторам;


	- для элемента управления [IntegerEdit](ForeSys.chm::/Interface/IBindingManager/Control/UI_IntegerEdit.htm):
	 любое целочисленное значение;


	- для элемента управления [MaskEdit](ForeSys.chm::/Interface/IBindingManager/Control/UI_MaskEdit.htm):
	 значение в соответствии с установленным шаблоном ввода;


	- для элемента управления [TimePicker](ForeSys.chm::/Interface/IBindingManager/Control/UI_TimePicker.htm):
	 значение типа [DateTime](Fore.chm::/03_dataTypes/Fore_DataTypes.htm),
	 содержащее требуемое значение компоненты времени;


	- для элемента управления [TreeCombo](ForeSys.chm::/Interface/IBindingManager/Control/UI_TreeCombo.htm):
	 наименование элемента, присутствующего в списке элемента управления.


### DimCombo


При использовании элемента управления DimCombo,
 в зависимости от наличия привязки для [управления](IPrxControl.Dimension.htm)
 измерением, доступны различные значения свойства Value:


	- Если элемент управления не связан с измерением или связан с
	 измерением аналитической области данных, описываемой интерфейсом [IEaxDataArea](KeExpress.chm::/Interface/IEaxDataArea/IEaxDataArea.htm),
	 то в качестве значения свойства Value
	 задается:


		- значение атрибута при единичной отметке;


		- массив типа Variant
		 со значениями атрибута при множественной отметке.


Атрибут задаётся в параметре ATTRIBUTEVALUE в [строке
 связи](IPrxControl.Binding.htm). Если параметр ATTRIBUTEVALUE отсутствует, то используется атрибут с назначением «Идентификатор».
 При формировании строки связи определить значение параметра ATTRIBUTEVALUE
 можно с помощью свойства [ValueAttribute](ForeSys.chm::/Interface/IBindingDimCombo/IBindingDimCombo.ValueAttribute.htm).


	- Если элемент управления связан с измерением области данных,
	 описываемой интерфейсом [IPrxDataIsland](../IPrxDataIsland/IPrxDataIsland.htm),
	 то в качестве значения свойства Value
	 указывается отметка справочника, описываемая интерфейсом [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm).
	 Отметка должна соответствовать тому справочнику, который используется
	 в качестве элемента управления.


Для сброса значения элемента управления задайте свойству Value
 значение Null.


## Пример


					Sub GetControlValue(Control: IPrxControl);

		Var

		    Arr: Array;

		    i: Integer;

		    BM: IBindingManager;

		    Binding: IBindingValue;

		Begin

		    //Если в элементе управления задано значение, то получим и выведем его в консоль

		    If Control.Value.VarType <> ForeVariantType.NullValue Then

		        Debug.Write("Значение(я) элемента управления: ");

		        //Если массив, то просматриваем значения всех элементов массива

		        If Control.Value.VarType = ForeVariantType.Matrix Then

		            Arr := Control.Value As Array;

		            For i := 0 To Arr.Length - 1 Do

		                Debug.Write(Arr[i] + " ");

		            End For;

		            Debug.WriteLine("");

		        //Если объект, то приводим к IDimSelection и получаем количество отмеченных

		        Elseif Control.Value.VarType = ForeVariantType.Object Then

		            Debug.WriteLine("Отметка IDimSelection. Выделено: " + (Control.Value As IDimSelection).SelectedCount.ToString);

		        //Если не массив и не объект, то просто выводим значение

		        Else

		            Debug.WriteLine(Control.Value);

		        End If;

		        //Атрибут, управляющий значением

		        BM := New BindingManager.Create;

		        Binding := BM.CreateByValue(Control.Binding);

		        Debug.WriteLine("Атрибут, управляющий значением: "

		            + (Binding As IBindingDimCombo).ValueAttribute);

		    End If;

		End Sub GetControlValue;


Указанная функция может использоваться для получения значения элемента
 управления, в основе которого лежит редактор DimCombo. Полученные значения
 выводятся в консоль среды разработки, а также в консоль выводится идентификатор
 атрибута справочника, значения которого формируют значение элемента управления.


См. также:


[IPrxControl](IPrxControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
