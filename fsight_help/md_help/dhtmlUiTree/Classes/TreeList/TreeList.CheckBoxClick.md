# TreeList.CheckBoxClick

TreeList.CheckBoxClick
-


# TreeList.CheckBoxClick


## Синтаксис


CheckBoxClick: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии.


## Описание


Событие CheckBoxClick наступает
 при нажатии кнопки мыши по [флажку](dhtmlUi.chm::/components/checkbox/checkbox.htm).


## Комментарии


Флажки отображаются, если для свойства [CheckBoxes](TreeList.CheckBoxes.htm)
 установлено значение true.


Примечание.
 Событие CheckBoxClick наступает
 после события [CheckedChanged](TreeList.CheckedChanged.htm).


## Пример


Для выполнения примера [создайте
 компонент TreeList](../../Components/TreeList/TreeList_example.htm) с наименованием «treeListSett». Добавим обработчик
 события CheckBoxClick:


treeListSett.CheckBoxClick.add(function (sender,
 args)


{


   console.log("Произошло нажатие
 по флажку");


});


После выполнения примера при нажатии кнопки мыши по флажку в консоль
 будет выведено сообщение о нажатие на флажок:


Произошло нажатие по флажку


См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
