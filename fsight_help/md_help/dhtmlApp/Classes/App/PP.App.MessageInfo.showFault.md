# PP.App.MessageInfo.showFault

PP.App.MessageInfo.showFault
-


# PP.App.MessageInfo.showFault


## Синтаксис


PP.App.MessageInfo.showFault(fault);


## Параметры


fault. Object. Объект типа
 fault, содержит информацию об ошибке.


## Описание


Метод MessageInfo.showFault
 отображает диалог с ошибкой.


## Комментарии


Параметр fault может содержать
 следующие поля:


{
Code: 0,   // PP.App.FaultCodes. Код ошибки
Message: "Ошибка"   // String. Текст отображаемой ошибки
};

## Пример


Для выполнения примера необходимо наличие на html-странице ссылок на
 файл сценария PP.js, PP.Metabase.js, PP.App.js и файл стилей PP.css
 и PP.App.css.


// Создадим информацию об ошибке
fault = {Code: 0, Message: "Ошибка"}
// Отобразим диалог
PP.App.MessageInfo.showFault(fault);
В результате выполнения примера был отображен диалог с ошибкой.


См. также:


[PP.App](../PP.App.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
