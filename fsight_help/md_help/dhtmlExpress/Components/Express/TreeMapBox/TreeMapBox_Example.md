# Пример создания компонента TreeMapBox

Пример создания компонента TreeMapBox
-


# Пример создания компонента TreeMapBox


Для выполнения примера необходимо создать html-страницу и выполнить
 следующие действия:


1. Добавить ссылки на следующие css-файлы: PP.css, PP.Express.css.


Также нужно добавить ссылки на js-файлы: PP.js, PP.Metabase.js, PP.Express.js,
 resources.ru.js.


2. Далее в теге <head> необходимо добавить сценарий, который создает
 контейнер с [плоским
 деревом](dhtmlBubbleTree.chm::/Classes/TreeMap/TreeMap.htm) и [мастер
 для его настройки](dhtmlBubbleTree.chm::/Classes/TreeMapMaster/TreeMapMaster.htm). При этом предполагается наличие
 в репозитории экспресс-отчёта с ключом 3539:


<script type="text/javascript">
var treeMapBox; // Контейнер для плоского дерева
var propertyBar; // Панель свойств
// Укажем путь к корневой папке, содержащей файлы ресурсов
PP.resourceManager.setRootResourcesFolder("../resources/");
// Установим языковые настройки для ресурсов
PP.setCurrentCulture(PP.Cultures.ru)
function Ready() {
    var IMAGE_PATH = "../build/img/"; // Путь к папке со значками
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
    // Откроем документ с ключом 3539
    var eaxAnalyzer = eaxMdService.open(3539);
    // Создадим окно со статистическими характеристиками данных
    var statisticsWindow = new PP.Exp.Ui.StatisticsWindow({
        Width: 400,
        Height: 500,
        Source: eaxAnalyzer, // Источник данных
        Caption: "Cтатистические характеристики"
    });
    // Создадим контейнер для плоского дерева
    treeMapBox = new PP.Exp.Ui.TreeMapBox({
        Source: eaxAnalyzer, // Источник данных
        Service: eaxMdService, // Сервис для работы с данными
        ParentNode: "TreeMapBox",
        StatisticsWindow: statisticsWindow,
        Width: 500,
        Height: 400,
        ImagePath: IMAGE_PATH // Путь к папке со значками
    });
    // Создадим панель свойств
    propertyBar = new PP.Exp.Ui.EaxPropertyBar({
        ParentNode: "PropertyBar",
        Service: eaxMdService, // Сервис для работы с данными
        Source: eaxAnalyzer, // Источник данных
        Width: 300,
        Height: 400,
        ImagePath: IMAGE_PATH // Путь к папке со значками
    });
    // Отобразим мастер для настройки плоского дерева
    propertyBar.showTreeMapMaster();
    // Свяжем мастер с контейнером плоского дерева
    propertyBar.getTreeMapMaster().setDataView(treeMapBox);
}
</script>
3. В теге <body> требуется разместить два блока с идентификаторами
 «PropertyBar» и «TreeMapBox» для хранения контейнера с плоским деревом
 и мастером для его настройки соответственно:


<body onload="Ready()">
    <table>
        <tr>
            <td><div id="PropertyBar"></div></td>
            <td><div id="TreeMapBox"></div></td>
         </tr>
    </table>
</body>
После выполнения примера на html-странице были размещены компоненты
 [TreeMapBox](TreeMapBox.htm) и [TreeMapMaster](dhtmlBubbleTree.chm::/Classes/TreeMapMaster/TreeMapMaster.htm):


![](TreeMapBox.png)


См. также:


[TreeMapBox](TreeMapBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
