# Конструктор MetaAttributeTree

Конструктор MetaAttributeTree
-


# Конструктор MetaAttributeTree


## Синтаксис


MetaAttributeTree(settings);


## Параметры


settings. JSON-объект со значениями
 свойств компонента.


## Описание


Конструктор MetaAttributeTree
 создает экземпляр класса [MetaAttributeTree](MetaAttributeTree.htm).


## Пример


Для выполнения примера в теге HEAD html-страницы укажите ссылки на следующие
 *.js- и *.css-файлы:


	- PP.css


	- PP.js;


	- PP.Metabase.js;


	- PP.Express.js;


	- PP.TS.js.


Предполагается наличие в репозитории базы данных временных рядов с ключом
 112.


В теге BODY разместите следующий код:


<body>
	<div id='example'></div>
</body>

В теге SCRIPT добавьте скрипт для создания компонента [MetaAttributeTree](../../../Components/TimeSeries/MetaAttributeTree/MetaAttributeTree.htm):


<script type="text/javascript">
    //Подключение ресурсов
    PP.resourceManager.setRootResourcesFolder("../resources/");
    PP.setCurrentCulture(PP.Cultures.ru);
    //Подключение к репозиторию
    var mb = new PP.Mb.Metabase({
        PPServiceUrl: "PPService.axd?action=proxy",
        Id: "WAREHOUSE",
        UserCreds:
        {
            UserName: "user",
            Password: "password"
        }
    });
    //Открытие репозитория
    mb.open();
    //Создание сервера для работы с деревом временных рядов
    var hieSrv = new PP.TS.HieService({ Metabase: mb });
    //Открытие базы данных временных рядов
    var hie = hieSrv.open(null, null, 1565);
    //Создание дерева временных рядов
    var maTree = new PP.TS.Ui.MetaAttributeTree({
        Source: hie,
        ImagePath: "../build/img/",
        ParentNode: "example",
        Height: 400,
        Width: 500,
    });
    //Перезагрузка дерева
    maTree.reload();
</script>

После выполнения примера на html-странице будет размещен компонент [MetaAttributeTree](../../../Components/TimeSeries/MetaAttributeTree/MetaAttributeTree.htm),
 представляющий собой дерево временных рядов:


![](MAttrTree.png)


См. также:


[MetaAttributeTree](MetaAttributeTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
