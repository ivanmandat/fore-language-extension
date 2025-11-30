# SaveTopobase: Операция

SaveTopobase: Операция
-


# SaveTopobase


## Синтаксис


[<адрес
 веб-сервиса>](../Intro/PP7Service_Using.htm)/SaveTopobase?<параметры операции>


## Описание


Операция SaveTopobase предназначена
 для получения топоосновы из репозитория с помощью GET-запроса и сохранения
 её в файл.


## Комментарии


В параметрах операции передаётся моникёр и параметр с наименованием
 файла, в который осуществляется сохранение. Параметр и его значение в
 строке адреса разделяются символом «=»,
 различные параметры разделяются между собой символом «&».


Допустимые параметры операции SaveTopobase:


		 Параметр
		 Описание


		 mon
		 Моникёр топоосновы в репозитории, для которой выполняется операция.


Формат моникёра: <моникёр
		 соединения с репозиторием>!<id/key папки>!<формат
		 топоосновы>

Доступные форматы: Svg и Tbs.


		 fileName
		 Наименование файла, с которым осуществляется загрузка. Пример:
		 &fileName=RF_MAP.svg.


Важно. Наименования
 параметров являются регистрозависимыми.


## Пример


Ниже приведён пример кода html-страницы, которая используется для получения
 топоосновы из репозитория и сохранения её в файл средствами браузера.


При открытии страницы осуществляется подключение к репозиторию и получение
 топоосновы из объекта с указанным идентификатором. Браузером будет предложено
 сохранить топооснову в файл.


Для уменьшения примера из кода исключен скрипт функции PostRequest,
 которая используется для выполнения операций в JSON формате. Код данной
 функции можно посмотреть в статье «[Подключение
 к репозиторию](../Intro/ConnectToRepository.htm)».


<!DOCTYPE html <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<title>Использование операции SaveTopobase</title>
</head>
<body>
    <script language="javascript" type="text/javascript">
        var svc = "http://localhost:9090/axis2/services/PP.SOM.Som";
        var topobaseId = "RF_MAP";
        var OpenMetabase = { "OpenMetabase": { "tDef": { "id": "Warehouse" }, "tCreds": { "user": { "id": "User" }, "pass": "Password" } } };
        var OpenMetabaseResult = PostRequest(svc, OpenMetabase);
        /*
            Скрипт для PostRequest
        */
        //Выполнение SaveTopobase
        var url = svc + "/SaveTopobase?mon=" + OpenMetabaseResult.OpenMetabaseResult.id + '!' + topobaseId + "!Svg&fileName=test.svg";
        window.open(url);
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
