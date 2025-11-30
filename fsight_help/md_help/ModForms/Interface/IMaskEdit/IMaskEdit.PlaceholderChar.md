# IMaskEdit.PlaceholderChar

IMaskEdit.PlaceholderChar
-


# IMaskEdit.PlaceholderChar


## Синтаксис


PlaceholderChar: Char;


## Описание


Свойство PlaceholderChar определяет
 символ, используемый в [шаблоне](IMaskEdit.InputTemplate.htm)
 для указания позиций, предназначенных для ввода данных. По умолчанию используется
 символ «_».


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента MaskEdit с наименованием
 MaskEdit1.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    MaskEdit1.MaskEnabled := True;

    MaskEdit1.PlaceholderChar := '*';

    MaskEdit1.Mask := "      ddd ddd ddd";

    MaskEdit1.InputTemplate := "Номер:***-***-***";

End Sub Button1OnClick;


После выполнения примера при нажатии кнопки для компонента MaskEdit1
 будет установлен шаблон для ввода девятизначного номера. В качестве символа,
 используемого для указания позиций, предназначенных для ввода данных,
 будет использоваться «*».


См. также:


[IMaskEdit](IMaskEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
