# Пример совместного создания компонентов DictionaryTree, ParamsBox и FindBox

Пример совместного создания компонентов DictionaryTree, ParamsBox и FindBox
-


# Пример совместного создания компонентов DictionaryTree, ParamsBox и FindBox


Для выполнения примера необходимо создать html-страницу и выполнить следующие действия:


1. Добавить ссылки на css-файлы PP.css и PP.Rds.css.


Также нужно добавить ссылки на следующие js-файлы: PP.js, PP.Metabase.js, PP.Rds.js, resources.ru.js.


2. Далее в теге <head> необходимо добавить сценарий, который создаёт дерево элементов справочника НСИ, контейнер параметров и контейнер, предназначенный для поиска элементов справочника. При этом предполагается наличие в репозитории справочника НСИ с ключом 8093:


<script type="text/javascript">
    var dictionaryTree; // Дерево элементов справочника НСИ
    PP.ImagePath = "../../build/img/"; // Зададим путь к папке с изображениями
    PP.ScriptPath = "../../build/"; // Зададим путь к папке со сценариями
    PP.CSSPath = "../../build/"; // Зададим путь к папке со стилями
    var dictionaryKey = 8093; // Ключ справочника
    function Ready() {
        // Укажем путь к корневой папке, содержащей файлы ресурсов
        PP.resourceManager.setRootResourcesFolder("../resources/");
        // Установим языковые настройки для ресурсов
        PP.setCurrentCulture(PP.Cultures.ru);
        var waiter = new PP.Ui.Waiter();
        // Создадим соединение с репозиторием
        var metabase = new PP.Mb.Metabase({
            PPServiceUrl: "PPService.axd?action=proxy",
            Id: "WAREHOUSE",
            UserCreds: {
                UserName: "user",
                Password: "password"
            },
            StartRequest: function () {
                // При запросе метаданных отобразим компонент типа PP.Ui.Waiter
                waiter.show();
            },
            EndRequest: function (sender, args) {
                // Скроем компонент типа PP.Ui.Waiter
                waiter.hide();
            },
            Error: function (sender, args) {
                // Выведем описание ошибки
                console.log(args.ResponseText);
            }
        });
        // Откроем соединение с репозиторием
        metabase.open();
        var rdsService = new PP.Rds.RdsService({
            Metabase: metabase
        });
        // Откроем справочник НСИ с заданным ключом
        var dictionary = rdsService.openRds(dictionaryKey, null);
        // Создадим дерево элементов справочника НСИ
        dictionaryTree = new PP.Rds.Ui.DictionaryTree({
            ParentNode: "dictionaryTree",
            Source: dictionary, // Источник данных
            ImagePath: PP.ImagePath, // Путь к папке с изображениями
            Width: 600, // Ширина дерева
            Height: 120 // Высота
        });
        // Создадим контейнер, предназначенный для поиска элементов справочника
        findBox = new PP.Rds.Ui.FindBox({
            Source: dictionary, // Источник данных
            ImagePath: PP.ImagePath, // Путь к папке с изображениями
            Width: 200,
            Height: 70,
            FindChanged: function (sender, args) {
                // Выполним поиск
                dictionaryTree.setFilter(args.Filter);
            }
        });
        // Создадим контейнер параметров справочника
        paramsBox = new PP.Rds.Ui.ParamsBox({
            Source: dictionary, // Источник данных
            ImagePath: PP.ImagePath, // Путь к папке с изображениями
            Width: 200,
            Height: 50,
        });
        // Создадим таблицу для размещения компонентов
        layoutGrid = new PP.Ui.GridPanel({
            Class: "PPRdsDataAreaGrid",
            ParentNode: "layoutGrid"
        });
        // Добавим в таблицу
        layoutGrid.add(paramsBox, 0, 0);
        layoutGrid.add(findBox, 0, 1);
        layoutGrid.add(dictionaryTree, 0, 1);
    }
</script>

3. В теге <body> требуется добавить блок с идентификатором «layoutGrid» для хранения таблицы, в которой будут размещены дерево элементов справочника НСИ, контейнер параметров и контейнер, предназначенный для поиска элементов справочника:


<body onload="Ready()">
    <div id="dictionaryTree" style="border: 1px #C3C3C3 solid; width: 600px"></div>
</body>
После выполнения примера на html-странице будут размещены компоненты
 [DictionaryTree](DictionaryTree.htm), [ParamsBox](../ParamsBox/ParamsBox.htm)
 и [FindBox](../FindBox/FindBox.htm):


![](DictionaryTree_Example.png)


См. также:


[DictionaryTree](DictionaryTree.htm)
 | [FindBox](../FindBox/FindBox.htm) | [ParamsBox](../ParamsBox/ParamsBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
