# Пример создания компонента DimSelectionDialog

Пример создания компонента DimSelectionDialog
-


# Пример создания компонента DimSelectionDialog


Для выполнения примера необходимо наличие экспресс-отчёта с ключом 65760,
 в котором находится измерение с ключом 10152. Для получения ключей измерений
 используйте метод [EaxAnalyzer.getDims](../../../Classes/Express/EaxAnalyzer/EaxAnalyzer.getDims.htm).
 Создайте html-страницу и выполните следующие действия:


1. В теге <head> добавьте ссылки на js и css-файлы:


	- PP.js;


	- PP.Metabase.js;


	- PP.App.js;


	- PP.Express.js;


	- resources.ru.js;


	- PP.css;


	- PP.App.css;


	- PP.Express.css;


	- PP.Metabase.css.


2. Дополнительно задайте стиль для элементов:


<style type="text/css">
body, html
{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
</style>
3. Добавьте скрипт, который создает компонент для отображения и изменения
 текущей отметки:


<script text="text/javascript">
    var expressBox, eaxMdService, eaxAnalyzer;
    PP.ImagePath = "build/img/";
    PP.ScriptPath = "build/";
     function Ready()   {
        // Укажем путь к папке с пиктограммами и к корневой папке, содержащей файлы ресурсов
        var IMAGE_PATH = "build/img/";
        PP.resourceManager.setRootResourcesFolder("resources/");
        // Установим языковые настройки для ресурсов
        PP.setCurrentCulture(PP.Cultures.ru);
        // Создадим соединение с репозиторием
        var metabase = new PP.Mb.Metabase({
            PPServiceUrl: "PPService.axd?action=proxy",
            Id: "Repository",
            UserCreds: {
                UserName: "User",
                Password: "Password"
            }
        });
        // Откроем соединение с репозиторием
        metabase.open();
        // Создадим сервис для работы с экспресс-отчётами
        eaxMdService = new PP.Exp.EaxMdService({
            Metabase: metabase
        });
         // Откроем экспресс-отчёт с ключом 65760
        eaxAnalyzer = eaxMdService.editDocument(65760);
         var moduleObject = new PP.App.EaxModuleObject({ "Source": eaxAnalyzer, "Service": eaxMdService, "ParentNode": document.body });
         expressBox = moduleObject.getReportBox();
         window.onresize();
     };
     // Добавим функцию для изменения отметки экспресс-отчёта
     function openDialog() {
         // Создадим компонент DimSelectionDialog
         dimSelectionDialog = new PP.Exp.Ui.DimSelectionDialog({
             ResourceKey: "DimSelectionDialog",
             Source: eaxAnalyzer,
             Width: 430,
             Height: 420
         });
         // Отобразим компонент с ключом измерения 10152
         dimSelectionDialog.show(10152);
         // Обновим компонент
         dimSelectionDialog.refreshAll();
     }
     var idTime;
     // Добавим функцию для изменения размеров контейнера ExpressBox при изменении размеров страницы
     window.onresize = function updateSize() {
          if (idTime)
              clearTimeout(idTime);
          idTime = setTimeout(function () {
              if (expressBox) {
                  expressBox.setWidth(document.body.offsetWidth - 5);
                  expressBox.setHeight(document.body.offsetHeight - 5);
              }
              idTime = null;
          }, 100);
    };
    </script>
4. В теге <body> в качестве значения атрибута «onLoad» укажите
 имя функции для загрузки экспресс-отчёта. Внутри тега разместите кнопку,
 при нажатии на которую будет создан компонент для изменения отметки:


<body onselectstart="return false" class="PPNoSelect" onload="Ready()">
    <input type="button" value="Создать диалог" onclick="openDialog()" />
</body>
5. После тега </html> вставьте код, устанавливающий стили к вершине
 «document.body», соответствующие операционной системе клиента:


<script type="text/javascript">
    PP.initOS(document.body);
</script>
В результате выполнения примера, после нажатия на кнопку «Создать
 диалог» на html-странице, будет размещен компонент [DimSelectionDialog](DimSelectionDialog.htm):


![](DimSelectionDialog.png)


См. также:


[DimSelectionDialog](DimSelectionDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
