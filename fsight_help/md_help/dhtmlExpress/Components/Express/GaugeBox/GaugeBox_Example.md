# Пример создания компонента GaugeBox

Пример создания компонента GaugeBox
-


# Пример создания компонента GaugeBox


Для выполнения примера необходимо создать html-страницу и выполнить
 следующие действия:


1. Добавить ссылки на следующие css-файлы: PP.css.


Также нужно добавить ссылки на js-файлы: PP.js, PP.Metabase.js, PP.Express.js,
 PP.GraphicsBase.js, PP.Charts.js, PP.GaugeMaster.js, PP.Util.js.


2. Дополнительно указать стиль для элементов:


<style type="text/css">
body, html {
    height: 100%;
    width: 100%;
}
</style>
3. Добавить сценарий, который создает контейнер со [спидометром](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.htm).
 При этом предполагается наличие в репозитории экспресс-отчёта с ключом
 4397:


<script type="text/javascript">
    var gaugeBox; // Контейнер для спидометра
    function Ready() {
        var IMAGE_PATH = "../build/img/"; // Путь к папке со значками
        // Создаём соединение с репозиторием
        var metabase = new PP.Mb.Metabase({
            PPServiceUrl: "PPService.axd?action=proxy",
            Id: "prognozplatform201408",
            UserCreds: {
                UserName: "sa",
                Password: "sqlserver"
            }
        });
        // Открываем соединение с репозиторием
        metabase.open();
        // Создаём сервис для работы со спидометром
        var eaxMdService = new PP.Exp.EaxMdService({
            Metabase: metabase
        });
        // Редактируем документ с ключом 54306
        eaxAnalyzer = eaxMdService.edit(54306);
        // Создаём контейнер для спидометра
        gaugeBox = new PP.Exp.Ui.GaugeBox({
            Source: eaxAnalyzer, // Источник данных контейнера
            ParentNode: document.body,
            Service: eaxMdService, // Сервис для работы с контейнером
            ImagePath: IMAGE_PATH, // Путь к папке со значками
            RequestMetadata: function(sender, args) {
                console.log("Запрос метаданных");
            }
        });
    }
</script>
4. В теге <body> в качестве значения атрибута «onLoad» укажем
 имя функции для загрузки контейнера со спидометром:


<body onload="Ready()">
</body>
После выполнения примера на html-странице был размещен компонент [GaugeBox](GaugeBox.htm) со [спидометром](GaugeBox.htm):


![](GaugeBox.png)


При этом в консоли браузера было выведено уведомление о запросе метаданных.


См. также:


[GaugeBox](GaugeBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
