# Пример размещения компонента DimCombo

Пример размещения компонента DimCombo
-


# Пример размещения компонента DimCombo


Перед выполнением примера ознакомьтесь с [рекомендациями](dhtml.chm::/specification/JavaScript_main.htm)
 к написанию кода. Убедитесь, что в репозитории содержится справочник с
 ключом «102770».


Для создания компонента DimCombo
 используйте HTML-код:


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>DimCombo</title>
    <script type="text/javascript" src="../build/PP.js"></script>
    <script type="text/javascript" src="../build/PP.Metabase.js"></script>
    <script type="text/javascript" src="../build/PP.App.js"></script>
    <link href="../build/PP.css" rel="stylesheet" type="text/css" />
    <link href="../build/PP.Metabase.css" rel="stylesheet" type="text/css" />
    <link href="../build/PP.App.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <div id="simpl"></div>
    <div id="button"></div>
    <script type="text/javascript">
        PP.resourceManager.setRootResourcesFolder("../Resources/");
        PP.setCurrentCulture(PP.Cultures.ru);
        // Создадим индикатор загрузки
        var waiter = new PP.Ui.Waiter();
        // Настроим соединение с репозиторием
        var mb = new PP.Mb.Metabase({
            // Зададим Url веб-сервиса PP.SOM в формате:
            // <http://<ServerName | IP-address>[:<Port>][/<VirtualCatalog>]/axis2/services/PP.SOM.Som>
            PPServiceUrl: "http://localhost/FPBI_App_v10.x/axis2/services/PP.SOM.Som",
            // Укажем идентификатор репозитория и учётные данные
            Id: "Repository",
            UserCreds: {
                UserName: "user",
                Password: "password"
            },
            StartRequest: function () {
                // Отобразим компонент типа PP.Ui.Waiter при запросе метаданных
                waiter.show();
            },
            EndRequest: function (sender, args) {
                // Скроем компонент типа PP.Ui.Waiter
                waiter.hide();
            },
            Error: function (sender, args) {
                // Выведем описание ошибки при её возникновении
                console.log(args.ResponseText);
            }
        });
        // Откроем соединение с репозиторием
        mb.open();

        // Создадим сервис для работы с измерениями
        var dimSrv = new PP.Mb.DimSrv({ Metabase: mb});
        // Откроем справочник с ключом 102770
        var dim = dimSrv.open(102770, false, true);

        // Создадим компонент DimCombo
        dimCombo = new PP.Mb.Ui.DimCombo({
            TreeView: { Source: dim, Service: dimSrv },
            ParentNode: document.getElementById("example"),
            Width: 400
        });
    </script>
</body>
</html>

В результате выполнения примера на html-странице будет размещен компонент
 DimCombo, который отображает раскрывающийся список с элементами справочника
 с ключом «102770»:


![](DimCombo.png)


См. также:


[Классы
 для работы с измерением](../../../Classes/DimClasses.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
