# IWebFormComponent.Clipboard

IWebFormComponent.Clipboard
-


# IWebFormComponent.Clipboard


## Синтаксис


Clipboard: [IWebClipboard](../IWebClipboard/IWebClipboard.htm);


## Описание


Свойство Clipboard возвращает
 буфер обмена веб-формы.


## Пример


Для выполнения примера в репозитории предполагается наличие веб-формы,
 расположенной на ней кнопки с наименованием Button1 и компонента Input
 с наименованием Input1.


Добавьте ссылки на системные сборки: WebForms.


	Class TESTWebForm: WebForm

	    Input1: WebInput;

	    Button1: WebButton;


	    Sub Button1OnClick;

	    Begin

	        Self.Clipboard.Text := Input1.Text;

	    End Sub Button1OnClick;

	End Class TESTWebForm;


При нажатии на кнопку в буфер обмена будет скопирован текст, имеющийся
 в компоненте Input1.


См. также:


[IWebFormComponent](IWebFormComponent.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
