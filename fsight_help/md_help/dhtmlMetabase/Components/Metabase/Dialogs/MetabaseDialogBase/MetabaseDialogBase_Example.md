# Пример создания компонента MetabaseDialogBase

Пример создания компонента MetabaseDialogBase
-


# Пример создания компонента MetabaseDialogBase


Перед выполнением примера ознакомьтесь с [рекомендациями](dhtml.chm::/specification/JavaScript_main.htm)
 к написанию кода. Убедитесь, что в репозитории содержится эксресс-отчёт
 с ключом «88665».


Для создания компонента MetabaseDialogBase
 используйте HTML-код:


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>MetabaseDialogBase</title>
    <script src="../build/PP.js" type="text/javascript"></script>
    <script src="../build/PP.Metabase.js" type="text/javascript"></script>
    <script src="../build/PP.Express.js" type="text/javascript"></script>
    <script src="../build/PP.Navigator.js" type="text/javascript"></script>
    <script type="text/javascript" src="../resources/Metabase.resources.ru.js"></script>
    <script type="text/javascript" src="../resources/Express.resources.ru.js"></script>
    <script type="text/javascript" src="../resources/Navigator.resources.ru.js"></script>
    <link href="../build/PP.css" rel="stylesheet" type="text/css" />
    <link href="../build/PP.Metabase.css" rel="stylesheet" type="text/css" />
    <link href="../build/PP.Express.css" rel="stylesheet" type="text/css" />

    <script type="text/javascript">
        var metabase, eaxMdService, eaxAnalyzer, metabaseDialogBase;
        // Функция, выполняемая при загрузке html-документа
        function onLoad() {
            // Укажем путь к корневой папке, содержащей файлы ресурсов
            PP.resourceManager.setRootResourcesFolder("../../resources/");
            // Установим языковые настройки для ресурсов
            PP.setCurrentCulture(PP.Cultures.ru);
            // Создаём соединение с репозиторием
            metabase = new PP.Mb.Metabase({
                // Зададим Url веб-сервиса PP.SOM в формате:
                // <http://<ServerName | IP-address>[:<Port>][/<VirtualCatalog>]/axis2/services/PP.SOM.Som>
                PPServiceUrl: "http://localhost/FPBI_App_v10.x/axis2/services/PP.SOM.Som",
                Id: "Repository",
                UserCreds: {
                    UserName: "user",
                    Password: "password"
                }
            });
            // Открываем соединение с репозиторием
            metabase.open();
            // Создаем сервис для работы с экспресс-отчётами
            eaxMdService = new PP.Exp.EaxMdService({
                Metabase: metabase
            });
            // Откроем экспресс-отчет с ключом 88665
            eaxAnalyzer = eaxMdService.editDocument(88665);
            // Определим массив фильтров для диалога
            var filters = [{
                Filters: [2561], // Отображаем только экспресс-отчёты
                // Укажем ключ ресурсов для получения наименования фильтра
                ResourceKey: "openDialogExpressReports"
            }];
            // Создадим диалог для сохранения объекта
            metabaseDialogBase = new PP.Navigator.MetabaseDialogBase({
                Metabase: metabase,
                FiltersSet: filters, // Массив фильтров для диалога
                CurrentFilter: filters[0], // Текущий фильтр
                ImagePath: "../../build/img/", // Путь к значкам диалога
                OpenToKey: parseInt(eaxAnalyzer.getParentKey() || 0) // Ключ папки в репозитории, которую нужно раскрыть в диалоге
            });
            metabaseDialogBase.show(); // Отобразим диалог для сохранения объекта
        }
    </script>
</head>
<body onload="onLoad();">
</body>
</html>

После выполнения примера на html-странице будет размещён компонент [MetabaseDialogBase](MetabaseDialogBase.htm):


![](MetabaseDialogBase.png)


В соответствии с установленным фильтром в диалоге будут отображаться
 только экспресс-отчёты из всех объектов репозитория.


См. также:


[MetabaseDialogBase](MetabaseDialogBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
