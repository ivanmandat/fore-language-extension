# Пример создания компонента ImportDataWizard

Пример создания компонента ImportDataWizard
-


# Пример создания компонента ImportDataWizard


Для выполнения примера в теге HEAD html-страницы добавьте ссылки на
 следующие js и css-файлы:


	- PP.js;


	- PP.Metabase.js;


	- PP.Import.js;


	- файл с ресурсами (например, resources.ru);


	- PP.css.


В теге BODY добавьте элемент DIV идентификатором «div1».


В теге SCRIPT добавьте следующий скрипт:


function onLoad()
{
    var importDataWizard; // менеджер импорта данных
    var monitorDiv = document.getElementById('div1');
    PP.resourceManager.setRootResourcesFolder("resources/"); // путь к папке с текстовыми ресурсами
    PP.setCurrentCulture(PP.Cultures.ru); // текущая локаль - русская
    PP.ImagePath = "build/img/"; // путь к папке с ресурсами изображений
    PP.ScriptPath = "build/"; // путь к папке со скриптами, нужными для дозагрузки (PP.TabSheet.js)
    PP.CSSPath = "build/"; // путь к папке с css
    function _onMetabaseOpened(sender, args)
        {
            //на странице появится соответствующее сообщение
            monitorDiv.innerHTML += "<br/>Репозиторий открыт.";
            //сервис для работы с объектом импорта
            var dataImportService = new PP.Mb.DataImportService({ Metabase: mb });
            //событие,генерируемое при окончании импорта
            dataImportService.ImportCompleted.add(_onImportCompleted, dataImportService);
            //создаем мастер импорта данных
            importDataWizard = new PP.Mb.Ui.ImportDataWizard({
                ParentNode: document.body,
                CubeImport: dataImportService.openCubeImport(),
                FileUploadUrl: mb.getImportUrl(),
                DefaultImportFolderDesc: { k: 206035, i: null, n: null, c: 0 } // Разместить результат импорта в папке с ключом 206035
            });
            importDataWizard.show();
            importDataWizard.updateSize();
        }
    //при успешном завершении импорта и при завершении импорта с ошибкой на странице появятся соответствующие сообщения
    function _onImportCompleted(sender, args)
    {
        monitorDiv.innerHTML += "<br/>Импорт завершился";
        if (args.CubeInfo)
            monitorDiv.innerHTML += "<br/>успешно. Идентификатор объекта: " + args.CubeInfo.i + "<br/>Имя файла: " + importDataWizard.getCubeImport().getFileName() + ".";
        else
            monitorDiv.innerHTML += "<br/>с ошибкой. Идентификатор ошибки: \"" + args.ErrorInfo.id + "\". Текст ошибки: \"" + args.ErrorInfo.message + "\"";
    }
    //соединение с репозиторием
    var mb = new PP.Mb.Metabase(
    {
        PPServiceUrl: "http://localhost/FPBI_App_v10.x/axis2/services/PP.SOM.Som",

        Id: "Repository",
        UserCreds: {
            UserName: "user",
            Password: "password"
        }
    });
    document.getElementById("div1").innerHTML += "Открытие репозитория...";
    mb.open(_onMetabaseOpened);
}

После выполнения примера на странице будет открыт мастер импорта данных.
 После прохождения всех шагов мастера, нажатия кнопки «Готово» на последнем
 шаге, на html-странице будет выведено сообщение об успешном или неуспешном
 выполнении импорта.


См. также:


[ImportDataWizard](ImportDataWizard.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
