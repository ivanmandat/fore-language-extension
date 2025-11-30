# Как создать пользовательский вид диалога «Свойства элемента справочника»?

Как создать пользовательский вид диалога «Свойства элемента справочника»?
-


# Как создать пользовательский вид диалога «Свойства элемента справочника»?


Для использования пользовательского вида диалога «Свойства
 элемента справочника»:


	- Создайте пользовательский вид диалога. Подробное описание приведено
	 ниже.


	- Откройте вкладку «[Карточка](../Master_RDS_reference_book/Element_Card.htm)»
	 на вкладке «[Описание](../Master_RDS_reference_book/Master_RDS.htm#structure)».


	- В раскрывающемся списке «Сборка,
	 модуль или форма» выберите созданный модуль.


	- В раскрывающемся списке «Функция»
	 выберите функцию.


	- В поле «JS-функция»
	 укажите js-функцию.


	- Сохраните изменения в справочнике.


## Пример создания пользовательского вида диалога «Свойства элемента справочника»
 в настольном приложении


Для создания пользовательского вида диалога «Свойства
 элемента справочника» в настольном приложении используйте
 среду разработки.


Вид карточки определяется созданной [формой](UiDevEnv.chm::/01_Development_Environment/02_Work_in_Development_Environment/DevEnv_Object/DevEnv_Form.htm).
 Замена вида диалога происходит в результате действия функции, заданной
 в модуле, связанном с формой.


Для создания пользовательского вида диалога создайте форму с идентификатором
 UIRDS_CHANGE. На форме расположите кнопки с идентификаторами Ok и Cancel,
 компоненты [EditBox](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/EditBox.htm) с
 идентификаторами FieldName и FieldEmail, а также компоненты [Label](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Label.htm) с идентификаторами
 Name и Email. Задайте глобальные переменные «Elements: IRdsDictionaryElements»,
 «ElemKey: Integer», «NewElem: Boolean», «Key: Integer», «Data: IRdsDictionaryElementData»,
 «DataCopy: IRdsDictionaryElementData». Для класса формы UIRDS_CHANGE и
 глобальной переменной «Key» добавьте модификатор доступа Public.


Добавьте ссылки на системные сборки: Rds, Ui.


Для кнопки Ok добавьте обработчик события OnClick
 со следующим кодом:


	Sub OkOnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    If NewElem = true Then

	        Data := Elements.CreateElementData;

	        Data.Value(1) := FieldName.Text;

	        Data.Value(4) := FieldEmail.Text;

	        Key := Elements.Insert(ElemKey, Data);

	    Else

	        Data.Value(1) := FieldName.Text;

	        Data.Value(4) := FieldEmail.Text;

	        Elements.Update(ElemKey, Data);

	        key := ElemKey;

	    End If;

	    self.Close;

	End Sub OkOnClick;


Для кнопки Cancel добавьте обработчик события OnClick
 со следующим кодом:


	Sub CancelOnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    self.ModalResult := FormModalResult.Cancel;

	    self.Close;

	End Sub CancelOnClick;


Для формы UIRDS_CHANGE добавьте обработчик события OnCommand
 со следующим кодом:


	Sub UIRDS_CHANGEFormOnCommand(Sender: Object; Args: ICommandEventArgs);

	Begin

	    If Args.Command = "sendElements" Then

	       Elements := (Args.Argument As Array)[0];

	       ElemKey := (Args.Argument As Array)[1];

	       NewElem := (Args.Argument As Array)[2];

	       DataCopy := (Args.Argument As Array)[3];

	    End If;

	    If NewElem = False Then

	       Data := Elements.Data(ElemKey);

	       FieldName.Text := Data.Value(1);

	       FieldEmail.Text := Data.Value(4);

	       Else

	       If Not IsNull(DataCopy.Value(1)) Then

	       FieldName.Text := DataCopy.Value(1);

	       FieldEmail.Text := DataCopy.Value(4);

	       Ok.Enabled := True;

	       Else

	       Ok.Enabled := False;

	       End If;

	    End If;

	End Sub UIRDS_CHANGEFormOnCommand;


Для компонента FieldName добавьте обработчик события OnChange
 со следующим кодом:


	Sub FieldNameOnChange(Sender: Object; Args: IEventArgs);

	Begin

	    Ok.Enabled := FieldName.Text = "" ? False : True;

	End Sub FieldNameOnChange;


Для замены предустановленного вида диалога на созданный в форме UIRDS_CHANGE
 создайте модуль.


Добавьте ссылки на системные сборки: Forms, Rds.


Свяжите модуль с формой UIRDS_CHANGE, добавив ссылку на форму на
 вкладке «[Сборки репозитория](UiDevEnv.chm::/01_Development_Environment/02_Work_in_Development_Environment/DevEnv_Object/DevEnv_Assembly.htm)».


Добавьте функцию с модификатором доступа Public со следующим кодом:


	Public Function AddOrEditElement(ParentWnd: IWin32Window; Elements: IRdsDictionaryElements; ElemKey: Integer; NewElem: Boolean; ReadOnly: Boolean; InitData: IRdsDictionaryElementData): Integer;

	Var

	    f: UiRds_ChangeForm;

	    ar: array;

	Begin

	    f := New UiRds_ChangeForm.CreateForm(ParentWnd);

	    ar := New Variant[4];

	    ar[0] := Elements;

	    ar[1] := ElemKey;

	    ar[2] := NewElem;

	    ar[3] := InitData;

	    f.SendCommand("sendElements", ar);

	    f.ShowModal;

	    If f.ModalResult = FormModalResult.Cancel Then

	        Return - 1;

	    Else

	        Return f.Key;

	    End If;


	End Function AddOrEditElement;


## Пример создания пользовательской карточки элемента в веб-приложении


В настольном приложении на вкладке «Карточка»
 пропишите название js-функции. Функция может быть добавлена в виде отдельного
 файла или встроена в основной файл инструмента.


Для встраивания js-функции в html-код основного файла rds.html, расположенного
 в папке «App» c установленным веб-приложением, добавьте в тег <head>
 тег <script> с текстом js-функции.
 Например:


<script type="text/javascript">
function AddOrEditElement(tree, operation, itemKey, parentKey, isReadOnly)
{
var source = tree.getSource();
var ItemKey = "35";
alert(operation);
if (operation == PP.Rds.ElementOperation.Insert && itemKey == null)
{
var Item = new PP.Rds.DItem({
    AttrValues: [, "Добавленный элемент", parentKey,, "@mail.ru"], // Значения атрибутов
Owner: source
});
tree.addItem(parentKey, Item);
}
if (operation == PP.Rds.ElementOperation.Insert && itemKey != null)
{
var Item = new PP.Rds.DItem({
    AttrValues: [, "Скопированный элемент", parentKey,, "@fsight.ru"], // Значения атрибутов
Owner: source
});
tree.addItem(parentKey, Item);
}
if (operation == PP.Rds.ElementOperation.Update && itemKey != null)
{
var Item = new PP.Rds.DItem({
    AttrValues: [, "Отредактированный элемент",,, "@yandex.ru"], // Значения атрибутов
Owner: source
});
tree.editItem(itemKey, Item);
}
};
</script>
Для добавления js-функции в виде отдельного файла создайте js-файл
 с кодом функции. Добавьте в тег <head>
 ссылку на созданный js-файл. Например, если js-файл и основной файл инструмента
 расположены в одной папке, то ссылка будет следующая:


<script src="Func.js" type="text/javascript"></script>
См. также:


[Вопросы и ответы](FAQ.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
