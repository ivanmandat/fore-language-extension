# Dashboard.open

Dashboard.open
-


# Dashboard.open


## Синтаксис


open({


    params


});


## Параметры


params. JSON-объект с параметрами
 открытия аналитической панели.


Доступны следующие параметры:


		 Имя параметра
		 Тип
		 Краткое описание


		 Обязательные
		 параметры:


		 Key
		 number
		 Ключ аналитической панели.


		 Необязательные
		 параметры:


		 Opened
		 function
		 Возвратная функция, которая вызывается при открытии аналитической
		 панели.


## Описание


Метод open открывает аналитическую
 панель по ключу.


## Пример


Для выполнения примера убедитесь, что в репозитории содержится аналитическая
 панель с ключом «88665».


Создайте HTML-страницу с кодом, который реализует подключение к репозиторию
 и создает кнопки для открытия/закрытия аналитической панели:


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Dashboard</title>
    <script src="build/PP.js" type="text/javascript"></script>
    <script src="build/PP.Metabase.js" type="text/javascript"></script>
    <script src="build/PP.App.js" type="text/javascript"></script>
    <script src="build/PP.Express.js" type="text/javascript"></script>
    <script src="resources/Kap.resources.ru.js" type="text/javascript"></script>
    <script src="dashboard/dashboard.nocache.js" type="text/javascript"></script>
    <link href="build/PP.css" rel="stylesheet" type="text/css" />
    <link href="build/PP.App.css" rel="stylesheet" type="text/css" />
    <link href="build/PP.Metabase.css" rel="stylesheet" type="text/css" />

    <script type="text/javascript">
        // Зададим Url веб-сервиса PP.SOM в формате:
        // <http://<ServerName | IP-address>[:<Port>][/<VirtualCatalog>]/axis2/services/PP.SOM.Som>
        var serviceUrl = "http://localhost/FPBI_App_v10.x/axis2/services/PP.SOM.Som";
        var exportUrl = "http://localhost/FPBI_App_v10.xx64/axis2/services/PP.SOM.Som";
        var importUrl = "http://localhost/FPBI_App_v10.xx64/axis2/services/PP.SOM.Som";
        // Создадим функцию для открытия аналитической панели и доступа к экспорту блока
        function OpenDashBoard(connId) {
            metabase = new PP.Mb.Metabase({
                Id: "Metabase",
                PPServiceUrl: serviceUrl,
                ExportUrl: exportUrl,
                ImportUrl: importUrl,
                ConnectionOdId: { id: connId }
            });
            dashBoard = new Kap.KapBox({
                Metabase: metabase, // репозиторий, к которому будет осуществляться подключение
                ParentNode: "DashboardBox", // DOM-вершина, в которую будет помещаться компонент KapBox
                ImagePath: "../build/img/", // путь к папке с изображениями
                ResourcesPath: "../resources/", // путь к папке с ресурсами
            });
        };
        // Создадим функцию для подключения к репозиторию
        function onModuleInit() {
            if (PP.App.isMetabaseOpened()) {
                OpenDashBoard(PP.App.getConnectionId());
            } else {
                // Тестовая точка входа для автономного запуска компонента KapBox
                var metabaseLogin = new PP.Mb.Metabase({
                    PPServiceUrl: serviceUrl,
                    Id: "Repository",
                    UserCreds: {
                        UserName: "user",
                        Password: "password"
                    }
                });
                metabaseLogin.Error.add(function (sender, args) {
                    alert(args.ResponseText);
                });
                metabaseLogin.open(function (sender, args) {
                    // Запоминаем открытую метабазу на случай перезагрузки страницы
                    var connectionId = metabaseLogin.getConnectionId();
                    PP.App.setStorage("ConnectionId", connectionId);
                    PP.App.setStorage("ConnectOdId", { id: connectionId });
                    PP.App.setStorage("IsMbOpened", true);
                    OpenDashBoard(connectionId);
                });
            }
            document.getElementById("closeBut").onclick = function () {
                dashBoard.close();
            };
            document.getElementById("openBut").onclick = function () {
                dashBoard.open({
                    Key: 88665
                });
            };
        }
    </script>
</head>
<body style="height: 100%;">
    <div id="DashboardBox" style="width: 100%; height: 100%;"></div>
    <button id="openBut">Открыть панель</button>
    <button id="closeBut">Закрыть панель</button>
</body>
</html>

После выполнения примера будет отображен конструктор аналитических панелей
 и добавлены кнопки «Открыть панель»,
 «Закрыть панель», при нажатии
 на которые открывается/закрывается аналитическая панель с ключом «88665».


См. также:


[Dashboard](Dashboard.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
