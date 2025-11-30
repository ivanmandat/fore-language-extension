# Пример создания компонента DimTree

Пример создания компонента DimTree
-


# Пример создания компонента DimTree


Перед выполнением примера ознакомьтесь с [рекомендациями](dhtml.chm::/specification/JavaScript_main.htm)
 к написанию кода. Убедитесь, что в репозитории содержится справочник с
 ключом «102770».


Для создания компонента DimTree
 используйте HTML-код:


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>DimTree</title>
    <script type="text/javascript" src="../build/PP.js"></script>
    <script type="text/javascript">
        PP.scriptManager.loadStyles(["../build/PP.css",
            "../build/PP.App.css",
            "../build/PP.Metabase.css",
            "../build/PP.Dictionaries.css"]);
    </script>
    <script type="text/javascript" src="../resources/resources.ru.js"></script>
    <script type="text/javascript" src="../build/PP.Metabase.js"></script>
    <script type="text/javascript" src="../build/PP.Dictionaries.js"></script>
    <script type="text/javascript" src="../build/PP.App.js"></script>
    <script src="../build/PP.App.js" type="text/javascript"></script>

    <script type="text/javascript">
        var metabase;
        PP.ImagePath = "../build/img/";
        PP.ScriptPath = "../build/";
        PP.CSSPath = "../build/";
        PP.resourceManager.setRootResourcesFolder("../Resources/");
        PP.resourceManager.setResourceList(['PP', 'Metabase', 'Dictionaries']);
        PP.setCurrentCulture(PP.Cultures.ru);

        function onLoad()
        {
            // Настроим соединение с репозиторием
            var waiter = new PP.Ui.Waiter();
            this.metabase = new PP.Mb.Metabase({
                // Зададим Url веб-сервиса PP.SOM в формате:
                // <http://<ServerName | IP-address>[:<Port>][/<VirtualCatalog>]/axis2/services/PP.SOM.Som>
                PPServiceUrl: "http://localhost/FPBI_App_v10.x/axis2/services/PP.SOM.Som",
                // Укажем идентификатор репозитория и учетные данные
                Id: "Repository",
                UserCreds: {
                    UserName: "user",
                    Password: "password"
                },
                StartRequest: function () {
                    // При запросе метаданных отобразим компонент типа PP.Ui.Waiter
                    waiter.show();
                },
                EndRequest: function (sender, args) {
                    // Скроем компонент типа PP.Ui.Waiter
                    waiter.hide();
                },
                Error: function (sender, args) {
                    // Выведем описание ошибки
                    console.log(args.ResponseText);
                }
            });
            // Откроем соединение с репозиторием
            metabase.open();

            // Создадим сервис для работы с измерениями
            var dimSrv=new PP.Mb.DimSrv({ Metabase: metabase});
            // Откроем справочник с ключом 102770
            var dimSubj = dimSrv.open(102770, false, true, null, null, null);

            // Создадим компонент DimTree
            dimTree = new PP.Mb.Ui.DimTree({
                Source: dimSubj,
                ParentNode: document.getElementById("example"),
                Width: 400,
                Height: 400,
                Service: dimSrv,
                SelectionMode: PP.Ui.TreeListSelectionMode.SingleSelect
            });
        };
        window.onclose = function(){
            alert("Закрываем соединение!");
            if (this.metabase !== undefined)
            this.metabase.close();
        };
    </script>
</head>
<body onload="onLoad()">
    <div id="example"></div>
</body>
</html>

В результате выполнения примера на html-странице будет размещен компонент
 DimTree, который отображает дерево элементов справочника с ключом «102770»:


![](DimTree_example.gif)


Для данного дерева отключена возможность множественной отметки элементов.


См. также:


[DimTree](DimTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
