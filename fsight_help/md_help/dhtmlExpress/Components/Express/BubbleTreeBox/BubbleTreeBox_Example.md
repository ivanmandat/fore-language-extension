# Пример создания компонента BubbleTreeBox

Пример создания компонента BubbleTreeBox
-


# Пример создания компонента BubbleTreeBox


Для выполнения примера необходимо создать html-страницу и выполнить
 следующие действия:


1. Добавить ссылки на следующие css-файлы: PP.css.


Также нужно добавить ссылки на js-файлы: PP.js, PP.Metabase.js, PP.Express.js,
 PP.TreeChartMaster.js, resources.ru.js.


2. Далее в теге <head> необходимо добавить сценарий, который создает
 контейнер с [пузырьковым деревом](BubbleTreeBox.htm) и [мастер
 для его настройки](dhtmlBubbleTree.chm::/Classes/BubbleTreeMaster/BubbleTreeMaster.htm). При этом предполагается наличие
 в репозитории экспресс-отчёта с ключом 4236:


<script type="text/javascript">
    var bubbleTreeBox; // Контейнер для плоского дерева
    var propertyBar; // Панель свойств
    PP.ImagePath = "../build/img/"; // Зададим путь к папке с изображениями
    PP.ScriptPath = "../build/"; // Зададим путь к папке со сценариями
    PP.CSSPath = "../build/"; // Зададим путь к папке со стилями
    // Укажем путь к корневой папке, содержащей файлы ресурсов
    PP.resourceManager.setRootResourcesFolder("../resources/");
    // Установим языковые настройки для ресурсов
    PP.setCurrentCulture(PP.Cultures.ru)
    function Ready() {
        // Создадим соединение с репозиторием
        var metabase = new PP.Mb.Metabase({

            PPServiceUrl: "PPService.axd?action=proxy",
            Id: "WAREHOUSE",
            UserCreds: {
                UserName: "user",
                Password: "password"
            }
        });
        // Откроем соединение с репозиторием
        metabase.open();
        // Создадим сервис для работы со спидометром
        var eaxMdService = new PP.Exp.EaxMdService({
            Metabase: metabase
        });

        // Откроем документ с ключом 4236
        var eaxAnalyzer = eaxMdService.open(4236);
        // Создадим окно со статистическими характеристиками данных
        var statisticsWindow = new PP.Exp.Ui.StatisticsWindow({
            Width: 400,
            Height: 500,
            Source: eaxAnalyzer, // Источник данных
            Caption: "Cтатистические характеристики"
        });
        // Создадим контейнер для плоского деерва
        bubbleTreeBox = new PP.Exp.Ui.BubbleTreeBox({

            Source: eaxAnalyzer, // Источник данных
            Service: eaxMdService, // Сервис для работы с данными
            ParentNode: "BubbleTreeBox",
            StatisticsWindow: statisticsWindow,
            Width: 500,
            Height: 400
        });
        // Создадим панель свойств
        propertyBar = new PP.Exp.Ui.EaxPropertyBar({

            ParentNode: "PropertyBar",
            Service: eaxMdService, // Сервис для работы с данными
            Source: eaxAnalyzer, // Источник данных
            Width: 200,
            Height: 400
        });
        // Отобразим мастер для настройки плоского дерева
        propertyBar.showBubbleTreeMaster();
        // Свяжем мастер с контейнером плоского дерева
        propertyBar.getBubbleTreeMaster().setDataView(bubbleTreeBox);
    };
</script>
3. В теге <body> требуется разместить два блока с идентификаторами
 «BubbleTreeBox» и «PropertyBar» для хранения контейнера с пузырьковым
 деревом и мастером для его настройки соответственно:


<body onload="Ready()">
    <table>
        <tr>
            <td><div id="PropertyBar"></div></td>
            <td><div id="BubbleTreeBox"></div></td>
         </tr>
    </table>
</body>
После выполнения примера на html-странице были размещены компоненты
 [BubbleTreeBox](BubbleTreeBox.htm) и [BubbleTreeMaster](dhtmlBubbleTree.chm::/Classes/BubbleTreeMaster/BubbleTreeMaster.htm):


![](BubbleTreeBox.png)


См. также:


[BubbleTreeBox](BubbleTreeBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
