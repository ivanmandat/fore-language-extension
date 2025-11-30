# Пример создания компонента EaxBubbleChart

Пример создания компонента EaxBubbleChart
-


# Пример создания компонента EaxBubbleChart


Для выполнения примера необходимо создать html-страницу и выполнить
 следующие действия:


1. Добавить ссылки на следующие css-файлы: PP.css, PP.Express.css.


Также нужно добавить ссылки на js-файлы: PP.js, PP.Metabase.js, PP.Express.js,
 resources.ru.js, Silverlight.js.


2. Разместить сценарий, который создает пузырьковую диаграмму экспресс-отчета
 и мастер для настройки данной пузырьковой диаграммы:


<script type="text/javascript">
    var metabase, eaxMbService, eaxBubbleChart, bubbleChartMaster, waiter, eaxAnalyzer;
    function Ready() {
        // Установим языковые настройки для ресурсов
        PP.setCurrentCulture(PP.Cultures.ru);
        // Укажем путь к корневой папке, содержащей файлы ресурсов
        PP.resourceManager.setRootResourcesFolder("../resources/");
        waiter = new PP.Ui.Waiter();
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
        // Открываем экспресс-отчет с ключом 108 на редактирование
        eaxAnalyzer = eaxMbService.openDocument(108);
    };
    // Функция для создания мастера управления пузырьковой диаграммой экспресс-отчета
    function createEaxBubbleChart() {
        eaxBubbleChart = new PP.Exp.Ui.EaxBubbleChart({
            Source: eaxAnalyzer,
            Service: eaxMbService,
            ImagePath: "../build/img/",
            ParentNode: "bubbleChart"
        });

        // Устанавливаем размер для пузырьковой диаграммы
        eaxBubbleChart.setSize(300, 500);
    };
    // Функция для создания мастера управления пузырьковой диаграммой экспресс-отчета
    function showBubbleChartMaster() {
        bubbleChartMaster = new PP.Exp.Ui.BubbleChartMaster({
            ImagePath: "../build/img/",
            DataView: eaxBubbleChart,
            ParentNode: "bubbleChartMaster"
        });
        // Установим источник данных
        bubbleChartMaster.setSource(eaxAnalyzer);
        // Устанавливаем размер для мастера
        bubbleChartMaster.setSize(300, 500);
    };
</script>
3. В теге <body> в качестве значения атрибута «onLoad» указать
 имя функции для загрузки документа экспресс-отчета, пузырьковой диаграммы
 и боковой панели:


<body onselectstart="return false" onload="Ready()">
    <div>
        <!-- Кнопка, по нажатию на которую отобразится пузырьковая диаграмма экспресс-отчета -->
        <input type="button" value="Отобразить пузырьковую диаграмму экспресс-отчета" onclick="createEaxBubbleChart()" />
        <!-- Кнопка, по нажатию на которую отобразится мастер управления пузырьковой диаграммой экспресс-отчета -->
        <input type="button" value="Отобразить мастер управления пузырьковой диаграммой" onclick="showBubbleChartMaster()" />
    </div>
    <div id="bubbleChart" style="float: left;">
    </div>
    <div id="bubbleChartMaster" style="float: left;">
    </div>
</body>
4. В конце документа вставляем код, который устанавливает стили к
 вершине «document.body», соответствующие операционной системе клиента:


<script type="text/javascript">
    PP.initOS(document.body);
</script>

В результате выполнения примера на html-странице будут размещены две
 кнопки, после нажатия на которые соответственно появятся компоненты PP.Exp.Ui.[EaxBubbleChart](EaxBubbleChart.htm) и PP.Exp.Ui.[BubbleChartMaster](../EaxBubbleChartMaster/EaxBubbleChartMaster.htm):


![](EaxBubbleChart_Example.png)


См. также:


[EaxBubbleChart](EaxBubbleChart.htm)
 | [BubbleChartMaster](../EaxBubbleChartMaster/EaxBubbleChartMaster.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
