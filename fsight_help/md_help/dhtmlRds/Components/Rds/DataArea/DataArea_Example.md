# Пример создания компонента DataArea

Пример создания компонента DataArea
-


# Пример создания компонента DataArea


Для выполнения примера необходимо создать html-страницу и выполнить следующие действия:


1. Добавить ссылки на css-файлы PP.css и PP.Rds.css.


Также нужно добавить ссылки на следующие js-файлы: PP.js, PP.Metabase.js, PP.Rds.js, resources.ru.js.


2. Далее в теге <head> необходимо добавить сценарий, который создаёт область данных справочника НСИ. При этом предполагается наличие в репозитории справочника НСИ с ключом 8093:


<script type="text/javascript">
    var dataArea; // Область данных справочника НСИ
    PP.ImagePath = "../build/img/"; // Зададим путь к папке с изображениями
    PP.ScriptPath = "../build/"; // Зададим путь к папке со сценариями
    PP.CSSPath = "../build/"; // Зададим путь к папке со стилями
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
        // Создадим область данных справочника НСИ
        dataArea = new PP.Rds.Ui.DataArea({
            ParentNode: "dataArea",
            ImagePath: PP.ImagePath, // Путь к папке с изображениями
            Width: 600, // Ширина дерева
            Height: 300 // Высота
        });
        // Добавим открытый справочник в область данных
        dataArea.addItem(dictionary, null, true, true, false);
    }
</script>

3. В теге <body> требуется разместить блок с идентификатором «dataArea» для хранения контейнера с областью данных справочника НСИ:


<body onload="Ready()">
    <div id="dataArea" style="border: 1px #C3C3C3 solid; width: 600px"></div>
</body>

После выполнения примера на html-странице будет размещён компонент [DataArea](DataArea.htm):


![](DataArea.png)


См. также:


[DataArea](DataArea.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
