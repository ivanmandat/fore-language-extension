# IMaskEdit.InputTemplate

IMaskEdit.InputTemplate
-


# IMaskEdit.InputTemplate


## Синтаксис


InputTemplate: String;


## Описание


Свойство InputTemplate определяет
 шаблон, в соответствии с которым будут вводиться данные в редактор [компонента](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/MaskEdit.htm).


## Комментарии


Данный шаблон будет отображаться в компоненте. Для указания позиций,
 в которых будет доступен ввод данных в соответствии с установленной [маской](IMaskEdit.Mask.htm), используются символы, указанные
 в свойстве [PlaceholderChar](IMaskEdit.PlaceholderChar.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента MaskEdit с наименованием
 MaskEdit1.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    MaskEdit1.MaskEnabled := True;

    MaskEdit1.Mask := "           dd dd ddddd";

    MaskEdit1.InputTemplate := "Телефон:8-9__-__-_____";

End Sub Button1OnClick;


После выполнения примера при нажатии кнопки для компонента MaskEdit1
 будет установлен шаблон для ввода номера сотового телефона.


См. также:


[IMaskEdit](IMaskEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
