# IWebControl.BorderColor

IWebControl.BorderColor
-


# IWebControl.BorderColor


## Синтаксис


BorderColor: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство BorderColor определяет
 цвет границы компонента.


## Комментарии


Изменение цвета границы самой веб-формы не поддерживается.


## Пример


Для выполнения примера в репозитории предполагается наличие веб-формы
 и расположенной на ней кнопки с наименованием Button1.


Добавьте ссылки на системные сборки: Drawing, WebForms.


	Sub Button1OnClick;

	Begin

	    Button1.BorderColor := GxColor.FromKnownColor(GxKnownColor.Red);

	End Sub Button1OnClick;


Во время выполнения веб-формы при нажатии на кнопку будет изменён цвет
 её границы.


См. также:


[IWebControl](IWebControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
