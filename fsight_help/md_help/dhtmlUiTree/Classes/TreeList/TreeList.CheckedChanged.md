# TreeList.CheckedChanged

TreeList.CheckedChanged
-


# TreeList.CheckedChanged


## Синтаксис


CheckedChanged: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии: Node -вершина, для которой
 был снят или установлен флажок.


## Описание


Событие CheckedChanged наступает
 при смене состояния [флажка](dhtmlUi.chm::/components/checkbox/checkbox.htm).


## Комментарии


Флажки отображаются, если для свойства [CheckBoxes](TreeList.CheckBoxes.htm)
 установлено значение true.


Примечание.
 Событие CheckedChanged наступает
 перед событием [TreeList.CheckBoxClick](TreeList.CheckBoxClick.htm).


## Пример


Для выполнения примера [создайте
 компонент TreeList](../../Components/TreeList/TreeList_example.htm) с наименованием «treeListSett». Добавим обработчик
 события CheckedChanged:


treeListSett.CheckedChanged.add(function
 (sender, args)


{


   alert(args.Node.getText())


});


После выполнения примера при смене состояния флажка будет выдаваться
 сообщение с текстом вершины, для которой был снят или установлен флажок.


См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
