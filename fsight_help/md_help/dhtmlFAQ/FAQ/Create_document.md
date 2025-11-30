# Создание документа

Создание документа
-


# Создание документа


В данной статье рассмотрен пример создания в репозитории объекта типа
 «[Документ](UiNavObj.chm::/UiNavObj_document.htm)»,
 загрузки его источника и выгрузки созданного документа во внешний файл.


Для выполнения примера в теге HEAD добавьте ссылки на следующие файлы:


	- PP.css;


	- PP.js;


	- PP.Metabase.js;


	- PP.Metabase.css;


	- resources.ru.js.


Предполагается наличие в репозитории папки с ключом 4653, в которой
 будет создан документ.


В теге BODY добавьте код для размещения компонентов на странице:


<body>
   <div id="CreateButton" />
   <div id="NavBox" />
   <div id="UploadForm" />
   <div id="ImportButton" />
   <div id="ExportButton" />
</body>
В теге SCRIPT добавьте код для создания компонента [NavigatorBox](dhtmlMetabase.chm::/Classes/Metabase/NavigatorBox/NavigatorBox.htm),
 кнопки для создания объекта типа «Документ», компонента для выбора
 источника документа, кнопок для загрузки источника и выгрузки документа
 во внешний файл:


<script type="text/javascript">
    PP.resourceManager.setRootResourcesFolder("../resources/");//Указываем путь до папки с ресурсами
    PP.setCurrentCulture(PP.Cultures.ru);//Устанавливаем языковые настройки
    //Подключение к репозиторию
    var mb = new PP.Mb.Metabase(
           {
               PPServiceUrl: "PPService.axd?action=proxy"
               Id: "WAREHOUSE",
               UserCreds: { UserName: "user", Password: "password" }
            });
        mb.open();
    var OdIdObj;
    //Создаём PP.Mb.Ui.NavigatorBox
        var navbox = new PP.Mb.Ui.NavigatorBox(
                {
                    Metabase: mb,
                    Width: 700,
                    Height: 400,
                    ParentNode: document.getElementById("NavBox"),
                    ImagePath: "../build/img/",
                    RootKey: 4653
                });

        //Кнопка для создания документа
        var createButton = new PP.Ui.Button({
            Content: "Создать документ",
            Width: 90,
            ParentNode: document.getElementById("CreateButton"),
            Click: function () {
                navbox.createObject(3329, "Document", PP.Delegate(function (sender, args) {//Создаем документ
                    res = JSON.parse(args.ResponseText);
                    OdIdObj = res.CreateObjectResult.id.id;//Получаем моникер создаваемого объекта
                    var fileUpload = new PP.Ui.FileUpload({//Создаём загрузчик файлов для импорта
                        Id: "myfileUpload",
                        PostUrl: "http://localhost/Sample" + "/PPService.axd?action=import&docId=" + OdIdObj + "&dtProvider=document",//http://localhost/Samples -путь до html-страницы, с которой запускается пример
                        ParentNode: document.getElementById("UploadForm"),
                        FileButton: { Content: "Обзор...", Width: 60 }//Кнопка для выбора файла
                    });
                    var exportFile = new PP.Ui.FileUpload({//Создаем загрузчик файлов для экспорта
                        PostUrl: "http://localhost/Sample" + "/PPService.axd?action=export&key=" + OdIdObj + "&name=testExport",
                    });

                    //Создаём кнопку для загрузки файла
                    var b1 = new PP.Ui.Button(
                            {
                                ParentNode: "ImportButton",
                                Content: "Загрузить из файла",

                                Click: function () {
                                    fileUpload.send()
                                }
                            });

                    //Создаём кнопку для экспорта файла
                    var b2 = new PP.Ui.Button(
                        {
                            ParentNode: "ExportButton",
                            Content: "Сохранить в файл",
                            Click: function () {
                                exportFile.send()
                            }
                        });
                }));
            }
        })
</script>
После выполнения примера на странице будет размещен компонент [NavigatorBox](dhtmlMetabase.chm::/Classes/Metabase/NavigatorBox/NavigatorBox.htm)
 и кнопка «Создать документ». При нажатии на кнопку в корневую папку будет
 добавлен документ, и на странице будут размещены компонент для выбора
 источника документ и кнопки «Загрузить из файла» и «Сохранить в файл»:


![](Create_document.gif)


Нажмите на кнопку «Обзор» и в открывшемся диалоге выберите источник
 для документа. Чтобы загрузить источник в документ нажмите на кнопку «Загрузить
 из файла». Чтобы сохранить загруженный файл во внешний документ, нажмите
 на кнопку «Сохранить в файл».


Чтобы удалить документ из репозитория, используйте метод [NavigatorBox.deleteObjects](dhtmlMetabase.chm::/Classes/Metabase/NavigatorBox/NavigatorBox.deleteObjects.htm).


См. также:


[Вопросы
 и ответы](../dhtml_FAQ.htm) | [NavigatorBox](dhtmlMetabase.chm::/Classes/Metabase/NavigatorBox/NavigatorBox.htm)
 | [FileUpload](dhtmlUi.chm::/Classes/FileUpLoad/FileUpload.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
