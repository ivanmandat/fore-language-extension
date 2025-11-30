# Пример размещения компонента GridBox

Пример размещения компонента GridBox
-


# Пример размещения компонента GridBox


Перед выполнением примера ознакомьтесь с [рекомендациями](dhtml.chm::/specification/JavaScript_main.htm)
 к написанию кода. Убедитесь, что в репозитории содержится регламентный
 отчёт с ключом «11775».


Для создания компонента GridBox
 используйте HTML-код:


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <title>GridBox</title>
    <script src="../build/PP.js" type="text/javascript"></script>
    <link href="../build/PP.css" type="text/css" rel="stylesheet" />
    <script src="../build/PP.Metabase.js" type="text/javascript"></script>
    <script src="../build/PP.TabSheet.js" type="text/javascript"></script>
    <script src="../build/PP.Report.js" type="text/javascript"></script>

    <script type="text/javascript">
        var prxReport, prxMbService, grid;
        function viewGrid()
        {
            PP.ImagePath = "../build/img/";
            PP.ScriptPath = "../build/";
            // Настроим соединение с репозиторием
            metabase = new PP.Mb.Metabase({
                // Зададим Url веб-сервиса PP.SOM в формате:
                // <http://<ServerName | IP-address>[:<Port>][/<VirtualCatalog>]/axis2/services/PP.SOM.Som>
                PPServiceUrl: "http://localhost/FPBI_App_v10.x/axis2/services/PP.SOM.Som",
                // Укажем идентификатор репозитория и учетные данные
                Id: "Repository",
                UserCreds: {
                    UserName: "user",
                    Password: "password"
                },
            });
            // Откроем соединение с репозиторием
            metabase.open();
            // Создадим сервис для работы с регламентным отчётом
            prxMbService = new PP.Prx.PrxMdService({ Metabase: metabase });
            // Откроем регламентный отчёт с ключом 11775
            prxReport = prxMbService.open(11775);
            // Создадим табличный лист
            grid = new PP.Prx.Ui.GridBox({
                Source: prxReport,
                ParentNode: document.body,
                Width: 1100,
                Height: 700,
                Service: prxMbService
            });
        };
    </script>
</head>
<body onload="viewGrid()">
</body>
</html>

В результате выполнения примера на html-странице будет размещен компонент
 GridBox, на котором содержится
 табличный лист регламентного отчёта:


![](GridBox.png)


На табличном листе доступно изменение значений в ячейках таблицы. Диаграммы
 и карты отображаются в виде изображений и недоступны для редактирования.


См. также:


[GridBox](GridBox.htm)
 |[DataArea](../DataArea/DataArea.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
