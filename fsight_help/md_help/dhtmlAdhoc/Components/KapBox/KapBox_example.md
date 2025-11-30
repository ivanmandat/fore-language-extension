# Пример размещения компонента KapBox

Пример размещения компонента KapBox
-


# Пример размещения компонента KapBox


Перед выполнением примера ознакомьтесь с [рекомендациями](dhtml.chm::/specification/JavaScript_main.htm)
 к написанию кода.


Для работы с аналитическими панелями в теге <head> используется
 ссылка на файл dashboard.nocache.js. Файл содержится в папке dashboard
 (с исполняемыми файлами для аналитических панелей), которая находится
 в одной директории с папкой build (с исходными файлами веб-приложения
 «Форсайт. Аналитическая платформа»).
 Данные папки можно скопировать из корневой папки установленного веб-приложения
 «Форсайт. Аналитическая платформа».


Для создания компонента KapBox
 используйте HTML-код:


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>KapBox</title>
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
        PP.ImagePath = "../build/img/"; // путь до папки с изображениями
        PP.ScriptPath = "../build/"; // путь до папки со сборками
        PP.CSSPath = "../build/"; // путь до папки со стилями
        PP.resourceManager.setRootResourcesFolder("../resources/"); // путь до папки с ресурсами

        // Установим языковые настройки для ресурсов
        PP.setCurrentCulture(PP.Cultures.ru);

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
            kapBox = new Kap.KapBox({
                Metabase: metabase, // репозиторий, к которому будет осуществляться подключение
                ParentNode: "DashboardBox", // DOM-вершина, в которую будет помещаться компонент KapBox
                BlockFocused: kapBlockFocused // обработчик события выделения блока
            });
        }
        function kapBlockFocused(sender, args) {
            currentBlock = args.Block;
            console.log(currentBlock)
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
        }
    </script>
</head>
<body style="height: 100%;">
    <div id="DashboardBox" style="width: 100%; height: 100%;"></div>
    <div id="but"></div>
    <div id="checkBox"></div>
</body>
</html>

Примечание.
 Через функцию onModuleInit() обязательно
 должно осуществиться подключение к базе данных. Функция вызывается до
 создания KapBox и Metabase.


После выполнения примера на странице будет размещен конструктор аналитических
 панелей.


Для открытия аналитической панели из репозитория:


	- выполните команду «Открыть»
	 в главном меню «Документ»;


	- перед выполнением примера для переменной «kapBox» задайте ключ
	 аналитической панели в конструкторе [KapBox](../../Classes/Dashboard/Constructor_KapBox.htm).


Для создания новой аналитической панели выполните команду «Новый
 документ» в главном меню «Документ».


Ниже представлен конструктор аналитических панелей с открытой панелью
 в рабочей области:


![](DashBoard_example.gif)


См. также:


[KapBox](KapBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
