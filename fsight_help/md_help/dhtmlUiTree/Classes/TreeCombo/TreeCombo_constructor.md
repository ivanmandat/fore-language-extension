# Конструктор TreeCombo

Конструктор TreeCombo
-


# Конструктор TreeCombo


## Синтаксис


PP.Ui.TreeCombo(settings);


## Параметры


settings. JSON-объект со значениями
 свойств компонента.


## Описание


Конструктор TreeCombo создает
 экземпляр компонента [TreeCombo](../../Components/TreeCombo/TreeCombo.htm).


## Пример


Для выполнения примера в теге HEAD html-страницы должны быть подключены
 ссылки на библиотеку компонентов PP.js, таблицы визуальных стилей PP.css,
 ссылка на javascript-файл с настройками компонента [TreeList](../../Components/TreeList/TreeList.htm)
 (создается разработчиком). Файл с настройками компонента [TreeList](../../Components/TreeList/TreeList.htm)
 содержит следующую функцию:


var treeListSett = new
 PP.Ui.TreeList();


function createTreeListSettings(_Id, _ParentNode)
 {


    var treeListSett = {


//[JSON-настройки компонента
 TreeList](../../Components/TreeList/TreeList_example.htm)


        };


    return treeListSett;


};


Далее приведен пример кода html-страницы, на которой размещен компонент
 [TreeCombo](../../Components/TreeCombo/TreeCombo.htm):


<body>


<div id="sample"></div>


<script type="text/javascript">


    //получаем
 JSON-настройки компонента [TreeList](../../Components/TreeList/TreeList.htm)
 из js-файла


    var TreeListSett = createTreeListSettings("sds");


    //не
 используем JSON-настройки высоты и ширины компонента


    delete TreeListSett.Width;


    delete TreeListSett.Height;


    //включаем
 возможность множественного выбора для компонента [TreeList](../../Components/TreeList/TreeList.htm)


    TreeListSett.MultiSelect
 = true;


    //создаем
 компонент [TreeCombo](../../Components/TreeCombo/TreeCombo.htm)


    var treecombo1 = new PP.Ui.TreeCombo({


        ParentNode:
 document.getElementById("sample"),


        //устанавливаем компонент [TreeList](../../Components/TreeList/TreeList.htm)
 в раскрывающуюся часть компонента [TreeCombo](../../Components/TreeCombo/TreeCombo.htm)


        TreeList:
 TreeListSett,


        Width:
 "250px",


        //отключаем автоматическую установку в качестве
 заголовка компонента [TreeCombo](../../Components/TreeCombo/TreeCombo.htm)
 наименование выбранной вершины компонента [TreeList](../../Components/TreeList/TreeList.htm)


        AutoFillCaption:
 false,


        //при выборе вершины компонента [TreeList](../../Components/TreeList/TreeList.htm)
 раскрывающаяся часть компонента [TreeCombo](../../Components/TreeCombo/TreeCombo.htm)
 скрывается


        HideOnNodeClick:
 true,


        //при открытии раскрывающейся части компонента
 [TreeCombo](../../Components/TreeCombo/TreeCombo.htm) список будет прокручиваться до первого выделенного
 элемента


        OpenToSelected:
 true


    });


</script>


</body>


После выполнения примера на html-странце будет размещен компонент TreeCombo,
 имеющий следующий вид:


![](../../Components/TreeCombo/TreeCombo.gif)


Внешний вид дерева, отображающегося в раскрывающейся части компонента
 [TreeCombo](../../Components/TreeCombo/TreeCombo.htm), зависит
 от настроек, указанных в javascript-файле.


Примечание.
 Данные в уже созданный компонент могут быть добавлены динамически при
 помощи методов [TreeNodes.loadFrom](../TreeNodes/TreeNodes.loadFrom.htm)
 и [TreeNodes.updateFrom](../TreeNodes/TreeNodes.updateFrom.htm).


При выделении вершины дерева в заголовке компонента [TreeCombo](../../Components/TreeCombo/TreeCombo.htm)
 не будет появляться название выделенной вершины.


При выборе вершины дерева, раскрывающаяся часть компонента [TreeCombo](../../Components/TreeCombo/TreeCombo.htm)
 закрывается.


См. также:


[TreeCombo](TreeCombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
