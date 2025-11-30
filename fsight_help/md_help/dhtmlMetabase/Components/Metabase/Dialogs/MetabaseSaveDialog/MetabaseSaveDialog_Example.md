# Пример создания компонента MetabaseSaveDialog

Пример создания компонента MetabaseSaveDialog
-


# Пример создания компонента MetabaseSaveDialog


Перед выполнением примера ознакомьтесь с [рекомендациями](dhtml.chm::/specification/JavaScript_main.htm)
 к написанию кода. Убедитесь, что в репозитории содержится эксресс-отчёт
 с ключом «88665».


Для создания компонента MetabaseSaveDialog
 используйте HTML-код:


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>MetabaseSaveDialog</title>
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
        var metabase, eaxMdService, eaxAnalyzer, saveDialog;
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
                Filters: [2561, 0],
                ResourceKey: "openDialogExpressReports",
                iconIndex: 16
            }];
            // Определим массив языков для перевода имени сохраняемого объекта
            var displayLanguages = [];
            displayLanguages.push(PP.Cultures.ru.LCID); // Русский язык
            displayLanguages.push(PP.Cultures.en.LCID); // Английский язык
            // Создадим диалог для сохранения объекта
            saveDialog = new PP.Navigator.MetabaseSaveDialog({
                DefaultId: "EXP_REPORT", // Идентификатор сохраняемого объекта
                /* Определим наименование сохраняемого объекта */
                DefaultName: "Динамика показателей по региону",
                Metabase: metabase,
                FiltersSet: filters, // Массив фильтров для диалога
                CurrentFilter: filters[1], // Текущий фильтр
                ImagePath: "../build/img/",
                OpenToKey: parseInt(eaxAnalyzer.getParentKey() || 0),
                // Определим переводы имени сохраняемого объекта на русском и английском языках
                Names: [{
                    locale: PP.Cultures.ru.LCID,
                    name: "Динамика показателей по региону"
                }, {
                    locale: PP.Cultures.en.LCID,
                    name: "Dynamics indicators by region"
                }],
                ShowTranslateButton: true, // Сделаем видимой кнопку для отображения переводов имени объекта
                // Установим диалог для перевода имени сохраняемого объекта на различные языки.
                TranslateDialog: new PP.Mb.Ui.TranslateDialog({
                    DisplayLanguages: displayLanguages
                }),
                SaveAsObject: function (sender, args) { // Обработаем событие SaveAsObject
                    console.log("Имя сохранённого объекта на разных языках:");
                    var names = args.Names;
                    for (var i in names) {
                        var n = names[i];
                        console.log("Код языка: " + n.locale + ", имя: " + n.name);
                    }
                }
            });
            saveDialog.show(); // Отобразим диалог для сохранения объекта
        }
    </script>
</head>
<body onload="onLoad();">
</body>
</html>

После выполнения примера на html-странице будет размещён компонент [MetabaseSaveDialog](MetabaseSaveDialog.htm):


![](MetabaseSaveDialog.png)


После нажатия на кнопку «OK» будет сгенерировано событие [SaveAsObject](../../../../Classes/Navigator/MetabaseSaveDialog/MetabaseSaveDialog.SaveAsObject.htm)
 и выведено сообщение в консоль браузера:


Имя сохранённого объекта на разных языках:

Код языка: 1033, имя: Dynamics indicators by region

Код языка: 1049, имя: Динамика показателей по региону


См. также:


[MetabaseSaveDialog](MetabaseSaveDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
