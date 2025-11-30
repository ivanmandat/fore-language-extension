# IMaskEdit.ValidChars

IMaskEdit.ValidChars
-


# IMaskEdit.ValidChars


## Синтаксис


ValidChars: String;


## Описание


Свойство ValidChars определяет
 набор символов, которые пользователь может вводить в поле ввода.


## Комментарии


Допустимые символы указываются в виде сплошной строки, например: 0123ABCD.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента MaskEdit с наименованием
 MaskEdit1.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    MaskEdit1.MaskEnabled := True;

	    MaskEdit1.Mask := "           dd dd ddddd";

	    MaskEdit1.InputTemplate := "Телефон:8-9__-__-_____";

	    MaskEdit1.ValidChars := "012345";

	End Sub Button1OnClick;


После выполнения примера при нажатии кнопки для компонента MaskEdit1
 будет установлен шаблон для ввода номера сотового телефона. Для ввода
 номера будут доступны цифры в диапазоне 0-5.


См. также:


[IMaskEdit](IMaskEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
