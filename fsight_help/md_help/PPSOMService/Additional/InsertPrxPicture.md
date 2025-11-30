# InsertPrxPicture: Операция

InsertPrxPicture: Операция
-


# InsertPrxPicture


## Синтаксис


[<адрес
 веб-сервиса>](../Intro/PP7Service_Using.htm)/InsertPrxPicture?mon=<report sheet moniker>


## Описание


Операция InsertPrxPicture предназначена
 для вставки изображения на лист регламентного отчёта с помощью POST-запроса.


## Комментарии


В параметрах операции передаётся моникёр листа регламентного отчёта,
 на который вставляется изображение. Моникёр указывается в следующем формате:
 <моникёр открытого регламентного отчёта>!<ключ
 листа>. Отчёт должен быть открыт на редактирование. Загружаемое
 изображение должно передаваться в теле POST-запроса.


Результатом операции будет идентификатор созданного на листе объекта.
 Для сохранения изменений в регламентном отчёте используйте операции [SaveObject](../Operations/Repository/SaveObject.htm)/[SaveObjectAs](../Operations/Repository/SaveObjectAs.htm).


## Пример


Ниже приведён пример кода html-страницы, которая используется для загрузки
 изображения на лист регламентного отчёта. В качестве значения отправляется
 форма, реализованная на html-странице. В данной форме имеется элемент
 управления, открывающий файл изображения. Отправка осуществляется при
 нажатии на гиперссылку. Для сохранения изменений реализована дополнительная
 функция, которая выполняется при щелчке по второй гиперссылке.


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
        var prxId = "REG_REPORT";
        var OpenPrxResult;
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
            //Подключение к репозиторию
            var OpenMetabase = { "OpenMetabase": { "tDef": { "id": "Warehouse" }, "tCreds": { "user": { "id": "User" }, "pass": "Password" } } };
            OpenMetabaseResult = PostRequest(svc, OpenMetabase);
            // Открытие регламентного отчёта на редактирование
            var OpenPrx = { "OpenPrx" : { "tObject" : { "id" : OpenMetabaseResult.OpenMetabaseResult.id + "!" + prxId }, "tArg" : { "args" : { "openForEdit" : "true" } } } };
            var OpenPrxResult = PostRequest(svc, OpenPrx);
            // Отправка изображения на сервер для вставки в регламентный отчёт
            return sendForm(form, svc + "/InsertPrxPicture?mon=" + OpenPrxResult.OpenPrxResult.id.id + "!1");
        }
        function DoSave()
        {
            // Сохранение регламентного отчёта
            var SaveObject = { "SaveObject" : { "tObject" : { "id" : OpenPrxResult.OpenPrxResult.id.id } } };
            var SaveObjectResult = PostRequest(svc, SaveObject);
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
        <a href="javascript:InsertPicture(getFormElement('fileForm'))">Insert Picture</a>
        <a href="javascript:DoSave()">Save Report</a>
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
