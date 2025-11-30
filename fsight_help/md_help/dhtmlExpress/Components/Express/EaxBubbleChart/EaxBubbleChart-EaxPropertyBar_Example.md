# Пример совместного размещения EaxPropertyBar и EaxBubbleChart

Пример совместного размещения EaxPropertyBar и EaxBubbleChart
-


# Пример совместного размещения EaxPropertyBar и EaxBubbleChart


Для выполнения примера необходимо создать html-страницу и выполнить
 следующие действия:


1. Добавить ссылки на следующие css-файлы: PP.css, PP.Express.css.


Также нужно добавить ссылки на js-файлы: PP.js, PP.Metabase.js, PP.Express.js,
 resources.ru.js, Silverlight.js.


2. Разместить сценарий, который создает пузырьковую диаграмму экспресс-отчета
 и боковую панель:


<script type="text/javascript">
    var metabase, eaxMdService, eaxBubbleChart;
    function Ready() {
        PP.ImagePath = "../build/img/"; // Путь к папке с изображениями
        PP.ScriptPath = "../build/"; // Путь к папке со сценариями
        PP.CSSPath = "../build/"; // Путь к папке с файлами стилей
        // Укажем путь к корневой папке, содержащей файлы ресурсов
        PP.resourceManager.setRootResourcesFolder("../resources/");
        // Установим региональные настройки
        PP.setCurrentCulture(PP.Cultures.ru)
        var waiter = new PP.Ui.Waiter();
        // Создаём соединение с репозиторием
        metabase = new PP.Mb.Metabase({

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
            EndRequest: function () {
                // После запроса метаданных скрываем компонент типа PP.Ui.Waiter
                waiter.hide();

                // Получим данный мастер
                var master = eaxPropBar.getBubbleChartMaster();
                // Отобразим и раскроем первую панель мастера
                master.getItems()[0].show();
                master.getItems()[0].expand();
            },
            Error: function (sender, args) {
                // В случае ошибки выводим описание данной ошибки
                alert(args.ResponseText);
            }

        });
        // Открываем соединение с репозиторием
        metabase.open();
        // Создаём сервис для работы с экспресс-отчётами
        eaxMdService = new PP.Exp.EaxMdService({
            Metabase: metabase
        });
        // Открываем экспресс-отчет с ключом 7390 на редактирование
        eaxAnalyzer = eaxMdService.openDocument(7390);
        // Создадим пузырьковое дерево экспресс-отчёта
        eaxBubbleChart = new PP.Exp.Ui.EaxBubbleChart({
            Source: eaxAnalyzer, // Источник данных
            Service: eaxMdService,

            Width: 400,
            Height: 400,
            ParentNode: "bubbleChart"
        });
        // Создадим панель свойств экспресс-отчета
        eaxPropBar = new PP.Exp.Ui.EaxPropertyBar({
            ParentNode: "propertyBar",
            Source: eaxAnalyzer, // Источник данных
            Width: 300,
            Height: 400,
            Service: eaxMdService,
            DataView: eaxBubbleChart // Панель свойств привяжем к пузырьковому дереву
        });
        // Отобразим мастер для настройки карты
        eaxPropBar.showBubbleChartMaster();
    };
</script>
3. В теге <body> в качестве значения атрибута «onLoad» указать
 имя функции для загрузки документа экспресс-отчета, пузырьковой диаграммы
 и боковой панели. Внутри тега разместить блоки для хранения данной панели
 и контейнера с пузырьковой диаграммой:


<body onload="Ready()">
    <div id="propertyBar" style="float: left;">
    </div>
    <div id="bubbleChart" style="float: left;">
    </div>
</body>
В результате выполнения примера на html-странице будут размещены компоненты
 [PP.Exp.Ui.EaxPropertyBar](../EaxPropertyBar/EaxPropertyBar.htm)
 и [PP.Exp.Ui.EaxBubbleChart](EaxBubbleChart.htm):


![](EaxBubbleChart_EaxPropertyBar_Example.png)


См. также:


[EaxBubbleChart](EaxBubbleChart.htm)
 | [EaxPropertyBar](../EaxPropertyBar/EaxPropertyBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
