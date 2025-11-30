# PP.App.MessageInfo.show

PP.App.MessageInfo.show
-


# PP.App.MessageInfo.show


## Синтаксис


PP.App.MessageInfo.show(settings);


## Параметры


settings. Object. Настройки
 диалога, может содержать свойства класса [PP.Ui.Dialog](dhtmlUi.chm::/Classes/Dialog/Dialog.htm).


## Описание


Метод MessageInfo.show отображает
 произвольный диалог с информацией.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылок на
 файл сценария PP.js, PP.Metabase.js, PP.App.js и файл стилей PP.css
 и PP.App.css.


// Создадим информацию об ошибке
fault = {Code: 0, Message: "Ошибка"}
// Отобразим диалог
PP.App.MessageInfo.show(fault);
В результате выполнения примера был отображен диалог с ошибкой.


См. также:


[PP.App](../PP.App.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
