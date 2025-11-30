# JsBlock.setBlockType

JsBlock.setBlockType
-


# JsBlock.setBlockType


## Синтаксис


setBlockType({


    settings


});


## Параметры


settings. JSON-объект с параметрами:


		 Имя параметра
		 Тип
		 Краткое описание


		 Обязательные
		 параметры:


		 Type
		 string
		 Тип блока:


			- Table. Таблица;


			- Chart. Диаграмма.
			 По умолчанию используется гистограмма;


			- Map. Карта;


			- Bubbles. Пузырьковая
			 диаграмма;


			- BubbleTree.
			 Пузырьковое дерево;


			- TreeMap. Плоское
			 дерево;


			- Gauge. Индикатор.


		 Необязательные
		 параметры:


		 Callback
		 function() {}
		 Функция выполняется после изменения типа блока.


## Описание


Метод setBlockType задает тип
 блока.


## Комментарии


Используется только для типа блока с визуализатором: таблица, диаграмма,
 карта, пузырьковая диаграмма, пузырьковое дерево, плоское дерево, индикатор.


## Пример


Для выполнения примера убедитесь, что в репозитории содержится аналитическая
 панель с ключом «88665».


Создайте HTML-страницу с кодом, который реализует подключение к репозиторию,
 открытие аналитической панели с помощью конструктора [KapBox](../Dashboard/Constructor_KapBox.htm)
 и создает кнопку «Изменить тип блока»
 для изменения блока с таблицы на диаграмму.


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>JsBlock.setBlockType</title>
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
            kapBox = new Kap.KapBox({
                Metabase: metabase, // репозиторий, к которому будет осуществляться подключение
                ParentNode: "DashboardBox", // DOM-вершина, в которую будет помещаться компонент KapBox
                ImagePath: "../build/img/", // путь к папке с изображениями
                ResourcesPath: "../resources/", // путь к папке с ресурсами
                Key: 88665, // ключ аналитической панели
                BlockFocused: kapBlockFocused // обработчик события выделения блока
            });
            type = new PP.Ui.Button({
                ParentNode: "but",
                Content: "Изменить тип блока",
                Click: function () {
                    var blockType = currentBlock.getBlockType();
                    if (blockType == "Table") {
                        currentBlock.setBlockType({
                            "Type": "Chart",
                            "Callback": function () {
                                currentBlock.refresh();
                                console.log("Изменен тип блока");
                            }
                        });
                        currentBlock.refresh;
                    }
                    else console.log("Выделите блок с таблицей");
                }
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
</body>
</html>

После выполнения примера выделите блок аналитической панели с таблицей
 и нажмите кнопку «Изменить тип блока».
 Таблица будет изменена на диаграмму и обновится блок аналитической панели,
 в консоли отобразится сообщение об изменении блока.


См. также:


[JsBlock](JsBlock.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
