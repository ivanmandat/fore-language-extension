# CustomRequestHandler: Операция

CustomRequestHandler: Операция
-


# CustomRequestHandler


## Синтаксис


[<адрес
 веб-сервиса>](../Intro/PP7Service_Using.htm)/CustomRequestHandler?mon=<Моникёр модуля>&method=<Наименование
 метода/функции>


## Описание


Операция CustomRequestHandler
 предназначена для выполнения Fore-функции с помощью POST-запроса.


## Комментарии


В параметрах операции передаётся моникёр модуля и наименование выполняемого
 Fore-метода/функции. Моникёр указывается в следующем формате: <моникёр
 открытого соединения>!<ключ модуля>. В методе/функции
 должен содержаться строковый параметр, через который в Fore будет передан
 отправляемый POST-запрос. Необходимым условием для успешного выполнения
 является отправка заголовка do_rest_through_post
 со значением 1. Дальнейшая обработка POST-запроса должна осуществляться
 в прикладном коде на Fore. Результат выполнения функции будет возвращён
 в качестве ответа за POST-запрос.


## Пример


Ниже приведён пример кода html-страницы, которая используется для выполнения
 Fore-функции с помощью операции CustomRequestHandler. Ключ модуля и наименование
 функции определены в переменных objKey
 и methodName соответственно.
 Простой код функции, с помощью которой можно получить отправляемый запрос:


Function TestReceive(Value: String): String;

Begin

    Return "Сформированный запрос: " + Value;

End Function TestReceive;


При выполнении кода в тексте html-страницы будут отображены отправляемые
 запросы и результаты их выполнения: ответ, полученный от BI-сервера, или
 код ошибки.


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<title>Использование операции CustomRequestHandler</title>
</head>
<body>
    <script type="text/javascript">
        var svc = "http://localhost:9090/axis2/services/PP.SOM.Som";
        var objKey = 390432;
        var methodName = "TestReceive";
        // Выполнение CustomRequestHandler
        CustomRequestHandler();
        // Подключение к репозиторию и отправка запроса на выполнение операции CustomRequestHandler
        function CustomRequestHandler() {
            OpenMetabase = { "OpenMetabase": { "tDef": { "id": "Warehouse" }, "tCreds": { "user": { "id": "User" }, "pass": "Password" } } }
            // Подключение к репозиторию
            moniker = PostRequest(svc, OpenMetabase).OpenMetabaseResult.id;
            // Выполнение Fore-функции на сервере
            PostRequest(svc + "/CustomRequestHandler?mon=" + moniker +"!"+ objKey + "&method=" + methodName, "Test Request Body", true);
            // Закрытие соединения с репозиторием
            CloseMetabase = { "CloseMetabase": { "tMb": {"id": moniker} } }
            PostRequest(svc, CloseMetabase)
        }
        // Отправка запросов
        function PostRequest(url, request, custom_handler = false) {
            document.writeln("<hr>Запрос:<p>" + JSON.stringify(request) + "<p>");
            <!--Отправка запроса-->
            var xhr = new XMLHttpRequest();
            if (custom_handler)
            {
                xhr.open("POST", url, false);
                xhr.setRequestHeader('do_rest_through_post', 1);
            }
            else
                xhr.open("POST", url, false);
            xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
            xhr.send(JSON.stringify(request));
            if (xhr.status == 200) {
                document.writeln("Ответ:<p>"  + xhr.responseText + "<p>");
                return eval("(" + xhr.responseText + ")");
            } else {
                document.writeln("Ошибка выполнения запроса:<p>" + xhr.responseText + "<p>");
                return { "error" : true };
            }
        }
    </script>
</body>
</html>
См. также:


[Дополнительные
 операции](additional_operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
