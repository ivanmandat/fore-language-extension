# TreeCombo.OpenToFocused

TreeCombo.OpenToFocused
-


# TreeCombo.OpenToFocused


## Синтаксис


OpenToFocused: Boolean;


## Описание


Свойство OpenToFocused определяет,
 будет ли прокручиваться раскрывающийся список при открытии до фокусированного
 элемента.


## Комментарии


Если установлено значение true,
 при открытии раскрывающийся список будет прокручиваться до фокусированного
 элемента.


По умолчанию установлено значение false.


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


        //при открытии раскрывающейся части компонента
 [TreeCombo](../../Components/TreeCombo/TreeCombo.htm) список будет прокручиваться до фокусированного
 элемента


        OpenToFocused:
 true


    });


</script>


</body>


В результате выполнения примера на html-странце будет размещен компонент
 TreeCombo. Раскрывающийся список при открытии будет прокручен до фокусированного
 элемента.


См. также:


[TreeCombo](TreeCombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
