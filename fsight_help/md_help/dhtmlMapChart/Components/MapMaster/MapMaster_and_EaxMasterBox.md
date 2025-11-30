# Пример размещения компонентов MapMaster и EaxMapBox

Пример размещения компонентов MapMaster и EaxMapBox
-


# Пример размещения компонентов MapMaster и EaxMapBox


Для выполнения примера необходимо создать html-страницу и выполнить
 следующие действия:


1. В теге HEAD добавьте ссылки на следующие css-файлы: PP.css, PP.Express.css,
 PP.Metabase.css.


Также нужно добавить ссылки на js-файлы: PP.js, PP.ChartMaster.js, PP.MapMaster.js,
 PP.MapChart.js, PP.TabSheet.js, PP.Metabase.js, PP.Navigator.js, PP.Express.js,
 jquery.js, resources.ru.js.


2. В теге SCRIPT добавьте код для создания компонентов [MapMaster](MapMaster.htm)
 и [EaxMapBox](dhtmlExpress.chm::/Classes/Express/EaxMapBox/EaxMapBox.htm):


<script type="text/javascript">
    var eaxData;
    var idTime;
    onReady = function () {
        var IMAGE_PATH = "../../build/img/"; //путь к папке с картинками
        PP.resourceManager.setRootResourcesFolder("../resources/"); //путь к папке с ресурсами
        PP.setCurrentCulture(PP.Cultures.ru); //выбор языковых настроек
        var eaxAnalyzer, eaxMbService;
        //создаем компонент Waiter для ожидания соединения с метабазой
        waiter = new PP.Ui.Waiter();
        //Создаем экземпляр метабазы
        metabase = new PP.Mb.Metabase({
            Id: "WAREHOUSE",
            UserCreds: { UserName: "sa", Password: "Qwerty1" },
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
        metabase.open();
        //Создаем сервис для работы с экспресс-отчетами
        eaxMbService = new PP.Exp.EaxMdService({ Metabase: metabase });
        //открываем экспресс-отчет с ключом 935529 на редактирование
        eaxAnalyzer = eaxMbService.edit(935529);
        //Создаем контейнер для карты экспресс-отчета
            mapBox = new PP.Exp.Ui.EaxMapBox({
            Source: eaxAnalyzer, // Источник данных
            Width: 500,
            Height: 500,
            ParentNode: "Map",
            Service: eaxMbService
        });
        //Создаем мастер карты
        master = new PP.Ui.MapMaster({
            ParentNode: "mapM", //DOM-вершина, в которой будет размещаться мастер диаграммы
            Height: 500,
            Width: 310,
            ImagePath: IMAGE_PATH,
            DataView: mapBox
        });
    }
</script>

3. В теге BODY разместите созданные компоненты:


<body onselectstart="return false" class="PPNoSelect" onload="onReady()">
    <table style="width: 100%">
        <tr>
            <td valign="top" width="350" id="mapM">
            </td>
            <td valign="top" id="Map">
            </td>
        </tr>
    </table>
</body>
После выполнения примера на странице будет размещена [карта
 экспресс-отчета](dhtmlExpress.chm::/Classes/Express/EaxMapBox/EaxMapBox.htm) и [мастер](MapMaster.htm)
 для ее настройки:


![](MapMaster_EaxMapBox.gif)


См. также:


[MapMaster](MapMaster.htm)
 | [EaxMapBox](dhtmlExpress.chm::/Classes/Express/EaxMapBox/EaxMapBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
