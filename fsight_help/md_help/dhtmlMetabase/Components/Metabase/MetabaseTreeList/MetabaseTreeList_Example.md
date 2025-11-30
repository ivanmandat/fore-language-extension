# Пример создания компонента MetabaseTreeList

Пример создания компонента MetabaseTreeList
-


# Пример создания компонента MetabaseTreeList


Для выполнения примера в теге HEAD html-страницы добавьте ссылки на
 следующие js и css-файлы:


	- PP.js;


	- PP.Metabase.js;


	- файл с ресурсами (например, resources.ru);


	- PP.css.


В теге SCRIPT добавьте следующий скрипт:


        //функция, которая будет выполняться при загрузке страницы
        function onLoad() {
            //создаем подключение к репозиторию
            mb = new PP.Mb.Metabase({
                Id: "WAREHOUSE",
                UserCreds: new PP.Mb.UserCreds({
                    UserName: "user",
                    Password: "password"
                })
            });
            mb.open();
            //создаем

            list1 = new PP.Mb.Ui.MetabaseTreeList({
                //ключ корневой папки
                RootKey: 96773,
                //в дереве будут отображаться только стандартные кубы
                Filter: [PP.Mb.MetabaseObjectClass.KE_CLASS_STDCUBE],
                //устанавливаем репозиторий, откуда берутся данные
                Metabase: mb,
                //в вершинах дерева будут отображаться идентификаторы объектов
                DisplayMode: PP.Mb.Ui.MetabaseDisplayMode.Both,
                ParentNode: document.getElementById("mtl"),
                //будут отображаться столбцы с атрибутами объектов
                ShowAttributes: true,
                Width: 700,

                Height: 400,
                //путь к папке с картинками
                ImagePath: "PP_img/",
                //нельзя снять отметку полностью со всех элементов
                EmptySelection: false,
                //включена множественная отметка
                MultiSelect: true,
                //скрываются пустые папки
                ShowEmptyFolder: false,
                //после загрузки вершин ширина столбцов будет выравнена по содержимому и раскроются папки с ключами 96776 и 96778
                NodesLoaded: onNodesLoaded
            });
            function onNodesLoaded() {
                list1.adjustColumnsWidthByContent();
                list1.setExpandedKeys([96776, 96778]);
            }
        }

В теге BODY добавьте атрибут onload
 и элемент div с идентификатором
 «mtl»:


<body
 onload="onLoad();">


    <div id
 = "mtl"></div>


 </body>


После выполнения примера на html-странице будут размещен компонент [MetabaseTreeList](MetabaseTreeList.htm), имеющий следующий
 вид:


![](MetabaseTreeList.gif)


См. также:


[MetabaseTreeList](MetabaseTreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
