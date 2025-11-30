# SplitButton.DefaultAction

SplitButton.DefaultAction
-


# SplitButton.DefaultAction


## Синтаксис


DefaultAction: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие DefaultAction наступает при нажатии на верхнюю часть кнопки (с картинкой).


## Пример


Для выполнения примера предполагается наличие на странице компонента [SplitButton](../../Components/SplitButton/SplitButton.htm) с наименованием «splitButton» (см. описание [конструктора SplitButton](Constructor_SplitButton.htm)). Добавим обработчик события DefaultAction:


splitButton.DefaultAction.add(function ()
{
    splitButton.getContentButton().setEnabled(false);
    splitButton.getImageButton().setIsVisible(false);
});

После выполнения примера при нажатии на верхнюю часть кнопки нижняя часть кнопки будет деактивирована, а верхняя - скрыта.


См. также:


[SplitButton](SplitButton.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
