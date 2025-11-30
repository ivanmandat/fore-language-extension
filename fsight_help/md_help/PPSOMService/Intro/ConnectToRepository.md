# Подключение к репозиторию

Подключение к репозиторию
-


# Подключение к репозиторию


Работа с репозиторием через веб-сервис начинается с подключения к репозитрию.
 Для этого предназначена операция [OpenMetabase](../Operations/Repository/OpenMetabase.htm).
 Авторизация при подключении может осуществляться различными способами:
 прямое указание логина и пароля пользователя, с использованием цифровой
 подписи. В зависимости от выбранного способа авторизации
 может потребоваться предварительная настройка BI-сервера. Различные настройки,
 которые могут быть проведены на стороне BI-сервера, описаны в следующих
 подразделах:


	- [Настройка
	 BI-сервера](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Settings.htm).


Результатом работы операции [OpenMetabase](../Operations/Repository/OpenMetabase.htm)
 будет моникёр, который в дальнейшем будет использоваться для выполнения
 различных операций по управлению репозиторием и работы с его объектами.
 Список доступных операций и их описание представлено в разделе «[Операции
 сервиса PP.SOM](../Operations/BaseService.htm)». Также имеется ряд [оптимизированных
 операций](../Additional/additional_operations.htm), которые не используют JSON/SOAP структуры, а выполняются
 путем указании их в адресной строке при обращении к BI-серверу.


Также для ознакомительной работы с веб-сервисом может быть организовано
 [гостевое подключение](UseGuestConnection.htm) не требующее
 специального подключения к репозиторию через операцию [OpenMetabase](../Operations/Repository/OpenMetabase.htm).


## Пример


Ниже приведен пример кода html-страницы, при открытии которой будет
 осуществляться подключение к репозиторию через BI-сервер, расположенный
 по адресу, заданному в переменной svc.
 Описание репозитория, зарегистрированное в реестре BI-сервера, должно
 иметь идентификатор «WAREHOUSE». При выполнении кода по подключению в
 тексте html-страницы будет отображен отправляемый запрос и результат его
 выполнения: ответ, полученный от BI-сервера, или код ошибки, если подключение
 к репозиторию невозможно.


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <title>Example for web service</title>
    <meta http-equiv="X-UA-Compatible" content="IE=8" >
</head>
<body>
    <script language="javascript" type="text/javascript">
    <!--Адрес, по которому доступен BI-сервер-->
    var svc = "http://localhost:9090/axis2/services/PP.SOM.Som";
    <!--JSON-запрос на открытие репозитория-->
    OpenMetabase = { "OpenMetabase": { "tDef": { "id": "WAREHOUSE" }, "tCreds": { "user": { "id": "User" }, "pass": "Password" } } }
    <!--Выполнение запроса-->
    OpenMetabaseResult = PostRequest(svc, OpenMetabase);
    <!--Функция для отправки JSON-запроса-->
    function PostRequest(url, request) {
        document.writeln("<hr>Запрос:<p>" + JSON.stringify(request) + "<p>");
        <!--Отправка запроса-->
        var xhr = new XMLHttpRequest();
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


[Подключение
 к веб-сервису](PP7Service_Using.htm) | [Использование гостевого
 подключения](UseGuestConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
