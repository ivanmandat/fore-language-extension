# Пример совместного размещения ChartMaster и ChartBox

Пример совместного размещения ChartMaster и ChartBox
-


# Пример совместного размещения ChartMaster и ChartBox


Для выполнения примера создайте html-страницу и выполните следующие
 действия:


1. В теге HEAD добавьте ссылки на следующие js и css-файлы:


	- PP.css;


	- PP.Express.css;


	- PP.Metabase.css;


	- PP.js;


	- PP.ChartMaster.js;


	- PP.MapMaster.js;


	- PP.MapChart.js;


	- PP.TabSheet.js;


	- PP.Metabase.js;


	- PP.Navigator.js;


	- PP.Express.js;


	- jquery.js;


	- resources.ru.js.


2. В теге SCRIPT добавьте код для создания компонентов [ChartBox](dhtmlExpress.chm::/Classes/Express/ChartBox/ChartBox.htm)
 и [ChartMaster](ChartMaster.htm):


<script type="text/javascript">
    var eaxData;
    var idTime;
    onReady = function () {
        var IMAGE_PATH = "../../build/img/"; //путь к папке с картинками
        PP.resourceManager.setRootResourcesFolder("../resources/"); //путь к папке с ресурсами
        PP.setCurrentCulture(PP.Cultures.ru); //выбор языковых настроек
        var eaxAnalyzer, eaxMbService; //создаем компонент Waiter для ожидания соединения с метабазой
        waiter = new PP.Ui.Waiter();
        //Создаем экземпляр метабазы
        metabase = new PP.Mb.Metabase({
            Id: "WAREHOUSE",
            UserCreds: {

                UserName: "user",
                Password: "password"
            },
            StartRequest: function () {
                waiter.show();
            },
            EndRequest: function () {
                waiter.hide();
            },
            Error: function (sender, args) {
                alert(args.ResponseText);
            }
        });

        //Открываем метабазу
        metabase.open(); // Создаём сервис для работы с экспресс-отчетами
        eaxMbService = new PP.Exp.EaxMdService({
            Metabase: metabase
        });
        //Открываем экспресс-отчёт с ключом 935529 на редактирование
        eaxAnalyzer = eaxMbService.edit(935529);
        //Создаём контейнер для диаграммы
        chartBox = new PP.Exp.Ui.ChartBox({
            Source: eaxAnalyzer, // Источник данных
            Width: 500,
            Height: 500,
            ParentNode: "tdChart",
            Service: eaxMbService,

            EditMode: "None",
            SelectionEnabled: true
        });
        //Создаём мастер диаграммы
        master = new PP.Ui.ChartMaster({
            ParentNode: "chartM", //DOM-вершина, в которой будет размещаться мастер диаграммы
            Height: 500,
            Width: 300,
            ImagePath: IMAGE_PATH,
            DataView: chartBox
        });

        // Неподдерживаемые типы данных диаграммы отображать не будем
        master.getItem(PP.Ui.ChartCommon).setShowUnsupportedTypes(false);
        // Обновим элемент управления на вкладке Подсказки
        master.getItem(PP.Ui.ChartTooltipCommon).refreshHeaderControl();
    }
</script>

3. В теге BODY разместите созданные компоненты:


<body onselectstart="return false" class="PPNoSelect" onload="onReady()">
    <table style="width: 100%">
        <tr>
            <td valign="top" width="350" id="chartM">
            </td>
            <td valign="top" id="tdChart">
            </td>
        </tr>
    </table>
</body>
После выполнения примера на странице будет размещена [диаграмма
 экспресс-отчёта](dhtmlExpress.chm::/Classes/Express/ChartBox/ChartBox.htm) и [мастер](ChartMaster.htm)
 для её настройки:


![](ChartMaster_ChartBox.gif)


См. также:


[ChartMaster](ChartMaster.htm)
 | [ChartBox](dhtmlExpress.chm::/Classes/Express/ChartBox/ChartBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
