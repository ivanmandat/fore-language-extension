# ReloadTopobase: Операция

ReloadTopobase: Операция
-


# ReloadTopobase


## Синтаксис


[<адрес
 веб-сервиса>](../Intro/PP7Service_Using.htm)/ReloadTopobase?mon=<topobase moniker>


## Описание


Операция ReloadTopobase предназначена
 для загрузки топоосновы из файла в существующую топооснову в репозитории
 с помощью POST-запроса.


## Комментарии


В параметрах операции передаётся моникёр топоосновы в репозитории. Моникёр
 указывается в следующем формате: <моникёр
 соединения с репозиторием>!<id/key topobase>. Загружаемая
 топооснова должна передаваться в теле POST-запроса.


Результатом операции будет логическое значение True,
 если обновление топоосновы в репозитории завершилось успешно.


## Пример


Ниже приведён пример кода html-страницы, которая используется для обновления
 топоосновы в репозитории. В качестве значения отправляется форма, реализованная
 на html-странице. В данной форме имеется элемент управления, открывающий
 файл топоосновы. Отправка осуществляется при нажатии на гиперссылку.


Для уменьшения примера из кода исключен скрипт функции PostRequest,
 которая используется для выполнения операций в JSON формате. Код данной
 функции можно посмотреть в статье «[Подключение
 к репозиторию](../Intro/ConnectToRepository.htm)».


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<title>Использование операции ReloadTopobase</title>
</head>
<body>
    <script type="text/javascript">
        var svc = "http://localhost:9090/axis2/services/PP.SOM.Som";
        var topobaseId = "RF_MAP";
        function getFormElement(id) {
            var res = document.getElementById(id);
            return res;
        }
        function sendForm(form, url) {
            var sta = getFormElement('status');
            sta.innerHTML = '';
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url, false);
            var data = new FormData(form);
            xhr.send(data);
            if (xhr.status == 200) {
                sta.innerHTML = "Ответ:<p>" + xhr.responseText + "<p>";
            } else {
                sta.innerHTML = "Ошибка выполнения запроса:<p>" + xhr.responseText +  "<p>";
            }
        }
        // Подключение к репозиторию и отправка запроса на выполнение операции ReloadTopobase
        function ReloadTopobase(form) {
            var OpenMetabase = { "OpenMetabase": { "tDef": { "id": "Warehouse" }, "tCreds": { "user": { "id": "User" }, "pass": "Password" } } };
            //Подключение к репозиторию
            var OpenMetabaseResult = PostRequest(svc, OpenMetabase);
            //Отправка данных на сервер
            return sendForm(form, svc + "/ReloadTopobase?mon=" + OpenMetabaseResult.OpenMetabaseResult.id + "!" + topobaseId);
        }
        /*
            Скрипт для PostRequest
        */
    </script>
    <!--Форма, данные которой будут отправляться на сервер-->
    <form id="fileForm" action="" method="" enctype="multipart/form-data" onsubmit="ReloadTopobase(this)">
        <div>
            <input type="file" name="file" id="file" />
        </div>
    </form>
    <!--Гиперссылка для отправки данных-->
    <div>
        <a href="javascript:ReloadTopobase(getFormElement('fileForm'))">ReloadTopobase</a>
    </div>
    <!--Поле для формирования статуса выполнения операции-->
    <div id="status"></div>
</body>
</html>
См. также:


[Дополнительные
 операции](additional_operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
