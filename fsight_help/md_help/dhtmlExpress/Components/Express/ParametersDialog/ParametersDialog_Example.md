# Пример создания компонента ParametersDialog

Пример создания компонента ParametersDialog
-


# Пример создания компонента ParametersDialog


Для выполнения примера необходимо создать html-страницу и выполнить
 следующие действия:


1. Добавить ссылки на следующие css-файлы: PP.css, PP.Express.css.


Также нужно добавить ссылки на js-файлы: PP.js, PP.Metabase.js, PP.Express.js,
 resources.ru.js.


2. Затем в теге <head> дополнительно задаётся стиль для элементов:


<style type="text/css">
body, html
{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
</style>

3. Далее в теге <head> необходимо добавить скрипт, создающий диалог
 для настройки параметров экспресс-отчета [ParameterDialog](ParametersDialog.htm):


<script type="text/javascript">


    var metabase, eaxAnalyzer, eaxMbService, waiter, parametersDialog;
    var IMAGE_PATH = "../Debug/img/";
    var info, eax;
    function Ready() {
        // Установим языковые настройки для ресурсов
        PP.setCurrentCulture(PP.Cultures.ru)
        // Укажем путь к корневой папке, содержащей файлы ресурсов
        PP.resourceManager.setRootResourcesFolder("../resources/");
        waiter = new PP.Ui.Waiter();
        // Создаём соединение с репозиторием
         metabase = new PP.Mb.Metabase({

            ExportUrl: "PPService.axd?action=export",
            ImportUrl: "PPService.axd?action=import",
            PPServiceUrl: "PPService.axd?action=proxy",
            Id: "WAREHOUSE",
            UserCreds: {
                UserName: "user",
                Password: "password"
            },

            StartRequest: function () {
                // При запросе метаданных показываем компонент типа PP.Ui.Waiter
                waiter.show();
            },
            RndRequest: function () {
                // После запроса метаданных скрываем компонент типа PP.Ui.Waiter
                waiter.hide();
            },
            Error: function (sender, args) {
                // В случае ошибки выводим описание данной ошибки
                alert(args.ResponseText);
            }

        });
        // Открываем соединение с репозиторием
            metabase.open();
            // Создаём сервис для работы с экспресс-отчётами
            eaxMbService = new PP.Exp.EaxMdService({
            Metabase: metabase
        });
        // Открываем экспресс-отчёт с ключом 108
        eaxAnalyzer = eaxMbService.editDocument(108);
    }

    // Функция, создающая диалог для настройки параметров
    function openDialog() {
        // Создаем вкладку «Параметры источника данных»
        var parametersDataSource = new PP.Exp.Ui.ParametersDataSource({
            Source: eaxAnalyzer,
            GroupName: "params",
            Name: "Параметры источника данных",
            DestsVisState: true
        });
        // Создаём вкладку «Измерения»

        var parametersDimensionsView = new PP.Exp.Ui.ParametersDimensionsView({
            Source: eaxAnalyzer,
            Name: "Измерения",
            GroupName: "params"
        });
        // Создаем диалог настройки параметров отчета
        parametersDialog = new PP.Exp.Ui.ParametersDialog({

            IsRTL: false,
            ViewItems: [parametersDataSource, parametersDimensionsView] // Задаём вкладки
        });
        // Покажем диалог «Параметры»
        parametersDialog.show();
    }
</script>
4. В теге <body> в качестве значения атрибута «onLoad» указываем
 имя функции для загрузки документа экспресс-отчета, внутри тега размещаем
 кнопку, по нажатию которой будет открываться диалог «Параметры»:


<body onselectstart="return false" class="PPNoSelect" onload="Ready()">
<!-- Кнопка, по нажатию на которую -->
<input type="button" value="Отобразить диалог" onclick="openDialog()" />
</body>

5. В конце документа вставляем код, устанавливающий стили к вершине
 «document.body», соответствующие операционной системе клиента:


<script type="text/javascript">
    PP.initOS(document.body);
</script>
После выполнения примера на html-странице будет размещен компонент [ParametersDialog](ParametersDialog.htm):


![](ParametersDialog.png)


См. также:


[ParametersDialog](ParametersDialog.htm)
 | [ParametersDataSource](../ParametersDataSource/ParametersDataSource.htm)
 | [ParametersDimensionsView](../ParametersDimensionsView/ParametersDimensionsView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
