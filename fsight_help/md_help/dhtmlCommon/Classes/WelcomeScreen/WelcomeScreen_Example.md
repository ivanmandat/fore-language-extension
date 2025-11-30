# WelcomeScreen_Example

WelcomeScreen_Example
-


# WelcomeScreen_Example


В тэге <head> задайте ссылки на модули и файлы стилей:


<script src="../Build/PP.js"></script>
<script src="../Build/PP.Metabase.js"></script>
<script src="../Build/PP.App.js"></script>
<script src="../Resources/resources.ru.js"></script>
<link href="../Build/PP.App.css" rel="stylesheet" />
<link href="../Build/PP.Metabase.css" rel="stylesheet" />
<link href="../Build/PP.css" rel="stylesheet" />
В тэге <body> создадим скрипт, создающий окно приветствия, с идентификатором
 «wscreen» со случайным набором
 элементов:


    <script type="text/javascript">
        //путь к папке с ресурсами
        PP.resourceManager.setRootResourcesFolder("../resources/");
        //определяем текущую культуру
        PP.setCurrentCulture(PP.Cultures.ru);
        PP.ImagePath = "../build/img/App/";
        // Создаем окно приветствия
        var wscreen = new PP.Ui.WelcomeScreen;
        // Добавим последний открытый документ
        wscreen.addLastDocument("OLAP", PP.Ui.WelcomeScreen.ToolType.OLAP_ANALYSIS, "ObjectId");
        // Добавим действия
        wscreen.addActions([

        PP.Ui.WelcomeScreen.ActionType.NewDocument,
        PP.Ui.WelcomeScreen.ActionType.OpenDocument
        ], true);
        // Перечень инструментов
        adTools = [{
            ResourceKey: "welcomeScreenOLAP",
            ColumnIndex: 1,
            Type: PP.Ui.WelcomeScreen.ToolType.OLAP_ANALYSIS,
            Data: { ModuleType: PP.App.ModuleType.Olap },
        }, {
            ResourceKey: "welcomeScreenReportDesigner",
            ColumnIndex: 2,
            Type: PP.Ui.WelcomeScreen.ToolType.REPORT_DESIGNER,
            Data: { ModuleType: PP.App.ModuleType.Reporter },
        }];

        // Добавим инструменты
        wscreen.addToolItems(adTools);
        // Отрисуем окно приветствия
        wscreen.showCenter();
        // Определим события
        wscreen.ActionSelected.add(function (sender, args) {
        alert("Событие ActionSelected");
        console.log(args);
        });
        wscreen.DocumentSelected.add(function (sender, args) {
        alert("Событие DocumentSelected");
        console.log(args);
        });

        wscreen.Exit.add(function (sender, args) {
        alert("Событие Exit");
        console.log(args);
        });
        wscreen.ToolChanged.add(function (sender, args) {
        alert("Событие ToolChanged");
        console.log(args);
        });
        wscreen.ToolSelected.add(function (sender, args) {
        alert("Событие ToolSelected");
        console.log(args);
        });
    </script>
В результате выполнения примера было отрисовано окно приветствия. При
 взаимодействии с элементами будет отображаться окно, с наименованием события,
 и в консоль будут передаваться аргументы события.


См. также:


[WelcomeScreen](WelcomeScreen.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
