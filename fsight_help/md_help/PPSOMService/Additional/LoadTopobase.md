# LoadTopobase: Операция

LoadTopobase: Операция
-


# LoadTopobase


## Синтаксис


[<адрес
 веб-сервиса>](../Intro/PP7Service_Using.htm)/LoadTopobase?mon=<folder moniker>


## Описание


Операция LoadTopobase предназначена
 для загрузки топоосновы из файла в репозиторий с помощью POST-запроса.


## Комментарии


В параметрах операции передаётся моникёр родительской папки в репозитории,
 в которую будет загружена топооснова. Моникёр указывается в следующем
 формате: <моникёр соединения с репозиторием>!<id/key
 папки>. Загружаемая топооснова должна передаваться в теле POST-запроса.


Результатом операции будет ключ созданного в репозитории объекта.


## Пример


Ниже приведён пример кода html-страницы, которая используется для загрузки
 файла топоосновы в репозиторий. В качестве значения отправляется форма,
 реализованная на html-странице. В данной форме имеется элемент управления,
 открывающий файл топоосновы. Отправка осуществляется при нажатии на гиперссылку.


Для уменьшения примера из кода исключен скрипт функции PostRequest,
 которая используется для выполнения операций в JSON формате. Код данной
 функции можно посмотреть в статье «[Подключение
 к репозиторию](../Intro/ConnectToRepository.htm)».


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<title>Использование операции LoadTopobase</title>
</head>
<body>
    <script type="text/javascript">
        var svc = "http://localhost:9090/axis2/services/PP.SOM.Som";
        var folderId = "F_TOPOBASE";
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
        // Подключение к репозиторию и отправка запроса на выполнение операции LoadTopobase
        function LoadTopobase(form) {
            var OpenMetabase = { "OpenMetabase": { "tDef": { "id": "Warehouse" }, "tCreds": { "user": { "id": "User" }, "pass": "Password" } } };
            //Подключение к репозиторию
            var OpenMetabaseResult = PostRequest(svc, OpenMetabase);
            //Отправка данных на сервер
            return sendForm(form, svc + "/LoadTopobase?mon=" + OpenMetabaseResult.OpenMetabaseResult.id + "!" + folderId);
        }
        /*
            Скрипт для PostRequest
        */
    </script>
    <!--Форма, данные которой будут отправляться на сервер-->
    <form id="fileForm" action="" method="" enctype="multipart/form-data" onsubmit="LoadTopobase(this)">
        <div>
            <input type="file" name="file" id="file" />
        </div>
    </form>
    <!--Гиперссылка для отправки данных-->
    <div>
        <a href="javascript:LoadTopobase(getFormElement('fileForm'))">LoadTopobase</a>
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
