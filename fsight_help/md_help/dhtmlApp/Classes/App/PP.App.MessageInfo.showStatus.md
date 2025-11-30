# PP.App.MessageInfo.showStatus

PP.App.MessageInfo.showStatus
-


# PP.App.MessageInfo.showStatus


## Синтаксис


PP.App.MessageInfo.showStatus(status, setup);


## Параметры


status. [PP.Application.MessageStatusEnum](../../Enums/MessageStatusEnum.htm).
 Тип статуса.


setup. Object. Дополнительные
 настройки диалога. Перекрывают базовые настройки. Необязательный параметр.


## Описание


Метод MessageInfo.showStatus
 отображает диалог со статусом.


## Пример


Для выполнения примера в теге HEAD добавьте ссылки на js и css-файлы:


	- PP.js;


	- PP.Metabase.js;


	- PP.App.js;


	- PP.css;


	- PP.App.css;


	- App.resources.ru.js.


В теге SCRIPT добавьте следующий скрипт:


<script text="text/javascript">
    function Ready()   {
        // Создадим объект в кодом
        status = PP.Application.MessageStatusEnum.Success;
        // Отобразим диалог
        PP.App.MessageInfo.showStatus(status);
    };
</script>
В теге BODY добавьте атрибут onload:


<body onload="Ready()">
</body>
В результате выполнения примера будет отображен диалог со статусом.


См. также:


[PP.App](../PP.App.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
