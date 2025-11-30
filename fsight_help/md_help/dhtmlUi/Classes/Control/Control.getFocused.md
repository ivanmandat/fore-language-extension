# Control.getFocused

Control.getFocused
-


# Control.getFocused


## Синтаксис


getFocused();


## Описание


Метод getFocused определяет
 наличие фокуса у компонента.


## Комментарии


Если метод возвращает значение true,
 то компонент находится в фокусе, если false
 - не находится.


## Пример


Для выполнения примера в теге <head> html-страницы добавьте ссылки
 на файлы PP.js и PP.css. Добавим на страницу компонент [TextBox](../../Components/TextBox/TextBox.htm),
 установим для него форус и определим таймаут для отображения всплывающей
 подсказки - 4секунды:


 tb = new PP.Ui.TextBox({
    ParentNode: document.body,
    Content: "Text",
    ToolTip: "Enter some text",
    Width: 100
 });
 if (tb.getFocused() == false) {
    tb.setFocus()
 };
 PP.setTimeout(function () {
    tb.hideToolTip()
 }, 4000);

После выполнения примера на странице будет размещен компонент [TextBox](../../Components/TextBox/TextBox.htm) с установленным фокусом. Для
 компонента установлена всплывающая подсказка, отображение которой длится
 4 секунды.


См. также:


[Control](Control.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
